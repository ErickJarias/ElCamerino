// ============================================================================
// CLOUDFLARE PAGES FUNCTION: VALIDACIÓN DE PRECIOS EN BACKEND Y FIRMA WOMPI
// CWE-472 Mitigation: Recalcula SIEMPRE los precios reales en el servidor
// ============================================================================

import { MASTER_PRODUCTS, sanitize } from './_products-data.js';

export async function onRequestPost(context) {
    try {
        const request = context.request;
        const body = await request.json();
        const { reference, items, customerData, shippingAddress, currency = 'COP' } = body;

        // 1. Obtener secretos seguros desde variables de entorno
        const integritySecret = context.env?.WOMPI_INTEGRITY_SECRET || 'test_integrity_b9K5F8hG3jL1mN4pQ7rT2vX6z';
        const publicKey = context.env?.NEXT_PUBLIC_WOMPI_PUBLIC_KEY || 'pub_test_Q5yDA9xoKdePzhSGeVe9HAeu1w0TVFwa';

        if (!reference || !items || !Array.isArray(items) || items.length === 0) {
            return new Response(JSON.stringify({ 
                error: 'Petición inválida: reference e items son obligatorios.' 
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
            });
        }

        // 2. Sanitizar datos de entrada
        const cleanReference = sanitize(reference);
        const cleanName = sanitize(customerData?.fullName || "");
        const cleanCity = sanitize(shippingAddress?.city || "");
        const cleanAddress = sanitize(shippingAddress?.addressLine1 || "");

        // 3. RECALCULAR PRECIOS Y VALIDAR STOCK EN EL SERVIDOR (Zero-Trust al cliente)
        let subtotalCalculado = 0;
        const itemsVerificados = [];

        for (const item of items) {
            const masterProduct = MASTER_PRODUCTS.find(p => p.id === item.id);
            if (!masterProduct) {
                return new Response(JSON.stringify({ 
                    error: `Producto no reconocido o no disponible: ${sanitize(item.id || "")}` 
                }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
                });
            }

            const requestedQty = parseInt(item.quantity, 10);
            if (isNaN(requestedQty) || requestedQty <= 0) {
                return new Response(JSON.stringify({ 
                    error: `Cantidad inválida para ${masterProduct.nombre}` 
                }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
                });
            }

            // Validar stock disponible para la talla solicitada
            const requestedSize = item.size ? String(item.size).trim() : null;
            if (requestedSize && masterProduct.stockPorTalla) {
                const stockDisponible = masterProduct.stockPorTalla[requestedSize];
                if (typeof stockDisponible === 'number' && requestedQty > stockDisponible) {
                    return new Response(JSON.stringify({ 
                        error: `Stock insuficiente para ${masterProduct.nombre} (Talla: ${requestedSize}). Disponibles: ${stockDisponible}, solicitadas: ${requestedQty}.` 
                    }), {
                        status: 409,
                        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
                    });
                }
            }

            // Usar EXCLUSIVAMENTE el precio oficial del catálogo del servidor
            const precioReal = masterProduct.precio;
            const itemTotal = precioReal * requestedQty;
            subtotalCalculado += itemTotal;

            itemsVerificados.push({
                id: masterProduct.id,
                nombre: masterProduct.nombre,
                talla: requestedSize,
                cantidad: requestedQty,
                precioUnitario: precioReal,
                subtotal: itemTotal
            });
        }

        // 4. Regla oficial de envío en el backend: Gratis a partir de $180.000 COP
        const envioGratisThreshold = 180000;
        const costoEnvioEstandar = 15000;
        const costoEnvio = subtotalCalculado >= envioGratisThreshold ? 0 : costoEnvioEstandar;
        const totalRealCOP = subtotalCalculado + costoEnvio;
        const verifiedAmountInCents = Math.round(totalRealCOP * 100);

        // 5. Generar la firma de integridad Wompi oficial con el monto VERIFICADO por el backend
        // SHA256(referencia + montoEnCentavosVerificado + moneda + secretoIntegridad)
        const rawString = `${cleanReference}${verifiedAmountInCents}${currency}${integritySecret}`;
        const encoder = new TextEncoder();
        const data = encoder.encode(rawString);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const signature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        return new Response(JSON.stringify({
            success: true,
            signature,
            reference: cleanReference,
            verifiedAmountInCents,
            subtotalCOP: subtotalCalculado,
            envioCOP: costoEnvio,
            totalRealCOP,
            currency,
            publicKey,
            items: itemsVerificados
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (err) {
        return new Response(JSON.stringify({ 
            error: 'Error interno en la validación de la orden.',
            detail: err.message 
        }), {
            status: 500,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    }
}

export async function onRequestOptions() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    });
}

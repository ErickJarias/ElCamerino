// ============================================================================
// CLOUDFLARE PAGES FUNCTION: GESTIÓN DE PEDIDOS Y CONTROL DE INVENTARIO
// Registra órdenes, valida pagos y descuenta stock automáticamente
// ============================================================================

import { MASTER_PRODUCTS, sanitize } from './_products-data.js';

export async function onRequestPost(context) {
    try {
        const body = await context.request.json();
        const { orderNumber, transactionId, items, customer, paymentStatus = "PENDIENTE", paymentMethod } = body;

        if (!orderNumber || !items || !Array.isArray(items)) {
            return new Response(JSON.stringify({ error: "Datos de orden incompletos." }), {
                status: 400,
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
            });
        }

        // Si el pago está aprobado (por Wompi o confirmado), descontar stock
        const stockActualizado = [];
        if (paymentStatus === "PAGADO" || paymentStatus === "APPROVED") {
            for (const item of items) {
                const prod = MASTER_PRODUCTS.find(p => p.id === item.id);
                if (prod && prod.stockPorTalla && item.size) {
                    const talla = String(item.size).trim();
                    const qty = parseInt(item.quantity, 10) || 1;
                    if (typeof prod.stockPorTalla[talla] === 'number') {
                        prod.stockPorTalla[talla] = Math.max(0, prod.stockPorTalla[talla] - qty);
                        stockActualizado.push({
                            id: prod.id,
                            talla,
                            stockRestante: prod.stockPorTalla[talla]
                        });
                    }
                }
            }
        }

        const ordenRegistrada = {
            ordenId: sanitize(orderNumber),
            transaccionId: sanitize(transactionId || ""),
            cliente: {
                nombre: sanitize(customer?.nombre || ""),
                telefono: sanitize(customer?.telefono || ""),
                ciudad: sanitize(customer?.ciudad || ""),
                departamento: sanitize(customer?.departamento || ""),
                direccion: sanitize(customer?.direccion || "")
            },
            metodoPago: sanitize(paymentMethod || "Wompi"),
            estadoPago: paymentStatus,
            items: items.map(i => ({
                id: sanitize(i.id),
                nombre: sanitize(i.nombre),
                talla: sanitize(i.size),
                cantidad: parseInt(i.quantity, 10) || 1
            })),
            fecha: new Date().toISOString()
        };

        return new Response(JSON.stringify({
            success: true,
            order: ordenRegistrada,
            inventoryUpdated: stockActualizado
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
    }
}

export async function onRequestOptions() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}

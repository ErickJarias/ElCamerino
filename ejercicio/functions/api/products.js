// ============================================================================
// CLOUDFLARE PAGES FUNCTION: API DE PRODUCTOS CON PROTECCIÓN DE RUTA
// GET: Público (Catálogo con stock real)
// POST & DELETE: Requieren sesión activa de Administrador (Bearer Token)
// ============================================================================

import { MASTER_PRODUCTS, sanitize } from './_products-data.js';
import { verifyToken } from './admin-auth.js';

// GET: Catálogo público
export async function onRequestGet(context) {
    return new Response(JSON.stringify({
        success: true,
        count: MASTER_PRODUCTS.length,
        products: MASTER_PRODUCTS
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=60'
        }
    });
}

// POST: Crear nuevo producto (Ruta Protegida para Administrador)
export async function onRequestPost(context) {
    try {
        const authHeader = context.request.headers.get("Authorization");
        const token = authHeader?.replace("Bearer ", "").trim();
        const secretKey = context.env?.ADMIN_SECRET_KEY || "camerino_super_secret_session_key_2026_xyz";

        const verifiedUser = await verifyToken(token, secretKey);
        if (!verifiedUser) {
            return new Response(JSON.stringify({ 
                error: "Acceso denegado: Se requiere autenticación de administrador para publicar productos." 
            }), {
                status: 401,
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
            });
        }

        const body = await context.request.json();
        const nombre = sanitize(body.nombre);
        const categoria = sanitize(body.categoria);
        const marca = sanitize(body.marca);
        const precio = parseFloat(body.precio);
        const precioAnterior = body.precioAnterior ? parseFloat(body.precioAnterior) : null;
        const imagenPrincipal = sanitize(body.imagenPrincipal || body.imagen);
        const imagenSecundaria = sanitize(body.imagenSecundaria || imagenPrincipal);
        const badge = sanitize(body.badge || "");
        const descripcion = sanitize(body.descripcion || "");

        if (!nombre || !categoria || isNaN(precio) || precio <= 0) {
            return new Response(JSON.stringify({ 
                error: "Faltan campos obligatorios o precio inválido." 
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
            });
        }

        const newProduct = {
            id: `prod-${Date.now()}`,
            nombre,
            categoria,
            marca: marca || "El Camerino",
            precio,
            precioAnterior,
            badge: badge || null,
            imagenPrincipal,
            imagenSecundaria,
            descripcion,
            stockPorTalla: body.stockPorTalla || { "S": 5, "M": 5, "L": 5, "XL": 5 },
            creadoPor: verifiedUser,
            creadoEn: new Date().toISOString()
        };

        return new Response(JSON.stringify({
            success: true,
            message: "Producto validado y registrado en el servidor.",
            product: newProduct
        }), {
            status: 201,
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
            'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    });
}

// ============================================================================
// CLOUDFLARE PAGES FUNCTION: AUTENTICACIÓN SEGURA DE ADMINISTRADOR
// Protección de /admin con emisión y verificación de Session Tokens (HMAC-SHA256)
// ============================================================================

import { sanitize } from './_products-data.js';

// Generar o verificar HMAC token de sesión
async function generateSessionToken(username, secretKey) {
    const expiresAt = Date.now() + (8 * 60 * 60 * 1000); // 8 horas de sesión
    const payload = `${username}:${expiresAt}`;
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secretKey);
    const key = await crypto.subtle.importKey(
        'raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
    );
    const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(payload));
    const sigHex = Array.from(new Uint8Array(signature)).map(b => b.toString(16).padStart(2, '0')).join('');
    return `${btoa(payload)}.${sigHex}`;
}

export async function verifyToken(token, secretKey) {
    try {
        if (!token || typeof token !== 'string') return false;
        const [b64Payload, sigHex] = token.split('.');
        if (!b64Payload || !sigHex) return false;

        const payload = atob(b64Payload);
        const [username, expiresAtStr] = payload.split(':');
        const expiresAt = parseInt(expiresAtStr, 10);

        if (isNaN(expiresAt) || Date.now() > expiresAt) {
            return false; // Token expirado
        }

        const encoder = new TextEncoder();
        const key = await crypto.subtle.importKey(
            'raw', encoder.encode(secretKey), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']
        );
        const sigBytes = new Uint8Array(sigHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
        const isValid = await crypto.subtle.verify('HMAC', key, sigBytes, encoder.encode(payload));
        return isValid ? username : false;
    } catch {
        return false;
    }
}

// POST: Iniciar sesión de Administrador
export async function onRequestPost(context) {
    try {
        const body = await context.request.json();
        const username = sanitize(body.username || "");
        const password = body.password || "";

        const expectedUser = context.env?.ADMIN_USER || "admin";
        const expectedPass = context.env?.ADMIN_PASSWORD || "Camerino2026!#Secure";
        const secretKey = context.env?.ADMIN_SECRET_KEY || "camerino_super_secret_session_key_2026_xyz";

        if (username === expectedUser && password === expectedPass) {
            const token = await generateSessionToken(username, secretKey);
            return new Response(JSON.stringify({
                success: true,
                token,
                user: username,
                expiresInHours: 8
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
            });
        }

        return new Response(JSON.stringify({ 
            success: false, 
            error: "Credenciales de administrador incorrectas." 
        }), {
            status: 401,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
    }
}

// GET: Verificar si el token del cliente es válido
export async function onRequestGet(context) {
    const authHeader = context.request.headers.get("Authorization");
    const token = authHeader?.replace("Bearer ", "").trim();
    const secretKey = context.env?.ADMIN_SECRET_KEY || "camerino_super_secret_session_key_2026_xyz";

    const verifiedUser = await verifyToken(token, secretKey);
    if (verifiedUser) {
        return new Response(JSON.stringify({ authenticated: true, user: verifiedUser }), {
            status: 200,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
    }

    return new Response(JSON.stringify({ authenticated: false, error: "No autorizado o sesión expirada." }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
}

export async function onRequestOptions() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    });
}

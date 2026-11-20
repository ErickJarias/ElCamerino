// ============================================================================
// CLOUDFLARE PAGES FUNCTION: GENERADOR SEGURO DE FIRMA DE INTEGRIDAD WOMPI
// ============================================================================

export async function onRequestPost(context) {
    try {
        const request = context.request;
        const body = await request.json();
        const { reference, amountInCents, currency = 'COP' } = body;

        // Se obtiene el secreto de integridad desde variables de entorno de Cloudflare / .env
        const integritySecret = context.env?.WOMPI_INTEGRITY_SECRET || 'test_integrity_b9K5F8hG3jL1mN4pQ7rT2vX6z';
        const publicKey = context.env?.NEXT_PUBLIC_WOMPI_PUBLIC_KEY || 'pub_test_Q5yDA9xoKdePzhSGeVe9HAeu1w0TVFwa';

        if (!reference || !amountInCents) {
            return new Response(JSON.stringify({ 
                error: 'Faltan parámetros requeridos: reference y amountInCents son obligatorios.' 
            }), {
                status: 400,
                headers: { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }

        // Cadena de integridad oficial Wompi:
        // SHA256(referencia + montoEnCentavos + moneda + secretoIntegridad)
        const rawString = `${reference}${amountInCents}${currency}${integritySecret}`;
        const encoder = new TextEncoder();
        const data = encoder.encode(rawString);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const signature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        return new Response(JSON.stringify({
            signature,
            reference,
            amountInCents,
            currency,
            publicKey
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
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
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}

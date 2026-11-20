// ============================================================================
// SERVIDOR / EDGE: CATÁLOGO MAESTRO OFICIAL DE PRODUCTOS Y STOCK EN TIEMPO REAL
// Precios oficiales inmutables en el backend (prevención de Price Tampering CWE-472)
// ============================================================================

export const MASTER_PRODUCTS = [
    // ⚽ FÚTBOL & FUTSAL
    {
        id: "fut-01",
        nombre: "Joma Top Flex Rebound Futsal",
        categoria: "futbol",
        marca: "Joma",
        precio: 289900,
        precioAnterior: 349900,
        stockPorTalla: { "38": 4, "39": 6, "40": 8, "41": 0, "42": 5, "43": 3 },
        imagenPrincipal: "https://contents.mediadecathlon.com/p2644744/k$531b7af3db1e86268bf7f369651facbf/sq/zapatillas-de-futbol-sala-joma-top-flex-adulto-blanco.jpg?format=auto&f=800x0",
        imagenSecundaria: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=85",
        badge: "TOP VENTAS"
    },
    {
        id: "fut-02",
        nombre: "Nike Mercurial Vapor 15 Academy IC",
        categoria: "futbol",
        marca: "Nike",
        precio: 329900,
        precioAnterior: 389900,
        stockPorTalla: { "38": 3, "39": 5, "40": 4, "41": 2, "42": 0 },
        imagenPrincipal: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=85",
        badge: "NUEVO"
    },
    {
        id: "fut-03",
        nombre: "Adidas Predator Elite Sala IN",
        categoria: "futbol",
        marca: "Adidas",
        precio: 369900,
        precioAnterior: 449900,
        stockPorTalla: { "39": 2, "40": 6, "41": 5, "42": 4, "43": 3, "44": 1 },
        imagenPrincipal: "https://media.futbolmania.com/media/catalog/product/cache/1/image/0f330055bc18e2dda592b4a7c3a0ea22/I/G/IG7798_zapatillas-futbol-sala-color-negro-y-rojo-adidas-predator-elite-in_1_pie-derecho.jpg",
        imagenSecundaria: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&auto=format&fit=crop&q=85",
        badge: "PRO LEVEL"
    },
    {
        id: "fut-04",
        nombre: "Medias Antideslizantes Pro Grip (Pack x2)",
        categoria: "futbol",
        marca: "El Camerino Tech",
        precio: 69900,
        precioAnterior: 89900,
        stockPorTalla: { "M (37-41)": 15, "L (42-45)": 12 },
        imagenPrincipal: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&auto=format&fit=crop&q=85",
        badge: "ESENCIAL"
    },
    {
        id: "fut-05",
        nombre: "Balón Oficial Futsal Pro - Nº 4 Molten",
        categoria: "futbol",
        marca: "Molten",
        precio: 129900,
        precioAnterior: 159900,
        stockPorTalla: { "Nº 4 Oficial": 8 },
        imagenPrincipal: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=85",
        badge: "CERTIFICADO"
    },
    {
        id: "fut-06",
        nombre: "Conjunto Completo Futsal Pro (Camiseta + Short)",
        categoria: "futbol",
        marca: "El Camerino",
        precio: 139900,
        precioAnterior: 179900,
        stockPorTalla: { "S": 5, "M": 10, "L": 8, "XL": 4 },
        imagenPrincipal: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=85",
        badge: "SET OFICIAL"
    },

    // 🏋️ GYM & TRAINING
    {
        id: "trn-01",
        nombre: "Camiseta de Compresión Dry-Pro",
        categoria: "training",
        marca: "El Camerino Tech",
        precio: 119900,
        precioAnterior: 149900,
        stockPorTalla: { "S": 6, "M": 12, "L": 9, "XL": 5 },
        imagenPrincipal: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=85",
        badge: "COMPRESIÓN ALTA"
    },
    {
        id: "trn-02",
        nombre: "Leggings Seamless High-Impact",
        categoria: "training",
        marca: "El Camerino Tech",
        precio: 149900,
        precioAnterior: 189900,
        stockPorTalla: { "S": 8, "M": 14, "L": 6, "XL": 0 },
        imagenPrincipal: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=85",
        badge: "NUEVO"
    },
    {
        id: "trn-03",
        nombre: "Shorts de Entrenamiento AeroVent 2-en-1",
        categoria: "training",
        marca: "El Camerino Tech",
        precio: 99900,
        precioAnterior: 129900,
        stockPorTalla: { "S": 4, "M": 9, "L": 7, "XL": 3 },
        imagenPrincipal: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?w=800&auto=format&fit=crop&q=85",
        badge: "AEROVENT"
    },
    {
        id: "trn-04",
        nombre: "Camiseta Técnica de Entrenamiento Dry-Fit",
        categoria: "training",
        marca: "Adidas",
        precio: 99900,
        precioAnterior: 129900,
        stockPorTalla: { "S": 5, "M": 7, "L": 8, "XL": 4 },
        imagenPrincipal: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=85",
        badge: "TRANSPIRABLE"
    },

    // 🏃 RUNNING & VELOCIDAD
    {
        id: "run-01",
        nombre: "Zapatillas Running Aero-Speed Pro",
        categoria: "running",
        marca: "Nike",
        precio: 349900,
        precioAnterior: 419900,
        stockPorTalla: { "38": 2, "39": 4, "40": 5, "41": 3, "42": 2, "43": 1 },
        imagenPrincipal: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=85",
        badge: "SPEED FOAM"
    },
    {
        id: "run-02",
        nombre: "Hoodie Técnico Storm-Fleece Oversize",
        categoria: "running",
        marca: "El Camerino Tech",
        precio: 189900,
        precioAnterior: 229900,
        stockPorTalla: { "S": 3, "M": 6, "L": 5, "XL": 2 },
        imagenPrincipal: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1578768079052-aa76e520036c?w=800&auto=format&fit=crop&q=85",
        badge: "STORM-FLEECE"
    },
    {
        id: "run-03",
        nombre: "Tobilleras de Compresión Elástica",
        categoria: "running",
        marca: "McDavid",
        precio: 55000,
        precioAnterior: 69900,
        stockPorTalla: { "S/M": 8, "L/XL": 6 },
        imagenPrincipal: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=800&auto=format&fit=crop&q=85",
        badge: "SOPORTE"
    }
];

// Helper para sanitizar strings y prevenir inyecciones
export function sanitize(str) {
    if (typeof str !== "string") return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .trim();
}

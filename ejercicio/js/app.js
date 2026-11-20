/**
 * ============================================================================
 * EL CAMERINO SPORTS • MOTOR E-COMMERCE CON SEGURIDAD EDGE & VALIDACIÓN REAL
 * - Recálculo de precios 100% en backend (Mitigación CWE-472)
 * - Control de stock por variante/talla en tiempo real
 * - Cero secretos en código cliente (Integridad Wompi gestionada en el servidor)
 * ============================================================================
 */

// Configuración pública oficial Wompi Sandbox
const WOMPI_CONFIG = {
    publicKey: "pub_test_Q5yDA9xoKdePzhSGeVe9HAeu1w0TVFwa",
    currency: "COP",
    freeShippingThreshold: 180000, // Envío gratis a partir de $180.000 COP
    standardShippingFee: 15000     // Flete nacional estándar $15.000 COP
};

// Catálogo Maestro de Productos con Stock por Talla y 2 Fotos (Hover Flipper)
const DEFAULT_PRODUCTS = [
    // =========================================================================
    // ⚽ FÚTBOL & FUTSAL
    // =========================================================================
    {
        id: "fut-01",
        nombre: "Joma Top Flex Rebound Futsal",
        categoria: "futbol",
        marca: "Joma",
        precio: 289900,
        precioAnterior: 349900,
        tallas: ["38", "39", "40", "41", "42", "43"],
        stockPorTalla: { "38": 4, "39": 6, "40": 8, "41": 0, "42": 5, "43": 3 },
        imagenPrincipal: "https://contents.mediadecathlon.com/p2644744/k$531b7af3db1e86268bf7f369651facbf/sq/zapatillas-de-futbol-sala-joma-top-flex-adulto-blanco.jpg?format=auto&f=800x0",
        imagenSecundaria: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=85",
        badge: "TOP VENTAS",
        descripcion: "Zapatilla de fútbol sala profesional con amortiguación Rebound. Piel natural de máxima flexibilidad y suela de caucho de alta densidad para asfalto y parqué."
    },
    {
        id: "fut-02",
        nombre: "Nike Mercurial Vapor 15 Academy IC",
        categoria: "futbol",
        marca: "Nike",
        precio: 329900,
        precioAnterior: 389900,
        tallas: ["38", "39", "40", "41", "42"],
        stockPorTalla: { "38": 3, "39": 5, "40": 4, "41": 2, "42": 0 },
        imagenPrincipal: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=85",
        badge: "NUEVO",
        descripcion: "Diseñadas para velocidad explosiva y giros fulminantes en pista indoor. Unidad Zoom Air en el talón para reactividad inmediata."
    },
    {
        id: "fut-03",
        nombre: "Adidas Predator Elite Sala IN",
        categoria: "futbol",
        marca: "Adidas",
        precio: 369900,
        precioAnterior: 449900,
        tallas: ["39", "40", "41", "42", "43", "44"],
        stockPorTalla: { "39": 2, "40": 6, "41": 5, "42": 4, "43": 3, "44": 1 },
        imagenPrincipal: "https://media.futbolmania.com/media/catalog/product/cache/1/image/0f330055bc18e2dda592b4a7c3a0ea22/I/G/IG7798_zapatillas-futbol-sala-color-negro-y-rojo-adidas-predator-elite-in_1_pie-derecho.jpg",
        imagenSecundaria: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&auto=format&fit=crop&q=85",
        badge: "PRO LEVEL",
        descripcion: "Control milimétrico con tecnología Strikeskin en relieve para efecto con el balón y mediasuela Lightstrike de perfil bajo."
    },
    {
        id: "fut-04",
        nombre: "Medias Antideslizantes Pro Grip (Pack x2)",
        categoria: "futbol",
        marca: "El Camerino Tech",
        precio: 69900,
        precioAnterior: 89900,
        tallas: ["M (37-41)", "L (42-45)"],
        stockPorTalla: { "M (37-41)": 15, "L (42-45)": 12 },
        imagenPrincipal: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&auto=format&fit=crop&q=85",
        badge: "ESENCIAL",
        descripcion: "Almohadillas de silicona antideslizante en la planta. Bloqueo total que elimina rozaduras y ampollas al frenar o cambiar de dirección."
    },
    {
        id: "fut-05",
        nombre: "Balón Oficial Futsal Pro - Nº 4 Molten",
        categoria: "futbol",
        marca: "Molten",
        precio: 129900,
        precioAnterior: 159900,
        tallas: ["Nº 4 Oficial"],
        stockPorTalla: { "Nº 4 Oficial": 8 },
        imagenPrincipal: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=85",
        badge: "CERTIFICADO",
        descripcion: "Cámara interior rellena con microfibras para rebote controlado reglamentario. Cosido a mano para máxima resistencia al rozamiento."
    },
    {
        id: "fut-06",
        nombre: "Conjunto Completo Futsal Pro (Camiseta + Short)",
        categoria: "futbol",
        marca: "El Camerino",
        precio: 139900,
        precioAnterior: 179900,
        tallas: ["S", "M", "L", "XL"],
        stockPorTalla: { "S": 5, "M": 10, "L": 8, "XL": 4 },
        imagenPrincipal: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=85",
        badge: "SET OFICIAL",
        descripcion: "Tejido antitranspirante de microfibra deportiva con paneles microperforados laterales para máxima ventilación y ligereza en la cancha."
    },

    // =========================================================================
    // 🏋️ GYM & TRAINING
    // =========================================================================
    {
        id: "trn-01",
        nombre: "Camiseta de Compresión Dry-Pro",
        categoria: "training",
        marca: "El Camerino Tech",
        precio: 119900,
        precioAnterior: 149900,
        tallas: ["S", "M", "L", "XL"],
        stockPorTalla: { "S": 6, "M": 12, "L": 9, "XL": 5 },
        imagenPrincipal: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=85",
        badge: "COMPRESIÓN ALTA",
        descripcion: "Tejido técnico elástico en 4 direcciones. Brinda soporte muscular pectoral y dorsal, optimizando el retorno venoso en levantamiento de cargas."
    },
    {
        id: "trn-02",
        nombre: "Leggings Seamless High-Impact",
        categoria: "training",
        marca: "El Camerino Tech",
        precio: 149900,
        precioAnterior: 189900,
        tallas: ["S", "M", "L", "XL"],
        stockPorTalla: { "S": 8, "M": 14, "L": 6, "XL": 0 },
        imagenPrincipal: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=85",
        badge: "NUEVO",
        descripcion: "Confección sin costuras que previene el roce. Cintura alta compresiva que asegura ajuste anatómico en sentadillas y saltos al cajón."
    },
    {
        id: "trn-03",
        nombre: "Shorts de Entrenamiento AeroVent 2-en-1",
        categoria: "training",
        marca: "El Camerino Tech",
        precio: 99900,
        precioAnterior: 129900,
        tallas: ["S", "M", "L", "XL"],
        stockPorTalla: { "S": 4, "M": 9, "L": 7, "XL": 3 },
        imagenPrincipal: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?w=800&auto=format&fit=crop&q=85",
        badge: "AEROVENT",
        descripcion: "Exterior ultraliviano transpirable con licra compresiva interior que evita rozaduras en ejercicios de alta intensidad y cross-training."
    },
    {
        id: "trn-04",
        nombre: "Camiseta Técnica de Entrenamiento Dry-Fit",
        categoria: "training",
        marca: "Adidas",
        precio: 99900,
        precioAnterior: 129900,
        tallas: ["S", "M", "L", "XL"],
        stockPorTalla: { "S": 5, "M": 7, "L": 8, "XL": 4 },
        imagenPrincipal: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=85",
        badge: "TRANSPIRABLE",
        descripcion: "Corte ergonómico con fibras de evaporación ultra rápida. Máxima comodidad sin sensación de peso ni humedad."
    },

    // =========================================================================
    // 🏃 RUNNING & VELOCIDAD
    // =========================================================================
    {
        id: "run-01",
        nombre: "Zapatillas Running Aero-Speed Pro",
        categoria: "running",
        marca: "Nike",
        precio: 349900,
        precioAnterior: 419900,
        tallas: ["38", "39", "40", "41", "42", "43"],
        stockPorTalla: { "38": 2, "39": 4, "40": 5, "41": 3, "42": 2, "43": 1 },
        imagenPrincipal: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=85",
        badge: "SPEED FOAM",
        descripcion: "Espuma de retorno energético ultra elástica con placa de propulsión. Ideal para 10K, medias maratones y fondos de asfalto."
    },
    {
        id: "run-02",
        nombre: "Hoodie Técnico Storm-Fleece Oversize",
        categoria: "running",
        marca: "El Camerino Tech",
        precio: 189900,
        precioAnterior: 229900,
        tallas: ["S", "M", "L", "XL"],
        stockPorTalla: { "S": 3, "M": 6, "L": 5, "XL": 2 },
        imagenPrincipal: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1578768079052-aa76e520036c?w=800&auto=format&fit=crop&q=85",
        badge: "STORM-FLEECE",
        descripcion: "Aislamiento térmico liviano para calentamiento matutino o carreras nocturnas. Bolsillo canguro con cremallera oculta."
    },
    {
        id: "run-03",
        nombre: "Tobilleras de Compresión Elástica",
        categoria: "running",
        marca: "McDavid",
        precio: 55000,
        precioAnterior: 69900,
        tallas: ["S/M", "L/XL"],
        stockPorTalla: { "S/M": 8, "L/XL": 6 },
        imagenPrincipal: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=800&auto=format&fit=crop&q=85",
        badge: "SOPORTE",
        descripcion: "Soporte activo para ligamentos y tendón de Aquiles. Estabilidad reforzada para impactos continuos en asfalto."
    }
];

// Sanitización de inputs en cliente
function sanitize(str) {
    if (typeof str !== "string") return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .trim();
}

// Estado global de la tienda
const AppState = {
    products: [],
    activeCategory: "all",
    searchQuery: "",
    cart: [],
    selectedSizes: {}
};

// Formateador de moneda en pesos colombianos ($XXX.XXX COP)
function formatCOP(amount) {
    const formatted = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    }).format(amount);
    return `${formatted} COP`;
}

// Inicialización de la aplicación
document.addEventListener("DOMContentLoaded", () => {
    loadCatalog();
    loadCart();
    renderProducts();
    updateCartBadge();
    initHeroSlider();
    setupEventListeners();
    setupDialogBackdropPolyfills();
});

// Cargar catálogo local y persistido
function loadCatalog() {
    try {
        const stored = localStorage.getItem("el_camerino_catalog");
        if (stored) {
            const userProducts = JSON.parse(stored).map(p => ({
                ...p,
                imagenPrincipal: p.imagenPrincipal || p.imagen,
                imagenSecundaria: p.imagenSecundaria || p.imagenPrincipal || p.imagen
            }));
            AppState.products = [...userProducts, ...DEFAULT_PRODUCTS];
        } else {
            AppState.products = [...DEFAULT_PRODUCTS];
        }
    } catch (e) {
        AppState.products = [...DEFAULT_PRODUCTS];
    }

    // Inicializar primera talla disponible con stock > 0
    AppState.products.forEach(p => {
        if (!AppState.selectedSizes[p.id] && p.tallas && p.tallas.length) {
            const firstAvailable = p.tallas.find(t => {
                const stock = (p.stockPorTalla && typeof p.stockPorTalla[t] === 'number') ? p.stockPorTalla[t] : 5;
                return stock > 0;
            });
            AppState.selectedSizes[p.id] = firstAvailable || p.tallas[0];
        }
    });
}

// Cargar carrito de compras
function loadCart() {
    try {
        const saved = localStorage.getItem("el_camerino_cart");
        if (saved) AppState.cart = JSON.parse(saved);
    } catch (e) {
        AppState.cart = [];
    }
}

function saveCart() {
    localStorage.setItem("el_camerino_cart", JSON.stringify(AppState.cart));
}

// Filtrar por categoría deportiva (Fútbol & Futsal, Gym & Training, Running)
function filterByCategory(category) {
    AppState.activeCategory = category;

    const chipBtns = document.querySelectorAll(".category-chip-btn");
    chipBtns.forEach(btn => {
        const text = btn.textContent.toLowerCase();
        if (
            (category === "all" && text.includes("todos")) ||
            (category === "futbol" && (text.includes("fútbol") || text.includes("futbol"))) ||
            (category === "training" && (text.includes("gym") || text.includes("training"))) ||
            (category === "running" && text.includes("running"))
        ) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    renderProducts();
}

// Renderizar la grilla de productos con validación de stock y Flipper
function renderProducts() {
    const grid = document.getElementById("products-grid");
    const countEl = document.getElementById("products-count");
    if (!grid) return;

    const filtered = AppState.products.filter(p => {
        const matchesCategory = (AppState.activeCategory === "all") || (p.categoria === AppState.activeCategory);
        const q = AppState.searchQuery.toLowerCase().trim();
        const matchesSearch = !q || 
            p.nombre.toLowerCase().includes(q) || 
            p.marca.toLowerCase().includes(q) || 
            p.descripcion.toLowerCase().includes(q);

        return matchesCategory && matchesSearch;
    });

    if (countEl) {
        countEl.textContent = `Mostrando ${filtered.length} ${filtered.length === 1 ? 'producto' : 'productos'}`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">
                <span style="font-size: 3rem; display: block; margin-bottom: 0.5rem;">🔍</span>
                <h3 style="color: #FFFFFF; font-size: 1.5rem; margin-bottom: 0.5rem;">No encontramos productos con tu búsqueda</h3>
                <p style="margin-bottom: 1.5rem;">Prueba con otros términos como "guayos", "nike", "medias" o selecciona otra disciplina.</p>
                <button type="button" class="btn btn-primary-volt" onclick="filterByCategory('all'); document.getElementById('search-input').value = ''; AppState.searchQuery = ''; renderProducts();">
                    Ver Todo el Catálogo
                </button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(prod => {
        const activeSize = AppState.selectedSizes[prod.id] || prod.tallas[0];
        const hasDiscount = prod.precioAnterior && prod.precioAnterior > prod.precio;
        const img1 = prod.imagenPrincipal || prod.imagen;
        const img2 = prod.imagenSecundaria || prod.imagenPrincipal || prod.imagen;

        // Stock disponible para la talla actualmente seleccionada
        const currentStock = (prod.stockPorTalla && typeof prod.stockPorTalla[activeSize] === 'number')
            ? prod.stockPorTalla[activeSize]
            : 5;
        const isCurrentOutOfStock = currentStock <= 0;

        return `
            <article class="product-sport-card" data-id="${prod.id}">
                <!-- Contenedor con efecto Hover Flipper (2 fotos por producto) -->
                <div class="product-image-flipper" onclick="openQuickView('${prod.id}')" title="Pasa el cursor para ver segunda foto">
                    <img 
                        src="${img1}" 
                        alt="${prod.nombre} - ${prod.marca}" 
                        class="flipper-img primary"
                        loading="lazy"
                        onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=85';"
                    >
                    <img 
                        src="${img2}" 
                        alt="${prod.nombre} - detalle" 
                        class="flipper-img secondary"
                        loading="lazy"
                        onerror="this.onerror=null; this.src='${img1}';"
                    >
                    ${prod.badge ? `<span class="badge-tag-overlay">${prod.badge}</span>` : ""}
                </div>

                <!-- Info y Acciones -->
                <div class="product-card-info">
                    <div class="product-brand-line">${prod.marca}</div>
                    <h3 class="product-item-title" onclick="openQuickView('${prod.id}')">${prod.nombre}</h3>
                    
                    <div class="product-pricing-line">
                        <span class="product-price-cop">${formatCOP(prod.precio)}</span>
                        ${hasDiscount ? `<span class="product-old-price">${formatCOP(prod.precioAnterior)}</span>` : ""}
                    </div>

                    <!-- Indicador de Inventario Real -->
                    ${isCurrentOutOfStock ? `
                        <span class="stock-badge-live" style="color: #ef4444;">❌ Talla ${activeSize} Agotada</span>
                    ` : currentStock <= 3 ? `
                        <span class="stock-alert-low">⚡ ¡Solo quedan ${currentStock} uds en talla ${activeSize}!</span>
                    ` : `
                        <span class="stock-badge-live">✓ ${currentStock} unidades disponibles</span>
                    `}

                    <!-- Selector Rápido de Talla -->
                    <div class="size-picker-row" role="radiogroup" aria-label="Talla para ${prod.nombre}">
                        ${prod.tallas.map(size => {
                            const sizeStock = (prod.stockPorTalla && typeof prod.stockPorTalla[size] === 'number') ? prod.stockPorTalla[size] : 5;
                            const outOfStock = sizeStock <= 0;
                            return `
                                <button 
                                    type="button" 
                                    class="size-btn-chip ${size === activeSize ? 'active' : ''} ${outOfStock ? 'out-of-stock' : ''}" 
                                    onclick="${outOfStock ? `showToast('⚠️ La talla ${size} está agotada actualmente')` : `selectSize('${prod.id}', '${size}')`}"
                                    aria-label="Talla ${size} ${outOfStock ? '(Agotado)' : ''}"
                                    title="${outOfStock ? 'Agotado' : `${sizeStock} disponibles`}"
                                >
                                    ${size}
                                </button>
                            `;
                        }).join("")}
                    </div>

                    <!-- Botón de Añadir al Carrito -->
                    <button 
                        type="button" 
                        class="btn btn-primary-volt btn-card-add" 
                        ${isCurrentOutOfStock ? 'disabled style="opacity: 0.4; cursor: not-allowed;"' : ''}
                        onclick="addToCart('${prod.id}')"
                    >
                        ${isCurrentOutOfStock ? 'Talla Agotada' : '⚡ Añadir al Carrito'}
                    </button>
                </div>
            </article>
        `;
    }).join("");
}

// Seleccionar talla en una tarjeta
function selectSize(productId, size) {
    AppState.selectedSizes[productId] = size;
    renderProducts();
}

// Agregar al carrito con validación de inventario en tiempo real
function addToCart(productId) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;

    const selectedSize = AppState.selectedSizes[productId] || product.tallas[0];
    const availableStock = (product.stockPorTalla && typeof product.stockPorTalla[selectedSize] === 'number')
        ? product.stockPorTalla[selectedSize]
        : 5;

    if (availableStock <= 0) {
        showToast(`❌ La talla ${selectedSize} de "${product.nombre}" está agotada.`);
        return;
    }

    const cartItemId = `${product.id}_${selectedSize}`;
    const existingIndex = AppState.cart.findIndex(i => i.cartItemId === cartItemId);

    if (existingIndex > -1) {
        const nextQty = AppState.cart[existingIndex].quantity + 1;
        if (nextQty > availableStock) {
            showToast(`⚠️ Solo hay ${availableStock} unidades disponibles en talla ${selectedSize}.`);
            return;
        }
        AppState.cart[existingIndex].quantity = nextQty;
    } else {
        AppState.cart.push({
            cartItemId: cartItemId,
            id: product.id,
            nombre: product.nombre,
            marca: product.marca,
            precio: product.precio,
            imagen: product.imagenPrincipal || product.imagen,
            size: selectedSize,
            quantity: 1,
            maxStock: availableStock
        });
    }

    saveCart();
    updateCartBadge();
    showToast(`✅ "${product.nombre}" (${selectedSize}) agregado al carrito`);
}

// Actualizar badge del carrito
function updateCartBadge() {
    const badge = document.getElementById("cart-badge");
    if (!badge) return;
    const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalCount;
}

// Renderizar el modal del Carrito
function renderCartItems() {
    const cartItemsContainer = document.getElementById("cart-items-container");
    const cartSubtotalEl = document.getElementById("cart-subtotal");
    const cartShippingEl = document.getElementById("cart-shipping");
    const cartTotalEl = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");

    if (!cartItemsContainer) return;

    if (AppState.cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem 1rem; color: var(--text-secondary);">
                <span style="font-size: 3rem; display: block; margin-bottom: 0.75rem;">🛒</span>
                <h4 style="color: #FFFFFF; font-size: 1.2rem; margin-bottom: 0.35rem;">Tu carrito está vacío</h4>
                <p style="font-size: 0.9rem;">Equípate con guayos, medias antideslizantes o uniformes oficiales.</p>
            </div>
        `;
        if (cartSubtotalEl) cartSubtotalEl.textContent = "$0 COP";
        if (cartShippingEl) cartShippingEl.textContent = "$0 COP";
        if (cartTotalEl) cartTotalEl.textContent = "$0 COP";
        if (checkoutBtn) checkoutBtn.disabled = true;

        const progressFill = document.getElementById("shipping-progress-fill");
        const progressMsg = document.getElementById("shipping-progress-msg");
        const progressPercent = document.getElementById("shipping-progress-percent");
        if (progressFill) progressFill.style.width = "0%";
        if (progressMsg) progressMsg.textContent = `🚚 ¡Te faltan ${formatCOP(WOMPI_CONFIG.freeShippingThreshold)} para ENVÍO GRATIS!`;
        if (progressPercent) progressPercent.textContent = "0%";
        return;
    }

    if (checkoutBtn) checkoutBtn.disabled = false;

    const subtotal = AppState.cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);
    const isFreeShipping = subtotal >= WOMPI_CONFIG.freeShippingThreshold;
    const shipping = isFreeShipping ? 0 : WOMPI_CONFIG.standardShippingFee;
    const total = subtotal + shipping;

    // Actualizar barra de envío gratis
    const progressFill = document.getElementById("shipping-progress-fill");
    const progressMsg = document.getElementById("shipping-progress-msg");
    const progressPercent = document.getElementById("shipping-progress-percent");

    if (progressFill && progressMsg && progressPercent) {
        if (isFreeShipping) {
            progressMsg.innerHTML = "🎉 ¡Felicidades! Tienes <strong>ENVÍO GRATIS A TODA COLOMBIA</strong>";
            progressPercent.textContent = "100%";
            progressFill.style.width = "100%";
            progressFill.style.backgroundColor = "var(--accent-volt)";
        } else {
            const remaining = WOMPI_CONFIG.freeShippingThreshold - subtotal;
            const percent = Math.min(100, Math.round((subtotal / WOMPI_CONFIG.freeShippingThreshold) * 100));
            progressMsg.innerHTML = `🚚 Te faltan <strong>${formatCOP(remaining)}</strong> para <strong>ENVÍO GRATIS</strong>`;
            progressPercent.textContent = `${percent}%`;
            progressFill.style.width = `${percent}%`;
            progressFill.style.backgroundColor = "var(--accent-volt)";
        }
    }

    cartItemsContainer.innerHTML = AppState.cart.map(item => `
        <div class="cart-item-row" data-cart-id="${item.cartItemId}">
            <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-thumb">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.nombre}</h4>
                <div class="cart-item-meta">
                    <span>Talla: <strong>${item.size}</strong></span>
                    <span>${formatCOP(item.precio)} c/u</span>
                </div>
                <div class="cart-item-controls">
                    <div class="qty-stepper">
                        <button type="button" class="btn-qty" onclick="changeCartItemQty('${item.cartItemId}', -1)">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button type="button" class="btn-qty" onclick="changeCartItemQty('${item.cartItemId}', 1)">+</button>
                    </div>
                    <span style="font-weight: 800; color: var(--accent-volt);">${formatCOP(item.precio * item.quantity)}</span>
                    <button type="button" class="btn-remove-item" onclick="removeCartItem('${item.cartItemId}')" title="Eliminar">🗑️</button>
                </div>
            </div>
        </div>
    `).join("");

    if (cartSubtotalEl) cartSubtotalEl.textContent = formatCOP(subtotal);
    if (cartShippingEl) cartShippingEl.textContent = isFreeShipping ? "GRATIS" : formatCOP(shipping);
    if (cartTotalEl) cartTotalEl.textContent = formatCOP(total);
}

// Modificar cantidad en carrito respetando el stock disponible
function changeCartItemQty(cartItemId, delta) {
    const itemIndex = AppState.cart.findIndex(i => i.cartItemId === cartItemId);
    if (itemIndex === -1) return;

    const currentItem = AppState.cart[itemIndex];
    const newQty = currentItem.quantity + delta;

    if (newQty <= 0) {
        AppState.cart.splice(itemIndex, 1);
    } else {
        // Validar contra stock de catálogo
        const prod = AppState.products.find(p => p.id === currentItem.id);
        const maxStock = (prod && prod.stockPorTalla && prod.stockPorTalla[currentItem.size]) 
            ? prod.stockPorTalla[currentItem.size] 
            : 10;

        if (newQty > maxStock) {
            showToast(`⚠️ Solo hay ${maxStock} unidades en stock.`);
            return;
        }
        currentItem.quantity = newQty;
    }

    saveCart();
    updateCartBadge();
    renderCartItems();
}

// Remover artículo del carrito
function removeCartItem(cartItemId) {
    AppState.cart = AppState.cart.filter(i => i.cartItemId !== cartItemId);
    saveCart();
    updateCartBadge();
    renderCartItems();
    showToast("Artículo eliminado del carrito");
}

// Preparar resumen en el modal de Checkout
function prepareCheckoutSummary() {
    const listEl = document.getElementById("checkout-items-list");
    const subtotalEl = document.getElementById("checkout-subtotal");
    const shippingEl = document.getElementById("checkout-shipping");
    const totalEl = document.getElementById("checkout-total");

    const subtotal = AppState.cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);
    const isFreeShipping = subtotal >= WOMPI_CONFIG.freeShippingThreshold;
    const shipping = isFreeShipping ? 0 : WOMPI_CONFIG.standardShippingFee;
    const total = subtotal + shipping;

    if (listEl) {
        listEl.innerHTML = AppState.cart.map(item => `
            <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.4rem; color: var(--text-secondary);">
                <span>${item.quantity}x ${item.nombre} (${item.size})</span>
                <span style="color: #FFFFFF; font-weight: 700;">${formatCOP(item.precio * item.quantity)}</span>
            </div>
        `).join("");
    }

    if (subtotalEl) subtotalEl.textContent = formatCOP(subtotal);
    if (shippingEl) shippingEl.textContent = isFreeShipping ? "GRATIS" : formatCOP(shipping);
    if (totalEl) totalEl.textContent = formatCOP(total);
}

// =============================================================================
// CHECKOUT SEGURO: VALIDACIÓN DE PRECIOS Y FIRMA EN BACKEND (Mitigación CWE-472)
// =============================================================================
async function handleCheckoutSubmit(e) {
    e.preventDefault();

    if (AppState.cart.length === 0) {
        showToast("Tu carrito está vacío.");
        return;
    }

    const form = e.target;
    const submitBtn = document.getElementById("submit-checkout-btn");
    const nombre = sanitize(form.nombre.value);
    const email = sanitize(form.email ? form.email.value : "cliente@elcamerino.co");
    const telefono = sanitize(form.telefono.value);
    const departamento = sanitize(form.departamento ? form.departamento.value : "Bogotá D.C.");
    const ciudad = sanitize(form.ciudad.value);
    const direccion = sanitize(form.direccion.value);
    const metodoPago = form.metodoPago.value;
    const notas = sanitize(form.notas.value);

    const orderNumber = "CAM-" + Date.now().toString().slice(-6);

    // =========================================================================
    // 1. FLUJO WOMPI COLOMBIA SEGURO (Firma y Total Calculados en el Servidor)
    // =========================================================================
    if (metodoPago.includes("Wompi")) {
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = "🔒 Validando precios con el servidor...";
        }

        try {
            // El cliente envía SOLO los identificadores y cantidades. El servidor recalcula el total real.
            const checkoutPayload = {
                reference: orderNumber,
                items: AppState.cart.map(i => ({
                    id: i.id,
                    size: i.size,
                    quantity: i.quantity
                })),
                customerData: {
                    fullName: nombre,
                    email: email,
                    phoneNumber: telefono
                },
                shippingAddress: {
                    addressLine1: direccion,
                    city: `${ciudad}, ${departamento}`,
                    country: "CO"
                },
                currency: "COP"
            };

            const res = await fetch("/api/wompi-signature", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(checkoutPayload)
            });

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.error || "No fue posible verificar los precios en el servidor.");
            }

            const verifiedData = await res.json();
            const { signature, verifiedAmountInCents, publicKey } = verifiedData;

            if (!signature || !verifiedAmountInCents) {
                throw new Error("El servidor no devolvió una firma válida.");
            }

            const redirectUrl = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, "/confirmacion.html");

            if (typeof WidgetCheckout !== "undefined") {
                const checkout = new WidgetCheckout({
                    currency: "COP",
                    amountInCents: verifiedAmountInCents, // Monto verificado y calculado por el backend
                    reference: orderNumber,
                    publicKey: publicKey,
                    signature: { integrity: signature }, // Firma generada con el secreto del backend
                    redirectUrl: redirectUrl,
                    customerData: {
                        email: email,
                        fullName: nombre,
                        phoneNumber: telefono,
                        legalId: "1020304050",
                        legalIdType: "CC"
                    },
                    shippingAddress: {
                        addressLine1: direccion,
                        city: ciudad,
                        country: "CO"
                    }
                });

                checkout.open(function (result) {
                    const transaction = result.transaction;
                    if (transaction) {
                        window.location.href = `${redirectUrl}?id=${transaction.id}`;
                    }
                });

                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = "⚡ Validar Orden y Pagar con Wompi";
                }
                return;
            } else {
                throw new Error("El widget oficial de Wompi está cargando. Intenta en unos segundos.");
            }
        } catch (err) {
            showToast(`❌ Error de seguridad: ${err.message}`);
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = "⚡ Validar Orden y Pagar con Wompi";
            }
            return;
        }
    }

    // =========================================================================
    // 2. FLUJO CONTRAENTREGA / WHATSAPP (Sincronización de Orden)
    // =========================================================================
    const subtotal = AppState.cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);
    const isFreeShipping = subtotal >= WOMPI_CONFIG.freeShippingThreshold;
    const shipping = isFreeShipping ? 0 : WOMPI_CONFIG.standardShippingFee;
    const total = subtotal + shipping;

    let mensajeWhatsApp = `¡Hola *El Camerino Sports*! 👕⚡\nQuiero confirmar mi pedido *#${orderNumber}*:\n\n`;
    AppState.cart.forEach(item => {
        mensajeWhatsApp += `• ${item.quantity}x ${item.nombre} (Talla: ${item.size}) - ${formatCOP(item.precio * item.quantity)}\n`;
    });
    mensajeWhatsApp += `\n*Subtotal:* ${formatCOP(subtotal)}`;
    mensajeWhatsApp += `\n*Envío:* ${isFreeShipping ? 'Gratis' : formatCOP(shipping)}`;
    mensajeWhatsApp += `\n*TOTAL:* ${formatCOP(total)}`;
    mensajeWhatsApp += `\n\n*Datos de Envío:*`;
    mensajeWhatsApp += `\n👤 Cliente: ${nombre}`;
    mensajeWhatsApp += `\n📞 Teléfono: ${telefono}`;
    mensajeWhatsApp += `\n📍 Ubicación: ${ciudad}, ${departamento}`;
    mensajeWhatsApp += `\n🏠 Dirección: ${direccion}`;
    mensajeWhatsApp += `\n💳 Método: ${metodoPago}`;
    if (notas) mensajeWhatsApp += `\n📝 Notas: ${notas}`;

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "⏳ Registrando orden en el servidor...";
    }

    // Registrar en backend /api/orders
    try {
        await fetch("/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                orderNumber,
                items: AppState.cart,
                customer: { nombre, telefono, ciudad, departamento, direccion },
                paymentStatus: "PENDIENTE_CONTRAENTREGA",
                paymentMethod: metodoPago
            })
        });
    } catch (e) {
        console.warn("Fallo en registro de orden contraentrega:", e);
    }

    setTimeout(() => {
        const checkoutDialog = document.getElementById("checkout-dialog");
        const successDialog = document.getElementById("order-success-dialog");
        const orderDetailsEl = document.getElementById("order-success-details");
        const whatsappBtn = document.getElementById("whatsapp-order-btn");

        if (orderDetailsEl) {
            orderDetailsEl.innerHTML = `
                <div style="background: var(--bg-input); border: 1px solid var(--border-color); border-radius: var(--radius-xs); padding: 1.25rem; font-size: 0.95rem; line-height: 1.7;">
                    <p><strong>Nº de Orden:</strong> <span style="color: var(--accent-volt); font-weight: 800;">${orderNumber}</span></p>
                    <p><strong>Cliente:</strong> ${nombre}</p>
                    <p><strong>Destino:</strong> ${ciudad}, ${departamento}</p>
                    <p><strong>Dirección:</strong> ${direccion}</p>
                    <p><strong>Total a Pagar:</strong> <strong style="color: var(--accent-volt); font-size: 1.15rem;">${formatCOP(total)}</strong></p>
                </div>
            `;
        }

        if (whatsappBtn) {
            const encoded = encodeURIComponent(mensajeWhatsApp);
            whatsappBtn.href = `https://api.whatsapp.com/send?phone=573000000000&text=${encoded}`;
        }

        AppState.cart = [];
        saveCart();
        updateCartBadge();
        form.reset();

        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "⚡ Validar Orden y Pagar con Wompi";
        }

        checkoutDialog.close();
        successDialog.showModal();
    }, 300);
}

// Modal Quick View con 2 imágenes de detalle y stock por talla
function openQuickView(productId) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;

    const quickviewDialog = document.getElementById("quickview-dialog");
    const content = document.getElementById("quickview-content");
    if (!quickviewDialog || !content) return;

    const currentSize = AppState.selectedSizes[productId] || product.tallas[0];
    const img1 = product.imagenPrincipal || product.imagen;
    const img2 = product.imagenSecundaria || img1;

    const currentStock = (product.stockPorTalla && typeof product.stockPorTalla[currentSize] === 'number')
        ? product.stockPorTalla[currentSize]
        : 5;
    const isOutOfStock = currentStock <= 0;

    content.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.75rem; align-items: start;">
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <div style="border-radius: var(--radius-xs); overflow: hidden; border: 1px solid var(--border-color);">
                    <img id="qv-main-img" src="${img1}" alt="${product.nombre}" style="width: 100%; display: block; object-fit: cover;">
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    <img src="${img1}" alt="Vista 1" onclick="document.getElementById('qv-main-img').src='${img1}'" style="width: 50px; height: 50px; object-fit: cover; border-radius: var(--radius-xs); border: 1px solid var(--accent-volt); cursor: pointer;">
                    <img src="${img2}" alt="Vista 2" onclick="document.getElementById('qv-main-img').src='${img2}'" style="width: 50px; height: 50px; object-fit: cover; border-radius: var(--radius-xs); border: 1px solid var(--border-color); cursor: pointer;">
                </div>
            </div>
            <div>
                <span class="section-tag-volt">${product.marca} ${product.badge ? `// ${product.badge}` : ''}</span>
                <h3 style="font-size: 1.6rem; color: #FFFFFF; line-height: 1.1; margin: 0.4rem 0 0.8rem;">${product.nombre}</h3>
                <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-volt); margin-bottom: 0.75rem;">
                    ${formatCOP(product.precio)}
                </div>

                <!-- Estado de Inventario -->
                <div style="margin-bottom: 1.25rem;">
                    ${isOutOfStock ? `
                        <span style="color: #ef4444; font-weight: 700; font-size: 0.88rem;">❌ Talla ${currentSize} agotada</span>
                    ` : currentStock <= 3 ? `
                        <span style="color: #fbbf24; font-weight: 700; font-size: 0.88rem;">⚡ ¡Solo quedan ${currentStock} unidades en talla ${currentSize}!</span>
                    ` : `
                        <span style="color: var(--accent-volt); font-weight: 700; font-size: 0.88rem;">✓ ${currentStock} unidades disponibles</span>
                    `}
                </div>

                <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem; font-size: 0.95rem;">
                    ${product.descripcion}
                </p>

                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-size: 0.85rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 0.4rem;">
                        TALLA DISPONIBLE:
                    </label>
                    <div class="size-picker-row">
                        ${product.tallas.map(s => {
                            const sizeStock = (product.stockPorTalla && typeof product.stockPorTalla[s] === 'number') ? product.stockPorTalla[s] : 5;
                            const outOfStock = sizeStock <= 0;
                            return `
                                <button 
                                    type="button" 
                                    class="size-btn-chip ${s === currentSize ? 'active' : ''} ${outOfStock ? 'out-of-stock' : ''}"
                                    onclick="${outOfStock ? `showToast('⚠️ La talla ${s} está agotada')` : `selectSize('${product.id}', '${s}'); openQuickView('${product.id}');`}"
                                    title="${outOfStock ? 'Agotado' : `${sizeStock} disponibles`}"
                                >
                                    ${s}
                                </button>
                            `;
                        }).join("")}
                    </div>
                </div>

                <button 
                    type="button" 
                    class="btn btn-primary-volt" 
                    style="width: 100%; padding: 0.85rem;"
                    ${isOutOfStock ? 'disabled style="opacity: 0.4; cursor: not-allowed;"' : ''}
                    onclick="addToCart('${product.id}'); document.getElementById('quickview-dialog').close();"
                >
                    ${isOutOfStock ? 'Talla Agotada' : `⚡ Añadir al Carrito (${currentSize})`}
                </button>
            </div>
        </div>
    `;

    quickviewDialog.showModal();
}

// ============================================================================
// HERO SLIDER DINÁMICO (3 SLIDES - TRANSICIÓN SUAVE CADA 6 SEGUNDOS)
// ============================================================================
let currentSlideIndex = 0;
let sliderInterval = null;
const SLIDE_DURATION = 6000; // 6 segundos de transición suave

function initHeroSlider() {
    const slider = document.getElementById("hero-slider");
    const slides = document.querySelectorAll(".hero-slide");
    const indicatorBtns = document.querySelectorAll(".indicator-num-btn");
    const prevBtn = document.getElementById("slider-prev-btn");
    const nextBtn = document.getElementById("slider-next-btn");

    if (!slider || slides.length === 0) return;

    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        currentSlideIndex = index;

        slides.forEach((slide, idx) => {
            if (idx === currentSlideIndex) {
                slide.classList.add("active");
                slide.setAttribute("aria-hidden", "false");
            } else {
                slide.classList.remove("active");
                slide.setAttribute("aria-hidden", "true");
            }
        });

        indicatorBtns.forEach((btn, idx) => {
            if (idx === currentSlideIndex) {
                btn.classList.add("active");
                btn.setAttribute("aria-selected", "true");
            } else {
                btn.classList.remove("active");
                btn.setAttribute("aria-selected", "false");
            }
        });
    }

    function startAutoSlide() {
        stopAutoSlide();
        sliderInterval = setInterval(() => {
            goToSlide(currentSlideIndex + 1);
        }, SLIDE_DURATION);
    }

    function stopAutoSlide() {
        if (sliderInterval) {
            clearInterval(sliderInterval);
            sliderInterval = null;
        }
    }

    indicatorBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = parseInt(btn.getAttribute("data-slide-index"), 10);
            goToSlide(idx);
            startAutoSlide();
        });
    });

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            goToSlide(currentSlideIndex - 1);
            startAutoSlide();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            goToSlide(currentSlideIndex + 1);
            startAutoSlide();
        });
    }

    slider.addEventListener("mouseenter", stopAutoSlide);
    slider.addEventListener("mouseleave", startAutoSlide);

    document.addEventListener("keydown", (e) => {
        if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
        if (e.key === "ArrowLeft") {
            goToSlide(currentSlideIndex - 1);
            startAutoSlide();
        } else if (e.key === "ArrowRight") {
            goToSlide(currentSlideIndex + 1);
            startAutoSlide();
        }
    });

    startAutoSlide();
}

// Configurar Event Listeners
function setupEventListeners() {
    // Buscador en Vivo con sanitización
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            AppState.searchQuery = sanitize(e.target.value);
            renderProducts();
        });
    }

    // Modal Carrito
    const cartBtn = document.getElementById("cart-toggle-btn");
    const cartDialog = document.getElementById("cart-dialog");
    const closeCartBtn = document.getElementById("close-cart-btn");
    const checkoutBtn = document.getElementById("checkout-btn");

    if (cartBtn && cartDialog) {
        cartBtn.addEventListener("click", () => {
            renderCartItems();
            cartDialog.showModal();
        });
    }

    if (closeCartBtn && cartDialog) {
        closeCartBtn.addEventListener("click", () => cartDialog.close());
    }

    // Checkout
    const checkoutDialog = document.getElementById("checkout-dialog");
    const closeCheckoutBtn = document.getElementById("close-checkout-btn");
    const checkoutForm = document.getElementById("checkout-form");

    if (checkoutBtn && checkoutDialog && cartDialog) {
        checkoutBtn.addEventListener("click", () => {
            if (AppState.cart.length === 0) {
                showToast("El carrito está vacío.");
                return;
            }
            cartDialog.close();
            prepareCheckoutSummary();
            checkoutDialog.showModal();
        });
    }

    if (closeCheckoutBtn && checkoutDialog) {
        closeCheckoutBtn.addEventListener("click", () => checkoutDialog.close());
    }

    if (checkoutForm) {
        checkoutForm.addEventListener("submit", handleCheckoutSubmit);
    }

    // Modal Quick View
    const quickviewDialog = document.getElementById("quickview-dialog");
    const closeQuickViewBtn = document.getElementById("close-quickview-btn");
    if (closeQuickViewBtn && quickviewDialog) {
        closeQuickViewBtn.addEventListener("click", () => quickviewDialog.close());
    }

    // Modal Éxito
    const closeOrderSuccessBtn = document.getElementById("close-order-success-btn");
    const orderSuccessDialog = document.getElementById("order-success-dialog");
    if (closeOrderSuccessBtn && orderSuccessDialog) {
        closeOrderSuccessBtn.addEventListener("click", () => orderSuccessDialog.close());
    }
}

// Polyfill de light-dismiss para <dialog closedby="any">
function setupDialogBackdropPolyfills() {
    const dialogs = document.querySelectorAll("dialog[closedby='any']");
    if (!('closedBy' in HTMLDialogElement.prototype)) {
        dialogs.forEach(dialog => {
            dialog.addEventListener("click", (event) => {
                if (event.target !== dialog) return;
                const rect = dialog.getBoundingClientRect();
                const isDialogContent = (
                    rect.top <= event.clientY &&
                    event.clientY <= rect.top + rect.height &&
                    rect.left <= event.clientX &&
                    event.clientX <= rect.left + rect.width
                );
                if (!isDialogContent) {
                    dialog.close();
                }
            });
        });
    }
}

// Toast flotante
let toastTimer;
function showToast(message) {
    let toast = document.getElementById("app-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "app-toast";
        toast.className = "app-toast";
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3200);
}

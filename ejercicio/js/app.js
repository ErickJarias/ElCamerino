/**
 * ============================================================================
 * EL CAMERINO SPORTS • MOTOR E-COMMERCE & INTEGRACIÓN WOMPI SANDBOX
 * Identidad Oficial: Negro Carbón (#0B0D0E) & Verde Volt / Neón (#A6FF00)
 * ============================================================================
 */

// Configuración Wompi Sandbox Oficial
const WOMPI_CONFIG = {
    publicKey: "pub_test_Q5yDA9xoKdePzhSGeVe9HAeu1w0TVFwa",
    integritySecret: "test_integrity_b9K5F8hG3jL1mN4pQ7rT2vX6z",
    currency: "COP",
    freeShippingThreshold: 180000, // Envío gratis a partir de $180.000 COP
    standardShippingFee: 15000     // Flete nacional estándar $15.000 COP
};

// Catálogo Oficial de Productos de El Camerino Sports (COP)
const DEFAULT_PRODUCTS = [
    // 👟 GUAYOS Y ZAPATILLAS DE FUTSAL
    {
        id: "zap-01",
        nombre: "Joma Top Flex Rebound Futsal",
        categoria: "zapatillas",
        marca: "Joma",
        precio: 289900,
        precioAnterior: 349900,
        tallas: ["38", "39", "40", "41", "42", "43"],
        imagen: "https://contents.mediadecathlon.com/p2644744/k$531b7af3db1e86268bf7f369651facbf/sq/zapatillas-de-futbol-sala-joma-top-flex-adulto-blanco.jpg?format=auto&f=800x0",
        badge: "TOP VENTAS",
        descripcion: "Zapatilla de fútbol sala profesional con amortiguación Rebound. Piel natural de máxima flexibilidad y suela de caucho resistente a la abrasión en parquet o asfalto."
    },
    {
        id: "zap-02",
        nombre: "Nike Mercurial Vapor 15 Academy IC",
        categoria: "zapatillas",
        marca: "Nike",
        precio: 329900,
        precioAnterior: 389900,
        tallas: ["38", "39", "40", "41", "42"],
        imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=85",
        badge: "NUEVO",
        descripcion: "Diseñadas para velocidad explosiva y cambios de dirección bruscos. Unidad Zoom Air en el talón para máxima amortiguación reactiva."
    },
    {
        id: "zap-03",
        nombre: "Adidas Predator Elite Sala IN",
        categoria: "zapatillas",
        marca: "Adidas",
        precio: 369900,
        precioAnterior: 449900,
        tallas: ["39", "40", "41", "42", "43", "44"],
        imagen: "https://media.futbolmania.com/media/catalog/product/cache/1/image/0f330055bc18e2dda592b4a7c3a0ea22/I/G/IG7798_zapatillas-futbol-sala-color-negro-y-rojo-adidas-predator-elite-in_1_pie-derecho.jpg",
        badge: "PRO LEVEL",
        descripcion: "Control milimétrico del balón con tecnología Strikeskin de goma con relieve y mediasuela Lightstrike de perfil bajo."
    },
    {
        id: "zap-04",
        nombre: "Puma Future 7 Match Indoor",
        categoria: "zapatillas",
        marca: "Puma",
        precio: 269900,
        precioAnterior: 319900,
        tallas: ["38", "39", "40", "41", "42"],
        imagen: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=700&auto=format&fit=crop&q=85",
        badge: "OFERTA",
        descripcion: "Empeine adaptativo FUZIONFIT con soporte reforzado y agarre multidireccional ideal para giros rápidos en duela."
    },

    // 🧦 MEDIAS Y ACCESORIOS DE AGARRE
    {
        id: "med-01",
        nombre: "Medias Antideslizantes Pro Grip (Pack x2)",
        categoria: "medias",
        marca: "El Camerino Tech",
        precio: 69900,
        precioAnterior: 89900,
        tallas: ["M (37-41)", "L (42-45)"],
        imagen: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=700&auto=format&fit=crop&q=85",
        badge: "ESENCIAL",
        descripcion: "Almohadillas de silicona antideslizante de alta adherencia en la planta. Previenen ampollas y garantizan fijación absoluta con la plantilla del guayo."
    },
    {
        id: "med-02",
        nombre: "Medias Clásicas de Futsal hasta la Rodilla",
        categoria: "medias",
        marca: "Nike",
        precio: 45000,
        precioAnterior: null,
        tallas: ["S", "M", "L"],
        imagen: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=700&auto=format&fit=crop&q=85",
        badge: null,
        descripcion: "Tejido elástico con hilo absorbente Dri-FIT y compresión en el arco para mantener sujeción durante los 40 minutos de juego."
    },
    {
        id: "med-03",
        nombre: "Tobilleras de Compresión Elástica",
        categoria: "medias",
        marca: "McDavid",
        precio: 55000,
        precioAnterior: 69900,
        tallas: ["S/M", "L/XL"],
        imagen: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=700&auto=format&fit=crop&q=85",
        badge: "SOPORTE",
        descripcion: "Estabilidad adicional y soporte para ligamentos de tobillo en superficies duras y cambios de ritmo rápidos."
    },

    // 👕 UNIFORMES Y ROPA DEPORTIVA
    {
        id: "uni-01",
        nombre: "Conjunto Completo Futsal Pro (Camiseta + Short)",
        categoria: "uniformes",
        marca: "El Camerino",
        precio: 139900,
        precioAnterior: 179900,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=700&auto=format&fit=crop&q=85",
        badge: "SET OFICIAL",
        descripcion: "Microfibra deportiva antitranspirante de secado ultra rápido con paneles microperforados laterales para ventilación óptima."
    },
    {
        id: "uni-02",
        nombre: "Camiseta Técnica de Entrenamiento Dry-Fit",
        categoria: "uniformes",
        marca: "Adidas",
        precio: 99900,
        precioAnterior: 129900,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=700&auto=format&fit=crop&q=85",
        badge: "TRANSPIRABLE",
        descripcion: "Corte atlético ergonómico sin rozaduras, ultraliviana para partidos intensos y entrenamientos de alta exigencia."
    },

    // ⚽ BALONES Y ACCESORIOS DEPORTIVOS
    {
        id: "acc-01",
        nombre: "Balón Oficial Futsal Pro - Rebote Controlado Nº 4",
        categoria: "accesorios",
        marca: "Molten",
        precio: 129900,
        precioAnterior: 159900,
        tallas: ["Nº 4 Oficial"],
        imagen: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=700&auto=format&fit=crop&q=85",
        badge: "CERTIFICADO",
        descripcion: "Cámara interior rellena con microfibras para rebote amortiguado reglamentario. Cosido a mano para máxima durabilidad en parquet o asfalto."
    },
    {
        id: "acc-02",
        nombre: "Espinilleras Ultraligeras de Fibra de Carbono + Mangas",
        categoria: "accesorios",
        marca: "ShieldTech",
        precio: 79900,
        precioAnterior: 99900,
        tallas: ["S", "M", "L"],
        imagen: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=700&auto=format&fit=crop&q=85",
        badge: "PROTECCIÓN",
        descripcion: "Carcasa rígida con reverso de espuma EVA amortiguadora y mangas elásticas de compresión para cero desplazamientos."
    }
];

// Estado global
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
    setupEventListeners();
    setupDialogBackdropPolyfills();
});

// Cargar catálogo local y persistido
function loadCatalog() {
    try {
        const stored = localStorage.getItem("el_camerino_catalog");
        if (stored) {
            const userProducts = JSON.parse(stored);
            AppState.products = [...userProducts, ...DEFAULT_PRODUCTS];
        } else {
            AppState.products = [...DEFAULT_PRODUCTS];
        }
    } catch (e) {
        AppState.products = [...DEFAULT_PRODUCTS];
    }

    // Inicializar tallas seleccionadas por defecto
    AppState.products.forEach(p => {
        if (!AppState.selectedSizes[p.id] && p.tallas && p.tallas.length) {
            AppState.selectedSizes[p.id] = p.tallas[0];
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

// Filtrar por categoría
function filterByCategory(category) {
    AppState.activeCategory = category;

    // Actualizar botones de chips
    const chipBtns = document.querySelectorAll(".category-chip-btn");
    chipBtns.forEach(btn => {
        const text = btn.textContent.toLowerCase();
        if (
            (category === "all" && text.includes("todos")) ||
            (category === "zapatillas" && text.includes("zapatillas")) ||
            (category === "medias" && text.includes("medias")) ||
            (category === "uniformes" && text.includes("uniformes")) ||
            (category === "accesorios" && text.includes("accesorios"))
        ) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    renderProducts();
}

// Renderizar la grilla de productos
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
                <p style="margin-bottom: 1.5rem;">Prueba con otros términos como "guayos", "medias", "joma", "nike" o selecciona otra categoría.</p>
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

        return `
            <article class="product-sport-card" data-id="${prod.id}">
                <!-- Imagen Vertical Deportiva -->
                <div class="product-img-box" onclick="openQuickView('${prod.id}')" title="Clic para ver detalles">
                    <img 
                        src="${prod.imagen}" 
                        alt="${prod.nombre} - ${prod.marca}" 
                        loading="lazy"
                        onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=85';"
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

                    <!-- Selector Rápido de Talla -->
                    <div class="size-picker-row" role="radiogroup" aria-label="Talla para ${prod.nombre}">
                        ${prod.tallas.map(size => `
                            <button 
                                type="button" 
                                class="size-btn-chip ${size === activeSize ? 'active' : ''}" 
                                onclick="selectSize('${prod.id}', '${size}')"
                                aria-label="Talla ${size}"
                            >
                                ${size}
                            </button>
                        `).join("")}
                    </div>

                    <!-- Botón de Añadir al Carrito -->
                    <button 
                        type="button" 
                        class="btn btn-primary-volt btn-card-add" 
                        onclick="addToCart('${prod.id}')"
                    >
                        ⚡ Añadir al Carrito
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

// Agregar al carrito
function addToCart(productId) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;

    const selectedSize = AppState.selectedSizes[productId] || product.tallas[0];
    const cartItemId = `${product.id}_${selectedSize}`;

    const existingIndex = AppState.cart.findIndex(i => i.cartItemId === cartItemId);
    if (existingIndex > -1) {
        AppState.cart[existingIndex].quantity += 1;
    } else {
        AppState.cart.push({
            cartItemId: cartItemId,
            id: product.id,
            nombre: product.nombre,
            marca: product.marca,
            precio: product.precio,
            imagen: product.imagen,
            size: selectedSize,
            quantity: 1
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

// Modificar cantidad en carrito
function changeCartItemQty(cartItemId, delta) {
    const itemIndex = AppState.cart.findIndex(i => i.cartItemId === cartItemId);
    if (itemIndex === -1) return;

    AppState.cart[itemIndex].quantity += delta;
    if (AppState.cart[itemIndex].quantity <= 0) {
        AppState.cart.splice(itemIndex, 1);
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

// Procesar Checkout (Wompi o Contraentrega)
async function handleCheckoutSubmit(e) {
    e.preventDefault();

    if (AppState.cart.length === 0) {
        showToast("Tu carrito está vacío.");
        return;
    }

    const form = e.target;
    const submitBtn = document.getElementById("submit-checkout-btn");
    const nombre = form.nombre.value.trim();
    const telefono = form.telefono.value.trim();
    const ciudad = form.ciudad.value.trim();
    const direccion = form.direccion.value.trim();
    const metodoPago = form.metodoPago.value;
    const notas = form.notas.value.trim();

    const subtotal = AppState.cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);
    const isFreeShipping = subtotal >= WOMPI_CONFIG.freeShippingThreshold;
    const shipping = isFreeShipping ? 0 : WOMPI_CONFIG.standardShippingFee;
    const total = subtotal + shipping;
    const amountInCents = Math.round(total * 100);

    const orderNumber = "CAM-" + Date.now().toString().slice(-6);

    // =========================================================================
    // FLUJO WOMPI COLOMBIA (WIDGET OFICIAL SANDBOX)
    // =========================================================================
    if (metodoPago.includes("Wompi")) {
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = "⚡ Conectando pasarela Wompi...";
        }

        let signature = null;
        let publicKey = WOMPI_CONFIG.publicKey;

        try {
            const res = await fetch("/api/wompi-signature", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    reference: orderNumber,
                    amountInCents: amountInCents,
                    currency: "COP"
                })
            });
            if (res.ok) {
                const data = await res.json();
                signature = data.signature;
                if (data.publicKey) publicKey = data.publicKey;
            }
        } catch (err) {
            console.warn("Calculando firma con fallback criptográfico local:", err);
        }

        // Fallback local Web Crypto API SHA-256
        if (!signature) {
            const rawString = `${orderNumber}${amountInCents}COP${WOMPI_CONFIG.integritySecret}`;
            const encoder = new TextEncoder();
            const data = encoder.encode(rawString);
            const hashBuffer = await crypto.subtle.digest("SHA-256", data);
            signature = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, "0")).join("");
        }

        const redirectUrl = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, "/confirmacion.html");

        if (typeof WidgetCheckout !== "undefined") {
            const checkout = new WidgetCheckout({
                currency: "COP",
                amountInCents: amountInCents,
                reference: orderNumber,
                publicKey: publicKey,
                signature: { integrity: signature },
                redirectUrl: redirectUrl,
                customerData: {
                    email: "cliente@elcamerino.co",
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
                submitBtn.textContent = "⚡ Pagar con Wompi Colombia";
            }
            return;
        } else {
            showToast("⚠️ El widget de Wompi está cargando. Intenta de nuevo.");
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = "⚡ Pagar con Wompi Colombia";
            }
            return;
        }
    }

    // =========================================================================
    // FLUJO CONTRAENTREGA / WHATSAPP
    // =========================================================================
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
    mensajeWhatsApp += `\n📍 Dirección: ${direccion}, ${ciudad}`;
    mensajeWhatsApp += `\n💳 Método: ${metodoPago}`;
    if (notas) mensajeWhatsApp += `\n📝 Notas: ${notas}`;

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "⏳ Registrando pedido...";
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
                    <p><strong>Ciudad:</strong> ${ciudad}</p>
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
            submitBtn.textContent = "⚡ Pagar con Wompi Colombia";
        }

        checkoutDialog.close();
        successDialog.showModal();
    }, 300);
}

// Modal Quick View
function openQuickView(productId) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;

    const quickviewDialog = document.getElementById("quickview-dialog");
    const content = document.getElementById("quickview-content");
    if (!quickviewDialog || !content) return;

    const currentSize = AppState.selectedSizes[productId] || product.tallas[0];

    content.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.75rem; align-items: start;">
            <div style="border-radius: var(--radius-xs); overflow: hidden; border: 1px solid var(--border-color);">
                <img src="${product.imagen}" alt="${product.nombre}" style="width: 100%; display: block; object-fit: cover;">
            </div>
            <div>
                <span class="section-tag-volt">${product.marca} ${product.badge ? `// ${product.badge}` : ''}</span>
                <h3 style="font-size: 1.6rem; color: #FFFFFF; line-height: 1.1; margin: 0.4rem 0 0.8rem;">${product.nombre}</h3>
                <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-volt); margin-bottom: 1rem;">
                    ${formatCOP(product.precio)}
                </div>
                <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem; font-size: 0.95rem;">
                    ${product.descripcion}
                </p>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-size: 0.85rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 0.4rem;">
                        TALLA DISPONIBLE:
                    </label>
                    <div class="size-picker-row">
                        ${product.tallas.map(s => `
                            <button 
                                type="button" 
                                class="size-btn-chip ${s === currentSize ? 'active' : ''}"
                                onclick="selectSize('${product.id}', '${s}'); openQuickView('${product.id}');"
                            >
                                ${s}
                            </button>
                        `).join("")}
                    </div>
                </div>
                <button 
                    type="button" 
                    class="btn btn-primary-volt" 
                    style="width: 100%; padding: 0.85rem;"
                    onclick="addToCart('${product.id}'); document.getElementById('quickview-dialog').close();"
                >
                    ⚡ Añadir al Carrito (${currentSize})
                </button>
            </div>
        </div>
    `;

    quickviewDialog.showModal();
}

// Configurar Event Listeners
function setupEventListeners() {
    // Buscador en Vivo en el Navbar
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            AppState.searchQuery = e.target.value;
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

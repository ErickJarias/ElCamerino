/**
 * ============================================================================
 * EL CAMERINO SPORTSWEAR • APLICACIÓN EDITORIAL Y MOTOR E-COMMERCE
 * Integración con Wompi Colombia (Sandbox) & Sistema de Diseño Taste-Skill
 * ============================================================================
 */

// Configuración oficial Wompi Sandbox
const WOMPI_CONFIG = {
    publicKey: "pub_test_Q5yDA9xoKdePzhSGeVe9HAeu1w0TVFwa",
    integritySecret: "test_integrity_b9K5F8hG3jL1mN4pQ7rT2vX6z",
    currency: "COP",
    freeShippingThreshold: 180000, // $180.000 COP
    standardShippingFee: 15000     // $15.000 COP
};

// 4 Productos Destacados de Ejemplo Realistas (Sportswear Alta Ingeniería)
const FLAGSHIP_PRODUCTS = [
    {
        id: "prod-compresion",
        nombre: "Camiseta de Compresión Dry-Pro",
        categoria: "training",
        marca: "El Camerino Tech",
        precio: 119900,
        precioAnterior: 149900,
        badge: "COMPRESIÓN ALTA",
        badgeType: "tech",
        imagenPrincipal: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=85",
        colores: ["#0f172a", "#10b981", "#64748b"], // Black, Volt, Slate
        tallas: ["S", "M", "L", "XL"],
        tallaSeleccionada: "M",
        descripcion: "Tejido microperforado 4-way stretch con panel posterior transpirable. Favorece el retorno venoso y minimiza la oscilación muscular durante cargas máximas."
    },
    {
        id: "prod-leggings",
        nombre: "Leggings Seamless High-Impact",
        categoria: "training",
        marca: "El Camerino Tech",
        precio: 149900,
        precioAnterior: 189900,
        badge: "NUEVO",
        badgeType: "new",
        imagenPrincipal: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=85",
        colores: ["#0f172a", "#64748b", "#ef4444"], // Black, Slate, Crimson
        tallas: ["S", "M", "L", "XL"],
        tallaSeleccionada: "S",
        descripcion: "Construcción sin costuras que elimina cualquier punto de fricción. Tiro ultra alto con compresión focalizada en abdomen y soporte lumbar."
    },
    {
        id: "prod-shorts",
        nombre: "Shorts de Entrenamiento AeroVent 2-en-1",
        categoria: "running",
        marca: "El Camerino Tech",
        precio: 99900,
        precioAnterior: 129900,
        badge: "COMPRESIÓN ALTA",
        badgeType: "tech",
        imagenPrincipal: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?w=800&auto=format&fit=crop&q=85",
        colores: ["#0f172a", "#10b981"], // Black, Volt
        tallas: ["S", "M", "L", "XL"],
        tallaSeleccionada: "M",
        descripcion: "Capa exterior ultraliviana impermeable al sudor combinada con licra compresiva interior que evita rozaduras en sprints y sentadillas."
    },
    {
        id: "prod-hoodie",
        nombre: "Hoodie Técnico Storm-Fleece Oversize",
        categoria: "essentials",
        marca: "El Camerino Tech",
        precio: 189900,
        precioAnterior: 229900,
        badge: "NUEVO",
        badgeType: "new",
        imagenPrincipal: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=85",
        imagenSecundaria: "https://images.unsplash.com/photo-1578768079052-aa76e520036c?w=800&auto=format&fit=crop&q=85",
        colores: ["#64748b", "#0f172a", "#f8fafc"], // Slate, Black, White
        tallas: ["S", "M", "L", "XL"],
        tallaSeleccionada: "L",
        descripcion: "Algodón pesado cepillado con aislamiento térmico Storm-Fleece. Silueta oversize moderna para calentamiento, post-entreno o calle."
    }
];

// Estado global de la tienda
const AppState = {
    products: [...FLAGSHIP_PRODUCTS],
    cart: [],
    selectedSizes: {
        "prod-compresion": "M",
        "prod-leggings": "S",
        "prod-shorts": "M",
        "prod-hoodie": "L"
    }
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
    loadLocalCart();
    renderFeaturedProducts();
    updateCartBadge();
    setupEventListeners();
    setupDialogBackdropPolyfills();
});

// Cargar carrito desde localStorage
function loadLocalCart() {
    try {
        const savedCart = localStorage.getItem("el_camerino_cart");
        if (savedCart) {
            AppState.cart = JSON.parse(savedCart);
        }
    } catch (e) {
        AppState.cart = [];
    }
}

// Guardar carrito en localStorage
function saveLocalCart() {
    localStorage.setItem("el_camerino_cart", JSON.stringify(AppState.cart));
}

// Renderizar el grid de los 4 productos destacados
function renderFeaturedProducts() {
    const grid = document.getElementById("featured-products-grid");
    if (!grid) return;

    grid.innerHTML = AppState.products.map(prod => {
        const activeSize = AppState.selectedSizes[prod.id] || prod.tallas[0];
        const tagClass = prod.badgeType === "new" ? "tag-new" : "tag-tech";

        return `
            <article class="product-item-card" data-id="${prod.id}">
                <!-- Contenedor Vertical 4:5 con cambio de foto en Hover -->
                <div class="product-image-flipper" onclick="openQuickView('${prod.id}')" title="Clic para ver detalles">
                    <img 
                        src="${prod.imagenPrincipal}" 
                        alt="${prod.nombre}" 
                        class="flipper-img primary"
                        loading="lazy"
                    >
                    <img 
                        src="${prod.imagenSecundaria}" 
                        alt="${prod.nombre} - detalle" 
                        class="flipper-img secondary"
                        loading="lazy"
                    >
                    <span class="card-top-tag ${tagClass}">${prod.badge}</span>
                </div>

                <!-- Info y Selectores Interactivos -->
                <div class="product-card-body">
                    <!-- Puntos de color disponibles -->
                    <div class="color-dots-row" title="Colores disponibles">
                        ${prod.colores.map(color => `
                            <span class="color-dot" style="background-color: ${color};" aria-label="Color ${color}"></span>
                        `).join("")}
                    </div>

                    <!-- Título y Precio en COP -->
                    <h3 class="product-name-title" onclick="openQuickView('${prod.id}')">${prod.nombre}</h3>
                    <div class="product-price-cop">${formatCOP(prod.precio)}</div>

                    <!-- Selector Rápido de Tallas (S, M, L, XL) -->
                    <div class="size-chips-selector" role="radiogroup" aria-label="Selector de talla para ${prod.nombre}">
                        ${prod.tallas.map(size => `
                            <button 
                                type="button" 
                                class="size-pill-btn ${size === activeSize ? 'active' : ''}" 
                                onclick="selectProductSize('${prod.id}', '${size}')"
                                aria-label="Talla ${size}"
                            >
                                ${size}
                            </button>
                        `).join("")}
                    </div>

                    <!-- Botón de Añadir Rápido al Carrito -->
                    <button 
                        type="button" 
                        class="btn btn-primary-volt quick-add-btn" 
                        onclick="quickAddToCart('${prod.id}')"
                    >
                        ⚡ Añadir Rápido
                    </button>
                </div>
            </article>
        `;
    }).join("");
}

// Seleccionar talla de una tarjeta de producto
function selectProductSize(productId, size) {
    AppState.selectedSizes[productId] = size;
    renderFeaturedProducts();
}

// Añadir rápido al carrito desde la tarjeta destacada
function quickAddToCart(productId) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;

    const selectedSize = AppState.selectedSizes[productId] || product.tallas[0];
    addToCart(product, selectedSize, 1);
}

// Agregar al carrito con talla y cantidad
function addToCart(product, size, quantity = 1) {
    const cartItemId = `${product.id}_${size}`;
    const existingIndex = AppState.cart.findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
        AppState.cart[existingIndex].quantity += quantity;
    } else {
        AppState.cart.push({
            cartItemId: cartItemId,
            id: product.id,
            nombre: product.nombre,
            marca: product.marca,
            precio: product.precio,
            imagen: product.imagenPrincipal || product.imagen,
            size: size,
            quantity: quantity
        });
    }

    saveLocalCart();
    updateCartBadge();
    showToast(`✅ "${product.nombre}" (${size}) añadido al carrito`);
}

// Actualizar el número en el badge del carrito
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
                <span style="font-size: 3.5rem; display: block; margin-bottom: 0.75rem;">🛒</span>
                <p style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">Tu carrito está vacío</p>
                <small>Descubre nuestra colección 2026 y añade indumentaria de alto impacto.</small>
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
            progressFill.style.background = "linear-gradient(90deg, #10b981, #34d399)";
        } else {
            const remaining = WOMPI_CONFIG.freeShippingThreshold - subtotal;
            const percent = Math.min(100, Math.round((subtotal / WOMPI_CONFIG.freeShippingThreshold) * 100));
            progressMsg.innerHTML = `🚚 Te faltan <strong>${formatCOP(remaining)}</strong> para <strong>ENVÍO GRATIS</strong>`;
            progressPercent.textContent = `${percent}%`;
            progressFill.style.width = `${percent}%`;
            progressFill.style.background = "linear-gradient(90deg, #0284c7, #10b981)";
        }
    }

    cartItemsContainer.innerHTML = AppState.cart.map(item => `
        <div class="cart-item-row" data-cart-id="${item.cartItemId}">
            <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-thumb">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.nombre}</h4>
                <div class="cart-item-meta">
                    <span class="meta-size">Talla: <strong>${item.size}</strong></span>
                    <span class="meta-price">${formatCOP(item.precio)} c/u</span>
                </div>
                <div class="cart-item-controls">
                    <div class="qty-stepper">
                        <button type="button" class="btn-qty" onclick="changeCartItemQty('${item.cartItemId}', -1)">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button type="button" class="btn-qty" onclick="changeCartItemQty('${item.cartItemId}', 1)">+</button>
                    </div>
                    <span class="cart-item-total">${formatCOP(item.precio * item.quantity)}</span>
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

    saveLocalCart();
    updateCartBadge();
    renderCartItems();
}

// Remover artículo del carrito
function removeCartItem(cartItemId) {
    AppState.cart = AppState.cart.filter(i => i.cartItemId !== cartItemId);
    saveLocalCart();
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
            <div class="checkout-item-line">
                <span>${item.quantity}x ${item.nombre} (Talla: ${item.size})</span>
                <span>${formatCOP(item.precio * item.quantity)}</span>
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
            console.warn("Calculando firma con fallback local:", err);
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
                submitBtn.textContent = "⚡ Pagar Pedido con Wompi";
            }
            return;
        } else {
            showToast("⚠️ El widget de Wompi está cargando. Intenta de nuevo.");
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = "⚡ Pagar Pedido con Wompi";
            }
            return;
        }
    }

    // =========================================================================
    // FLUJO CONTRAENTREGA / WHATSAPP
    // =========================================================================
    let mensajeWhatsApp = `¡Hola *El Camerino*! 👕⚡\nQuiero confirmar mi pedido *#${orderNumber}*:\n\n`;
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
                <div class="order-receipt" style="background: rgba(18, 26, 39, 0.7); border: 1px solid var(--border-color); border-radius: 8px; padding: 1.25rem; margin-top: 1rem;">
                    <p><strong>Nº de Pedido:</strong> <span style="color: var(--accent-volt); font-family: var(--font-heading); font-size: 1.1rem;">${orderNumber}</span></p>
                    <p><strong>Cliente:</strong> ${nombre}</p>
                    <p><strong>Ciudad:</strong> ${ciudad}</p>
                    <p><strong>Dirección:</strong> ${direccion}</p>
                    <p><strong>Total a Pagar:</strong> <strong style="color: var(--accent-volt);">${formatCOP(total)}</strong></p>
                </div>
            `;
        }

        if (whatsappBtn) {
            const encoded = encodeURIComponent(mensajeWhatsApp);
            whatsappBtn.href = `https://api.whatsapp.com/send?phone=573000000000&text=${encoded}`;
        }

        AppState.cart = [];
        saveLocalCart();
        updateCartBadge();
        form.reset();

        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "⚡ Pagar Pedido con Wompi";
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
        <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 2rem; align-items: start;">
            <div style="border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-color);">
                <img src="${product.imagenPrincipal}" alt="${product.nombre}" style="width: 100%; display: block; object-fit: cover;">
            </div>
            <div>
                <span class="tag-editorial">${product.marca} // ${product.badge}</span>
                <h3 style="font-size: 1.8rem; margin: 0.5rem 0 1rem; line-height: 1.1;">${product.nombre}</h3>
                <div style="font-size: 1.7rem; color: var(--accent-volt); font-family: var(--font-heading); font-weight: 900; margin-bottom: 1.25rem;">
                    ${formatCOP(product.precio)}
                </div>
                <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
                    ${product.descripcion}
                </p>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-family: var(--font-heading); font-size: 0.95rem; font-weight: 800; margin-bottom: 0.5rem;">
                        TALLA DISPONIBLE:
                    </label>
                    <div class="size-chips-selector">
                        ${product.tallas.map(s => `
                            <button 
                                type="button" 
                                class="size-pill-btn ${s === currentSize ? 'active' : ''}"
                                onclick="selectProductSize('${product.id}', '${s}'); openQuickView('${product.id}');"
                            >
                                ${s}
                            </button>
                        `).join("")}
                    </div>
                </div>
                <button 
                    type="button" 
                    class="btn btn-primary-volt btn-large" 
                    style="width: 100%;"
                    onclick="addToCart(AppState.products.find(p=>p.id==='${product.id}'), '${currentSize}', 1); document.getElementById('quickview-dialog').close();"
                >
                    ⚡ Añadir al Carrito (${currentSize})
                </button>
            </div>
        </div>
    `;

    quickviewDialog.showModal();
}

// Configurar event listeners
function setupEventListeners() {
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

    // Modal Exito
    const closeOrderSuccessBtn = document.getElementById("close-order-success-btn");
    const orderSuccessDialog = document.getElementById("order-success-dialog");
    if (closeOrderSuccessBtn && orderSuccessDialog) {
        closeOrderSuccessBtn.addEventListener("click", () => orderSuccessDialog.close());
    }

    // Botones de Navbar: Búsqueda y Perfil
    const navSearchBtn = document.getElementById("nav-search-btn");
    if (navSearchBtn) {
        navSearchBtn.addEventListener("click", () => {
            const dest = document.getElementById("destacados");
            if (dest) dest.scrollIntoView({ behavior: "smooth" });
            showToast("Explora los Productos Destacados ⚡");
        });
    }

    const navProfileBtn = document.getElementById("nav-profile-btn");
    if (navProfileBtn) {
        navProfileBtn.addEventListener("click", () => {
            showToast("Acceso Miembro El Camerino: Próximamente disponible.");
        });
    }

    // Modal Montar Producto (Admin)
    const openAddProductBtn = document.getElementById("open-add-product-btn");
    const addProductDialog = document.getElementById("add-product-dialog");
    const closeAddProductBtn = document.getElementById("close-add-product-btn");
    const addProductForm = document.getElementById("add-product-form");
    const prodFileInput = document.getElementById("prod-file-input");
    const prodUrlInput = document.getElementById("prod-url-input");
    const imagePreviewContainer = document.getElementById("image-preview-container");
    const imagePreviewImg = document.getElementById("image-preview-img");

    if (openAddProductBtn && addProductDialog) {
        openAddProductBtn.addEventListener("click", () => {
            addProductForm.reset();
            if (imagePreviewContainer) imagePreviewContainer.style.display = "none";
            addProductDialog.showModal();
        });
    }

    if (closeAddProductBtn && addProductDialog) {
        closeAddProductBtn.addEventListener("click", () => addProductDialog.close());
    }

    if (prodFileInput) {
        prodFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    if (imagePreviewImg && imagePreviewContainer) {
                        imagePreviewImg.src = event.target.result;
                        imagePreviewContainer.style.display = "flex";
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (prodUrlInput) {
        prodUrlInput.addEventListener("input", (e) => {
            const url = e.target.value.trim();
            if (url && imagePreviewImg && imagePreviewContainer) {
                imagePreviewImg.src = url;
                imagePreviewContainer.style.display = "flex";
            }
        });
    }

    if (addProductForm) {
        addProductForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const form = e.target;
            const nombre = form.nombre.value.trim();
            const categoria = form.categoria.value;
            const marca = form.marca.value.trim();
            const precio = parseFloat(form.precio.value);
            const tallas = form.tallas.value.split(",").map(t => t.trim()).filter(Boolean);
            const badge = form.badge.value || "NUEVO";
            const descripcion = form.descripcion.value.trim() || "Prenda deportiva de alto rendimiento.";
            const url = form.imagenUrl.value.trim() || (imagePreviewImg ? imagePreviewImg.src : "") || "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=85";

            const newProd = {
                id: "prod-" + Date.now(),
                nombre: nombre,
                categoria: categoria,
                marca: marca,
                precio: precio,
                precioAnterior: null,
                badge: badge,
                badgeType: "new",
                imagenPrincipal: url,
                imagenSecundaria: url,
                colores: ["#0f172a", "#10b981"],
                tallas: tallas.length ? tallas : ["S", "M", "L", "XL"],
                tallaSeleccionada: tallas[0] || "M",
                descripcion: descripcion
            };

            AppState.products.unshift(newProd);
            AppState.selectedSizes[newProd.id] = newProd.tallas[0];
            renderFeaturedProducts();
            addProductDialog.close();
            form.reset();
            showToast(`🎉 ¡"${nombre}" publicado con éxito!`);
        });
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

// Toast flotante para notificaciones
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

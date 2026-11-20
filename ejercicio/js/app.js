// Catálogo completo de productos de la tienda deportiva
const PRODUCTS = [
    // ZAPATILLAS
    {
        id: "zap-01",
        nombre: "Joma Top Flex Rebound Futsal",
        categoria: "zapatillas",
        marca: "Joma",
        precio: 79.99,
        precioAnterior: 95.00,
        tallas: ["39", "40", "41", "42", "43", "44"],
        imagen: "https://contents.mediadecathlon.com/p2644744/k$531b7af3db1e86268bf7f369651facbf/sq/zapatillas-de-futbol-sala-joma-top-flex-adulto-blanco.jpg?format=auto&f=800x0",
        badge: "Top Ventas",
        descripcion: "Zapatilla de fútbol sala profesional con amortiguación Rebound. Piel natural de máxima flexibilidad y suela de caucho resistente a la abrasión."
    },
    {
        id: "zap-02",
        nombre: "Nike Mercurial Vapor 15 Academy IC",
        categoria: "zapatillas",
        marca: "Nike",
        precio: 89.99,
        precioAnterior: 110.00,
        tallas: ["38", "39", "40", "41", "42", "43"],
        imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
        badge: "Nuevo",
        descripcion: "Diseñadas para velocidad explosiva en pista cubierta. Unidad Zoom Air en el talón para reactividad inmediata."
    },
    {
        id: "zap-03",
        nombre: "Adidas Predator Elite Sala IN",
        categoria: "zapatillas",
        marca: "Adidas",
        precio: 99.99,
        precioAnterior: 130.00,
        tallas: ["40", "41", "42", "43", "44", "45"],
        imagen: "https://media.futbolmania.com/media/catalog/product/cache/1/image/0f330055bc18e2dda592b4a7c3a0ea22/I/G/IG7798_zapatillas-futbol-sala-color-negro-y-rojo-adidas-predator-elite-in_1_pie-derecho.jpg",
        badge: "Pro",
        descripcion: "Control milimétrico del balón con tecnología Strikeskin de goma con relieve y mediasuela Lightstrike de perfil bajo."
    },
    {
        id: "zap-04",
        nombre: "Puma Future 7 Match Indoor",
        categoria: "zapatillas",
        marca: "Puma",
        precio: 74.99,
        precioAnterior: 89.99,
        tallas: ["39", "40", "41", "42", "43"],
        imagen: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=80",
        badge: "Oferta",
        descripcion: "Empeine adaptativo FUZIONFIT con soporte reforzado y agarre multidireccional ideal para giros rápidos."
    },

    // MEDIAS Y ACCESORIOS DE PIE
    {
        id: "med-01",
        nombre: "Medias Antideslizantes Pro Grip (Pack x2)",
        categoria: "medias",
        marca: "EliteSport",
        precio: 18.50,
        precioAnterior: 25.00,
        tallas: ["M (37-41)", "L (42-46)"],
        imagen: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop&q=80",
        badge: "Esencial",
        descripcion: "Almohadillas de silicona antiderrapante en la planta del pie. Evita ampollas y asegura fijación total a la plantilla de tu zapatilla."
    },
    {
        id: "med-02",
        nombre: "Medias Clásicas de Futsal hasta la Rodilla",
        categoria: "medias",
        marca: "Nike",
        precio: 12.00,
        precioAnterior: null,
        tallas: ["S", "M", "L"],
        imagen: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&auto=format&fit=crop&q=80",
        badge: null,
        descripcion: "Tejido transpirable Dri-FIT con compresión en el arco y soporte acanalado en el tobillo."
    },
    {
        id: "med-03",
        nombre: "Tobilleras de Compresión Elástica",
        categoria: "medias",
        marca: "McDavid",
        precio: 15.00,
        precioAnterior: 20.00,
        tallas: ["S/M", "L/XL"],
        imagen: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&auto=format&fit=crop&q=80",
        badge: "Soporte",
        descripcion: "Estabilidad adicional para ligamentos del tobillo en canchas duras y cambios de ritmo rápidos."
    },

    // UNIFORMES Y ROPA DEPORTIVA
    {
        id: "uni-01",
        nombre: "Conjunto Completo Futsal Pro (Camiseta + Short)",
        categoria: "uniformes",
        marca: "El Camerino",
        precio: 39.99,
        precioAnterior: 55.00,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600&auto=format&fit=crop&q=80",
        badge: "Set Completo",
        descripcion: "Tela microfibra antitranspirante de secado ultra rápido con paneles microperforados laterales para máxima ventilación."
    },
    {
        id: "uni-02",
        nombre: "Camiseta Técnica de Entrenamiento Dry-Fit",
        categoria: "uniformes",
        marca: "Adidas",
        precio: 27.99,
        precioAnterior: 35.00,
        tallas: ["S", "M", "L", "XL", "XXL"],
        imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=80",
        badge: "Transpirable",
        descripcion: "Corte ergonómico sin rozaduras, ultraliviana para partidos intensos y entrenamientos de alta exigencia."
    },
    {
        id: "uni-03",
        nombre: "Set de Petos / Chalecos de Entrenamiento (Pack x6)",
        categoria: "uniformes",
        marca: "ProTeam",
        precio: 29.99,
        precioAnterior: 38.00,
        tallas: ["Talla Única Adulto", "Juvenil"],
        imagen: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=600&auto=format&fit=crop&q=80",
        badge: "Pack Club",
        descripcion: "Malla fluorescente de alta visibilidad y resistencia al tironeo en partidillos y ejercicios tácticos."
    },

    // BALONES Y ACCESORIOS DEPORTIVOS
    {
        id: "acc-01",
        nombre: "Balón Oficial Futsal Pro - Rebote Controlado Nº 4",
        categoria: "accesorios",
        marca: "Molten",
        precio: 34.50,
        precioAnterior: 45.00,
        tallas: ["Nº 4 (Oficial Sala)"],
        imagen: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=600&auto=format&fit=crop&q=80",
        badge: "Certificado",
        descripcion: "Cámara rellena con fibra para rebote amortiguado reglamentario. Cosido a mano para máxima durabilidad en parquet o asfalto."
    },
    {
        id: "acc-02",
        nombre: "Espinilleras Ultraligeras de Fibra de Carbono + Mangas",
        categoria: "accesorios",
        marca: "ShieldTech",
        precio: 22.90,
        precioAnterior: 29.90,
        tallas: ["S", "M", "L"],
        imagen: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600&auto=format&fit=crop&q=80",
        badge: "Protección",
        descripcion: "Placa anatómica de absorción de impactos con forro acolchado de espuma EVA y funda elástica de sujeción."
    },
    {
        id: "acc-03",
        nombre: "Guantes de Arquero / Portero Futsal Palma Látex",
        categoria: "accesorios",
        marca: "Reusch",
        precio: 32.00,
        precioAnterior: 42.00,
        tallas: ["8", "9", "10"],
        imagen: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&auto=format&fit=crop&q=80",
        badge: "Agarre Total",
        descripcion: "Látex alemán de 4mm con corte negativo para máximo tacto al repeler y lanzar el balón con la mano."
    },
    {
        id: "acc-04",
        nombre: "Mochila / Bolso Deportivo Compartimento para Zapatillas",
        categoria: "accesorios",
        marca: "El Camerino",
        precio: 29.99,
        precioAnterior: 40.00,
        tallas: ["35 Litros"],
        imagen: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
        badge: "Impermeable",
        descripcion: "Compartimento ventilado aislado en la base para calzado sucio, múltiples bolsillos y tejido impermeable."
    }
];

// Estado global de la aplicación
const AppState = {
    products: JSON.parse(localStorage.getItem("el_camerino_catalog") || "null") || [...PRODUCTS],
    cart: JSON.parse(localStorage.getItem("el_camerino_cart") || "[]"),
    activeCategory: "all",
    searchQuery: "",
    selectedProductForQuickView: null
};

// Guardar catálogo si es la primera vez
if (!localStorage.getItem("el_camerino_catalog")) {
    localStorage.setItem("el_camerino_catalog", JSON.stringify(AppState.products));
}

// Inicialización cuando carga el DOM
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    renderCategoryFilters();
    renderProducts();
    updateCartBadge();
    setupEventListeners();
    setupDialogBackdropPolyfills();
}

// Configurar event listeners
function setupEventListeners() {
    // Buscador
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            AppState.searchQuery = e.target.value.toLowerCase().trim();
            renderProducts();
        });
    }

    // Modal del Carrito
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
        closeCartBtn.addEventListener("click", () => {
            cartDialog.close();
        });
    }

    // Ir a Checkout
    const checkoutDialog = document.getElementById("checkout-dialog");
    if (checkoutBtn && checkoutDialog && cartDialog) {
        checkoutBtn.addEventListener("click", () => {
            if (AppState.cart.length === 0) {
                showToast("El carrito está vacío. Agrega productos primero.");
                return;
            }
            cartDialog.close();
            prepareCheckoutSummary();
            checkoutDialog.showModal();
        });
    }

    const closeCheckoutBtn = document.getElementById("close-checkout-btn");
    if (closeCheckoutBtn && checkoutDialog) {
        closeCheckoutBtn.addEventListener("click", () => {
            checkoutDialog.close();
        });
    }

    // Formulario de Checkout
    const checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", handleCheckoutSubmit);
    }

    // Modal Quick View
    const quickViewDialog = document.getElementById("quickview-dialog");
    const closeQuickViewBtn = document.getElementById("close-quickview-btn");
    if (closeQuickViewBtn && quickViewDialog) {
        closeQuickViewBtn.addEventListener("click", () => {
            quickViewDialog.close();
        });
    }

    // Modal Confirmación de Pedido
    const closeOrderSuccessBtn = document.getElementById("close-order-success-btn");
    const orderSuccessDialog = document.getElementById("order-success-dialog");
    if (closeOrderSuccessBtn && orderSuccessDialog) {
        closeOrderSuccessBtn.addEventListener("click", () => {
            orderSuccessDialog.close();
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
        closeAddProductBtn.addEventListener("click", () => {
            addProductDialog.close();
        });
    }

    // Vista previa al seleccionar archivo local
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

    // Vista previa si escribe una URL
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
        addProductForm.addEventListener("submit", handleAddProductSubmit);
    }
}

// Configuración de click en backdrop para cerrar modales (Light Dismiss conforme a modern-web-guidance)
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
                if (isDialogContent) return;
                dialog.close();
            });
        });
    }
}

// Renderizado de botones de categorías
function renderCategoryFilters() {
    const filterContainer = document.getElementById("category-filters");
    if (!filterContainer) return;

    const categories = [
        { id: "all", name: "🔥 Todos los Productos" },
        { id: "zapatillas", name: "👟 Zapatillas de Futsal" },
        { id: "medias", name: "🧦 Medias y Antideslizantes" },
        { id: "uniformes", name: "👕 Uniformes y Ropa" },
        { id: "accesorios", name: "⚽ Balones y Equipamiento" }
    ];

    filterContainer.innerHTML = categories.map(cat => `
        <button type="button" 
                class="category-chip ${AppState.activeCategory === cat.id ? 'active' : ''}" 
                data-category="${cat.id}">
            ${cat.name}
        </button>
    `).join("");

    filterContainer.querySelectorAll(".category-chip").forEach(btn => {
        btn.addEventListener("click", () => {
            filterContainer.querySelectorAll(".category-chip").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            AppState.activeCategory = btn.dataset.category;
            renderProducts();
        });
    });
}

// Renderizado de productos con filtros y búsqueda
function renderProducts() {
    const grid = document.getElementById("products-grid");
    const countEl = document.getElementById("products-count");
    if (!grid) return;

    const filtered = AppState.products.filter(p => {
        const matchesCategory = AppState.activeCategory === "all" || p.categoria === AppState.activeCategory;
        const matchesQuery = !AppState.searchQuery || 
            p.nombre.toLowerCase().includes(AppState.searchQuery) ||
            p.marca.toLowerCase().includes(AppState.searchQuery) ||
            p.descripcion.toLowerCase().includes(AppState.searchQuery);
        return matchesCategory && matchesQuery;
    });

    if (countEl) {
        countEl.textContent = `Mostrando ${filtered.length} ${filtered.length === 1 ? 'producto' : 'productos'}`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🔍</span>
                <h3>No se encontraron productos</h3>
                <p>Intenta con otra búsqueda o selecciona otra categoría deportiva.</p>
                <button type="button" class="btn btn-secondary" onclick="resetFilters()">Ver todos los productos</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(product => {
        const hasDiscount = product.precioAnterior && product.precioAnterior > product.precio;
        const discountPercent = hasDiscount ? Math.round(((product.precioAnterior - product.precio) / product.precioAnterior) * 100) : 0;

        return `
            <article class="product-card" data-id="${product.id}">
                <div class="product-image-wrap">
                    <img src="${product.imagen}" alt="${product.nombre}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80';">
                    <div class="badge-stack">
                        ${product.badge ? `<span class="product-badge badge-tag">${product.badge}</span>` : ''}
                        ${hasDiscount ? `<span class="product-badge badge-discount">-${discountPercent}%</span>` : ''}
                    </div>
                    <button type="button" class="quick-view-btn" onclick="openQuickView('${product.id}')" title="Vista rápida">
                        👁️ Vista Rápida
                    </button>
                </div>
                <div class="product-info">
                    <span class="product-brand">${product.marca}</span>
                    <h3 class="product-title" onclick="openQuickView('${product.id}')">${product.nombre}</h3>
                    
                    <div class="product-price-row">
                        <span class="product-price">$${product.precio.toFixed(2)}</span>
                        ${hasDiscount ? `<span class="product-price-old">$${product.precioAnterior.toFixed(2)}</span>` : ''}
                    </div>

                    <div class="size-selector-compact">
                        <label for="size-${product.id}">Talla:</label>
                        <select id="size-${product.id}" class="compact-select">
                            ${product.tallas.map(t => `<option value="${t}">${t}</option>`).join('')}
                        </select>
                    </div>

                    <div class="product-actions">
                        <button type="button" class="btn btn-primary add-to-cart-btn" onclick="addToCartFromCard('${product.id}')">
                            🛒 Agregar al Carrito
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

function resetFilters() {
    AppState.activeCategory = "all";
    AppState.searchQuery = "";
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = "";
    renderCategoryFilters();
    renderProducts();
}

// Agregar al carrito desde la tarjeta de catálogo
function addToCartFromCard(productId) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;

    const sizeSelect = document.getElementById(`size-${productId}`);
    const selectedSize = sizeSelect ? sizeSelect.value : product.tallas[0];

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
            imagen: product.imagen,
            size: size,
            quantity: quantity
        });
    }

    saveCart();
    updateCartBadge();
    showToast(`✅ "${product.nombre}" (${size}) agregado al carrito`);
}

// Guardar carrito en localStorage
function saveCart() {
    localStorage.setItem("el_camerino_cart", JSON.stringify(AppState.cart));
}

// Actualizar número en el badge del carrito
function updateCartBadge() {
    const badge = document.getElementById("cart-badge");
    if (!badge) return;
    const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? "inline-flex" : "none";
}

// Renderizar artículos dentro del modal del Carrito
function renderCartItems() {
    const cartItemsContainer = document.getElementById("cart-items-container");
    const cartSubtotalEl = document.getElementById("cart-subtotal");
    const cartShippingEl = document.getElementById("cart-shipping");
    const cartTotalEl = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");

    if (!cartItemsContainer) return;

    if (AppState.cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-msg">
                <span style="font-size: 3rem;">🛒</span>
                <p>Tu carrito está vacío actualmente.</p>
                <small>Explora nuestro catálogo y equipa tu pasión deportiva.</small>
            </div>
        `;
        if (cartSubtotalEl) cartSubtotalEl.textContent = "$0.00";
        if (cartShippingEl) cartShippingEl.textContent = "$0.00";
        if (cartTotalEl) cartTotalEl.textContent = "$0.00";
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }

    if (checkoutBtn) checkoutBtn.disabled = false;

    const subtotal = AppState.cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);
    const shippingThreshold = 70.00;
    const shipping = subtotal >= shippingThreshold ? 0 : 5.00; // Envío gratis a partir de $70
    const total = subtotal + shipping;

    // Actualizar barra de progreso de Envío Gratis
    const progressBox = document.getElementById("shipping-progress-box");
    const progressMsg = document.getElementById("shipping-progress-msg");
    const progressPercent = document.getElementById("shipping-progress-percent");
    const progressFill = document.getElementById("shipping-progress-fill");

    if (progressBox && progressMsg && progressPercent && progressFill) {
        if (subtotal >= shippingThreshold) {
            progressMsg.innerHTML = "🎉 ¡Felicidades! Tienes <strong>ENVÍO GRATIS</strong>";
            progressPercent.textContent = "100%";
            progressFill.style.width = "100%";
            progressFill.style.background = "linear-gradient(90deg, #10b981, #22c55e)";
        } else {
            const remaining = shippingThreshold - subtotal;
            const percent = Math.min(100, Math.round((subtotal / shippingThreshold) * 100));
            progressMsg.innerHTML = `🚚 Te faltan <strong>$${remaining.toFixed(2)}</strong> para <strong>ENVÍO GRATIS</strong>`;
            progressPercent.textContent = `${percent}%`;
            progressFill.style.width = `${percent}%`;
            progressFill.style.background = "linear-gradient(90deg, #eab308, #10b981)";
        }
    }

    cartItemsContainer.innerHTML = AppState.cart.map(item => `
        <div class="cart-item-row" data-cart-id="${item.cartItemId}">
            <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-thumb">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.nombre}</h4>
                <div class="cart-item-meta">
                    <span class="meta-size">Talla: <strong>${item.size}</strong></span>
                    <span class="meta-price">$${item.precio.toFixed(2)} c/u</span>
                </div>
                <div class="cart-item-controls">
                    <div class="qty-stepper">
                        <button type="button" class="btn-qty" onclick="changeCartItemQty('${item.cartItemId}', -1)">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button type="button" class="btn-qty" onclick="changeCartItemQty('${item.cartItemId}', 1)">+</button>
                    </div>
                    <span class="cart-item-total">$${(item.precio * item.quantity).toFixed(2)}</span>
                    <button type="button" class="btn-remove-item" onclick="removeCartItem('${item.cartItemId}')" title="Eliminar">🗑️</button>
                </div>
            </div>
        </div>
    `).join("");

    if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (cartShippingEl) {
        cartShippingEl.innerHTML = shipping === 0 
            ? `<span class="badge-free-shipping">¡Gratis! 🎉</span>` 
            : `$${shipping.toFixed(2)}`;
    }
    if (cartTotalEl) cartTotalEl.textContent = `$${total.toFixed(2)}`;
}

// Cambiar cantidad en el carrito (+ o -)
function changeCartItemQty(cartItemId, delta) {
    const itemIndex = AppState.cart.findIndex(item => item.cartItemId === cartItemId);
    if (itemIndex === -1) return;

    AppState.cart[itemIndex].quantity += delta;
    if (AppState.cart[itemIndex].quantity <= 0) {
        AppState.cart.splice(itemIndex, 1);
    }

    saveCart();
    updateCartBadge();
    renderCartItems();
}

// Eliminar ítem del carrito
function removeCartItem(cartItemId) {
    AppState.cart = AppState.cart.filter(item => item.cartItemId !== cartItemId);
    saveCart();
    updateCartBadge();
    renderCartItems();
    showToast("Producto eliminado del carrito");
}

// Modal de Vista Rápida (Quick View)
function openQuickView(productId) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;

    AppState.selectedProductForQuickView = product;
    const dialog = document.getElementById("quickview-dialog");
    const container = document.getElementById("quickview-content");
    if (!dialog || !container) return;

    const hasDiscount = product.precioAnterior && product.precioAnterior > product.precio;

    container.innerHTML = `
        <div class="quickview-grid">
            <div class="quickview-gallery">
                <img src="${product.imagen}" alt="${product.nombre}" class="quickview-main-img">
            </div>
            <div class="quickview-details">
                <span class="product-brand">${product.marca} • Categoría: ${product.categoria.toUpperCase()}</span>
                <h2>${product.nombre}</h2>
                
                <div class="product-price-row quickview-price">
                    <span class="product-price">$${product.precio.toFixed(2)}</span>
                    ${hasDiscount ? `<span class="product-price-old">$${product.precioAnterior.toFixed(2)}</span>` : ''}
                    ${product.badge ? `<span class="product-badge badge-tag">${product.badge}</span>` : ''}
                </div>

                <p class="quickview-desc">${product.descripcion}</p>

                <div class="quickview-size-section">
                    <label>Selecciona tu talla:</label>
                    <div class="quickview-sizes" id="qv-sizes-group">
                        ${product.tallas.map((t, idx) => `
                            <button type="button" class="size-chip ${idx === 0 ? 'selected' : ''}" data-size="${t}">
                                ${t}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="quickview-add-row">
                    <div class="qty-stepper">
                        <button type="button" class="btn-qty" id="qv-minus">-</button>
                        <span class="qty-val" id="qv-qty">1</span>
                        <button type="button" class="btn-qty" id="qv-plus">+</button>
                    </div>
                    <button type="button" class="btn btn-primary btn-large" id="qv-add-btn">
                        🛒 Añadir al Carrito
                    </button>
                </div>

                <div class="quickview-guarantees">
                    <span>🚚 Envío express 24/48h</span>
                    <span>🛡️ Producto 100% Original</span>
                    <span>🔄 30 días para cambios</span>
                </div>

                <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color); display: flex; justify-content: flex-end;">
                    <button type="button" class="btn-delete-product" onclick="deleteProduct('${product.id}')">
                        🗑️ Eliminar este producto
                    </button>
                </div>
            </div>
        </div>
    `;

    // Eventos dentro del modal Quick View
    let selectedSize = product.tallas[0];
    let qty = 1;

    const sizeBtns = container.querySelectorAll(".size-chip");
    sizeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            sizeBtns.forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            selectedSize = btn.dataset.size;
        });
    });

    const qtyVal = container.querySelector("#qv-qty");
    container.querySelector("#qv-minus").addEventListener("click", () => {
        if (qty > 1) {
            qty--;
            qtyVal.textContent = qty;
        }
    });
    container.querySelector("#qv-plus").addEventListener("click", () => {
        qty++;
        qtyVal.textContent = qty;
    });

    container.querySelector("#qv-add-btn").addEventListener("click", () => {
        addToCart(product, selectedSize, qty);
        dialog.close();
    });

    dialog.showModal();
}

// Preparar resumen en el modal de checkout
function prepareCheckoutSummary() {
    const listEl = document.getElementById("checkout-items-list");
    const subtotalEl = document.getElementById("checkout-subtotal");
    const shippingEl = document.getElementById("checkout-shipping");
    const totalEl = document.getElementById("checkout-total");

    const subtotal = AppState.cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);
    const shipping = subtotal > 70 ? 0 : 5.00;
    const total = subtotal + shipping;

    if (listEl) {
        listEl.innerHTML = AppState.cart.map(item => `
            <div class="checkout-summary-row">
                <span>${item.quantity}x ${item.nombre} (${item.size})</span>
                <strong>$${(item.precio * item.quantity).toFixed(2)}</strong>
            </div>
        `).join("");
    }

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? "¡Gratis!" : `$${shipping.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

// Manejar confirmación del pedido en el Checkout
function handleCheckoutSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const nombre = form.nombre.value.trim();
    const telefono = form.telefono.value.trim();
    const direccion = form.direccion.value.trim();
    const ciudad = form.ciudad.value.trim();
    const metodoPago = form.metodoPago.value;
    const notas = form.notas.value.trim();

    if (!nombre || !telefono || !direccion) {
        showToast("Por favor completa los campos obligatorios.");
        return;
    }

    const subtotal = AppState.cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);
    const shipping = subtotal > 70 ? 0 : 5.00;
    const total = subtotal + shipping;
    const orderNumber = "ORD-" + Math.floor(100000 + Math.random() * 900000);

    // Preparar mensaje para WhatsApp
    let mensajeWhatsApp = `¡Hola *El Camerino*! 👕⚽\nQuiero confirmar mi pedido *#${orderNumber}*:\n\n`;
    AppState.cart.forEach(item => {
        mensajeWhatsApp += `• ${item.quantity}x ${item.nombre} (Talla: ${item.size}) - $${(item.precio * item.quantity).toFixed(2)}\n`;
    });
    mensajeWhatsApp += `\n*Subtotal:* $${subtotal.toFixed(2)}`;
    mensajeWhatsApp += `\n*Envío:* ${shipping === 0 ? 'Gratis' : '$' + shipping.toFixed(2)}`;
    mensajeWhatsApp += `\n*TOTAL:* $${total.toFixed(2)}`;
    mensajeWhatsApp += `\n\n*Datos de Envío:*`;
    mensajeWhatsApp += `\n👤 Cliente: ${nombre}`;
    mensajeWhatsApp += `\n📞 Teléfono: ${telefono}`;
    mensajeWhatsApp += `\n📍 Dirección: ${direccion}, ${ciudad}`;
    mensajeWhatsApp += `\n💳 Método de Pago: ${metodoPago}`;
    if (notas) mensajeWhatsApp += `\n📝 Notas: ${notas}`;

    // Feedback táctil y prevención de doble submit (UI/UX Pro Max)
    const submitBtn = form.querySelector("button[type='submit']");
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "⏳ Procesando pedido...";
    }

    setTimeout(() => {
        // Mostrar modal de éxito
        const checkoutDialog = document.getElementById("checkout-dialog");
        const successDialog = document.getElementById("order-success-dialog");
        const orderDetailsEl = document.getElementById("order-success-details");
        const whatsappBtn = document.getElementById("whatsapp-order-btn");

        if (orderDetailsEl) {
            orderDetailsEl.innerHTML = `
                <div class="order-receipt">
                    <p><strong>Nº de Pedido:</strong> <span class="order-id-badge">${orderNumber}</span></p>
                    <p><strong>Cliente:</strong> ${nombre}</p>
                    <p><strong>Entrega en:</strong> ${direccion}, ${ciudad}</p>
                    <p><strong>Total a pagar:</strong> <span class="order-total-price">$${total.toFixed(2)}</span> (${metodoPago})</p>
                    <p><small>Hemos recibido tu solicitud. Puedes enviárnosla directamente a WhatsApp para agilizar el despacho inmediato.</small></p>
                </div>
            `;
        }

        if (whatsappBtn) {
            const encoded = encodeURIComponent(mensajeWhatsApp);
            whatsappBtn.href = `https://api.whatsapp.com/send?phone=573000000000&text=${encoded}`;
        }

        // Vaciar carrito
        AppState.cart = [];
        saveCart();
        updateCartBadge();
        form.reset();

        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "✅ Confirmar y Enviar Pedido";
        }

        checkoutDialog.close();
        successDialog.showModal();
    }, 350);
}

// Publicar nuevo producto en la tienda
function handleAddProductSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const nombre = form.nombre.value.trim();
    const categoria = form.categoria.value;
    const marca = form.marca.value.trim();
    const precio = parseFloat(form.precio.value);
    const precioAnterior = form.precioAnterior.value ? parseFloat(form.precioAnterior.value) : null;
    const tallasStr = form.tallas.value.trim();
    const badge = form.badge.value || null;
    const descripcion = form.descripcion.value.trim() || "Producto de alta calidad para rendimiento deportivo.";

    const fileInput = document.getElementById("prod-file-input");
    const urlInput = document.getElementById("prod-url-input");

    const tallas = tallasStr.split(",").map(t => t.trim()).filter(t => t.length > 0);
    if (tallas.length === 0) {
        showToast("Debes ingresar al menos una talla válida.");
        return;
    }

    // Obtener imagen
    const saveNewProduct = (imageSrc) => {
        const newProduct = {
            id: "prod-" + Date.now(),
            nombre: nombre,
            categoria: categoria,
            marca: marca,
            precio: precio,
            precioAnterior: precioAnterior,
            tallas: tallas,
            imagen: imageSrc || "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
            badge: badge,
            descripcion: descripcion
        };

        AppState.products.unshift(newProduct);
        localStorage.setItem("el_camerino_catalog", JSON.stringify(AppState.products));

        renderProducts();
        document.getElementById("add-product-dialog").close();
        form.reset();
        document.getElementById("image-preview-container").style.display = "none";
        showToast(`🎉 ¡"${nombre}" montado con éxito en la tienda!`);
    };

    if (fileInput && fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (event) => saveNewProduct(event.target.result);
        reader.readAsDataURL(fileInput.files[0]);
    } else if (urlInput && urlInput.value.trim()) {
        saveNewProduct(urlInput.value.trim());
    } else {
        // Fallback imagen por categoría
        const fallbackImg = categoria === "zapatillas" 
            ? "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80"
            : categoria === "uniformes"
            ? "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600&auto=format&fit=crop&q=80"
            : categoria === "medias"
            ? "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop&q=80"
            : "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=600&auto=format&fit=crop&q=80";
        saveNewProduct(fallbackImg);
    }
}

// Eliminar producto del catálogo
function deleteProduct(productId) {
    if (!confirm("¿Estás seguro de que deseas eliminar este producto de la tienda?")) return;

    AppState.products = AppState.products.filter(p => p.id !== productId);
    localStorage.setItem("el_camerino_catalog", JSON.stringify(AppState.products));
    renderProducts();

    const qvDialog = document.getElementById("quickview-dialog");
    if (qvDialog && qvDialog.open) qvDialog.close();

    showToast("🗑️ Producto eliminado de la tienda");
}

// Toast flotante para avisos inmediatos
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

-- ============================================================================
-- DATOS INICIALES (SEEDS) PARA "EL CAMERINO"
-- ============================================================================

-- 1. Insertar Categorías
INSERT INTO categorias (nombre, slug, descripcion) VALUES
('Zapatillas de Futsal', 'zapatillas', 'Calzado especializado para pista interior, suela de goma anti-marcas y máximo agarre'),
('Medias y Antideslizantes', 'medias', 'Medias técnicas con grip de silicona y compresión para futbolistas'),
('Uniformes y Ropa', 'uniformes', 'Conjuntos completos de juego, camisetas técnicas transpirables y petos'),
('Balones y Accesorios', 'accesorios', 'Balones oficiales de futsal con rebote controlado, canilleras y bolsos')
ON CONFLICT (slug) DO NOTHING;

-- 2. Insertar Productos
INSERT INTO productos (id_categoria, nombre, slug, marca, descripcion, precio, precio_oferta, imagen_url, badge, destacado) VALUES
(1, 'Joma Top Flex Rebound Futsal', 'joma-top-flex-rebound', 'Joma', 'Piel natural de máxima flexibilidad y suela de caucho resistente a la abrasión con tecnología Rebound.', 79.99, 95.00, 'https://contents.mediadecathlon.com/p2644744/k$531b7af3db1e86268bf7f369651facbf/sq/zapatillas-de-futbol-sala-joma-top-flex-adulto-blanco.jpg?format=auto&f=800x0', 'Top Ventas', true),
(1, 'Nike Mercurial Vapor 15 Academy IC', 'nike-mercurial-vapor-15', 'Nike', 'Diseñadas para velocidad explosiva en pista cubierta con unidad Zoom Air en el talón.', 89.99, 110.00, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80', 'Nuevo', true),
(1, 'Adidas Predator Elite Sala IN', 'adidas-predator-elite-sala', 'Adidas', 'Control milimétrico del balón con tecnología Strikeskin y mediasuela Lightstrike.', 99.99, 130.00, 'https://media.futbolmania.com/media/catalog/product/cache/1/image/0f330055bc18e2dda592b4a7c3a0ea22/I/G/IG7798_zapatillas-futbol-sala-color-negro-y-rojo-adidas-predator-elite-in_1_pie-derecho.jpg', 'Pro', true),
(2, 'Medias Antideslizantes Pro Grip (Pack x2)', 'medias-pro-grip-pack-2', 'El Camerino', 'Almohadillas de silicona antiderrapante en la planta del pie para fijación total al calzado.', 18.50, 25.00, 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop&q=80', 'Esencial', true),
(3, 'Conjunto Completo Futsal Pro (Camiseta + Short)', 'conjunto-futsal-pro', 'El Camerino', 'Microfibra antitranspirante de secado ultra rápido con paneles microperforados.', 39.99, 55.00, 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600&auto=format&fit=crop&q=80', 'Set Completo', true),
(4, 'Balón Oficial Futsal Pro - Rebote Controlado Nº 4', 'balon-futsal-pro-n4', 'Molten', 'Cámara rellena con fibra para rebote amortiguado reglamentario para sala.', 34.50, 45.00, 'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=600&auto=format&fit=crop&q=80', 'Certificado', true)
ON CONFLICT (slug) DO NOTHING;

-- 3. Insertar Variantes con Stock Real por Talla
-- Joma Top Flex
INSERT INTO variantes_producto (id_producto, talla, sku, stock_disponible) VALUES
(1, '39', 'JOMA-TF-39', 8),
(1, '40', 'JOMA-TF-40', 12),
(1, '41', 'JOMA-TF-41', 15),
(1, '42', 'JOMA-TF-42', 10),
(1, '43', 'JOMA-TF-43', 6)
ON CONFLICT (id_producto, talla) DO NOTHING;

-- Medias Pro Grip
INSERT INTO variantes_producto (id_producto, talla, sku, stock_disponible) VALUES
(4, 'M (37-41)', 'GRIP-M-BLK', 30),
(4, 'L (42-46)', 'GRIP-L-BLK', 25)
ON CONFLICT (id_producto, talla) DO NOTHING;

-- Conjunto Uniforme
INSERT INTO variantes_producto (id_producto, talla, sku, stock_disponible) VALUES
(5, 'S', 'UNI-PRO-S', 10),
(5, 'M', 'UNI-PRO-M', 20),
(5, 'L', 'UNI-PRO-L', 18),
(5, 'XL', 'UNI-PRO-XL', 8)
ON CONFLICT (id_producto, talla) DO NOTHING;

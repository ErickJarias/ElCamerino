-- ============================================================================
-- CONSULTAS DE NEGOCIO PARA "EL CAMERINO" (PostgreSQL)
-- Adaptadas y mejoradas a partir del caso de estudio de Nike
-- ============================================================================

-- 1. ¿Cómo vamos con las ventas del mes actual contra el anterior?
SELECT 
    TO_CHAR(p.fecha_pedido, 'YYYY-MM') AS mes,
    COUNT(DISTINCT p.id_pedido) AS total_pedidos,
    SUM(dp.cantidad * dp.precio_unitario) AS ventas_totales_usd,
    ROUND(AVG(p.total), 2) AS ticket_promedio
FROM pedidos p
JOIN detalle_pedidos dp ON dp.id_pedido = p.id_pedido
WHERE p.estado IN ('confirmado_whatsapp', 'enviado', 'entregado')
GROUP BY mes
ORDER BY mes DESC;

-- 2. ¿Cuáles son las categorías que más dinero aportan? (Zapatillas vs Medias vs Uniformes)
SELECT 
    c.nombre AS categoria,
    SUM(dp.cantidad) AS unidades_vendidas,
    SUM(dp.cantidad * dp.precio_unitario) AS ingresos_usd,
    ROUND((SUM(dp.cantidad * dp.precio_unitario) * 100.0 / NULLIF(SUM(SUM(dp.cantidad * dp.precio_unitario)) OVER(), 0)), 1) AS porcentaje_total
FROM detalle_pedidos dp
JOIN variantes_producto vp ON vp.id_variante = dp.id_variante
JOIN productos pr ON pr.id_producto = vp.id_producto
JOIN categorias c ON c.id_categoria = pr.id_categoria
JOIN pedidos p ON p.id_pedido = dp.id_pedido
WHERE p.estado = 'entregado'
GROUP BY c.nombre
ORDER BY ingresos_usd DESC;

-- 3. ALERTA DE STOCK CRÍTICO: ¿Qué tallas se están agotando?
-- Consulta esencial para la reposición de mercancía en El Camerino
SELECT 
    pr.marca,
    pr.nombre AS producto,
    vp.talla,
    vp.sku,
    vp.stock_disponible,
    CASE 
        WHEN vp.stock_disponible = 0 THEN '❌ AGOTADO'
        WHEN vp.stock_disponible <= 3 THEN '⚠️ STOCK CRÍTICO (Pedir al proveedor)'
        ELSE '✅ Stock Saludable'
    END AS estado_inventario
FROM variantes_producto vp
JOIN productos pr ON pr.id_producto = vp.id_producto
WHERE vp.stock_disponible <= 5
ORDER BY vp.stock_disponible ASC;

-- 4. Top 5 Productos Más Vendidos
SELECT 
    pr.nombre AS producto,
    vp.talla,
    SUM(dp.cantidad) AS total_unidades
FROM detalle_pedidos dp
JOIN variantes_producto vp ON vp.id_variante = dp.id_variante
JOIN productos pr ON pr.id_producto = vp.id_producto
GROUP BY pr.nombre, vp.talla
ORDER BY total_unidades DESC
LIMIT 5;

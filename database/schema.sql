-- ============================================================================
-- ESQUEMA DE BASE DE DATOS: EL CAMERINO SPORTS (PostgreSQL)
-- Compatible con: Neon Serverless Postgres, Supabase, Cloudflare D1 / Hyperdrive
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. TABLA: CATEGORIAS / DISCIPLINAS
CREATE TABLE IF NOT EXISTS categorias (
    id_categoria SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,     -- 'Fútbol & Futsal', 'Gym & Training', 'Running'
    slug VARCHAR(100) NOT NULL UNIQUE,       -- 'futbol', 'training', 'running'
    descripcion TEXT,
    activo BOOLEAN DEFAULT true,
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. TABLA: PRODUCTOS
CREATE TABLE IF NOT EXISTS productos (
    id_producto SERIAL PRIMARY KEY,
    id_categoria INTEGER NOT NULL REFERENCES categorias(id_categoria) ON DELETE RESTRICT,
    codigo_ref VARCHAR(50) NOT NULL UNIQUE,  -- ej: 'fut-01', 'trn-02'
    nombre VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    marca VARCHAR(100) NOT NULL,             -- 'Joma', 'Nike', 'Adidas', 'El Camerino Tech'
    descripcion TEXT,
    precio_cop NUMERIC(12, 2) NOT NULL CHECK (precio_cop >= 0),
    precio_anterior_cop NUMERIC(12, 2) CHECK (precio_anterior_cop >= 0),
    imagen_principal TEXT NOT NULL,
    imagen_secundaria TEXT,
    badge VARCHAR(50),                       -- 'TOP VENTAS', 'NUEVO', 'COMPRESIÓN ALTA'
    destacado BOOLEAN DEFAULT false,
    activo BOOLEAN DEFAULT true,
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    actualizado_en TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. TABLA: VARIANTES_PRODUCTO (TALLA, COLOR, SKU, STOCK EN TIEMPO REAL)
CREATE TABLE IF NOT EXISTS variantes_producto (
    id_variante SERIAL PRIMARY KEY,
    id_producto INTEGER NOT NULL REFERENCES productos(id_producto) ON DELETE CASCADE,
    talla VARCHAR(50) NOT NULL,              -- ej: '38', '39', '40', 'S', 'M', 'L'
    color VARCHAR(50) DEFAULT 'Estándar',    -- ej: 'Volt', 'Negro', 'Blanco'
    sku VARCHAR(100) UNIQUE NOT NULL,        -- ej: 'CAM-FUT-01-40'
    stock_disponible INTEGER NOT NULL DEFAULT 0 CHECK (stock_disponible >= 0),
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_producto_talla_color UNIQUE (id_producto, talla, color)
);

-- 4. TABLA: CLIENTES
CREATE TABLE IF NOT EXISTS clientes (
    id_cliente SERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    email VARCHAR(255),
    telefono VARCHAR(50) NOT NULL,           -- Notificaciones de WhatsApp y transportadora
    departamento VARCHAR(100) NOT NULL,      -- Cundinamarca, Antioquia, Valle...
    ciudad VARCHAR(100) NOT NULL,            -- Bogotá, Medellín, Cali...
    direccion_entrega TEXT NOT NULL,
    codigo_postal VARCHAR(20),
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. TABLA: PEDIDOS (ÓRDENES EN COLOMBIA)
CREATE TABLE IF NOT EXISTS pedidos (
    id_pedido SERIAL PRIMARY KEY,
    orden_id VARCHAR(50) NOT NULL UNIQUE,    -- ej: 'CAM-849120'
    id_cliente INTEGER NOT NULL REFERENCES clientes(id_cliente) ON DELETE RESTRICT,
    subtotal_cop NUMERIC(12, 2) NOT NULL CHECK (subtotal_cop >= 0),
    costo_envio_cop NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    total_cop NUMERIC(12, 2) NOT NULL CHECK (total_cop >= 0),
    estado_pago VARCHAR(50) NOT NULL DEFAULT 'PENDIENTE', -- 'PENDIENTE', 'PAGADO', 'RECHAZADO', 'CANCELADO'
    metodo_pago VARCHAR(100) NOT NULL,                    -- 'Wompi Colombia', 'Contraentrega', 'Transferencia Nequi'
    wompi_transaction_id VARCHAR(100),
    items_json JSONB NOT NULL,                            -- Detalle completo inmutable de la compra
    notas_entrega TEXT,
    fecha_pedido TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    fecha_pago TIMESTAMP WITH TIME ZONE,
    fecha_despacho TIMESTAMP WITH TIME ZONE
);

-- 6. TABLA: DETALLE_PEDIDOS (Líneas para reportes contables)
CREATE TABLE IF NOT EXISTS detalle_pedidos (
    id_detalle SERIAL PRIMARY KEY,
    id_pedido INTEGER NOT NULL REFERENCES pedidos(id_pedido) ON DELETE CASCADE,
    id_variante INTEGER NOT NULL REFERENCES variantes_producto(id_variante) ON DELETE RESTRICT,
    cantidad INTEGER NOT NULL CHECK (cantidad > 0),
    precio_unitario_cop NUMERIC(12, 2) NOT NULL CHECK (precio_unitario_cop >= 0)
);

-- 7. TABLA: AUDITORIA_ADMIN
CREATE TABLE IF NOT EXISTS auditoria_admin (
    id_log SERIAL PRIMARY KEY,
    usuario_admin VARCHAR(100) NOT NULL,
    accion VARCHAR(100) NOT NULL,            -- 'CREAR_PRODUCTO', 'ACTUALIZAR_STOCK', 'LOGIN'
    detalles JSONB,
    ip_origen VARCHAR(45),
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ÍNDICES DE RENDIMIENTO EN EL EDGE
CREATE INDEX IF NOT EXISTS idx_productos_categoria ON productos(id_categoria);
CREATE INDEX IF NOT EXISTS idx_productos_ref ON productos(codigo_ref);
CREATE INDEX IF NOT EXISTS idx_variantes_producto_talla ON variantes_producto(id_producto, talla);
CREATE INDEX IF NOT EXISTS idx_pedidos_orden ON pedidos(orden_id);
CREATE INDEX IF NOT EXISTS idx_pedidos_estado ON pedidos(estado_pago);
CREATE INDEX IF NOT EXISTS idx_pedidos_cliente ON pedidos(id_cliente);

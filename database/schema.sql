-- ============================================================================
-- ESQUEMA DE BASE DE DATOS: EL CAMERINO (PostgreSQL para Cloudflare Pages)
-- Compatible con: Neon Serverless Postgres, Supabase, Cloudflare Hyperdrive
-- ============================================================================

-- Extensión para generar identificadores UUID únicos si se requieren
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. TABLA: CATEGORIAS
CREATE TABLE IF NOT EXISTS categorias (
    id_categoria SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,     -- ej: 'zapatillas-futsal', 'medias'
    descripcion TEXT,
    activo BOOLEAN DEFAULT true,
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. TABLA: PRODUCTOS
CREATE TABLE IF NOT EXISTS productos (
    id_producto SERIAL PRIMARY KEY,
    id_categoria INTEGER NOT NULL REFERENCES categorias(id_categoria) ON DELETE RESTRICT,
    nombre VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,      -- ej: 'joma-top-flex-rebound'
    marca VARCHAR(100) NOT NULL,           -- ej: 'Joma', 'Nike', 'Adidas', 'El Camerino'
    descripcion TEXT,
    precio NUMERIC(10, 2) NOT NULL CHECK (precio >= 0),
    precio_oferta NUMERIC(10, 2) CHECK (precio_oferta >= 0),
    imagen_url TEXT NOT NULL,              -- URL alojada en Cloudflare R2
    badge VARCHAR(50),                     -- 'Top Ventas', 'Nuevo', 'Oferta'
    destacado BOOLEAN DEFAULT false,
    activo BOOLEAN DEFAULT true,
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    actualizado_en TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. TABLA: VARIANTES_PRODUCTO (TALLAS Y STOCK ESPECÍFICO)
-- CRUCIAL PARA TIENDA DEPORTIVA: Zapatillas (38-45), Ropa (S-XXL), Balones (Nº4)
CREATE TABLE IF NOT EXISTS variantes_producto (
    id_variante SERIAL PRIMARY KEY,
    id_producto INTEGER NOT NULL REFERENCES productos(id_producto) ON DELETE CASCADE,
    talla VARCHAR(50) NOT NULL,            -- ej: '41', 'M', 'Talla Única'
    sku VARCHAR(100) UNIQUE,               -- Código de barras o referencia interna
    stock_disponible INTEGER NOT NULL DEFAULT 0 CHECK (stock_disponible >= 0),
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_producto_talla UNIQUE (id_producto, talla)
);

-- 4. TABLA: CLIENTES
CREATE TABLE IF NOT EXISTS clientes (
    id_cliente SERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    email VARCHAR(255) UNIQUE,
    telefono VARCHAR(50) NOT NULL,         -- Para notificaciones de WhatsApp
    direccion_entrega TEXT NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. TABLA: PEDIDOS
CREATE TABLE IF NOT EXISTS pedidos (
    id_pedido SERIAL PRIMARY KEY,
    numero_pedido VARCHAR(50) NOT NULL UNIQUE, -- ej: 'CAM-2026-94812'
    id_cliente INTEGER NOT NULL REFERENCES clientes(id_cliente) ON DELETE RESTRICT,
    subtotal NUMERIC(10, 2) NOT NULL CHECK (subtotal >= 0),
    costo_envio NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    total NUMERIC(10, 2) NOT NULL CHECK (total >= 0),
    estado VARCHAR(50) NOT NULL DEFAULT 'pendiente', -- 'pendiente', 'confirmado_whatsapp', 'enviado', 'entregado', 'cancelado'
    metodo_pago VARCHAR(100) NOT NULL,               -- 'Contraentrega', 'Transferencia', 'Tarjeta'
    notas TEXT,
    fecha_pedido TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    fecha_entrega TIMESTAMP WITH TIME ZONE
);

-- 6. TABLA: DETALLE_PEDIDOS (Líneas de la compra)
CREATE TABLE IF NOT EXISTS detalle_pedidos (
    id_detalle SERIAL PRIMARY KEY,
    id_pedido INTEGER NOT NULL REFERENCES pedidos(id_pedido) ON DELETE CASCADE,
    id_variante INTEGER NOT NULL REFERENCES variantes_producto(id_variante) ON DELETE RESTRICT,
    cantidad INTEGER NOT NULL CHECK (cantidad > 0),
    precio_unitario NUMERIC(10, 2) NOT NULL CHECK (precio_unitario >= 0)
);

-- ============================================================================
-- ÍNDICES PARA ALTO RENDIMIENTO EN EL EDGE (Cloudflare Pages)
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_productos_categoria ON productos(id_categoria);
CREATE INDEX IF NOT EXISTS idx_productos_slug ON productos(slug);
CREATE INDEX IF NOT EXISTS idx_variantes_producto ON variantes_producto(id_producto);
CREATE INDEX IF NOT EXISTS idx_pedidos_cliente ON pedidos(id_cliente);
CREATE INDEX IF NOT EXISTS idx_pedidos_fecha ON pedidos(fecha_pedido);

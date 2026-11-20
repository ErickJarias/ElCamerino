// ============================================================================
// DRIZZLE ORM SCHEMA: EL CAMERINO (TypeScript para Cloudflare Pages / Edge)
// ============================================================================

import { pgTable, serial, text, varchar, numeric, boolean, timestamp, integer, unique } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// 1. Categorías (Zapatillas, Medias, Uniformes, Accesorios)
export const categorias = pgTable('categorias', {
    id: serial('id_categoria').primaryKey(),
    nombre: varchar('nombre', { length: 100 }).notNull().unique(),
    slug: varchar('slug', { length: 100 }).notNull().unique(),
    descripcion: text('descripcion'),
    activo: boolean('activo').default(true),
    creadoEn: timestamp('creado_en', { withTimezone: true }).defaultNow()
});

// 2. Productos Principales
export const productos = pgTable('productos', {
    id: serial('id_producto').primaryKey(),
    idCategoria: integer('id_categoria').notNull().references(() => categorias.id, { onDelete: 'restrict' }),
    nombre: varchar('nombre', { length: 255 }).notNull(),
    slug: varchar('slug', { length: 255 }).notNull().unique(),
    marca: varchar('marca', { length: 100 }).notNull(),
    descripcion: text('descripcion'),
    precio: numeric('precio', { precision: 10, scale: 2 }).notNull(),
    precioOferta: numeric('precio_oferta', { precision: 10, scale: 2 }),
    imagenUrl: text('imagen_url').notNull(),
    badge: varchar('badge', { length: 50 }),
    destacado: boolean('destacado').default(false),
    activo: boolean('activo').default(true),
    creadoEn: timestamp('creado_en', { withTimezone: true }).defaultNow()
});

// 3. Variantes de Talla y Stock
export const variantesProducto = pgTable('variantes_producto', {
    id: serial('id_variante').primaryKey(),
    idProducto: integer('id_producto').notNull().references(() => productos.id, { onDelete: 'cascade' }),
    talla: varchar('talla', { length: 50 }).notNull(), // Ej: '40', '41', 'M', 'L'
    sku: varchar('sku', { length: 100 }).unique(),
    stockDisponible: integer('stock_disponible').notNull().default(0),
    creadoEn: timestamp('creado_en', { withTimezone: true }).defaultNow()
}, (t) => ({
    unq: unique().on(t.idProducto, t.talla)
}));

// 4. Clientes
export const clientes = pgTable('clientes', {
    id: serial('id_cliente').primaryKey(),
    nombre: varchar('nombre', { length: 150 }).notNull(),
    email: varchar('email', { length: 255 }).unique(),
    telefono: varchar('telefono', { length: 50 }).notNull(),
    direccionEntrega: text('direccion_entrega').notNull(),
    ciudad: varchar('ciudad', { length: 100 }).notNull(),
    creadoEn: timestamp('creado_en', { withTimezone: true }).defaultNow()
});

// 5. Pedidos
export const pedidos = pgTable('pedidos', {
    id: serial('id_pedido').primaryKey(),
    numeroPedido: varchar('numero_pedido', { length: 50 }).notNull().unique(),
    idCliente: integer('id_cliente').notNull().references(() => clientes.id),
    subtotal: numeric('subtotal', { precision: 10, scale: 2 }).notNull(),
    costoEnvio: numeric('costo_envio', { precision: 10, scale: 2 }).notNull().default('0.00'),
    total: numeric('total', { precision: 10, scale: 2 }).notNull(),
    estado: varchar('estado', { length: 50 }).notNull().default('pendiente'),
    metodoPago: varchar('metodo_pago', { length: 100 }).notNull(),
    notas: text('notas'),
    fechaPedido: timestamp('fecha_pedido', { withTimezone: true }).defaultNow()
});

// 6. Detalle de los Pedidos
export const detallePedidos = pgTable('detalle_pedidos', {
    id: serial('id_detalle').primaryKey(),
    idPedido: integer('id_pedido').notNull().references(() => pedidos.id, { onDelete: 'cascade' }),
    idVariante: integer('id_variante').notNull().references(() => variantesProducto.id),
    cantidad: integer('cantidad').notNull(),
    precioUnitario: numeric('precio_unitario', { precision: 10, scale: 2 }).notNull()
});

// RELACIONES (Para consultas con JOIN automáticos en Cloudflare)
export const productosRelations = relations(productos, ({ one, many }) => ({
    categoria: one(categorias, { fields: [productos.idCategoria], references: [categorias.id] }),
    variantes: many(variantesProducto)
}));

export const pedidosRelations = relations(pedidos, ({ one, many }) => ({
    cliente: one(clientes, { fields: [pedidos.idCliente], references: [clientes.id] }),
    items: many(detallePedidos)
}));

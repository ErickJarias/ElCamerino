/**
 * ============================================================================
 * ESQUEMA TYPESCRIPT: EL CAMERINO SPORTS
 * Tipado estricto para Drizzle ORM, Kysely o Prisma
 * ============================================================================
 */

export type DisciplinaSlug = 'futbol' | 'training' | 'running';
export type EstadoPago = 'PENDIENTE' | 'PAGADO' | 'RECHAZADO' | 'CANCELADO';

export interface Categoria {
    id_categoria: number;
    nombre: string;
    slug: DisciplinaSlug;
    descripcion?: string;
    activo: boolean;
    creado_en: Date;
}

export interface Producto {
    id_producto: number;
    id_categoria: number;
    codigo_ref: string;
    nombre: string;
    slug: string;
    marca: string;
    descripcion?: string;
    precio_cop: number;
    precio_anterior_cop?: number | null;
    imagen_principal: string;
    imagen_secundaria?: string | null;
    badge?: string | null;
    destacado: boolean;
    activo: boolean;
    creado_en: Date;
    actualizado_en: Date;
}

export interface VarianteProducto {
    id_variante: number;
    id_producto: number;
    talla: string;
    color: string;
    sku: string;
    stock_disponible: number;
    creado_en: Date;
}

export interface Cliente {
    id_cliente: number;
    nombre: string;
    email?: string | null;
    telefono: string;
    departamento: string;
    ciudad: string;
    direccion_entrega: string;
    codigo_postal?: string | null;
    creado_en: Date;
}

export interface ItemPedidoJson {
    id: string;
    nombre: string;
    talla: string;
    cantidad: number;
    precio_unitario_cop: number;
    subtotal_cop: number;
}

export interface Pedido {
    id_pedido: number;
    orden_id: string;
    id_cliente: number;
    subtotal_cop: number;
    costo_envio_cop: number;
    total_cop: number;
    estado_pago: EstadoPago;
    metodo_pago: string;
    wompi_transaction_id?: string | null;
    items_json: ItemPedidoJson[];
    notas_entrega?: string | null;
    fecha_pedido: Date;
    fecha_pago?: Date | null;
    fecha_despacho?: Date | null;
}

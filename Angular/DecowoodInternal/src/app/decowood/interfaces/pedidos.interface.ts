export interface Pedido {
  pedido_id:         string;
  productos:        string;
  estado_pedido:     string;
  producto_detalle: ProductoDetalle[];
}

export interface ProductoDetalle {
  sku:          string;
  nombre:       string;
  categoria:    string;
  subcategoria: string;
  unidades:     string;
  color:        string;
}

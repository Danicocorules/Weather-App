export interface Proveedores {
  nombre: string;
  pedidos_asignados: number;
  localizacion: string;
  contacto: string;
  id: number;
  productos_asignados?: ProductoAsignado[];
}

export interface ProductoAsignado {
  id_pedido:    string;
  sku:          string;
  nombre:       string;
  unidades:     string;
  color:        string;
  estado:       string;
}

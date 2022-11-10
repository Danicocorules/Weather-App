import { Injectable } from '@angular/core';

import { Pedido } from '../decowood/interfaces/pedidos.interface';
import { Proveedores } from '../decowood/interfaces/proveedores.interface';
import { ProveedoresService } from './proveedores.service';

interface ProveedorModif {
  proveedor: string,
  color: string,
  nombre: string,
  sku: string,
  unidades: string,
  pedido_id: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProveedoresGestionService {

  constructor( private ProveedorServ: ProveedoresService ) { }

  proveedoresModificados!: Proveedores[];
  proveedorTraido!: Proveedores;





  recibirPedido( pedido: Pedido ) {

    const pedido_id = pedido.id;

    pedido.producto_detalle.forEach( prov => {

      if ( prov.proveedor !== '' ) {

        const proveedor = prov.proveedor;
        const color = prov.color;
        const nombre = prov.nombre;
        const sku = prov.sku;
        const unidades = prov.unidades;


        //console.log(prov.proveedor, prov.color, prov.nombre, prov.sku, prov.unidades, pedido_id);

        this.ProveedorServ.getProvBusq( prov.proveedor )
          .subscribe( (prov: any) => {
            console.log(prov);

            prov[0].productos_asignados[0].proveedor = proveedor;
            prov[0].productos_asignados[0].color = color;
            prov[0].productos_asignados[0].nombre = nombre;
            prov[0].productos_asignados[0].sku = sku;
            prov[0].productos_asignados[0].unidades = unidades;
            prov[0].productos_asignados[0].pedido_id = pedido_id;

            console.log(prov);





          } );

      }
    });


  }
}
// (provBusq: any) => this.proveedores = provBusq

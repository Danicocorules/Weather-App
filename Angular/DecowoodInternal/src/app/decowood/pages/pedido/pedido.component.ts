import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido, ProductoDetalle } from '../../interfaces/pedidos.interface';
import { switchMap } from 'rxjs/operators';
import { ProveedoresGestionService } from 'src/app/services/proveedores-gestion.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  pedidoRequerido!: Pedido;
  productos!: ProductoDetalle[];

  prodsDef!: ProductoDetalle[];

  constructor( private activatedRoute: ActivatedRoute,
               private pedidosServ: PedidosService,
               private proveedorGestion: ProveedoresGestionService
               ) { }

    ngOnInit(): void {
      this.activatedRoute.params
      .pipe(
        switchMap( ({ idPedido }) => this.pedidosServ.getSinglePedido( idPedido ) )
        )
        .subscribe( ( resp: any ) => {
          this.pedidoRequerido = resp;
          this.productos = resp.producto_detalle;
      });
    }

    guardarCambios(){
      this.pedidoRequerido.producto_detalle = this.prodsDef;

      this.pedidosServ.putPedido( this.pedidoRequerido )
        .subscribe( (resp:any) => this.pedidoRequerido = resp );

      // Pasamos la data al proveedor para actualizarlo y asignarle el pedido
      this.proveedorGestion.recibirPedido(this.pedidoRequerido);
    }

    recibirCambios( prodModif:any ) {
      this.prodsDef = prodModif;
    }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido, ProductoDetalle } from '../../interfaces/pedidos.interface';
import { switchMap } from 'rxjs/operators';
import { Proveedores } from '../../interfaces/proveedores.interface'

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  pedidoRequerido!: Pedido;
  productos!: ProductoDetalle[];

  proveedores!: Proveedores[];
  assign: boolean = false;


  constructor( private activatedRoute: ActivatedRoute,
               private pedidosServ: PedidosService
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

    guardarProveedor() {
      console.log('se edita el prod');

    }

}

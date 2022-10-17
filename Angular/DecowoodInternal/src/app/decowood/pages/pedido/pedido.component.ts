import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido } from '../../interfaces/pedidos.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  pedidoRequerido: Pedido[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private pedidosServ: PedidosService ) { }

    ngOnInit(): void {

        this.activatedRoute.params
        .pipe(
          switchMap( ({ idPedido }) => this.pedidosServ.getSinglePedido( idPedido ) )
          )
          .subscribe( ( resp: any ) => {
            console.log(resp);
            this.pedidoRequerido = resp;
          } );
        }
}

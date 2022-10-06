import { Component, OnInit, Input } from '@angular/core';
import { PedidosService } from '../../../services/pedidos.service';
import { Pedido } from '../../interfaces/pedidos.interface'

@Component({
  selector: 'app-pedidos-lista',
  templateUrl: './pedidos-lista.component.html',
  styleUrls: ['./pedidos-lista.component.scss']
})
export class PedidosListaComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor( private pedidosServ: PedidosService ) { }

  ngOnInit(): void {
    this.pedidosServ.getPedidos()
    .subscribe( (resp: Pedido[]) => {
      this.pedidos = resp;
    });
  }

  buscarId(id:number) {
    this.pedidosServ.getSinglePedido(id)
      .subscribe( (pedidoBusqueda: any) => this.pedidos = pedidoBusqueda );
  }

}





    // this.pedidosServ.getSinglePedido( this.idBusq )
    //   .subscribe( ( pedido:any ) =>  {
    //     this.pedidoBusq = pedido;
    //     this.idBusqueda.emit( this.pedidoBusq );
    //     console.log('BUSCADOR', this.pedidoBusq);
    //   } );

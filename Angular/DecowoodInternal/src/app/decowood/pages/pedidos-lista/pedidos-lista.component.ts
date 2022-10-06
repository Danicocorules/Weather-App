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
    console.log('pedidos', id);
  }

}
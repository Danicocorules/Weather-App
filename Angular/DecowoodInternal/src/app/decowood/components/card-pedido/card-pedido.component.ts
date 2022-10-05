import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from '../../interfaces/pedidos.interface';

@Component({
  selector: 'app-card-pedido',
  templateUrl: './card-pedido.component.html',
  styleUrls: ['./card-pedido.component.scss']
})
export class CardPedidoComponent implements OnInit {

  @Input() pedidosAct!: Pedido;

  constructor() { }

  ngOnInit(): void {

  }

}

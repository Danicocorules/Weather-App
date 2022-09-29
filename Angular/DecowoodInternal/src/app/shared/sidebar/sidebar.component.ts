import { Component, OnInit } from '@angular/core';
import { menuSidebar} from '../../decowood/interfaces/menu.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {

  menuSidebar: menuSidebar[] = [
    {
      name: 'Pedidos',
      url: 'pedidos',
      icon: 'home'
    },
    {
      name: 'Pedido',
      url: 'pedido/:id',
      icon: 'shopping_cart_checkout'
    },
    {
      name: 'Argegar Pedido',
      url: 'agregar-pedido',
      icon: 'shopping_cart_checkout'
    },
    {
      name: 'Proveedores',
      url: 'proveedores',
      icon: 'move_down'
    },
    {
      name: 'Comandas',
      url: 'comandas',
      icon: 'move_down'
    }
  ]

  constructor() { }

}

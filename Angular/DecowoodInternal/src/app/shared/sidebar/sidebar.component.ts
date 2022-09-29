import { Component, OnInit } from '@angular/core';


interface menuSidebar {
  name: string,
  url: string,
  icon: string
}

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
      name: 'Añadir Pedido',
      url: 'add-pedido',
      icon: 'shopping_cart_checkout'
    },
    {
      name: 'Proveedores',
      url: 'proveedores',
      icon: 'move_down'
    },
    {
      name: 'Comandas',
      url: 'proveedores/:comanda',
      icon: 'move_down'
    }
  ]

  constructor() { }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarPedidoComponent } from './pages/agregar-pedido/agregar-pedido.component';
import { ComandasComponent } from './pages/comandas/comandas.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { PedidosListaComponent } from './pages/pedidos-lista/pedidos-lista.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'pedidos', component: PedidosListaComponent},
      { path: 'pedido/:id', component: PedidoComponent},
      { path: 'agregar-pedido', component: AgregarPedidoComponent},
      { path: 'proveedores', component: ProveedoresComponent},
      { path: 'comandas', component: ComandasComponent},
      { path: '**', redirectTo: 'pedidos'},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DecowoodRoutingModule { }

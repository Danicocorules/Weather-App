import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecowoodRoutingModule } from './decowood-routing.module';

import { AgregarPedidoComponent } from './pages/agregar-pedido/agregar-pedido.component';
import { ComandasComponent } from './pages/comandas/comandas.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { PedidosListaComponent } from './pages/pedidos-lista/pedidos-lista.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';



@NgModule({
  declarations: [
    PedidoComponent,
    PedidosListaComponent,
    AgregarPedidoComponent,
    ProveedoresComponent,
    ComandasComponent
  ],
  imports: [
    CommonModule,
    DecowoodRoutingModule
  ]
})
export class DecowoodModule { }

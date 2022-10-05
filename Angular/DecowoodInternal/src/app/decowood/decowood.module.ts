import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/materials.module';
import { DecowoodRoutingModule } from './decowood-routing.module';

import { AgregarPedidoComponent } from './pages/agregar-pedido/agregar-pedido.component';
import { CardPedidoComponent } from './components/card-pedido/card-pedido.component';
import { ComandasComponent } from './pages/comandas/comandas.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { PedidosListaComponent } from './pages/pedidos-lista/pedidos-lista.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';


@NgModule({
  declarations: [
    AgregarPedidoComponent,
    CardPedidoComponent,
    ComandasComponent,
    PedidoComponent,
    PedidosListaComponent,
    ProveedoresComponent,
  ],
  imports: [
    CommonModule,
    DecowoodRoutingModule,
    MaterialModule
  ]
})
export class DecowoodModule { }

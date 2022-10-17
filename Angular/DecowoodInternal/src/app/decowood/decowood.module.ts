import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/materials.module';
import { DecowoodRoutingModule } from './decowood-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AgregarPedidoComponent } from './pages/agregar-pedido/agregar-pedido.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CardPedidoComponent } from './components/card-pedido/card-pedido.component';
import { ComandasComponent } from './pages/comandas/comandas.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { PedidosListaComponent } from './pages/pedidos-lista/pedidos-lista.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { ProveedorUnicoComponent } from './pages/proveedor-unico/proveedor-unico.component';
import { BuscadorProveedoresComponent } from './components/buscador-proveedores/buscador-proveedores.component';


@NgModule({
  declarations: [
    AgregarPedidoComponent,
    BuscadorComponent,
    CardPedidoComponent,
    ComandasComponent,
    PedidoComponent,
    PedidosListaComponent,
    ProveedoresComponent,
    ProveedorUnicoComponent,
    BuscadorProveedoresComponent,
  ],
  imports: [
    CommonModule,
    DecowoodRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DecowoodModule { }

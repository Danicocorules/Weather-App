import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/materials.module';
import { DecowoodRoutingModule } from './decowood-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AgregarPedidoComponent } from './pages/agregar-pedido/agregar-pedido.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { BuscadorProveedoresComponent } from './components/buscador-proveedores/buscador-proveedores.component';
import { CardPedidoComponent } from './components/card-pedido/card-pedido.component';
import { CardPedProductoComponent } from './components/card-ped-producto/card-ped-producto.component';
import { ComandasComponent } from './pages/comandas/comandas.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { PedidosListaComponent } from './pages/pedidos-lista/pedidos-lista.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { ProveedorUnicoComponent } from './pages/proveedor-unico/proveedor-unico.component';


@NgModule({
  declarations: [
    AgregarPedidoComponent,
    BuscadorComponent,
    CardPedidoComponent,
    CardPedProductoComponent,
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
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DecowoodModule { }

import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pedido } from '../../interfaces/pedidos.interface'
import { PedidosListaComponent } from '../../pages/pedidos-lista/pedidos-lista.component'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent {

  idBusq!: number;
  pedidoBusq: Pedido[] = [];
  busqueda: boolean = false;

  @Output() idBusqueda: EventEmitter<number> = new EventEmitter;

  constructor( private fb: FormBuilder,
               private pedidosComp: PedidosListaComponent ) { }

  formBusqueda: FormGroup = this.fb.group({
    busqueda: [, { validators: [Validators.minLength(6),
                                Validators.pattern("^[0-9]*$")],
                                updateOn: 'blur'}]
  })

  buscarPedido() {
    if ( !this.validate()) {
      this.busqueda = true;
      this.idBusq = ( Number( this.formBusqueda.controls['busqueda'].value ) );
      this.idBusqueda.emit( this.idBusq );
      this.formBusqueda.reset();
    }
  }

  volverPedidos() {
    this.busqueda = false;
    this.pedidosComp.initPedidos();
    this.formBusqueda.reset();
  }

  validate() {
    return this.formBusqueda.invalid &&
           this.formBusqueda.touched;
  }

}

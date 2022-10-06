import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido } from '../../interfaces/pedidos.interface'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent {

  idBusq!: number;
  pedidoBusq: Pedido[] = [];

  @Output() idBusqueda: EventEmitter<number> = new EventEmitter;

  constructor( private fb: FormBuilder,
               private pedidosServ: PedidosService ) { }

  formBusqueda: FormGroup = this.fb.group({
    busqueda: [, { validators: [Validators.minLength(6),
                                Validators.pattern("^[0-9]*$")],
                                updateOn: 'blur'}]
  })

  buscarPedido() {

    this.idBusq = ( Number( this.formBusqueda.controls['busqueda'].value ) );
    this.idBusqueda.emit( this.idBusq );
    this.formBusqueda.reset();

  }

  validate() {
    return this.formBusqueda.invalid &&
           this.formBusqueda.touched;
  }

}

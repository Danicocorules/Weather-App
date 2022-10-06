import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido } from '../../interfaces/pedidos.interface'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  idBusq!: number;
  pedidoBusq: Pedido[] = [];

  @Output() idBusqueda: EventEmitter<number> = new EventEmitter;

  constructor( private fb: FormBuilder,
               private pedidosServ: PedidosService ) { }

  formBusqueda: FormGroup = this.fb.group({
    busqueda: [, [Validators.required,
                  Validators.minLength(6),
                  Validators.pattern("^[0-9]*$"),]]
  })

  ngOnInit(): void {
  }

  buscarPedido() {
    this.idBusq = ( Number( this.formBusqueda.controls['busqueda'].value ) );
    this.idBusqueda.emit( this.idBusq );
    console.log(this.idBusq);




    // this.pedidosServ.getSinglePedido( this.idBusq )
    //   .subscribe( ( pedido:any ) =>  {
    //     this.pedidoBusq = pedido;
    //     this.idBusqueda.emit( this.pedidoBusq );
    //     console.log('BUSCADOR', this.pedidoBusq);
    //   } );
  }

}

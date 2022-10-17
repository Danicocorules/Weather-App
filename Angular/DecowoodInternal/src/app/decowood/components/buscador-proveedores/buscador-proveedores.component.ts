import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscador-proveedores',
  templateUrl: './buscador-proveedores.component.html',
  styleUrls: ['./buscador-proveedores.component.scss']
})
export class BuscadorProveedoresComponent implements OnInit {

  nombreBusqueda!:string;

  @Output() nombreBusq: EventEmitter<string> = new EventEmitter;

  constructor( private fb: FormBuilder ) { }

  formBusqProv: FormGroup = this.fb.group({
    busqProv: [ , [Validators.required] ]
  })

  ngOnInit(): void {
  }

  buscarProv() {

    const busqueda = this.formBusqProv.controls['busqProv'].value.toLowerCase();
    const initial = busqueda.charAt(0).toUpperCase();
    const rest = busqueda.slice(1);

    this.nombreBusqueda = initial + rest;

    this.nombreBusq.emit(this.nombreBusqueda);
  }

}

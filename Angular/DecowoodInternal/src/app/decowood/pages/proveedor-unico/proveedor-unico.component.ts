import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Proveedores } from '../../interfaces/proveedores.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proveedor-unico',
  templateUrl: './proveedor-unico.component.html',
  styleUrls: ['./proveedor-unico.component.scss']
})
export class ProveedorUnicoComponent implements OnInit {

  provRequerido!: Proveedores;
  edit: boolean = false;

  provEdit: Proveedores = {
    nombre : '',
    pedidos_asignados: 0,
    localizacion: '',
    contacto: '',
    id: 0,
  }

  editForm: FormGroup = this.fb.group({
     nombre: [ this.provEdit.nombre , Validators.required] ,
     pedidos: [ 'f', Validators.required] ,
     localizacion: [ 'f', Validators.required] ,
  })

  constructor( private proveedorServ: ProveedoresService,
               private activetedRoute: ActivatedRoute,
               private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.activetedRoute.params
      .pipe(
        switchMap( ({nombre}) => this.proveedorServ.getProvBusq( nombre ) )
      )
      .subscribe( (resp: any) => {

        const id = resp[0].id;

        this.proveedorServ.getProvById(id)
          .subscribe( (proveedor: Proveedores) => this.provRequerido = proveedor  )
      } );
    }

  editProv() {
    this.edit = true;
    this.editForm.setValue({
      nombre: this.provRequerido.nombre,
      pedidos: this.provRequerido.pedidos_asignados,
      localizacion: this.provRequerido.localizacion,
    });
  }

  guardarCambios() {

    this.provRequerido.nombre = this.editForm.controls['nombre'].value;
    this.provRequerido.pedidos_asignados = this.editForm.controls['pedidos'].value;
    this.provRequerido.localizacion = this.editForm.controls['localizacion'].value;

    this.proveedorServ.editProv( this.provRequerido )
      .subscribe( (prov:Proveedores) => this.provRequerido = prov );
  }

  cancelarCambios() {
    console.log('los cambios se cancelan');
  }



}

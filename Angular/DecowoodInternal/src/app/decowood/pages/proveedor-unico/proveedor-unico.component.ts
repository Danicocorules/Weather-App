import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Proveedores } from '../../interfaces/proveedores.interface';

@Component({
  selector: 'app-proveedor-unico',
  templateUrl: './proveedor-unico.component.html',
  styleUrls: ['./proveedor-unico.component.scss']
})
export class ProveedorUnicoComponent implements OnInit {

  provRequerido: Proveedores[] = [];

  constructor( private proveedorServ: ProveedoresService,
               private activetedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.activetedRoute.params
      .pipe(
        switchMap( ({nombre}) => this.proveedorServ.getProvBusq( nombre ) )
      )
     .subscribe( (resp: any) => this.provRequerido = resp );
  };
}

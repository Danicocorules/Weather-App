import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Proveedores } from '../../interfaces/proveedores.interface';
import { MatPaginator } from '@angular/material/paginator';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})

export class ProveedoresComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'pedidos', 'localizacion', 'contacto'];
  proveedores: Proveedores[] = [];

  dataSource!: any;

  constructor( private proveedoresServ: ProveedoresService ) {}

  @ViewChild(MatPaginator, { static: true } ) paginator!: MatPaginator;

  ngOnInit(): void {

    this.proveedoresServ.getProveedores()
      .subscribe( (proveedores: any) => {
        this.proveedores = proveedores;
      });

      this.dataSource = new MatTableDataSource<Proveedores>(this.proveedores);
      this.dataSource.paginator = this.paginator;

  }

}

const ELEMENT_DATA: Proveedores[] = [
  {nombre: 'proveedor 1', pedidos_asignados: 2, localizacion: 'Barcelona', contacto: 'contacto@gmail.com'},
  {nombre: 'proveedor 1', pedidos_asignados: 2, localizacion: 'Barcelona', contacto: 'contacto@gmail.com'},
  {nombre: 'proveedor 1', pedidos_asignados: 2, localizacion: 'Barcelona', contacto: 'contacto@gmail.com'},
  {nombre: 'proveedor 1', pedidos_asignados: 2, localizacion: 'Barcelona', contacto: 'contacto@gmail.com'},
  {nombre: 'proveedor 1', pedidos_asignados: 2, localizacion: 'Barcelona', contacto: 'contacto@gmail.com'},
  {nombre: 'proveedor 1', pedidos_asignados: 2, localizacion: 'Barcelona', contacto: 'contacto@gmail.com'},
  {nombre: 'proveedor 1', pedidos_asignados: 2, localizacion: 'Barcelona', contacto: 'contacto@gmail.com'},
  {nombre: 'proveedor 1', pedidos_asignados: 2, localizacion: 'Barcelona', contacto: 'contacto@gmail.com'},
  {nombre: 'proveedor 1', pedidos_asignados: 2, localizacion: 'Barcelona', contacto: 'contacto@gmail.com'},
  {nombre: 'proveedor 1', pedidos_asignados: 2, localizacion: 'Barcelona', contacto: 'contacto@gmail.com'},
  {nombre: 'proveedor 1', pedidos_asignados: 2, localizacion: 'Barcelona', contacto: 'contacto@gmail.com'},
  {nombre: 'proveedor 1', pedidos_asignados: 2, localizacion: 'Barcelona', contacto: 'contacto@gmail.com'},
  {nombre: 'proveedor 1', pedidos_asignados: 2, localizacion: 'Barcelona', contacto: 'contacto@gmail.com'},
  {nombre: 'proveedor 1', pedidos_asignados: 2, localizacion: 'Barcelona', contacto: 'contacto@gmail.com'},
  {nombre: 'proveedor 1', pedidos_asignados: 2, localizacion: 'Barcelona', contacto: 'contacto@gmail.com'},
  {nombre: 'proveedor 1', pedidos_asignados: 2, localizacion: 'Barcelona', contacto: 'contacto@gmail.com'}
];

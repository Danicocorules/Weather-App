import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
// import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Proveedores } from '../../interfaces/proveedores.interface';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})

export class ProveedoresComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre', 'pedidos', 'localizacion', 'contacto'];
  dataSource: MatTableDataSource<any[]> = new MatTableDataSource<any>(ELEMENT_DATA);

  constructor() { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
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

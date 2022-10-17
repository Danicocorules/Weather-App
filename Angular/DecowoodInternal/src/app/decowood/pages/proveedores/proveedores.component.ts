import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Proveedores } from '../../interfaces/proveedores.interface';
import { MatPaginator } from '@angular/material/paginator';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { ActivatedRoute } from '@angular/router';
// import { switchMap } from 'rxjs/dist/types/operators';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})

export class ProveedoresComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'pedidos', 'localizacion', 'contacto', 'enlace'];
  proveedores: Proveedores[] = [];
  provBusqueda!: any;

  dataSource!: any;

  constructor( private proveedoresServ: ProveedoresService,
               private activatedRoute: ActivatedRoute ) {}

  @ViewChild(MatPaginator, { static: true } ) paginator!: MatPaginator;

  ngOnInit(): void {

    this.proveedoresServ.getProveedores()
      .subscribe( (proveedores: any) => {
        this.proveedores = proveedores;
      });

    this.dataSource = new MatTableDataSource<Proveedores>(this.proveedores);

  }

  buscarNombre( nombre: string ) {

    this.proveedoresServ.getProvBusq(nombre)
      .subscribe( (provBusq: any) => this.proveedores = provBusq );
  }

}

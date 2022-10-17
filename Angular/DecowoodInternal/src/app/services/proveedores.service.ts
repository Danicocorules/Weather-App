import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Proveedores } from '../decowood/interfaces/proveedores.interface'

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor( private http: HttpClient ) { }

  private proveedoresUrl:string = 'http://localhost:3000/proveedores';

  getProveedores(): Observable<Proveedores[]> {
    return this.http.get<Proveedores[]>(this.proveedoresUrl);
  }

  getProvBusq( nombre: string ): Observable<Proveedores> {
    return this.http.get<Proveedores>( `http://localhost:3000/proveedores?nombre=${nombre}` );
  }
}

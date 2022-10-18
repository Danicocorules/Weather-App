import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Proveedores } from '../decowood/interfaces/proveedores.interface'
import { Observable } from 'rxjs';

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
    return this.http.get<Proveedores>( `${this.proveedoresUrl}?nombre=${nombre}` );
  }

  getProvById( id: number ): Observable<Proveedores> {
    return this.http.get<Proveedores>(`${this.proveedoresUrl}/${id}`);
  }
  // Create Read Update Delete
  editProv( proveedor: any ): Observable<Proveedores> {
    const id = proveedor.id;
    return this.http.put<Proveedores>( `${this.proveedoresUrl}/${id}`, proveedor)
  }

}

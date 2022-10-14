import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Proveedores } from '../decowood/interfaces/proveedores.interface'

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor( private http: HttpClient ) { }

  proveedoresUrl:string = 'http://localhost:3000/proveedores';

  getProveedores(): Observable<Proveedores[]> {
    return this.http.get<Proveedores[]>(this.proveedoresUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pedido } from '../decowood/interfaces/pedidos.interface';

@Injectable({
  providedIn: 'root'
})

export class PedidosService {

  private pedidosUrl: string = 'http://localhost:3000/pedidos';

  constructor( private http: HttpClient ) { }

  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>( this.pedidosUrl);
  }

  getSinglePedido( id: any ): Observable<Pedido> {
    return this.http.get<Pedido>( `http://localhost:3000/pedidos/${id}` )
  }

  putPedido( pedidoModif: Pedido ): Observable<Pedido> {
    const id = pedidoModif.id;
    return this.http.put<Pedido>( `http://localhost:3000/pedidos/${id}` , pedidoModif);
  }

}

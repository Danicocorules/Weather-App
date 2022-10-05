import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pedido } from '../decowood/interfaces/pedidos.interface';

@Injectable({
  providedIn: 'root'
})

export class PedidosService {

  private pedidosUrl: string = 'http://localhost:3000/pedidos';
  private pedidoSingleUrl: string = 'http://localhost:3000/pedidos?pedido_id=485754';

  constructor( private http: HttpClient ) { }

  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>( this.pedidosUrl);
  }

  getSinglePedido( id: any ): Observable<Pedido> {
    console.log('serv', id);
    return this.http.get<Pedido>( `http://localhost:3000/pedidos?pedido_id=${id}` )
  }

}

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ProveedoresService } from 'src/app/services/proveedores.service';

import { ProductoDetalle } from '../../interfaces/pedidos.interface';
import { Proveedores } from '../../interfaces/proveedores.interface';

@Component({
  selector: 'app-card-ped-producto',
  templateUrl: './card-ped-producto.component.html',
  styleUrls: ['./card-ped-producto.component.scss']
})
export class CardPedProductoComponent implements OnInit, OnChanges {


  @Input() productosRecibidos!: ProductoDetalle[];
  proveedores!: Proveedores[];

  selectedValue!: string;
  assign: boolean = false;

  prodModif!: ProductoDetalle | any;
  prodFinales!: ProductoDetalle[];

  constructor( private proveedorServ: ProveedoresService ) { }

  ngOnInit(): void {

  }

  ngOnChanges( changes: SimpleChanges ): void {
    console.log('entra', changes);
  }

  asignProv() {
    this.assign = true;
    if( this.proveedores === undefined ) {
      this.proveedorServ.getProveedores()
          .subscribe( (proveedores: Proveedores[]) => this.proveedores = proveedores );
    }
  }

  selectProv( sku: string, nuevoProv: string ){
      // this.prodModif = { ...this.productosRecibidos.find( producto => producto.sku === sku )};
      // this.prodModif.proveedor = nuevoProv;

      // const pos = this.productosRecibidos.findIndex( prod => prod.sku === sku );
      // this.prodFinales = [ ...this.productosRecibidos.filter( producto => producto.sku !== sku ) ];
      // this.prodFinales.splice( pos, 0, this.prodModif );

      this.prodModif = this.productosRecibidos.find( prod => prod.sku === sku );
      this.prodModif.proveedor = nuevoProv;
      console.log(this.productosRecibidos);

  }

}

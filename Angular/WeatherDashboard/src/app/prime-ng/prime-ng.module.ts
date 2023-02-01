import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    ImageModule
  ]
})
export class PrimeNgModule { }

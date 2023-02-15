import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    ImageModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }

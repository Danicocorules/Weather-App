import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { KnobModule } from 'primeng/knob';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    CheckboxModule,
    ImageModule,
    InputTextModule,
    KnobModule
  ]
})
export class PrimeNgModule { }

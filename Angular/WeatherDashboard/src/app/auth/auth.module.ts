import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { PreSetComponent } from './pre-set/pre-set.component';
import { ModalCityComponent } from './modal-city/modal-city.component';
import { PrimeNgModule } from './../prime-ng/prime-ng.module'

@NgModule({
  declarations: [
    PreSetComponent,
    ModalCityComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNgModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

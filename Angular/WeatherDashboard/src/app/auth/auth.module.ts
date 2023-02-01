import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { PreSetComponent } from './pre-set/pre-set.component';
import { PrimeNgModule } from './../prime-ng/prime-ng.module'

@NgModule({
  declarations: [
    PreSetComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

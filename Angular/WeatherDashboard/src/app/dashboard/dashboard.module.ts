import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from './../prime-ng/prime-ng.module'
import { DashboardRoutingModule } from './dashboard-routing.module';

import { ActualWeatherService } from './services/actual-weather.service'

import { InitialComponent } from './pages/initial/initial.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { TodayCardComponent } from './components/today-card/today-card.component'

@NgModule({
  declarations: [
    InitialComponent,
    LeftNavComponent,
    TodayCardComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    DashboardRoutingModule
  ],
  providers: [
    ActualWeatherService
  ],
})
export class DashboardModule { }

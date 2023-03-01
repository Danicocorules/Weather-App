import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from './../prime-ng/prime-ng.module'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { EmptyWeatherService } from './services/empty-weather.service'

import { InitialComponent } from './pages/initial/initial.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { TodayCardComponent } from './components/today-card/today-card.component';
import { InfoHeaderComponent } from './components/info-header/info-header.component';
import { FavCitiesComponent } from './components/fav-cities/fav-cities.component';
import { NewLocationCardComponent } from './components/new-location-card/new-location-card.component';
import { WeekPredictionComponent } from './components/week-prediction/week-prediction.component';

@NgModule({
  declarations: [
    InitialComponent,
    LeftNavComponent,
    TodayCardComponent,
    InfoHeaderComponent,
    FavCitiesComponent,
    NewLocationCardComponent,
    WeekPredictionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule
  ],
  providers: [
    EmptyWeatherService
  ],
})
export class DashboardModule { }

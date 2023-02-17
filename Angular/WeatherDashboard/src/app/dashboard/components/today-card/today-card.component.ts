import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ActualWeatherService } from 'src/app/dashboard/services/actual-weather.service';
import { firstCityParams } from 'src/app/interfaces/first-city-params.interface';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-today-card',
  templateUrl: './today-card.component.html',
  styleUrls: ['./today-card.component.scss'],
})
export class TodayCardComponent implements OnInit, OnDestroy{

  currentDateTime: Date = new Date();
  currentTemp!: number;

  startCity: firstCityParams = {
    temp : 0,
    city : '',
    country : ''
  };

  private countrySubs!: Subscription;

  constructor( private dataActual: ActualWeatherService,
               private shareDataSev: ShareDataService ){ }

  ngOnInit(): void {
    this.escuchaPrimerPais();
  }

  private escuchaPrimerPais() {
    this.countrySubs = this.shareDataSev.setCity()
                          .subscribe( resp => this.setPpalCity( resp ) );
  }

  setPpalCity( city: firstCityParams ) {

    this.startCity = city;
    this.startCity.temp = Number((this.startCity.temp - 273.15).toFixed(1));

  }

  ngOnDestroy(): void {
    this.countrySubs.unsubscribe();

  }

}

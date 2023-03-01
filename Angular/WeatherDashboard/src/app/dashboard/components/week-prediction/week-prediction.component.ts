import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

import { ShareDataService } from '../../../services/share-data.service';
import { ForecastPpalCityService } from '../../services/forecast-ppal-city.service'

@Component({
  selector: 'app-week-prediction',
  templateUrl: './week-prediction.component.html',
  styleUrls: ['./week-prediction.component.scss']
})

export class WeekPredictionComponent implements OnInit{

  constructor( private shareDataServ: ShareDataService,
               private forecastServ: ForecastPpalCityService ) {}

  lat: string = '';
  lon: string = '';

  ppalForecast: any[] = [];

  ngOnInit(): void {
    this.getWeekPred();
  }

  getWeekPred() {
    this.shareDataServ.setCity()
      .subscribe( resp => {
        this.lat = String(resp.coordLat);
        this.lon = String(resp.coordLon);
        this.getForecast( this.lat, this.lon );
      });
  }

  getForecast( lat: string, lon:string ) {
    this.forecastServ.getCityForecast( lat, lon )
      .subscribe( resp => {
        this.ppalForecast = [resp.list[0], resp.list[8], resp.list[16], resp.list[24], resp.list[32]];
        console.log(this.ppalForecast);

        this.ppalForecast.forEach( element => {

          delete element.clouds;
          delete element.dt;
          delete element.sys;
          delete element.visibility;
          delete element.wind;
          element.temp = element.main.temp;
          element.weather = element.weather[0].main;
          delete element.main;
        });

        this.forecastDays( );

      });
  }

  forecastDays( ) {
    //console.log( this.citierArr );
  }




}





















// private getWeekPred() {
  //   this.countrySubs = this.shareDataServ.setCity()
  //                         .subscribe( resp => console.log(resp) );
  // }

import { Component } from '@angular/core';

import { ActualWeatherService } from 'src/app/dashboard/services/actual-weather.service';

@Component({
  selector: 'app-today-card',
  templateUrl: './today-card.component.html',
  styleUrls: ['./today-card.component.scss'],
})
export class TodayCardComponent {

  currentDateTime: Date = new Date();
  currentTemp!: number;


  constructor( private dataActual: ActualWeatherService ){

    this.dataActual.getActualData()
      .subscribe( (resp: any) => {

        let temp = resp.main.temp;
        this.currentTemp = Number((temp - 273.15).toFixed(2));

        console.log(resp);

      } );

  }

}

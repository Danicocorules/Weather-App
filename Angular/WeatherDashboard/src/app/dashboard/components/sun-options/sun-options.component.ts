import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sun-options',
  templateUrl: './sun-options.component.html',
  styleUrls: ['./sun-options.component.scss']
})
export class SunOptionsComponent implements OnInit, OnDestroy{

  sunset!: string;
  sunrise!: string;
  humidity!: number;
  windSpeed!: number;

  private countrySubs!: Subscription;

  constructor( private shareDataSev: ShareDataService ) {}

  ngOnInit(): void {
    this.firstCountry();
  }

  private firstCountry() {
    this.countrySubs = this.shareDataSev.setCity()
                          .subscribe( (resp:any) => {
                            console.log(resp);
                            //this.sunrise = resp.sunrise;
                            //this.sunset = resp.sunset;

                            this.dayFormat( resp.sunrise, 'sunrise' );
                            this.dayFormat( resp.sunset, 'sunset' );

                            this.humidity = resp.humidity;
                            this.windSpeed = resp.windSpeed;
                          } );
  }

  dayFormat( day: number, camp: string ) {

    let  dayUnix = day;

    let date = new Date(dayUnix * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    if ( camp === 'sunrise' ) {
      this.sunrise = formattedTime ;
      return;
    }

    if ( camp === 'sunset' ) {
      this.sunset = formattedTime;
      return;
    }

  }


  ngOnDestroy(): void {
    this.countrySubs.unsubscribe();
  }

}

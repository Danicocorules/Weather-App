import { Component, OnDestroy, OnInit } from '@angular/core';

import { SetNewLocationService } from '../../services/set-new-location.service';
import { EmptyWeatherService } from '../../services/empty-weather.service';

import { newLocationData } from '../../../interfaces/new-location.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-location-card',
  templateUrl: './new-location-card.component.html',
  styleUrls: ['./new-location-card.component.scss']
})

export class NewLocationCardComponent implements OnInit, OnDestroy{

  private enterSubscription!: Subscription;

  newLocation!: newLocationData;

  savedLocations: newLocationData[] = [];

  constructor(  private setNewLocationServ: SetNewLocationService,
                private emptyWeatherServ: EmptyWeatherService  ) {
                  this.getLsCities()
                }

  ngOnInit(): void {
    this.enterLocation();

  }

  enterLocation(): void {

    this.setNewLocationServ.recibeLocation()
    .subscribe( resp => {
      console.log(resp);
      this.newLocation = resp;

      console.log(this.newLocation);
      // Save the user data in array
      this.savedLocations.push( this.newLocation );

      this.showLocation();

      // Save data in localStorage
      // first we cheked how many elements are saved in LS
      let lsLength = localStorage.length + 1;

      let location = JSON.stringify( this.newLocation );
      localStorage.setItem( `location ${lsLength}` , location );
     });
  }

  getLsCities() {

    for (let i = 1; i <= localStorage.length; i++) {
      this.savedLocations.push( JSON.parse(localStorage.getItem( `location ${i}` )! ) );
    }

    // lamada de los elementos que tengas guardados en el
    this.savedLocations.forEach( elem => {

      this.emptyWeatherServ.getWeatherData( elem.location )
        .subscribe( resp => {

          if ( elem.description !== null ) {
            elem.description = resp.weather[0].description;
          }

          if ( elem.temperature !== null ) {
            elem.temperature = resp.main.temp;
          }

          if ( elem.minMaxTemp !== null ) {
            elem.minMaxTemp = [resp.main.temp_min, resp.main.temp_max];
          }

          if ( elem.visibility !== null ) {
            elem.visibility = resp.visibility;
          }

          if ( elem.wind !== null ) {
            elem.wind = resp.wind.speed;
          }

        })
    })
  }

  deleteLocation(localization: any) {
    // ToDo - Eliminar una ubicacion

    const deletedLoca = localization.getAttribute('data-location');

    this.savedLocations = this.savedLocations.filter( el => el.location !== deletedLoca );

    // console.log( localStorage.length );

    // for (let j = 1; j <= localStorage.length; j++ ) {

    //   localStorage.getItem( )

    // }




  }

  showLocation() {
    //console.log(this.savedLocations);
  }

  ngOnDestroy(): void {
    this.enterSubscription.unsubscribe();
  }
}

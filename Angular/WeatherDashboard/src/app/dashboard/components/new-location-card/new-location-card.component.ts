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
                private emptyWeatherServ: EmptyWeatherService  ) {}

  ngOnInit(): void {
    this.enterLocation();
    this.getLsCities()
  }

  enterLocation(): void {

    this.setNewLocationServ.recibeLocation()
    .subscribe( resp => {
      this.newLocation = resp;

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
  }

  deleteLocation(s: any) {
    // ToDo - Eliminar una ubicacion
  }

  showLocation() {
    //console.log(this.savedLocations);
  }

  ngOnDestroy(): void {
    this.enterSubscription.unsubscribe();
  }
}

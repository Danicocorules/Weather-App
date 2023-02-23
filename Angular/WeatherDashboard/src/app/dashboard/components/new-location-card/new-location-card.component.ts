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
  }

  enterLocation(): void {

    this.setNewLocationServ.recibeLocation()
    .subscribe( resp => {
      this.newLocation = resp;

      //guardamos los datos del usuario en el array
      this.savedLocations.push( this.newLocation );

      this.showLocation();

      // guardar la configuración del usuario
      // let location = JSON.stringify( this.newLocation );
      // localStorage.setItem( this.newLocation.location , location );
     } );
  }

  showLocation() {
    console.log(this.savedLocations);
  }



  ngOnDestroy(): void {
    this.enterSubscription.unsubscribe();
  }
}

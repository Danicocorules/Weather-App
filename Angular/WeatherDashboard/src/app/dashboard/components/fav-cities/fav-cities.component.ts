import { Component, EventEmitter, Output } from '@angular/core';

import { newLocationData } from '../../../interfaces/new-location.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmptyWeatherService } from '../../services/empty-weather.service';
import { SetNewLocationService } from '../../services/set-new-location.service';

@Component({
  selector: 'app-fav-cities',
  templateUrl: './fav-cities.component.html',
  styleUrls: ['./fav-cities.component.scss']
})

export class FavCitiesComponent {

  addCity:boolean = false;

  newLocation: newLocationData = {
    location : '',
    description: false,
    temperature: false,
    minMaxTemp:  [],
    wind: false,
    visibility: false,
  };

  locationForm: FormGroup = this.fb.group({
    location: ['sevilla', Validators.required],
    description: [],
    temperature: [],
    minMaxTemp:  [],
    wind: [],
    visibility: [],
  })

  constructor(  private fb:FormBuilder,
                private emptyWeather: EmptyWeatherService,
                private setNewLocationServ: SetNewLocationService ) {}

  addNewCity() {
    this.addCity = true;

    // ToDo - deshabilitar el boton

  }

  setLocation() {
    this.newLocation = this.locationForm.value;

    //We get the user custom fields
    const newLocationAsArray = Object.entries( this.newLocation );
    const newLocationFiltredData = newLocationAsArray.filter( ([key, value]) => value === true );

    this.emptyWeather.getWeatherData( this.locationForm.value.location )
      .subscribe( resp => {

        newLocationFiltredData.forEach( elem => {

          switch (elem[0]) {
            case 'description':
              this.newLocation.description = resp.weather[0].description;
              break;

            case 'temperature':
              this.newLocation.temperature = resp.main.temp;
              break;

            case 'minMaxTemp':
              this.newLocation.minMaxTemp = [resp.main.temp_min, resp.main.temp_max];
              break;

            case 'visibility':
              this.newLocation.visibility = resp.visibility;
              break;

              case 'wind':
              this.newLocation.wind = resp.wind.speed;
              break;

            default:
              break;
          }

         })
      });
      this.setNewLocationServ.emitLocation( this.newLocation );
  }
}

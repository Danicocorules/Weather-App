import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IntroWeatherService } from '../services/intro-weather.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-modal-city',
  templateUrl: './modal-city.component.html',
  styleUrls: ['./modal-city.component.scss']
})
export class ModalCityComponent {

  firstCityParams = {
    temp : 0,
    city : '',
    country : '',
    coordLon: 0,
    coordLat: 0
  }

  typedCity: string = "";
  userName: string = "";

  constructor( private introWeatherService: IntroWeatherService,
               private shareDataService: ShareDataService,
               private router: Router,
               private fb: FormBuilder
              ) {}

  selectCity: FormGroup = this.fb.group({
    city: ['', Validators.required],
    userName: ['',[ Validators.required, Validators.minLength(3)] ]
  })

  error: boolean = false;
  nameError: boolean = false;

  getCity() {
    if ( this.selectCity.invalid ) {
      this.nameError = true;
      return;
    }

    this.firstCityParams.city = this.selectCity.controls['city'].value;

    this.introWeatherService.getPpalCity(this.firstCityParams.city)
      .subscribe(
        (resp) => {

          // Set Values in ppal City
          this.firstCityParams.temp = resp.main.temp;
          this.firstCityParams.country = resp.sys.country;
          this.firstCityParams.coordLon = resp.coord.lon;
          this.firstCityParams.coordLat = resp.coord.lat;
          this.shareDataService.emitCity( this.firstCityParams );
          this.router.navigateByUrl("/dashboard/initial");

        },
        (err) => {
          this.handleError();
        }
      )
  }

  handleError() {
    this.error = true;
    this.typedCity = this.selectCity.controls['city'].value;
    this.selectCity.reset();
  }
}


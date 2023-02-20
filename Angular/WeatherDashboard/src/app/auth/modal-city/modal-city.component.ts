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
    country : ''
  }

  typedCity: string = "";

  constructor( private introWeatherService: IntroWeatherService,
               private shareDataService: ShareDataService,
               private router: Router,
               private fb: FormBuilder
              ) {}

  selectCity: FormGroup = this.fb.group({
    city: ['', Validators.required]
  })

  error: boolean = false;

  getCity() {

    this.firstCityParams.city = this.selectCity.controls['city'].value;

    this.introWeatherService.getPpalCity(this.firstCityParams.city)
      .subscribe(
        (resp) => {

          // Set Values in ppal City
          this.firstCityParams.temp = resp.main.temp;
          this.firstCityParams.country = resp.sys.country;
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


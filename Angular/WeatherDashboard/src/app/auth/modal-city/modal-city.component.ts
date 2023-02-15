import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IntroWeatherService } from '../services/intro-weather.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import { Router } from '@angular/router';


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

  constructor( private introWeatherService: IntroWeatherService,
               private shareDataService: ShareDataService,
               private router: Router
              ) {}

  selectCity: FormGroup = new FormGroup(
    { 'city': new FormControl('') }
  )

  getCity() {
    this.firstCityParams.city = this.selectCity.controls['city'].value;

    this.introWeatherService.getPpalCity(this.firstCityParams.city)
      .subscribe(
        (resp) => {

          this.firstCityParams.temp = resp.main.temp;
          this.firstCityParams.country = resp.sys.country;

          this.shareDataService.dataRec.emit(this.firstCityParams);

          //To Do --> Pillar el error de Ciudad no existente

        });

        this.router.navigate(["/dashboard/initial"]);
  }

}

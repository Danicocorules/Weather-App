import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { firstCityParams } from './../interfaces/first-city-params.interface';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

    private startData: BehaviorSubject<firstCityParams> = new BehaviorSubject ({
      temp : 0,
      city : '',
      country : '',
      coordLon: 0,
      coordLat: 0
    });

    constructor() {}

    public setCity(): Observable<firstCityParams> {
      return this.startData.asObservable();
    }

    public emitCity( city: firstCityParams ) {
      this.startData.next(city);
    }

}

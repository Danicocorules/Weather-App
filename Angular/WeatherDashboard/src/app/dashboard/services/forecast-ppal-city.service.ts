import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastPpalCityService {

  // https://api.openweathermap.org/data/2.5/forecast?lat=41.3888&lon=2.159&appid=88103c0497e48e49e237356eb3ac2bab&cnt=10&units=metric

  private url: string = 'https://api.openweathermap.org/data/2.5/forecast?lat=';
  private lat!: string;
  private url2: string = '&lon=';
  private lon!: string;
  private url3: string = '&appid=';
  private idApi: string = '88103c0497e48e49e237356eb3ac2bab&cnt=33&units=metric'

  constructor( private http: HttpClient ) { }

  getCityForecast( lat: string, lon: string ): Observable<any> {

    this.lat = lat;
    this.lon = lon;

    return this.http.get<any>( `${this.url}${this.lat}${this.url2}${this.lon}${this.url3}${this.idApi}`);
  }

}

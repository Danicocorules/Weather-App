import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmptyWeatherService {

  // https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=88103c0497e48e49e237356eb3ac2bab

  private url: string = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private city!: string;
  private long: string = '&appid=';
  private id: string = '88103c0497e48e49e237356eb3ac2bab';
  private units: string = '&units=metric'


  constructor( private http: HttpClient ) { }

  getWeatherData( city: string ): Observable<any> {
  this.city = city;
    return this.http.get<any>( `${this.url}${this.city}${this.long}${this.id}${this.units}`);
  }


}

import { Injectable } from '@angular/core';

import { newLocationData } from '../../interfaces/new-location.interface';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetNewLocationService {

  private userLocation: Subject<any> = new Subject();

  constructor() { }

  public recibeLocation(): Observable<newLocationData> {
    return this.userLocation.asObservable();
  }

  public emitLocation( location: newLocationData ) {
    this.userLocation.next(location);
  }
}

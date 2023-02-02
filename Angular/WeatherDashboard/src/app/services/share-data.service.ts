import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

    @Output() dataRec: EventEmitter<any> = new EventEmitter();

    private datainit: Subject<any> = new Subject<any>();

    constructor() { }

    getDdatainit() {
      return this.datainit.asObservable();
    }

}

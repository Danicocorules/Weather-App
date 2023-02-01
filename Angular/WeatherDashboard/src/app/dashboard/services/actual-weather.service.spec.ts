import { TestBed } from '@angular/core/testing';

import { ActualWeatherService } from './actual-weather.service';

describe('ActualWeatherService', () => {
  let service: ActualWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { IntroWeatherService } from './intro-weather.service';

describe('IntroWeatherService', () => {
  let service: IntroWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntroWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

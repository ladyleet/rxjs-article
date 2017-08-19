import { TestBed, inject } from '@angular/core/testing';

import { OuijaService } from './ouija.service';

describe('OuijaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OuijaService]
    });
  });

  it('should be created', inject([OuijaService], (service: OuijaService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { RxAnimationService } from './rx-animation.service';

describe('RxAnimationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RxAnimationService]
    });
  });

  it('should be created', inject([RxAnimationService], (service: RxAnimationService) => {
    expect(service).toBeTruthy();
  }));
});

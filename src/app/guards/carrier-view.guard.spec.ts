import { TestBed, async, inject } from '@angular/core/testing';

import { CarrierViewGuard } from './carrier-view.guard';

describe('CarrierViewGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarrierViewGuard]
    });
  });

  it('should ...', inject([CarrierViewGuard], (guard: CarrierViewGuard) => {
    expect(guard).toBeTruthy();
  }));
});

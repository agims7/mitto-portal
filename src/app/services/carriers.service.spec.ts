import { TestBed, inject } from '@angular/core/testing';

import { CarriersService } from './carriers.service';

describe('CarriersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarriersService]
    });
  });

  it('should be created', inject([CarriersService], (service: CarriersService) => {
    expect(service).toBeTruthy();
  }));
});

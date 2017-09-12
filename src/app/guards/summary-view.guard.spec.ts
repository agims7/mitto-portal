import { TestBed, async, inject } from '@angular/core/testing';

import { SummaryViewGuard } from './summary-view.guard';

describe('SummaryViewGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SummaryViewGuard]
    });
  });

  it('should ...', inject([SummaryViewGuard], (guard: SummaryViewGuard) => {
    expect(guard).toBeTruthy();
  }));
});

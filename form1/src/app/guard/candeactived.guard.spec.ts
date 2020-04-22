import { TestBed } from '@angular/core/testing';

import { CandeactivedGuard } from './candeactived.guard';

describe('CandeactivedGuard', () => {
  let guard: CandeactivedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandeactivedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

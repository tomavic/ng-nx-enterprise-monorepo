import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { HomeGuard } from './home.guard';

describe('HomeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => HomeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { AuthActivatorService } from './auth-activator.service';

describe('AuthActivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthActivatorService]
    });
  });

  it('should be created', inject([AuthActivatorService], (service: AuthActivatorService) => {
    expect(service).toBeTruthy();
  }));
});

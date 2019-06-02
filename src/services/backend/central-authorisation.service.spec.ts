import { TestBed } from '@angular/core/testing';

import { CentralAuthorisationService } from './central-authorisation.service';

describe('CentralAuthorisationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CentralAuthorisationService = TestBed.get(CentralAuthorisationService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { WasherService } from './washer.service';

describe('WasherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WasherService = TestBed.get(WasherService);
    expect(service).toBeTruthy();
  });
});

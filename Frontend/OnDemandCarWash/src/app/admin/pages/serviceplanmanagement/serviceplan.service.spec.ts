import { TestBed } from '@angular/core/testing';

import { ServiceplanService } from './serviceplan.service';

describe('ServiceplanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceplanService = TestBed.get(ServiceplanService);
    expect(service).toBeTruthy();
  });
});

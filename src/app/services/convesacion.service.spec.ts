import { TestBed } from '@angular/core/testing';

import { ConvesacionService } from './convesacion.service';

describe('ConvesacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConvesacionService = TestBed.get(ConvesacionService);
    expect(service).toBeTruthy();
  });
});

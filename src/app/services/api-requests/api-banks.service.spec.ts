import { TestBed } from '@angular/core/testing';

import { ApiBanksService } from './api-banks.service';

describe('ApiBanksService', () => {
  let service: ApiBanksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBanksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

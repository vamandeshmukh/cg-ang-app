import { TestBed } from '@angular/core/testing';

import { CgDataService } from './cg-data.service';

describe('CgDataService', () => {
  let service: CgDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CgDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

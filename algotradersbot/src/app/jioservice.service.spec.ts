import { TestBed } from '@angular/core/testing';

import { JioserviceService } from './jioservice.service';

describe('JioserviceService', () => {
  let service: JioserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JioserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

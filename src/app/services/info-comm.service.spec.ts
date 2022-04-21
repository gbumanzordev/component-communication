import { TestBed } from '@angular/core/testing';

import { InfoCommService } from './info-comm.service';

describe('InfoCommService', () => {
  let service: InfoCommService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoCommService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AntreanService } from './antrean.service';

describe('AntreanService', () => {
  let service: AntreanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntreanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

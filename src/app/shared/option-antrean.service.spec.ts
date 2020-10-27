import { TestBed } from '@angular/core/testing';

import { OptionAntreanService } from './option-antrean.service';

describe('OptionAntreanService', () => {
  let service: OptionAntreanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionAntreanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SmartTblService } from './smart-tbl.service';

describe('SmartTblService', () => {
  let service: SmartTblService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartTblService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

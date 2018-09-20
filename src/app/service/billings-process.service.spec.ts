import { TestBed } from '@angular/core/testing';

import { BillingsProcessService } from './billings-process.service';

describe('BillingsProcessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillingsProcessService = TestBed.get(BillingsProcessService);
    expect(service).toBeTruthy();
  });
});

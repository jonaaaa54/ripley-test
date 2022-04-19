import { TestBed } from '@angular/core/testing';

import { TransferHistoryContentResolver } from './transfer-history-content.resolver';

describe('TransferHistoryContentResolver', () => {
  let resolver: TransferHistoryContentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TransferHistoryContentResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

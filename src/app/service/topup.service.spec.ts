import { TestBed } from '@angular/core/testing';

import { TopupService } from './topup.service';

describe('TopupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopupService = TestBed.get(TopupService);
    expect(service).toBeTruthy();
  });
});

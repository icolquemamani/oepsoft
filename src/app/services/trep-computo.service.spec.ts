import { TestBed } from '@angular/core/testing';

import { TrepComputoService } from './trep-computo.service';

describe('TrepComputoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrepComputoService = TestBed.get(TrepComputoService);
    expect(service).toBeTruthy();
  });
});

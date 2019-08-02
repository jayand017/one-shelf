import { TestBed } from '@angular/core/testing';

import { EmployeeSearchService } from './employee-search.service';

describe('EmployeeSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeSearchService = TestBed.get(EmployeeSearchService);
    expect(service).toBeTruthy();
  });
});

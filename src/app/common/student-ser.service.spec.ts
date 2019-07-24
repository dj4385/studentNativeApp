import { TestBed } from '@angular/core/testing';

import { StudentSerService } from './student-ser.service';

describe('StudentSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentSerService = TestBed.get(StudentSerService);
    expect(service).toBeTruthy();
  });
});

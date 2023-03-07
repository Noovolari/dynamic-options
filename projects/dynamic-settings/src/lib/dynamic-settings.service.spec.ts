import { TestBed } from '@angular/core/testing';

import { DynamicSettingsService } from './dynamic-settings.service';

describe('DynamicSettingsService', () => {
  let service: DynamicSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

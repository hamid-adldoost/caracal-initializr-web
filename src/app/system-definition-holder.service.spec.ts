import { TestBed } from '@angular/core/testing';

import { SystemDefinitionHolderService } from './system-definition-holder.service';

describe('SystemDefinitionHolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemDefinitionHolderService = TestBed.get(SystemDefinitionHolderService);
    expect(service).toBeTruthy();
  });
});

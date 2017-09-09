import { TestBed, inject } from '@angular/core/testing';

import { ThreadsEffectService } from './threads-effect.service';

describe('ThreadsEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreadsEffectService]
    });
  });

  it('should be created', inject([ThreadsEffectService], (service: ThreadsEffectService) => {
    expect(service).toBeTruthy();
  }));
});

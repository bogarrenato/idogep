/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WhosInService } from './WhosIn.service';

describe('Service: WhosIn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhosInService]
    });
  });

  it('should ...', inject([WhosInService], (service: WhosInService) => {
    expect(service).toBeTruthy();
  }));
});

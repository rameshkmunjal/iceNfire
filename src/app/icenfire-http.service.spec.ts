import { TestBed, inject } from '@angular/core/testing';

import { IcenfireHttpService } from './icenfire-http.service';

describe('IcenfireHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IcenfireHttpService]
    });
  });

  it('should be created', inject([IcenfireHttpService], (service: IcenfireHttpService) => {
    expect(service).toBeTruthy();
  }));
});

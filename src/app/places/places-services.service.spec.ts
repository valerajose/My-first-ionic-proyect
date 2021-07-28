import { TestBed } from '@angular/core/testing';

import { PlacesServicesService } from './places-services.service';

describe('PlacesServicesService', () => {
  let service: PlacesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

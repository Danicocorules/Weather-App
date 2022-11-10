import { TestBed } from '@angular/core/testing';

import { ProveedoresGestionService } from './proveedores-gestion.service';

describe('ProveedoresGestionService', () => {
  let service: ProveedoresGestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedoresGestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

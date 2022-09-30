import { TestBed } from '@angular/core/testing';

import { PedidosService } from './pedidos.service';

describe('PedidosServiceService', () => {
  let service: PedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

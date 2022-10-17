import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorUnicoComponent } from './proveedor-unico.component';

describe('ProveedorUnicoComponent', () => {
  let component: ProveedorUnicoComponent;
  let fixture: ComponentFixture<ProveedorUnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorUnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedorUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

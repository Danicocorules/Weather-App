import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPedProductoComponent } from './card-ped-producto.component';

describe('CardPedProductoComponent', () => {
  let component: CardPedProductoComponent;
  let fixture: ComponentFixture<CardPedProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPedProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPedProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

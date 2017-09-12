import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderToCartComponent } from './order-to-cart.component';

describe('OrderToCartComponent', () => {
  let component: OrderToCartComponent;
  let fixture: ComponentFixture<OrderToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderToCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

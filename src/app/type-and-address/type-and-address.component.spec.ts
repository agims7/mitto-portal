import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAndAddressComponent } from './type-and-address.component';

describe('TypeAndAddressComponent', () => {
  let component: TypeAndAddressComponent;
  let fixture: ComponentFixture<TypeAndAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAndAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAndAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

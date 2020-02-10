import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerForgetpasswordComponent } from './customer-forgetpassword.component';

describe('CustomerForgetpasswordComponent', () => {
  let component: CustomerForgetpasswordComponent;
  let fixture: ComponentFixture<CustomerForgetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerForgetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerForgetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

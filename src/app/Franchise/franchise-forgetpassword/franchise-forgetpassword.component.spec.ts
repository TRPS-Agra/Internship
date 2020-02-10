import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseForgetpasswordComponent } from './franchise-forgetpassword.component';

describe('FranchiseForgetpasswordComponent', () => {
  let component: FranchiseForgetpasswordComponent;
  let fixture: ComponentFixture<FranchiseForgetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiseForgetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseForgetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

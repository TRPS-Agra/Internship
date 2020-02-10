import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseSignupComponent } from './franchise-signup.component';

describe('FranchiseSignupComponent', () => {
  let component: FranchiseSignupComponent;
  let fixture: ComponentFixture<FranchiseSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiseSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

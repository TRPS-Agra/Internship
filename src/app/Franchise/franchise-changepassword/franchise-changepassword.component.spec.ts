import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseChangepasswordComponent } from './franchise-changepassword.component';

describe('FranchiseChangepasswordComponent', () => {
  let component: FranchiseChangepasswordComponent;
  let fixture: ComponentFixture<FranchiseChangepasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiseChangepasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

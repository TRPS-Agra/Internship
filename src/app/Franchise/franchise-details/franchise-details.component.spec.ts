import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseDetailsComponent } from './franchise-details.component';

describe('FranchiseDetailsComponent', () => {
  let component: FranchiseDetailsComponent;
  let fixture: ComponentFixture<FranchiseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

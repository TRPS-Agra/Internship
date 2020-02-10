import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueFectorComponent } from './unique-fector.component';

describe('UniqueFectorComponent', () => {
  let component: UniqueFectorComponent;
  let fixture: ComponentFixture<UniqueFectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueFectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueFectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

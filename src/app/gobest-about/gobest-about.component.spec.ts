import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GobestAboutComponent } from './gobest-about.component';

describe('GobestAboutComponent', () => {
  let component: GobestAboutComponent;
  let fixture: ComponentFixture<GobestAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GobestAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GobestAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

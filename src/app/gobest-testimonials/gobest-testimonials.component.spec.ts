import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GobestTestimonialsComponent } from './gobest-testimonials.component';

describe('GobestTestimonialsComponent', () => {
  let component: GobestTestimonialsComponent;
  let fixture: ComponentFixture<GobestTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GobestTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GobestTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

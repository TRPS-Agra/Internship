import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBestSliderComponent } from './go-best-slider.component';

describe('GoBestSliderComponent', () => {
  let component: GoBestSliderComponent;
  let fixture: ComponentFixture<GoBestSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoBestSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoBestSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

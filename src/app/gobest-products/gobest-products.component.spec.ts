import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GobestProductsComponent } from './gobest-products.component';

describe('GobestProductsComponent', () => {
  let component: GobestProductsComponent;
  let fixture: ComponentFixture<GobestProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GobestProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GobestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

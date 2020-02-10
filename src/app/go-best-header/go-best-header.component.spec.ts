import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBestHeaderComponent } from './go-best-header.component';

describe('GoBestHeaderComponent', () => {
  let component: GoBestHeaderComponent;
  let fixture: ComponentFixture<GoBestHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoBestHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoBestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

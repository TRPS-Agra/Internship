import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBestFooterComponent } from './go-best-footer.component';

describe('GoBestFooterComponent', () => {
  let component: GoBestFooterComponent;
  let fixture: ComponentFixture<GoBestFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoBestFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoBestFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

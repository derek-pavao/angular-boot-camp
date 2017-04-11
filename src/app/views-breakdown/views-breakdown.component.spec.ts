import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsBreakdownComponent } from './views-breakdown.component';

describe('ViewsBreakdownComponent', () => {
  let component: ViewsBreakdownComponent;
  let fixture: ComponentFixture<ViewsBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterViewsComponent } from './filter-views.component';

describe('FilterViewsComponent', () => {
  let component: FilterViewsComponent;
  let fixture: ComponentFixture<FilterViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountSortComponent } from './count-sort.component';

describe('CountSortComponent', () => {
  let component: CountSortComponent;
  let fixture: ComponentFixture<CountSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

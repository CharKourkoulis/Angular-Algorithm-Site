import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryHomeComponent } from './binary-home.component';

describe('BinaryHomeComponent', () => {
  let component: BinaryHomeComponent;
  let fixture: ComponentFixture<BinaryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinaryHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionTwoNumbersComponent } from './addition-two-numbers.component';

describe('AdditionTwoNumbersComponent', () => {
  let component: AdditionTwoNumbersComponent;
  let fixture: ComponentFixture<AdditionTwoNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionTwoNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionTwoNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComparison } from './forms-comparison';

describe('FormsComparison', () => {
  let component: FormsComparison;
  let fixture: ComponentFixture<FormsComparison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsComparison],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsComparison);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

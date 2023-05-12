import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodpagePage } from './foodpage.page';

describe('FoodpagePage', () => {
  let component: FoodpagePage;
  let fixture: ComponentFixture<FoodpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FoodpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

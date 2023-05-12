import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutpagePage } from './workoutpage.page';

describe('WorkoutpagePage', () => {
  let component: WorkoutpagePage;
  let fixture: ComponentFixture<WorkoutpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WorkoutpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

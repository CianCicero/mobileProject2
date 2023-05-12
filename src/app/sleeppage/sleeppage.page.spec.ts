import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SleeppagePage } from './sleeppage.page';

describe('SleeppagePage', () => {
  let component: SleeppagePage;
  let fixture: ComponentFixture<SleeppagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SleeppagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

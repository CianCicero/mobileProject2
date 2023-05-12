import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardiopagePage } from './cardiopage.page';

describe('CardiopagePage', () => {
  let component: CardiopagePage;
  let fixture: ComponentFixture<CardiopagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardiopagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

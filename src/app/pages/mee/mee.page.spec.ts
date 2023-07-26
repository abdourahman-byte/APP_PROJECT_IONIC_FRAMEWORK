import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeePage } from './mee.page';

describe('MeePage', () => {
  let component: MeePage;
  let fixture: ComponentFixture<MeePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

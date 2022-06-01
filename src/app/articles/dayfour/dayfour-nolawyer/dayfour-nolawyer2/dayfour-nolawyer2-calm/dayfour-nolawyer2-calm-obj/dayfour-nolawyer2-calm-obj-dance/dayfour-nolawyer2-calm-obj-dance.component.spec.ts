import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfourNolawyer2CalmObjDanceComponent } from './dayfour-nolawyer2-calm-obj-dance.component';

describe('DayfourNolawyer2CalmObjDanceComponent', () => {
  let component: DayfourNolawyer2CalmObjDanceComponent;
  let fixture: ComponentFixture<DayfourNolawyer2CalmObjDanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayfourNolawyer2CalmObjDanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfourNolawyer2CalmObjDanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

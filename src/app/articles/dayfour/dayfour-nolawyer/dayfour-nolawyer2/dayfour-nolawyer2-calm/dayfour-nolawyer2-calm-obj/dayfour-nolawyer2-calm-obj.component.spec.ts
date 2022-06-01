import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfourNolawyer2CalmObjComponent } from './dayfour-nolawyer2-calm-obj.component';

describe('DayfourNolawyer2CalmObjComponent', () => {
  let component: DayfourNolawyer2CalmObjComponent;
  let fixture: ComponentFixture<DayfourNolawyer2CalmObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayfourNolawyer2CalmObjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfourNolawyer2CalmObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfourNolawyer2ConfessComponent } from './dayfour-nolawyer2-confess.component';

describe('DayfourNolawyer2ConfessComponent', () => {
  let component: DayfourNolawyer2ConfessComponent;
  let fixture: ComponentFixture<DayfourNolawyer2ConfessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayfourNolawyer2ConfessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfourNolawyer2ConfessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

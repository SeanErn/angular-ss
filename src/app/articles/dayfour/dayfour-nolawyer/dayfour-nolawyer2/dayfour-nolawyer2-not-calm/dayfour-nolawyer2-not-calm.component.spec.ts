import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfourNolawyer2NotCalmComponent } from './dayfour-nolawyer2-not-calm.component';

describe('DayfourNolawyer2NotCalmComponent', () => {
  let component: DayfourNolawyer2NotCalmComponent;
  let fixture: ComponentFixture<DayfourNolawyer2NotCalmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayfourNolawyer2NotCalmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfourNolawyer2NotCalmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfourNolawyer2Component } from './dayfour-nolawyer2.component';

describe('DayfourNolawyer2Component', () => {
  let component: DayfourNolawyer2Component;
  let fixture: ComponentFixture<DayfourNolawyer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayfourNolawyer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfourNolawyer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

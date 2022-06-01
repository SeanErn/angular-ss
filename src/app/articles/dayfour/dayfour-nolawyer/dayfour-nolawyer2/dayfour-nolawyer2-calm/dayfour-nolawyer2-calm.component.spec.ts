import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfourNolawyer2CalmComponent } from './dayfour-nolawyer2-calm.component';

describe('DayfourNolawyer2CalmComponent', () => {
  let component: DayfourNolawyer2CalmComponent;
  let fixture: ComponentFixture<DayfourNolawyer2CalmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayfourNolawyer2CalmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfourNolawyer2CalmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

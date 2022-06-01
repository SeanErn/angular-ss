import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfourNolawyerComponent } from './dayfour-nolawyer.component';

describe('DayfourNolawyerComponent', () => {
  let component: DayfourNolawyerComponent;
  let fixture: ComponentFixture<DayfourNolawyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayfourNolawyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfourNolawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

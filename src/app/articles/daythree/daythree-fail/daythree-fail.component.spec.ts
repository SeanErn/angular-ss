import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaythreeFailComponent } from './daythree-fail.component';

describe('DaythreeFailComponent', () => {
  let component: DaythreeFailComponent;
  let fixture: ComponentFixture<DaythreeFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaythreeFailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaythreeFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

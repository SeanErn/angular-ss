import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaythreePassComponent } from './daythree-pass.component';

describe('DaythreePassComponent', () => {
  let component: DaythreePassComponent;
  let fixture: ComponentFixture<DaythreePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaythreePassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaythreePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

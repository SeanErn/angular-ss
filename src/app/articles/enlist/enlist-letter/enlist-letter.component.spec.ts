import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlistLetterComponent } from './enlist-letter.component';

describe('EnlistLetterComponent', () => {
  let component: EnlistLetterComponent;
  let fixture: ComponentFixture<EnlistLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlistLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlistLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

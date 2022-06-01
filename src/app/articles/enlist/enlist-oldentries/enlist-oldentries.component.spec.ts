import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlistOldentriesComponent } from './enlist-oldentries.component';

describe('EnlistOldentriesComponent', () => {
  let component: EnlistOldentriesComponent;
  let fixture: ComponentFixture<EnlistOldentriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlistOldentriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlistOldentriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

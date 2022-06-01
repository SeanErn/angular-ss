import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfourLawyerJamesComponent } from './dayfour-lawyer-james.component';

describe('DayfourLawyerJamesComponent', () => {
  let component: DayfourLawyerJamesComponent;
  let fixture: ComponentFixture<DayfourLawyerJamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayfourLawyerJamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfourLawyerJamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

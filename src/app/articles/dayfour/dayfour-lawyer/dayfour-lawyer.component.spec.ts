import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfourLawyerComponent } from './dayfour-lawyer.component';

describe('DayfourLawyerComponent', () => {
  let component: DayfourLawyerComponent;
  let fixture: ComponentFixture<DayfourLawyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayfourLawyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfourLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfourLawyerJeffComponent } from './dayfour-lawyer-jeff.component';

describe('DayfourLawyerJeffComponent', () => {
  let component: DayfourLawyerJeffComponent;
  let fixture: ComponentFixture<DayfourLawyerJeffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayfourLawyerJeffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfourLawyerJeffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

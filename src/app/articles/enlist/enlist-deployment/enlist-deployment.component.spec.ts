import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlistDeploymentComponent } from './enlist-deployment.component';

describe('EnlistDeploymentComponent', () => {
  let component: EnlistDeploymentComponent;
  let fixture: ComponentFixture<EnlistDeploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlistDeploymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlistDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

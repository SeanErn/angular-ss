import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlistDeploymentSpyFailComponent } from './enlist-deployment-spy-fail.component';

describe('EnlistDeploymentSpyFailComponent', () => {
  let component: EnlistDeploymentSpyFailComponent;
  let fixture: ComponentFixture<EnlistDeploymentSpyFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlistDeploymentSpyFailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlistDeploymentSpyFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

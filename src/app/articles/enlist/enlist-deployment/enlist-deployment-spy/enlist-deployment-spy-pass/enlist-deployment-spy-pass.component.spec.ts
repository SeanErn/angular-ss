import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlistDeploymentSpyPassComponent } from './enlist-deployment-spy-pass.component';

describe('EnlistDeploymentSpyPassComponent', () => {
  let component: EnlistDeploymentSpyPassComponent;
  let fixture: ComponentFixture<EnlistDeploymentSpyPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlistDeploymentSpyPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlistDeploymentSpyPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

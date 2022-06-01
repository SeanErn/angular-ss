import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlistDeploymentSpyPrepareComponent } from './enlist-deployment-spy-prepare.component';

describe('EnlistDeploymentSpyPrepareComponent', () => {
  let component: EnlistDeploymentSpyPrepareComponent;
  let fixture: ComponentFixture<EnlistDeploymentSpyPrepareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlistDeploymentSpyPrepareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlistDeploymentSpyPrepareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

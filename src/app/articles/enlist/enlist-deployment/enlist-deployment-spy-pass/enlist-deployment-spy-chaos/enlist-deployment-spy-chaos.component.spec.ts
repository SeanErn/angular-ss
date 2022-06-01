import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlistDeploymentSpyChaosComponent } from './enlist-deployment-spy-chaos.component';

describe('EnlistDeploymentSpyChaosComponent', () => {
  let component: EnlistDeploymentSpyChaosComponent;
  let fixture: ComponentFixture<EnlistDeploymentSpyChaosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlistDeploymentSpyChaosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlistDeploymentSpyChaosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

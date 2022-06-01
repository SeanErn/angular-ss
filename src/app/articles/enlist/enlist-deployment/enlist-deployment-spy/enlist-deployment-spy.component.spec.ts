import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlistDeploymentSpyComponent } from './enlist-deployment-spy.component';

describe('EnlistDeploymentSpyComponent', () => {
  let component: EnlistDeploymentSpyComponent;
  let fixture: ComponentFixture<EnlistDeploymentSpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlistDeploymentSpyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlistDeploymentSpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

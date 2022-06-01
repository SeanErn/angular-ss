import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlistDeploymentAskComponent } from './enlist-deployment-ask.component';

describe('EnlistDeploymentAskComponent', () => {
  let component: EnlistDeploymentAskComponent;
  let fixture: ComponentFixture<EnlistDeploymentAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlistDeploymentAskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlistDeploymentAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

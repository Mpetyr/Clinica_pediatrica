import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMedicalHistory2Component } from './new-medical-history2.component';

describe('NewMedicalHistory2Component', () => {
  let component: NewMedicalHistory2Component;
  let fixture: ComponentFixture<NewMedicalHistory2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMedicalHistory2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMedicalHistory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

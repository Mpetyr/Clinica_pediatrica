import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientFormComponent } from './patient-form.component';



@NgModule({
  declarations: [PatientFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[ PatientFormComponent]
})
export class PatientFormModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMedicalHistory2RoutingModule } from './new-medical-history2-routing.module';
import { NewMedicalHistory2Component } from './new-medical-history2.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NewMedicalHistory2Component],
  imports: [
    CommonModule,
    NewMedicalHistory2RoutingModule,
    ReactiveFormsModule
  ]
})
export class NewMedicalHistory2Module { }

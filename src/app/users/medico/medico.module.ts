import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicoRoutingModule } from './medico-routing.module';
import { MedicoComponent } from './medico.component';
import { SidebarDoctorComponent } from '../sidebar-doctor/sidebar-doctor.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MedicoComponent,
  SidebarDoctorComponent],
  imports: [
    CommonModule,
    MedicoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class MedicoModule { }

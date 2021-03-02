import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteComponent } from './paciente.component';
import { SidebarPacienteComponent } from '../sidebar-paciente/sidebar-paciente.component';


@NgModule({
  declarations: [PacienteComponent, SidebarPacienteComponent],
  imports: [
    CommonModule,
    PacienteRoutingModule
  ]
})
export class PacienteModule { }

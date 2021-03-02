import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMedicalHistory2Component } from './new-medical-history2.component';

const routes: Routes = [{ path: '', component: NewMedicalHistory2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewMedicalHistory2RoutingModule { }

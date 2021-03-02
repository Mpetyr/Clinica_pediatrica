import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanAdminGuard } from './auth/guards/can-admin.guard';
import { CanEditGuard } from './auth/guards/can-edit.guard';
import { CanMedicoGuard } from './auth/guards/can-medico.guard';
import { CanPacienteGuard } from './auth/guards/can-paciente.guard';
import { CanSecretariaGuard } from './auth/guards/can-secretaria.guard';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { CalendarioCitasComponent } from './shared/components/calendario-citas/calendario-citas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },

  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
  
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) }
  ,
  { path: 'verification-email', component: SendEmailComponent,},
  { path: 'forgot-password', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },

  { path: 'admin', loadChildren: () => import('./users/admin/admin.module').then(m => m.AdminModule),
    canActivate: [CanAdminGuard]
},

  { path: 'editor', loadChildren: () => import('./users/editor/editor.module').then(m => m.EditorModule),
    canActivate: [CanEditGuard]
  },

  { path: 'secretaria', loadChildren: () => import('./users/secretaria/secretaria.module').then(m => m.SecretariaModule),
    canActivate: [CanSecretariaGuard]
},

  { path: 'medico', loadChildren: () => import('./users/medico/medico.module').then(m => m.MedicoModule),
    canActivate: [CanMedicoGuard]
},

  { path: 'paciente', loadChildren: () => import('./users/paciente/paciente.module').then(m => m.PacienteModule),
    canActivate: [CanPacienteGuard]
},
  { path: 'list', loadChildren: () => import('./pages/patients/list/list.module').then(m => m.ListModule),
  canActivate: [CanMedicoGuard]
},
  { path: 'new', loadChildren: () => import('./pages/patients/new/new.module').then(m => m.NewModule), 
  canActivate: [CanMedicoGuard]
},
  { path: 'details', loadChildren: () => import('./pages/patients/details/details.module').then(m => m.DetailsModule), 
  canActivate: [CanMedicoGuard]
},
  { path: 'edit', loadChildren: () => import('./pages/patients/edit/edit.module').then(m => m.EditModule), 
  canActivate: [CanMedicoGuard]
},
  { path: 'new-medical-history', loadChildren: () => import('./shared/components/new-medical-history2/new-medical-history2.module').then(m => m.NewMedicalHistory2Module) },
  { path: 'calendario', component: CalendarioCitasComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

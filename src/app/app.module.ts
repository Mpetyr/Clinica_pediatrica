import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { NuevaCitaComponent } from './Componentes/nueva-cita/nueva-cita.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule} from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from 'src/environments/environment';
import { SendEmailComponent } from './auth/send-email/send-email.component';

import { AuthService } from './auth/services/auth.service';

import { CanEditGuard } from './auth/guards/can-edit.guard';
import { CanAdminGuard } from './auth/guards/can-admin.guard';
import { CanMedicoGuard } from './auth/guards/can-medico.guard';
import { CanPacienteGuard } from './auth/guards/can-paciente.guard';
import { CanSecretariaGuard } from './auth/guards/can-secretaria.guard';
import { PatientFormModule } from './shared/components/patient-form/patient-form.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NuevaCitaComponent,
    SendEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    PatientFormModule
  ],
  providers: [AuthService, CanEditGuard, CanAdminGuard, CanMedicoGuard, CanPacienteGuard, CanSecretariaGuard, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

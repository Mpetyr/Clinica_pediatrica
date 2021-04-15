import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
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
import { PatientService } from 'src/app/pages/patients/patient.service';
import { CalendarioCitasComponent } from './shared/components/calendario-citas/calendario-citas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalComponent } from './Componentes/modal/modal.component';
import { AngularMaterialModule } from './angular-material.module';
import { NewAppointmentComponent } from './shared/components/new-appointment/new-appointment.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SendEmailComponent,
    CalendarioCitasComponent,
    ModalComponent,
    NewAppointmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    PatientFormModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  entryComponents:[ModalComponent],
  providers: [AuthService, CanEditGuard, CanAdminGuard, CanMedicoGuard, CanPacienteGuard, CanSecretariaGuard, AngularFirestore, PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

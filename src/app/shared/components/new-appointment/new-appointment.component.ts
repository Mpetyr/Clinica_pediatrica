import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PatientService } from 'src/app/pages/patients/patient.service';
//import * as swal from ‘sweetalert’;

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

  public user = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private patientSvc: PatientService ) { }

  ngOnInit(): void {
  }

  email(data: any){
    this.patientSvc.sendMessage(data).subscribe(() => {
      alert('Enviado')
    })
  }


}

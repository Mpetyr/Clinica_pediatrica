import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/pages/patients/patient.service';
import { patient } from '../../models/patient.interface';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  patient: patient = null;

  patientsForm: FormGroup;

  constructor(private router: Router, private fb:FormBuilder, private patientsSvc: PatientService) {

    const navigation = this.router.getCurrentNavigation();
    this.patient = navigation?.extras?.state?.value;
    this.initForm();
   }

  ngOnInit(): void {
    

    if(typeof this.patient == 'undefined'){
      //redirect
      this.router.navigate(['new']);
    }else {
      this.patientsForm.patchValue(this.patient);
    }
  }

  onSave(): void{
    console.log('Saved', this.patientsForm);

    if(this.patientsForm.valid){
      
      const patient = this.patientsForm.value;
      const patientId = this.patient?.id || null;
      this.patientsSvc.onSavePatient(patient, patientId);
      this.patientsForm.reset();
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }

  private initForm():void{
    this.patientsForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      tipoDeDocumento: ['', [Validators.required]],
      numeroDocumento: ['', [Validators.required]],
    });
  }

}

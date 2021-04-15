import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { patient } from 'src/app/shared/models/patient.interface';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  paciente: patient = null;

  constructor(private router: Router, private patientsSvc : PatientService) {
    const navigation = this.router.getCurrentNavigation();
    this.paciente = navigation?.extras?.state?.value;
   }

  ngOnInit(): void {
    if(typeof this.paciente == 'undefined'){
      this.router.navigate(['list']);
    }
  }

  onGoToEdit(): void{
    this.navigationExtras.state.value = this.paciente;
    this.router.navigate(['edit'], this.navigationExtras);
  }


  OnGoBackToList():void{
    this.router.navigate(['list']);
  }

}

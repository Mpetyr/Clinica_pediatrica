import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  patient$ = this.patientsSvc.patient;

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }


  constructor(private router: Router, private patientsSvc: PatientService) { }

  ngOnInit(): void {
  }


  onGoToEdit(item: any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onGoToSee(item: any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }

  async onGoToDelete(patId: string): Promise <void>{

    try {
      await this.patientsSvc.onDeletePatient(patId);
      alert('Borrado');
      
    } catch (error) {
      console.log(error)
    }
  }

}

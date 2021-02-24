import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  template:  `<app-patient-form></app-patient-form>`,
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

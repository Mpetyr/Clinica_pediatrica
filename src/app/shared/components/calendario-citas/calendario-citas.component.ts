import { Component, OnInit } from '@angular/core';
import { Agendar } from '../../models/agendar';

@Component({
  selector: 'app-calendario-citas',
  templateUrl: './calendario-citas.component.html',
  styleUrls: ['./calendario-citas.component.css']
})
export class CalendarioCitasComponent implements OnInit {

  agendar: Agendar;

  constructor() {
    this.agendar = {

      semana:  ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
      horas: [ {hora:"8:00", disponible: {domingo: false, lunes: false, martes: true, miercoles: true, jueves: false, viernes: false, sabado: false} },
               {hora:"9:00", disponible: {domingo: false, lunes: true, martes: true, miercoles: true, jueves: false, viernes: false, sabado: false} },
               {hora:"10:00", disponible: {domingo: false, lunes: true, martes: true, miercoles: true, jueves: false, viernes: false, sabado: false} }
    ],
  }
   }

  ngOnInit(): void {
  }

  consola(){
    
  }
  

}

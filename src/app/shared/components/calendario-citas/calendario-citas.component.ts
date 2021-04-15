import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/Componentes/modal/modal.component';
import { Agendar } from '../../models/agendar';

@Component({
  selector: 'app-calendario-citas',
  templateUrl: './calendario-citas.component.html',
  styleUrls: ['./calendario-citas.component.css']
})
export class CalendarioCitasComponent implements OnInit {

  agendar: Agendar;

  constructor(public dialog:MatDialog) {
    this.agendar = {

      semana:  ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
      horas: [ {hora:"8:00", disponible: {domingo: false, lunes: false, martes: true, miercoles: true, jueves: true, viernes: true, sabado: false} },
               {hora:"9:00", disponible: {domingo: false, lunes: true, martes: true, miercoles: true, jueves: true, viernes: true, sabado: false} },
               {hora:"10:00", disponible: {domingo: false, lunes: true, martes: true, miercoles: true, jueves: true, viernes: true, sabado: false} },
               {hora:"11:00", disponible: {domingo: false, lunes: true, martes: true, miercoles: true, jueves: true, viernes: true, sabado: false} },
               {hora:"12:00", disponible: {domingo: false, lunes: true, martes: true, miercoles: true, jueves: true, viernes: true, sabado: false} },
               {hora:"13:00", disponible: {domingo: false, lunes: true, martes: true, miercoles: true, jueves: true, viernes: true, sabado: false} },
               {hora:"14:00", disponible: {domingo: false, lunes: true, martes: true, miercoles: true, jueves: true, viernes: true, sabado: false} },
               {hora:"15:00", disponible: {domingo: false, lunes: true, martes: false, miercoles: true, jueves: true, viernes: true, sabado: false} },
               {hora:"16:00", disponible: {domingo: false, lunes: true, martes: false, miercoles: true, jueves: true, viernes: true, sabado: false} },
               {hora:"17:00", disponible: {domingo: false, lunes: false, martes: false, miercoles: true, jueves: true, viernes: true, sabado: false} },
               
    ],
  }
   }

  ngOnInit(): void {
  }

  consola(){
    this.opendialog()
  }

  opendialog(): void{
    const config={
      data: {
        message: 'Cliente',
        content: 'hola'
      }
    };

    const dialogRef=this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe(result=>{
      console.log(`Dialog result ${result}`);
    })
    
  }
  

}

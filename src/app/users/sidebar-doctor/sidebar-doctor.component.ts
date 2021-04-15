import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicalHistoryInterface } from 'src/app/shared/models/medical-history.interface';
import Chart from 'chart.js';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { PatientService } from 'src/app/pages/patients/patient.service';

@Component({
  selector: 'app-sidebar-doctor',
  templateUrl: './sidebar-doctor.component.html',
  styleUrls: ['./sidebar-doctor.component.css']
})
export class SidebarDoctorComponent implements OnInit {
  
  private medicalHistoryCollection: AngularFirestoreCollection <MedicalHistoryInterface[]>;
  
  data$: Observable<MedicalHistoryInterface[]>;

  constructor(private ingresosSvc: PatientService) { }

  contadorGeneral = 0;
  promedioDiario = 0.0;
  contador1 = 0;
  contador2 = 0;
  contador3 = 0;
  contador4 = 0;
  contador5 = 0;
  contador6 = 0;
  contador7 = 0;
  contador8 = 0;
  contador9 = 0;
  contador10 = 0;
  contador11 = 0;
  contador12 = 0;
  contador13 = 0;
  contador14 = 0;
  contador15 = 0;
  contador16 = 0;
  contador17 = 0;
  contador18 = 0;
  contador19 = 0;
  contador20 = 0;
  contador21 = 0;
  contador22 = 0;
  contador23 = 0;
  contador24 = 0;
  contador25 = 0;
  contador26 = 0;
  contador27 = 0;
  contador28 = 0;
  contador29 = 0;
  contador30 = 0;


  public barChartOptions: any = {
    responsive: true
  }

// ------------------------------------------



  ngOnInit(): void {

    Chart.defaults.global.responsive = true;

    this.data$ = this.ingresosSvc.getHistoriaClinica();

    // Trae el total y el promedio de llamadas recibidas en el mes //

    // tslint:disable-next-line: deprecation
    this.data$.subscribe((res: MedicalHistoryInterface[]) => {
      this.contadorGeneral = res.length;
      this.promedioDiario = Math.floor(res.length / 8);
    });

    
    
    this.data$.subscribe((res: MedicalHistoryInterface[]) => {
      res.forEach(r => {
        if (r.vacunacion === 'Completa') {
          this.contador1++;
        }
        else if (r.vacunacion === 'Incompleta') {
          this.contador2++;
        }

      }
      );

      const graficoAtiende = new Chart('vacunacion', {
        type: 'doughnut',
        data: {
          labels: ['Completa', 'Incompleta'],
          datasets: [{
            label: 'Vacunacion completa',
            data: [this.contador1, this.contador2],
            backgroundColor: [
              'blue',
              'red',
            ]
          }]
        },
      });

    });




    this.data$.subscribe((res: MedicalHistoryInterface[]) => {

      this.contador1 = 0;
      this.contador2 = 0;

      res.forEach(r => {
        if (r.diagnosticospatologicos === 'Dolor abdominal') {
          this.contador1++;
        }
        else if (r.diagnosticospatologicos === 'Bronquiolitis') {
          this.contador2++;
        }
        else if (r.diagnosticospatologicos === 'Resfriado común') {
          this.contador3++;
        }
        
      }
      );

      const graficoAtiende = new Chart('diagnostico', {
        type: 'bar',
        data: {
          labels: ['Dolor abdominal', 'Bronquiolitis', 'Resfriado común'],

          datasets: [{
            label: 'Diagnósticos patológicos',
            data: [this.contador1, this.contador2, this.contador3],
            backgroundColor: [
              'blue',
              'blue',
              'blue'
            ]

          }]
        },
        
      });

    });


    this.data$.subscribe((res: MedicalHistoryInterface[]) => {

      this.contador1 = 0;
      this.contador2 = 0;

      res.forEach(r => {
        if (r.diagnosticoNutricional === 'Sobre peso') {
          this.contador1++;
        }
        else if (r.diagnosticoNutricional === 'Peso y talla adecuados para la edad') {
          this.contador2++;
        }
      }
      );

      const graficoAtiende = new Chart('diagnosticoNutricional', {
        type: 'bar',
        data: {
          labels: ['Sobre peso', 'Peso y talla adecuados para la edad'],

          datasets: [{
            label: 'Diagnóstico nutricional',
            data: [this.contador1, this.contador2],
            backgroundColor: [
              'blue',
              'blue',
              'blue'
            ]

          }]
        },
        
      });

    });



    this.data$.subscribe((res: MedicalHistoryInterface[]) => {

      this.contador1 = 0;
      this.contador2 = 0;

      res.forEach(r => {
        if (r.diagnosticoNeurodesarrollo === 'Deficit de atención e hiper actividad') {
          this.contador1++;
        }
        else if (r.diagnosticoNeurodesarrollo === 'Neurodesarrollo adecuado para la edad') {
          this.contador2++;
        }
      }
      );

      const graficoAtiende = new Chart('diagnosticoNeurodesarrollo', {
        type: 'bar',
        data: {
          labels: ['Deficit de atención e hiper actividad', 'Neurodesarrollo adecuado para la edad'],

          datasets: [{
            label: 'Diagnóstico del neurodesarrollo',
            data: [this.contador1, this.contador2],
            backgroundColor: [
              'blue',
              'blue',
              'blue'
            ]

          }]
        },
        
      });

    });


    this.data$.subscribe((res: MedicalHistoryInterface[]) => {

      this.contador1 = 0;
      this.contador2 = 0;

      res.forEach(r => {
        if (r.diagnosticoRiesgoSocial === 'Sin riesgo social aparente') {
          this.contador1++;
        }
        else if (r.diagnosticoRiesgoSocial === 'Familia en situación de pobreza') {
          this.contador2++;
        }
      }
      );

      const graficoAtiende = new Chart('diagnosticoRiesgoSocial', {
        type: 'bar',
        data: {
          labels: ['Sin riesgo social aparente', 'Familia en situación de pobreza'],

          datasets: [{
            label: 'Diagnóstico del Riesgo social o de Maltrato (AIEPI)',
            data: [this.contador1, this.contador2],
            backgroundColor: [
              'blue',
              'blue',
              'blue'
            ]

          }]
        },
        
      });

    });



    this.data$.subscribe((res: MedicalHistoryInterface[]) => {

      this.contador1 = 0;
      this.contador2 = 0;

      res.forEach(r => {
        if (r.gananciaPeso === 'Si') {
          this.contador1++;
        }
        else if (r.gananciaPeso === 'No') {
          this.contador2++;
        }
        else if (r.velocidadCrecimiento === 'Si') {
          this.contador2++;
        }
        else if (r.velocidadCrecimiento === 'No') {
          this.contador2++;
        }
      }
      );

      const graficoAtiende = new Chart('Crecimiento', {
        type: 'bar',
        data: {
          labels: ['Ganancia de peso adecuada', 'Velocidad de crecimiento adecuada'],

          datasets: [{
            label: 'Ganancia de peso adecuada',
            data: [this.contador1, this.contador2],
            backgroundColor: [
              'blue',
              'red'
            ]

          },
        {

          label: 'Velocidad de crecimiento adecuada',
          data: [this.contador3, this.contador4],
          backgroundColor: [
            'blue',
            'red'
          ]
        }]
        },

        options: {

          scales: {
              xAxes: {
                  stacked: true
              },
              yAxes: {
                  stacked: true
              }
          }
      }
        
      });

    });


    this.data$.subscribe((res: MedicalHistoryInterface[]) => {

      this.contador1 = 0;
      this.contador2 = 0;

      res.forEach(r => {
        if (r.alteracionDesarrollo === 'Si') {
          this.contador1++;
        }
        else if (r.alteracionDesarrollo === 'No') {
          this.contador2++;
        }
      }
      );

      const graficoAtiende = new Chart('alteracionDesarrollo', {
        type: 'bar',
        data: {
          labels: ['Si', 'No'],

          datasets: [{
            label: 'Alteración en el desarrollo',
            data: [this.contador1, this.contador2],
            backgroundColor: [
              'blue',
              'red'
            ]

          }]
        },
        
      });

    });


    
  }

}

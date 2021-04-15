import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { rejects } from 'assert';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { patient } from 'src/app/shared/models/patient.interface';
import { MedicalHistoryInterface } from 'src/app/shared/models/medical-history.interface';
import { Agendar } from 'src/app/shared/models/agendar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patient: Observable<patient[]>;
  medicalHistory: Observable<MedicalHistoryInterface[]>;
  
  private medicalHistoryCollection: AngularFirestoreCollection <MedicalHistoryInterface>;
  private patientsCollection: AngularFirestoreCollection<patient>;
  private disponibilidadCollection: AngularFirestoreCollection<Agendar>;

  constructor(private readonly afs: AngularFirestore, private http: HttpClient) {
    this.patientsCollection = afs.collection<patient>('patients');
    this.getPatient();

    this.medicalHistoryCollection = afs.collection<MedicalHistoryInterface>('new_medical_history');
    this.getHistoriaClinica();

    this.disponibilidadCollection = afs.collection<Agendar>('day_week');

   }

   sendMessage(body) {
    return this.http.post('http://localhost:3000/formulario', body);
    }

   obtenerCollection(){
    
     return this.disponibilidadCollection.get()
     
   }

  //saveHistory(newMedicalHistory: MedicalHistoryInterface): Promise<void>{
    //this.medicalHistoryCollection.add(newMedicalHistory);
  //}

  onSaveHistory(medicalHistory: MedicalHistoryInterface, patId: string): Promise<void>{

    return new Promise (async (resolve, reject) => {

      try {

        const id = patId || this.afs.createId();
        const data = {id, ...medicalHistory};
        const result = await this.medicalHistoryCollection.doc(id).set(data);
        resolve(result);
        
      } catch (error) {
        reject(error.message);
      }


    });


   }
  
   onDeletePatient(patId: string): Promise<void>{

    return new Promise (async (resolve,reject) => {
      try {
        const result = this.patientsCollection.doc(patId).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    })


   }


   onSavePatient(patient: patient, patId: string): Promise<void>{

    return new Promise (async (resolve, reject) => {

      try {

        const id = patId || this.afs.createId();
        const data = {id, ...patient};
        const result = await this.patientsCollection.doc(id).set(data);
        resolve(result);
        
      } catch (error) {
        reject(error.message);
      }


    });


   }
   
   
   private getPatient(): void{
     this.patient = this.patientsCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as patient))
     );
   }

  getHistoriaClinica(): Observable<MedicalHistoryInterface[]>{
    return this.medicalHistoryCollection.snapshotChanges().pipe(
      map(actions => actions.map(
        a => a.payload.doc.data() as MedicalHistoryInterface))
    );
  }


}

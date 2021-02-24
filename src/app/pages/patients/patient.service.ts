import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { patient } from 'src/app/shared/models/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patient: Observable<patient[]>;

  private patientsCollection: AngularFirestoreCollection<patient>;

  constructor(private readonly afs: AngularFirestore) {
    this.patientsCollection = afs.collection<patient>('patients');
    this.getPatient();
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
}

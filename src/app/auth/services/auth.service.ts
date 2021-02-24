import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { promise } from 'protractor';
import { Observable, of } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user-interface';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { RoleValidator } from '../helpers/roleValidator';

@Injectable({ providedIn: 'root' })
export class AuthService extends RoleValidator {

  public user$: Observable<User>;

  constructor(public afAuth: AngularFireAuth, private afs:
    AngularFirestore) { 
    super();
    this.user$ = this.afAuth.authState.pipe(
      switchMap( user => {
        if (user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of (null);
      })
    )
  }

  async loginGoogle():Promise<User>{
    try{

      const {user} = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()
      );
      this.updateUserData(user);
      return user;
    }

    catch(error){
      console.log(error)
    }
  }

  async resetPassword(email: string):Promise<void>{
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    }

    catch(error){
      console.log(error);
    }
  }

  async sendVerificationEmail(): Promise <void>{
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async login(email:string, password:string): Promise<User>{
    try{   
    const {user} = await this.afAuth.signInWithEmailAndPassword(
      email,
      password
      );
      //this.updateUserData(user);
      return user;
    }
    catch(error){
      console.log(error);
    }
  }

  async register(email: string, password: string): Promise<User>{

    try{
      const {user} = await this.afAuth.createUserWithEmailAndPassword(
        email,
         password
         );
         this.sendVerificationEmail();
         this.updateUserData(user);
         return user;
    }
    catch(error){
      console.log(error);
    }
    
  }


  async logout(){

    try{
      await this.afAuth.signOut();
    }
    catch(error){
      console.log(error);
    }
    
  }


  private updateUserData(user:User){
    const userRef : AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data:User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role:'PACIENTE'
    };

    return userRef.set( data, { merge: true });
  }

}

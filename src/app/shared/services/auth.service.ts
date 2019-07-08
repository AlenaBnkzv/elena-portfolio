import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  //private _isLogedIn: boolean;

  // constructor(private fireAuth: AngularFireAuth) {
  // }

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router) {
  }

  getUserState() {
    return this.afAuth.authState;
  }

  login( email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['/home']);
        }
      })
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  // login(email, password) {
  //   return new Promise<any>((resolve, reject) => {
  //     this.fireAuth.auth.signInWithEmailAndPassword(email, password)
  //       .then(res => {
  //         resolve(res);
  //         this._isLogedIn = true;
  //       }, err => reject(err))
  //       this._isLogedIn = false;
  //   })
  // }

  // get isLogedIn(): boolean {
  //   return this._isLogedIn;
  // }


}
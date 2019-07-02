import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import * as firebase from '@firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(private fireAuth: AngularFireAuth) {
  }

    login(email,password) {
    
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        alert('Please try again');
      });
    
  }
}
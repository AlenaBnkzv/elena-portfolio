import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { of } from 'rxjs';
import * as firebase from '@firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(private fireAuth: AngularFireAuth) {
  }

  login(email,password) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }
}
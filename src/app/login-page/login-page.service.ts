import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from '@firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(private fireAuth: AngularFireAuth) {
  }
  
  async login(email,password) {
  
  const {user} = await this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  console.log(user);
 }
}
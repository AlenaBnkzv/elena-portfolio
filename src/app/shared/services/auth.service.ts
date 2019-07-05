import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { of } from 'rxjs';
import * as firebase from '@firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLogedIn: boolean;

  constructor(private fireAuth: AngularFireAuth) {
  }

  login(email, password) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.signInWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
          this._isLogedIn = true;
        }, err => reject(err))
        this._isLogedIn = false;
    })
  }

  get isLogedIn(): boolean {
    return this._isLogedIn;
  }
}
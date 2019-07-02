import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from '@firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {
  user: Observable<firebase.User>;

  constructor(private fireAuth: AngularFireAuth) {
  }

    login() {

    this.fireAuth.auth.signInWithPopup(new firebase.auth.EmailAuthProvider())
      .catch(function (error) {
        alert('Please try again');
      });
  }
}
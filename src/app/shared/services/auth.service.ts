import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { of } from 'rxjs';
import * as firebase from '@firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = null;

  constructor(private fireAuth: AngularFireAuth) {
  }

  login(email,password) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(({user}) => {
        const token = user.stsTokenManager.accessToken;
        localStorage.setItem('auth-token', token );
        this.setToken(token);
        return user;
      });
  }

  setToken(token: string): void {
   this.token = token;
  }

  getToken(): string {
   return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout(): void {
    this.setToken(null);
    localStorage.clear();
  }
}
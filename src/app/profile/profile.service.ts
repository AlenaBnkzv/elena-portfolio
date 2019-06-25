import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private db: AngularFireDatabase) { }

  getUser() {
    return this.db.object('User').valueChanges();
  }

}
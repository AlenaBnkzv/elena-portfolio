import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class BioService {

  constructor(private db: AngularFireDatabase) { }
  
  getEducation() {
    return this.db.object('education').valueChanges();
  }
}
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private db: AngularFireDatabase) { }
  
  getEducation() {
    return this.db.object('еducation').valueChanges();
  }
}
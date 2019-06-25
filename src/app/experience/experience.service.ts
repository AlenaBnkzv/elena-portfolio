import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private db: AngularFireDatabase) { }

  getProjects() {
    return this.db.object('experience').valueChanges();
  }

}
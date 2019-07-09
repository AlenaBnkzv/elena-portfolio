import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ReactiveFormsModule } from '@angular/forms';

export interface project {
  name: string;
  url: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private db: AngularFireDatabase) { }

  getProjects() {
    return this.db.list('experience').valueChanges();
  }

  addProject(project) {
    this.db.list('experience').push(project);
  }

}
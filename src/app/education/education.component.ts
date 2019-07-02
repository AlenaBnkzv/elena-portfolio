import { Component, OnInit, OnDestroy } from '@angular/core';
import { EducationService }  from './education.service';
import { NgForm } from '@angular/forms';
import { Subscription }  from 'rxjs';

export interface EducationList {
  name: string;
  year: number;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, OnDestroy {
  educationList: EducationList;
  educationSub: Subscription;

  constructor(private profile: EducationService) { }

  ngOnInit() {
    this.educationSub = this.profile.getEducation().subscribe((data)=> {
      this.educationList = data;
    });
  }
  ngOnDestroy() {
    if (this.educationSub) {
      this.educationSub.unsubscribe();
    }
  }

}
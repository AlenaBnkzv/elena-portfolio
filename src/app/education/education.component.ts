import { Component, OnInit, OnDestroy } from '@angular/core';
import { EducationService }  from './education.service';
import { Subscription }  from 'rxjs';

export interface EducationList {
  name: string;
  year: number;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, OnDestroy {
  educationList: EducationList;
  educationSub: Subscription;

  constructor(private education: EducationService) { }

  ngOnInit() {
    this.educationSub = this.education.getEducation().subscribe((data)=> {
      this.educationList = data;
      console.log(data);
    });
  }

  ngOnDestroy() {
    if (this.educationSub) {
      this.educationSub.unsubscribe();
    }
  }
}
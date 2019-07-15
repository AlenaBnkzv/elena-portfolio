import { Component, OnInit, OnDestroy } from '@angular/core';
import { BioService }  from './bio.service';
import { NgForm } from '@angular/forms';
import { Subscription }  from 'rxjs';

export interface EducationList {
  name?: string;
  year?: number;
}

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit, OnDestroy {
  educationList: EducationList;
  educationSub: Subscription;

  constructor(private bio: BioService) { }

  ngOnInit() {
    this.educationSub = this.bio.getEducation().subscribe((data)=> {
      this.educationList = data;
    });
  }
  ngOnDestroy() {
    if (this.educationSub) {
      this.educationSub.unsubscribe();
    }
  }

}
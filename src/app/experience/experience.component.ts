import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExperienceService }  from './experience.service';
import { FormGroup } from '@angular/forms';
import { Subscription }  from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  projectList: any[];
  experienceSub: Subscription;
  projectForm: FormGroup;

  constructor(private experience: ExperienceService) { }

  ngOnInit() {
    this.experienceSub = this.experience.getProjects().subscribe((data)=> {
      this.projectList = Object.values(data);
    });

    this.projectForm = this.experience.addProject({
      name: '',
      url: '',
      year: ''
    });
  }

  ngOnDestroy() {
    if (this.experienceSub) {
      this.experienceSub.unsubscribe();
    }
  }

}
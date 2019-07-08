import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExperienceService }  from './experience.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
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
   this.projectForm = new FormGroup({
    name: new FormControl(null),
    url: new FormControl(null),
    year: new FormControl(null)
  });

  this.experienceSub = this.experience.getProjects().subscribe((data)=> {
   this.projectList = Object.values(data);
  });
}

  ngOnDestroy() {
    if (this.experienceSub) {
      this.experienceSub.unsubscribe();
    }
  }

  onSubmit() {
   this.experience.addProject(this.projectForm.value);
   this.projectForm.reset();
  }
}
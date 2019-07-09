import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ProjectService }  from './project.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription }  from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  @Input() user;
  projectList: any[];
  experienceSub: Subscription;
  projectForm: FormGroup;

  constructor(
    private experience: ProjectService ) { }

  ngOnInit() {
   this.projectForm = new FormGroup({
    name: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    year: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern('^[0-9]*$')
    ])
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
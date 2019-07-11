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

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private experience: ProjectService ) { }

  ngOnInit() {
   this.projectForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(2)
    ]),
    url: new FormControl('',[
      Validators.required,
      Validators.minLength(2)
    ]),
    year: new FormControl('',Validators.required)
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
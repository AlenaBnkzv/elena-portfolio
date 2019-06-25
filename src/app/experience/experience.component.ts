import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExperienceService }  from './experience.service';
import { Subscription }  from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  projectList: any[];
  experienceSub: Subscription;

  constructor(private experience: ExperienceService) { }

  ngOnInit() {
    this.experienceSub = this.experience.getProjects().subscribe((data)=> {
      this.projectList = Object.values(data);
    });
    this.experience.addProject({
      name: "Consumer Fusion",
      url: "https://www.consumerfusion.com/",
      year: 2018
    });
  }
  ngOnDestroy() {
    if (this.experienceSub) {
      this.experienceSub.unsubscribe();
    }
  }

}
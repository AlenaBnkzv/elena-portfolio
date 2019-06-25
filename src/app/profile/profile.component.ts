import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService }  from './profile.service';
import { Subscription }  from 'rxjs';

interface User {
  name: string;
  git: string;
  gitUrl: string;
  photoUrl: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User;
  userSub: Subscription;

  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.userSub = this.profile.getUser().subscribe((data)=> {
      this.user = data;
    });
  }
  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }

}
import { Component, OnInit } from '@angular/core';
import { ProfileService }  from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userName: string;
  userGit: string;
  userGitUrl: string;
  userPhoto: string;

  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.profile.getUser().subscribe((data)=> {
      this.userName = data.name;
      this.userGit = data.git;
      this.userGitUrl = data.gitUrl;
      this.userPhoto = data.photoUrl;
    });
  }
}
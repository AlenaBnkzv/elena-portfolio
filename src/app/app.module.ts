import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { firebase } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BioComponent } from './bio/bio.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProfileService } from './profile/profile.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ExperienceService } from './experience/experience.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebase,'my-app'),
    AngularFireDatabaseModule
  ],
  declarations: [ AppComponent, HomeComponent, ProfileComponent, BioComponent, ExperienceComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProfileService, ExperienceService]
})
export class AppModule { }

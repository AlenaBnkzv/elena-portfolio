import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { firebase } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BioComponent } from './bio/bio.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProfileService } from './profile/profile.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ExperienceService } from './experience/experience.service';
import { EducationComponent } from './education/education.component';
import { EducationService } from './education/education.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginPageService } from './login-page/login-page.service';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebase,'my-app'),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, HomeComponent, ProfileComponent, BioComponent, ExperienceComponent, EducationComponent, LoginPageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ProfileService, ExperienceService, EducationService, LoginPageService ]
})
export class AppModule { }

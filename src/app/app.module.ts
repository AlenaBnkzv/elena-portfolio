import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebase } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BioComponent } from './bio/bio.component';
import { ProjectComponent } from './project/project.component'; 
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileService } from './profile/profile.service';
import { ProjectService } from './project/project.service';
import { BioService } from './bio/bio.service';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/guard/auth.guard';
import { FlexLayoutModule } from '@angular/flex-layout';

import { 
  MatButtonModule,
  MatInputModule,
  MatExpansionModule,
  MatGridListModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule
  }
  from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebase,'my-app'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatGridListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    FlexLayoutModule
  ],
  declarations: [ AppComponent, HomeComponent, ProfileComponent, BioComponent, ProjectComponent, LoginPageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ProfileService, ProjectService, BioService, AuthService, AuthGuard ]
})
export class AppModule { }

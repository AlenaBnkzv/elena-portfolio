import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const config = {
  apiKey: "AIzaSyCfM3vQmnsCeqfj--tyghF9nUbSna4-u0A",
    authDomain: "portfolio-data-a53b6.firebaseapp.com",
    databaseURL: "https://portfolio-data-a53b6.firebaseio.com",
    projectId: "portfolio-data-a53b6",
    storageBucket: "",
    messagingSenderId: "521113394113",
    appId: "1:521113394113:web:b5d39f15b1a02732"
  };

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
  ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

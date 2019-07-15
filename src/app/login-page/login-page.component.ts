import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  authError: any;
  loginForm: FormGroup;

  constructor(private auth: AuthService) { }

  ngOnInit() {
      this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });

      this.loginForm = new FormGroup({
        email: new FormControl('test@mail.ru',[Validators.required, Validators.email]),
        password: new FormControl('121121',Validators.required)
      })
  }
    login(loginFrm) {
      this.auth.login(loginFrm.value.email, loginFrm.value.password);
  }
}
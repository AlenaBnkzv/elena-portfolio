import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor( 
    private loginAuth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('test@mail.ru',[Validators.required, Validators.email]),
      password: new FormControl('121121',Validators.required)
    })
  }

  onSubmit() {
    const {email, password} = this.loginForm.value;
    this.loginAuth.login(email, password)
      .then(user => {
         this.router.navigate(['/home']);
         console.log(user);
      });
  }
}
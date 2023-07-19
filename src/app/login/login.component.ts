import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit() {}

  activeForm = true;

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    const { login, password } = this.loginForm.value;

    if (login && password) {
      this.authService.SignIn(login, password);
    }
  }

  register() {
    const { login, password } = this.loginForm.value;

    if (login && password) {
      this.authService.SignUp(login, password);
    }
  }

  setActiveForm() {
    this.activeForm = !this.activeForm;
  }
}

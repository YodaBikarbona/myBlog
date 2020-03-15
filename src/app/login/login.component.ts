import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  active = 'login';
  action = 'login';

  email = '';
  username = '';
  password = '';
  confirmPassword = '';


  constructor(public router: Router) { }

  ngOnInit() {
  }

  restartFields() {
    this.email = '';
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
  }

  click(section) {
    this.active = section;
    this.router.navigate([this.active]);
  }

  backToLogin() {
    this.restartFields();
    this.action = 'login';
  }

  goToRegistration() {
    this.restartFields();
    this.action = 'registration';
  }

  restartPassword() {
    this.restartFields();
    this.action = 'restartPassword';
  }
}

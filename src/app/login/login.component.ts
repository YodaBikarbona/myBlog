import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocationStrategy} from '@angular/common';
import {Service} from '../services/service';
import {AuthenticationRequest} from '../model';
import {AuthenticationService} from '../services/authentication.service';
import {ApplicationService} from '../application.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  username = '';
  password = '';

  signUpButton = document.getElementById('signUp');
  signInButton = document.getElementById('signIn');
  container = document.getElementById('container');

  loginData = {
    'username': '',
    'password': ''
  };

  registerData = {
    'username': '',
    'email': '',
    'password': '',
    'confirmPassword': ''
  };

  constructor(public router: Router, private locationStrategy: LocationStrategy, private service: ApplicationService, private authService: AuthenticationService) { }

  ngOnInit() {
    history.pushState(null, null, location.href);
    this.locationStrategy.onPopState(() => {
          history.pushState(null, null, location.href);
        });
  }

  login() {
    // let request = new AuthenticationRequest(this.loginData.username, this.loginData.password);
    // this.authService.authenticate(request).subscribe(
    //   res => {
    //     if (localStorage.getItem('auth-token')) {
    //       this.service.updateToken(localStorage.getItem('auth-token'));
    //       this.router.navigate(['home']);
    //     }
    //   }, err => {
    //   }
    // );
  }



  // signUp() {
  //   this.router.navigate(['registration']);
  // }
  //
  // restartPassword() {
  //   this.router.navigate(['restart-password']);
  // }

  signUpButtonSwap() {
    if ( screen.width > 767) {
      document.getElementById('container').classList.add('right-panel-active');
    } else {
      document.getElementById('sign-up-form-container').classList.remove('hide');
      document.getElementById('sign-in-form-container').classList.add('hide');
    }
    this.loginData.username = '';
    this.loginData.password = '';
  }

  signInButtonSwap() {
    if ( screen.width > 767) {
      document.getElementById('container').classList.remove('right-panel-active');
    } else {
      document.getElementById('sign-in-form-container').classList.remove('hide');
      document.getElementById('sign-up-form-container').classList.add('hide');
    }
    this.registerData.username = '';
    this.registerData.email = '';
    this.registerData.password = '';
    this.registerData.confirmPassword = '';
  }

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });
//
// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });
}

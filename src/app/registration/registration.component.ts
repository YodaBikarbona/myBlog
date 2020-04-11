import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  email = '';
  username = '';
  password = '';
  confirmPassword = '';

  constructor(public router: Router, private locationStrategy: LocationStrategy) { }

  ngOnInit() {
    this.locationStrategy.onPopState(() => {
          history.pushState(null, null, location.href);
        });
  }

  backToLogin() {
    this.router.navigate(['login']);
  }

}

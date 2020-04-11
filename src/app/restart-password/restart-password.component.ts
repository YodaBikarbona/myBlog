import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-restart-password',
  templateUrl: './restart-password.component.html',
  styleUrls: ['./restart-password.component.scss']
})
export class RestartPasswordComponent implements OnInit {

  email = '';

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

import { Component, OnInit } from '@angular/core';
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-activation-account',
  templateUrl: './activation-account.component.html',
  styleUrls: ['./activation-account.component.scss']
})
export class ActivationAccountComponent implements OnInit {

  constructor(private locationStrategy: LocationStrategy) { }

  ngOnInit() {
    history.pushState(null, null, location.href);
    this.locationStrategy.onPopState(() => {
          history.pushState(null, null, location.href);
        });
  }

}

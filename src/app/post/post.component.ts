import {Component, OnInit} from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Service} from '../services/service';
import {Subscription} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  // active = 'posts';

  post: any;
  private routeSub: Subscription;

  constructor(private locationStrategy: LocationStrategy, private route: ActivatedRoute, private service: Service, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show()
    history.pushState(null, null, location.href);
    this.locationStrategy.onPopState(() => {
          history.pushState(null, null, location.href);
        });
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
      // console.log(params['id']) //log the value of id
      this.service.getPost(params['id']).subscribe((data: any) => {
        this.post = data.result;
      }, err => {

      });
    });
    this.gotoTop(null, true);
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  gotoTop(event, action) {
    document.body.scrollTop = 0;
    if (action) {
      document.querySelector('#main').scroll({top: 0, left: 0});
    }
    else {
      document.querySelector('#main').scroll({top: 0, left: 0, behavior: 'smooth'});
    }
  }

}

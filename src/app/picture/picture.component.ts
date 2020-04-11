import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Service} from '../services/service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit, OnDestroy {

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  comment = '';
  commentLength = 0;
  errorMessage = '';
  image: any;
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute, private service: Service) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
      // console.log(params['id']) //log the value of id
      this.service.getImage(params['id']).subscribe((data: any) => {
        this.image = data.result;
      }, err => {

      });
    });
    this.gotoTop(null, true);

  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  calculateCommentLength() {
    this.commentLength = this.comment.length
  }

  addComment() {
     if (localStorage.getItem('userRole')) {
       if (this.commentLength > 0) {
         this.errorMessage = '';
       } else {
         this.errorMessage = 'You need write a comment!';
       }

    } else {
       this.errorMessage = 'You need be logged to write a comment!';
     }
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

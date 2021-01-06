import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Service} from '../services/service';
import {NgxSpinnerService} from 'ngx-spinner';

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
  albumId = 0;
  private routeSub: Subscription;

  // @HostListener('contextmenu', ['$event'])
  // onRightClick(event) {
  //   return false;
  // }

  constructor(private route: ActivatedRoute, private service: Service, public router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
      // console.log(params['id']) //log the value of id
      if (params['albumId']) {
        this.albumId = params['albumId'];
      }
      this.getImage(params['id']);
    });
    this.gotoTop(null, true);
  }

  getImage(id) {
    this.spinner.show();
    this.service.getImage(id, this.albumId).subscribe((data: any) => {
        this.image = data.result;
        this.spinner.hide();
      }, err => {
        this.spinner.hide();
      });
  }

  getNextImage(id) {
    this.spinner.show();
    this.service.getNextImage(id, this.albumId).subscribe((data: any) => {
        this.image = data.result;
        this.spinner.hide();
      }, err => {
        this.spinner.hide();
      });
  }

  getPreviousImage(id) {
    this.spinner.show();
    this.service.getPreviousImage(id, this.albumId).subscribe((data: any) => {
        this.image = data.result;
        this.spinner.hide();
      }, err => {
        this.spinner.hide();
      });
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

  goToNextImage(image) {
    const id = image.uniqueId;
    this.getNextImage(id);
  }

  goToPreviousImage(image) {
    const id = image.uniqueId;
    this.getPreviousImage(id);
  }
}

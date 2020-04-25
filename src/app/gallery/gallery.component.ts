import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocationStrategy} from '@angular/common';
import {MatDialog} from '@angular/material';
import {Service} from '../services/service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  // active = 'gallery';
  // sections = ['home', 'gallery', 'posts'];

  isShow = false;
  topPosToStartShowing = 100;
  role = '';
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  gallery: any;

  constructor(public router: Router, private locationStrategy: LocationStrategy, private service: Service, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    history.pushState(null, null, location.href);
    this.locationStrategy.onPopState(() => {
          history.pushState(null, null, location.href);
        });
    window.addEventListener('scroll', this.scroll, true);
    if (localStorage.getItem('userRole') && localStorage.getItem('userRole') === 'Administrator') {
      this.role = localStorage.getItem('userRole');
    }
    this.service.getGallery().subscribe((data: any) => {
      this.gallery = data.results;
    }, err => {
    });
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
  }

  // click(section) {
  //   this.active = section;
  //   this.router.navigate([this.active]);
  // }

  gotoTop(event) {
    document.body.scrollTop = 0;
    document.querySelector('div').scroll({top: 0, left: 0, behavior: 'smooth'});
  }

  scroll = (event: any): void => {
    const number = event.srcElement.scrollTop;
    if (number >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  goToImage(image) {
    const id = image.uniqueId;
    this.router.navigate(['gallery/' + id]);
  }

  newImage() {
    this.router.navigate(['gallery/picture/new']);
  }

}

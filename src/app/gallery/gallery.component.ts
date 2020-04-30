import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocationStrategy} from '@angular/common';
import {MatDialog} from '@angular/material';
import {Service} from '../services/service';
import {NgxSpinnerService} from 'ngx-spinner';
import {element} from 'protractor';

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
  albums: any;
  albumId = 0;

  constructor(public router: Router, private locationStrategy: LocationStrategy, private service: Service, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // this.spinner.show();
    history.pushState(null, null, location.href);
    this.locationStrategy.onPopState(() => {
          history.pushState(null, null, location.href);
        });
    window.addEventListener('scroll', this.scroll, true);
    if (localStorage.getItem('userRole') && localStorage.getItem('userRole') === 'Administrator') {
      this.role = localStorage.getItem('userRole');
    }
    this.getAlbums();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 3000);
  }

  ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
  }

  // click(section) {
  //   this.active = section;
  //   this.router.navigate([this.active]);
  // }

  getAlbums() {
    this.service.getAlbums().subscribe((data: any) => {
      this.albums = data.results;
      console.log(this.albums)
      this.getGallery();
    }, err => {
    });
  }

  getGallery() {
    this.spinner.show();
    this.service.getGallery(this.albumId).subscribe((data: any) => {
      this.gallery = data.results;
      if (this.gallery.length === 0) {
        this.spinner.hide();
      } else {
            setTimeout(() => {
          this.spinner.hide();
        }, 3000);
      }
    }, err => {
      this.spinner.hide();
    });
  }

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
    if (this.albumId === 0) {
      this.router.navigate(['gallery/' + id]);
    } else {
      this.router.navigate(['gallery/album/' + this.albumId + '/' + id]);
    }
  }

  newImage() {
    this.router.navigate(['gallery/picture/new']);
  }

  albumChoice(albumId) {
    if (albumId !== this.albumId) {
      this.albumId = albumId;
      this.getGallery();
      console.log(albumId);
    }

  }

}

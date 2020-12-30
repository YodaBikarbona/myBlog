import {Component, HostListener, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LocationStrategy} from '@angular/common';
import {ApplicationService} from '../application.service';
import {Service} from '../services/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // active = 'home';
  // sections = ['home', 'gallery', 'posts'];

  isShow = false;
  topPosToStartShowing = 100;
  posts: any;

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    return false;
  }

  constructor(public router: Router, private locationStrategy: LocationStrategy, private appService: ApplicationService, private service: Service) { }

  ngOnInit() {
    history.pushState(null, null, location.href);
    this.locationStrategy.onPopState(() => {
          history.pushState(null, null, location.href);
        });
    window.addEventListener('scroll', this.scroll, true);
    this.service.getHomePosts().subscribe((data: any) => {
      this.posts = data.results;
    }, err => {
    });
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

  readPost(post) {
    const id = post.uniqueId;
    this.appService.updateActivate('posts')
    this.router.navigate(['posts/' + id]);
  }
}

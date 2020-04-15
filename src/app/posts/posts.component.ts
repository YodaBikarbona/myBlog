import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocationStrategy} from '@angular/common';
import {Service} from '../services/service';
import {ApplicationService} from '../application.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  // active = 'posts';
  // sections = ['home', 'gallery', 'posts'];

  isShow = false;
  topPosToStartShowing = 100;

  index = 0;
  maxIndex = 0;
  posts: any;
  showPosts: [];
  limit = 5;

  constructor(public router: Router, private locationStrategy: LocationStrategy, private service: Service, private appService: ApplicationService) {
  }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
    history.pushState(null, null, location.href);
    this.locationStrategy.onPopState(() => {
          history.pushState(null, null, location.href);
        });
    this.getPosts();

  }

  getPosts() {
    this.service.getPosts(this.index, this.limit).subscribe((data: any) => {
      this.posts = data.results;
      if (this.posts) {
        //this.maxIndex = (this.posts[0].posts_number - 1) / this.offset;
        this.maxIndex = Math.floor((this.posts[0].posts_number - 1) / this.limit);
      }
      // if (this.posts)
      //   for (let i = 0; i < this.posts.length; i++) {
      //     this.showPosts.push(this.posts[i]);
      //   }
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
    this.router.navigate(['posts/' + id]);
  }

  next() {
    document.querySelector('#main').scroll({top: 0, left: 0, behavior: 'smooth'});
    // if (screen.width === 360) {
    //   document.querySelector('#main').scroll({top: 640, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 320) {
    //   document.querySelector('#main').scroll({top: 568, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 375) {
    //   document.querySelector('#main').scroll({top: 667, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 411) {
    //   document.querySelector('#main').scroll({top: 731, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 414) {
    //   document.querySelector('#main').scroll({top: 736, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 768) {
    //   document.querySelector('#main').scroll({top: 972, left: 0, behavior: 'smooth'});
    // }
    this.index += 1;
    // this.maxIndex += 1;
    this.getPosts();
  }

  first() {
    document.querySelector('#main').scroll({top: 0, left: 0, behavior: 'smooth'});
    // if (screen.width === 360) {
    //   document.querySelector('#main').scroll({top: 640, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 320) {
    //   document.querySelector('#main').scroll({top: 568, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 375) {
    //   document.querySelector('#main').scroll({top: 667, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 411) {
    //   document.querySelector('#main').scroll({top: 731, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 414) {
    //   document.querySelector('#main').scroll({top: 736, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 768) {
    //   document.querySelector('#main').scroll({top: 972, left: 0, behavior: 'smooth'});
    // }
    this.index = 0;
    this.getPosts();
  }

  previous() {
    document.querySelector('#main').scroll({top: 0, left: 0, behavior: 'smooth'});
    // if (screen.width === 360) {
    //   document.querySelector('#main').scroll({top: 640, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 320) {
    //   document.querySelector('#main').scroll({top: 568, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 375) {
    //   document.querySelector('#main').scroll({top: 667, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 411) {
    //   document.querySelector('#main').scroll({top: 731, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 414) {
    //   document.querySelector('#main').scroll({top: 736, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 768) {
    //   document.querySelector('#main').scroll({top: 972, left: 0, behavior: 'smooth'});
    // }
    this.index -= 1;
    // this.maxIndex -= 1;
    this.getPosts();
  }

  last() {
    document.querySelector('#main').scroll({top: 0, left: 0, behavior: 'smooth'});
    // if (screen.width === 360) {
    //   document.querySelector('#main').scroll({top: 640, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 320) {
    //   document.querySelector('#main').scroll({top: 568, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 375) {
    //   document.querySelector('#main').scroll({top: 667, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 411) {
    //   document.querySelector('#main').scroll({top: 731, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 414) {
    //   document.querySelector('#main').scroll({top: 736, left: 0, behavior: 'smooth'});
    // } else if (screen.width === 768) {
    //   document.querySelector('#main').scroll({top: 972, left: 0, behavior: 'smooth'});
    // }
    this.index = this.maxIndex;
    this.getPosts();
  }
}

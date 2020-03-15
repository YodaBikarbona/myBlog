import {Component, HostListener, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  active = 'home';
  sections = ['home', 'gallery', 'posts'];

  isShow = false;
  topPosToStartShowing = 100;

  constructor(public router: Router) { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
  }

  click(section) {
    this.active = section;
    this.router.navigate([this.active]);
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
}

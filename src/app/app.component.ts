import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { ApplicationService} from './application.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-life-app';

  active = null;

  isShow = false;
  topPosToStartShowing = 100;

  token = false;

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    return false;
  }

  constructor(public router: Router, private service: ApplicationService) { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
    this.service.currentActivate.subscribe( (data: any) => {
      // localStorage.setItem('active', data);
      // this.active = localStorage.getItem('active');
      this.active = data;

    });
    this.service.currentToken.subscribe((data: any) => {
      if (data.length > 0) {
        this.token = true;
      } else {
        this.token = false;
      }
    });
    this.router.navigate([this.active]);
  }

  ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
  }


  click(section) {
    // this.active = section;
    this.gotoTop(null, true);
    // localStorage.setItem('active', section);
    // this.active = localStorage.getItem('active');
    this.active = section;
    this.router.navigate([this.active]);
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

  scroll = (event: any): void => {
    const number = event.srcElement.scrollTop;
    if (number >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
}

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

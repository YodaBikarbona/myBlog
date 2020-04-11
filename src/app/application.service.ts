import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private activate = new BehaviorSubject<string>('home');
  currentActivate = this.activate.asObservable();
  private token = new BehaviorSubject<string>('');
  currentToken = this.token.asObservable();

  constructor() { }

  updateActivate(activate: string) {
    this.activate.next(activate);
  }

  updateToken(token: string) {
    this.token.next(token);
  }
}

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../app.constants';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {LoginRequest} from '../model';

@Injectable({providedIn: 'root'})
export class Service {
  constructor(public http: HttpClient) {
  }

  login(username: string, password: string) {
    const request = new LoginRequest(username, password);
    return this.http.post(`${API_URL}/v1/login`, request);
  }

  getGallery() {
    return this.http.get(`${API_URL}/v1/gallery`);
  }

  getImage(id: string) {
    return this.http.get(`${API_URL}/v1/gallery/${id}`);
  }

  getPost(id: string) {
    return this.http.get(`${API_URL}/v1/posts/${id}`);
  }

  getPosts(offset: number, limit: number) {
    return this.http.get(`${API_URL}/v1/posts?offset=${offset}&limit=${limit}`);
  }

  getHomePosts() {
    return this.http.get(`${API_URL}/v1/home`);
  }
}

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

  getAlbums(){
    return this.http.get(`${API_URL}/v1/albums`);
  }

  getGallery(albumId: number, offset: number, limit: number) {
    const queryString = `?offset=${offset}&limit=${limit}`;
    return this.http.get(`${API_URL}/v1/gallery/album/${albumId}` + queryString);
  }

  getImage(id: string, albumId: number) {
    return this.http.get(`${API_URL}/v1/gallery/album/${albumId}/${id}`);
  }

  getNextImage(id: string, albumId: number) {
    return this.http.get(`${API_URL}/v1/gallery/album/${albumId}/${id}/next`);
  }

  getPreviousImage(id: string, albumId: number) {
    return this.http.get(`${API_URL}/v1/gallery/album/${albumId}/${id}/previous`);
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

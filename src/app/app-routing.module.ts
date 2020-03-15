import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GalleryComponent} from './gallery/gallery.component';
import {PostsComponent} from './posts/posts.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'gallery', component: GalleryComponent
  },
  {
    path: 'posts', component: PostsComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GalleryComponent} from './gallery/gallery.component';
import {PostsComponent} from './posts/posts.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {RestartPasswordComponent} from './restart-password/restart-password.component';
import {ActivationAccountComponent} from './activation-account/activation-account.component';
import {PostComponent} from './post/post.component';
import {PictureComponent} from './picture/picture.component';
import {NewImageComponent} from './new-image/new-image.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'gallery', component: GalleryComponent
  },
  {
    path: 'gallery/:id', component: PictureComponent
  },
  {
    path: 'gallery/picture/new', component: NewImageComponent
  },
  {
    path: 'posts', component: PostsComponent
  },
  {
    path: 'posts/:id', component: PostComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registration', component: RegistrationComponent
  },
  {
    path: 'restart-password', component: RestartPasswordComponent
  },
  {
    path: 'activation-account', component: ActivationAccountComponent
  },
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

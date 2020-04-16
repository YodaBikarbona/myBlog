import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


// Import angular material
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatSidenavModule, MatListModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { GalleryComponent } from './gallery/gallery.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { RestartPasswordComponent } from './restart-password/restart-password.component';
import { ActivationAccountComponent } from './activation-account/activation-account.component';
import { PostComponent } from './post/post.component';
import { PictureComponent } from './picture/picture.component';
import {Service} from './services/service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JWTHeaderInterceptor} from './services/authorization-header.interceptor';

import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { NewImageComponent } from './new-image/new-image.component';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    PostsComponent,
    LoginComponent,
    RegistrationComponent,
    RestartPasswordComponent,
    ActivationAccountComponent,
    PostComponent,
    PictureComponent,
    NewImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MatIconModule, // Angular material
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressBarModule,
    NgxSpinnerModule,
    CarouselModule,
    WavesModule,
  ],
  entryComponents: [
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JWTHeaderInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

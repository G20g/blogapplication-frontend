import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {AppService} from './app.service';
import {BlogsService} from './home/blogs.service';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    NavbarComponent,
    HomeComponent,
    AddPostComponent,
    MyprofileComponent,
    BlogpageComponent,
    EditBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EditorModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    AppService,
    BlogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

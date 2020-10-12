import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil/appareil-view/appareil-view.component';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './appareil/single-appareil/single-appareil.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NewAppareilComponent } from './appareil/new-appareil/new-appareil.component';
import { PostsComponent } from './posts/posts.component';
import { PostItemComponent } from './posts/post-item/post-item.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './users/new-user/new-user.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { BooksService } from './services/books.service';
import { BooksComponent } from './books/books.component';
import { SingleBookComponent } from './books/single-book/single-book.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { NewPostComponent } from './posts/new-post/new-post.component';

@NgModule({
	declarations: [
		AppComponent,
		AppareilComponent,
		AuthComponent,
		AppareilViewComponent,
		SingleAppareilComponent,
		ErrorPageComponent,
		NewAppareilComponent,
		PostsComponent,
		PostItemComponent,
		UsersComponent,
		NewUserComponent,
		SignInComponent,
		SignUpComponent,
		BooksComponent,
		SingleBookComponent,
		BookFormComponent,
		HeaderComponent,
		NewPostComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [
		AppareilService,
		AuthService,
		AuthGuardService,
		UserService,
		BooksService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }

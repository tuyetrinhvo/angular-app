import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppareilListComponent } from './appareils/appareil-list/appareil-list.component';
import { AppareilService } from './services/appareil.service';
import { AppareilViewComponent } from './appareils/appareil-view/appareil-view.component';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './appareils/single-appareil/single-appareil.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NewAppareilComponent } from './appareils/new-appareil/new-appareil.component';
import { PostItemComponent } from './posts/post-item/post-item.component';
import { UserService } from './services/user.service';
import { UsersListComponent } from './users/users-list/users-list.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { BooksService } from './services/books.service';
import { BooksListComponent } from './books/books-list/books-list.component';
import { SingleBookComponent } from './books/single-book/single-book.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { ApplicationListComponent } from './application-list/application-list.component';

@NgModule({
	declarations: [
		AppComponent,
		AppareilListComponent,
		AppareilViewComponent,
		SingleAppareilComponent,
		ErrorPageComponent,
		NewAppareilComponent,
		PostsListComponent,
		PostFormComponent,
		PostItemComponent,
		UsersListComponent,
		NewUserComponent,
		SignInComponent,
		SignUpComponent,
		BooksListComponent,
		SingleBookComponent,
		BookFormComponent,
		HeaderComponent,
		ApplicationListComponent,
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

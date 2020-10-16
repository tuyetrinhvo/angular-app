import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilListComponent } from './appareils/appareil-list/appareil-list.component';
import { NewAppareilComponent } from './appareils/new-appareil/new-appareil.component';
import { SingleAppareilComponent } from './appareils/single-appareil/single-appareil.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { SingleBookComponent } from './books/single-book/single-book.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NewUserComponent } from './users/new-user/new-user.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  { path: 'appareils', component: AppareilListComponent },
  { path: 'appareils/new-appareil', canActivate: [AuthGuardService], component: NewAppareilComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/new-post', canActivate: [AuthGuardService], component: PostFormComponent },
  { path: 'posts/view/:id', component: SinglePostComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/new-user', canActivate: [AuthGuardService], component: NewUserComponent },
  { path: 'books', component: BooksListComponent },
  { path: 'books/new-book', canActivate: [AuthGuardService], component: BookFormComponent },
  { path: 'books/view/:id', component: SingleBookComponent },
  { path: 'auth/sign-in', component: SignInComponent },
  { path: 'auth/sign-up', component: SignUpComponent },
  { path: 'app', component: ApplicationListComponent },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'erreur/404', component: ErrorPageComponent },
  { path: '**', redirectTo: 'erreur/404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

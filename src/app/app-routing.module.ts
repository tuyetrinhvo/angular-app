import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilListComponent } from './appareils/appareil-list/appareil-list.component';
import { NewAppareilComponent } from './appareils/new-appareil/new-appareil.component';
import { SingleAppareilComponent } from './appareils/single-appareil/single-appareil.component';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { SingleBookComponent } from './books/single-book/single-book.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostItemComponent } from './posts/post-item/post-item.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NewUserComponent } from './users/new-user/new-user.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  { path: 'appareils', component: AppareilListComponent },
  { path: 'appareils/new-appareil', component: NewAppareilComponent },
  { path: 'appareils/view/:id', component: SingleAppareilComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/new-post', component: PostFormComponent },
  { path: 'posts/view/:id', component: PostItemComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/new-user', component: NewUserComponent },
  { path: 'books', component: BooksListComponent },
  { path: 'books/new-book', component: BookFormComponent },
  { path: 'books/view/:id', component: SingleBookComponent },
  { path: 'auth', canActivate: [AuthGuardService], component: AuthComponent },
  { path: 'auth/sign-in', component: SignInComponent },
  { path: 'auth/sign-up', component: SignUpComponent },
  { path: '', component: UsersListComponent },
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

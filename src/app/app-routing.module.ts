import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilComponent } from './appareil/appareil.component';
import { NewAppareilComponent } from './appareil/new-appareil/new-appareil.component';
import { SingleAppareilComponent } from './appareil/single-appareil/single-appareil.component';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { BooksComponent } from './books/books.component';
import { SingleBookComponent } from './books/single-book/single-book.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { PostsComponent } from './posts/posts.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NewUserComponent } from './users/new-user/new-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'appareils', component: AppareilComponent },
  { path: 'new-appareil', component: NewAppareilComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'users', component: UsersComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/new-book', component: BookFormComponent },
  { path: 'books/view/:id', component: SingleBookComponent },
  { path: 'auth', canActivate: [AuthGuardService], component: AuthComponent },
  { path: 'auth/sign-in', component: SignInComponent },
  { path: 'auth/sign-up', component: SignUpComponent },
  { path: '', component: UsersComponent },
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilComponent } from './appareil/appareil.component';
import { NewAppareilComponent } from './appareil/new-appareil/new-appareil.component';
import { SingleAppareilComponent } from './appareil/single-appareil/single-appareil.component';
import { AuthComponent } from './auth/auth.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PostsComponent } from './posts/posts.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'appareils', canActivate: [AuthGuardService], component: AppareilComponent },
  { path: 'add-nouvel-appareil', canActivate: [AuthGuardService], component: NewAppareilComponent },
  { path: 'appareils/:id', canActivate: [AuthGuardService], component: SingleAppareilComponent },
  { path: 'posts', canActivate: [AuthGuardService], component: PostsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'auth', component: AuthComponent },
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

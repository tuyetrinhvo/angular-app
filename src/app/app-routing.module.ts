import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilComponent } from './appareil/appareil.component';
import { SingleAppareilComponent } from './appareil/single-appareil/single-appareil.component';
import { AuthComponent } from './auth/auth.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PostListComponent } from './post-list/post-list.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'appareils', canActivate: [AuthGuardService], component: AppareilComponent },
  { path: 'appareils/:id', canActivate: [AuthGuardService], component: SingleAppareilComponent },
  { path: 'posts', canActivate: [AuthGuardService], component: PostListComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: PostListComponent },
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

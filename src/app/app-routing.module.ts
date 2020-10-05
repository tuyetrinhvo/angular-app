import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilComponent } from './appareil/appareil.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: 'appareil', component: AppareilComponent },
  { path: 'posts', component: PostListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

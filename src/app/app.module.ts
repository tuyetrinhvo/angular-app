import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil/appareil-view/appareil-view.component';
import { AuthService } from './services/auth.service';

@NgModule({
	declarations: [
		AppComponent,
		AppareilComponent,
		PostListComponent,
		PostListItemComponent,
		AuthComponent,
		AppareilViewComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [
		AppareilService,
		AuthService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'angular-app';
	isAuth = false;

	constructor() {
		setTimeout(() => {
			this.isAuth = true;
		}, 2000);
	}
}

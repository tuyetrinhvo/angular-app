import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'angular-app';
	isAuth = false;
	appareilOne = 'Machine à laver';
	appareilTwo = 'Frigo';
	appareilThree = 'Lave vaisselles';

	constructor() {
		setTimeout(() => {
			this.isAuth = true;
		}, 2000);
	}

	onAllumer() {
		console.log('On allume tout !');
	}
}

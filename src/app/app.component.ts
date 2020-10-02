import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'angular-app';
	isAuth = false;
	appareils = [
		{
			name: 'Machine à laver',
			status: 'éteint'
		},
		{
			name: 'Frigo',
			status: 'allumé'
		},
		{
			name: 'Lave vaisselles',
			status: 'éteint'
		},
		{
			name: 'Télé',
			status: 'allumé'
		}
	];

	constructor() {
		setTimeout(() => {
			this.isAuth = true;
		}, 2000);
	}

	onAllumer() {
		console.log('On allume tout !');
	}
}

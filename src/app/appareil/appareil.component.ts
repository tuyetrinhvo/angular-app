import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-appareil',
	templateUrl: './appareil.component.html',
	styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
	isAuth = false;
	lastUpdate = new Promise((resolve, reject) => {
		const date = new Date();
		setTimeout(() => {
			resolve(date);
		}, 2000);
	});
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

	ngOnInit(): void { }

	onAllumer() {
		console.log('On allume tout !');
	}

	getColor(status: string) {
		if (status === 'allumé') {
			return 'green';
		} else {
			return 'red';
		}
	}
}

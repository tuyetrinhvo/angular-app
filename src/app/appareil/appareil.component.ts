import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-appareil',
	templateUrl: './appareil.component.html',
	styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
	isAuth = false;
	lastUpdate = new Date();

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

	onToutAllumer() {
		for (let appareil of this.appareils) {
			appareil.status = 'allumé';
		}
		this.lastUpdate = new Date();
	}

	onToutEteindre() {
		for (let appareil of this.appareils) {
			appareil.status = 'éteint';
		}
		this.lastUpdate = new Date();
	}

	onAllumer(i: number) {
		this.appareils[i].status = 'allumé';
	}

	onEteindre(i: number) {
		this.appareils[i].status = 'éteint';
	}

	getColor(status: string) {
		if (status === 'allumé') {
			return 'green';
		} else {
			return 'red';
		}
	}
}

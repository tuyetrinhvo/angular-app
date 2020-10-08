import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
	selector: 'app-appareil',
	templateUrl: './appareil.component.html',
	styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
	isAuth = false;

	update() {
		return new Date();
	}

	appareils: any[];

	constructor(private appareilSerivce: AppareilService) {
		setTimeout(() => {
			this.isAuth = true;
		}, 2000);
		this.appareils = this.appareilSerivce.appareils;
	}

	ngOnInit(): void { }

	onToutAllumer() {
		this.appareilSerivce.switchOnAll();
		this.update();
	}

	onToutEteindre() {
		this.appareilSerivce.switchOffAll();
		this.update();
	}

	onSwitch(i: number) {
		if (this.appareils[i].status === 'allumé') {
			this.appareilSerivce.switchOffOne(i)
		} else {
			this.appareilSerivce.switchOnOne(i)
		}
		this.update();
	}

	getColor(status: string) {
		if (status === 'allumé') {
			return 'green';
		} else {
			return 'red';
		}
	}
}

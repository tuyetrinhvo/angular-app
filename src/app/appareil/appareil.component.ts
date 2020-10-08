import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
	selector: 'app-appareil',
	templateUrl: './appareil.component.html',
	styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

	appareils: any[];
	lastUpdate = new Date();

	constructor(private appareilSerivce: AppareilService) { }

	ngOnInit(): void {
		this.appareils = this.appareilSerivce.appareils;
	}

	onToutAllumer() {
		this.appareilSerivce.switchOnAll();
	}

	onToutEteindre() {
		this.appareilSerivce.switchOffAll();
	}

}

import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
	selector: 'app-appareil',
	templateUrl: './appareil.component.html',
	styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

	appareils: any[];
	lastUpdate = new Date();

	seconds: number;

	constructor(private appareilSerivce: AppareilService) { }

	ngOnInit(): void {
		this.appareils = this.appareilSerivce.appareils;
		const counter = Observable.interval(1000);
		counter.subscribe(
			(data: number) => {
				this.seconds = data;
			},
			(error: any) => {
				console.log('error');
			},
			() => {
				console.log('Observable complete');
			}
		);

	}

	onToutAllumer() {
		this.appareilSerivce.switchOnAll();
	}

	onToutEteindre() {
		this.appareilSerivce.switchOffAll();
	}

}

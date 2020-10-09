import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';

@Component({
	selector: 'app-appareil',
	templateUrl: './appareil.component.html',
	styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit, OnDestroy {

	appareils: any[];
	lastUpdate = new Date();

	seconds: number;
	counterSubscription: Subscription;

	constructor(private appareilSerivce: AppareilService) { }

	ngOnInit(): void {
		this.appareils = this.appareilSerivce.appareils;
		const counter = Observable.interval(1000);
		this.counterSubscription = counter.subscribe(
			(data: number) => {
				this.seconds = data;
			}
		);

	}

	onToutAllumer() {
		this.appareilSerivce.switchOnAll();
	}

	onToutEteindre() {
		this.appareilSerivce.switchOffAll();
	}

	ngOnDestroy() {
		this.counterSubscription.unsubscribe();
	}

}

import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'angular-app';

	constructor() {
		const firebaseConfig = {
			apiKey: "AIzaSyBD28YPx-AQjhU6j3ZEeiM-abzWO_9i97Q",
			authDomain: "applications-angular.firebaseapp.com",
			databaseURL: "https://applications-angular.firebaseio.com",
			projectId: "applications-angular",
			storageBucket: "applications-angular.appspot.com",
			messagingSenderId: "771863813139",
			appId: "1:771863813139:web:1286d196403c88d053b3e6",
			measurementId: "G-D481LC07B4"
		};

		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
		firebase.analytics();
	}

	ngOnInit() { }


}

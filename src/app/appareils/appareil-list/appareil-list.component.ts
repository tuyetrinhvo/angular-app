import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-appareil-list',
  templateUrl: './appareil-list.component.html',
  styleUrls: ['./appareil-list.component.scss']
})
export class AppareilListComponent implements OnInit, OnDestroy {

  appareils: any[];
  lastUpdate = new Date();

  appareilsSubscription: Subscription;

  isAuth: boolean;

  constructor(private appareilSerivce: AppareilService) { }

  ngOnInit(): void {
    this.appareilsSubscription = this.appareilSerivce.appareilsSubject.subscribe(
      (data: any[]) => {
        this.appareils = data;
      }
    );
    this.appareilSerivce.getAppareils();
    this.appareilSerivce.emitAppareilSubject();

    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
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
    this.appareilsSubscription.unsubscribe();
  }

  /*   onSave() {
      this.appareilSerivce.saveAppareilsToServer();
    }
  
    onFetch() {
      this.appareilSerivce.getAppareilsFromServer();
    } */

}


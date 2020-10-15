import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-appareil-list',
  templateUrl: './appareil-list.component.html',
  styleUrls: ['./appareil-list.component.scss']
})
export class AppareilListComponent implements OnInit, OnDestroy {

  appareils: any[];
  lastUpdate = new Date();

  seconds: number;
  counterSubscription: Subscription;

  appareilsSubscription: Subscription;

  constructor(private appareilSerivce: AppareilService) { }

  ngOnInit(): void {
    this.appareilsSubscription = this.appareilSerivce.appareilsSubject.subscribe(
      (data: any[]) => {
        this.appareils = data;
      }
    );
    this.appareilSerivce.emitAppareilSubject();

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
    this.appareilsSubscription.unsubscribe();
  }

  /*   onSave() {
      this.appareilSerivce.saveAppareilsToServer();
    }
  
    onFetch() {
      this.appareilSerivce.getAppareilsFromServer();
    } */

}


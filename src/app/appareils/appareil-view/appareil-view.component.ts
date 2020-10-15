import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  isAuth: boolean;

  constructor(private appareilSerivce: AppareilService) { }

  ngOnInit(): void {
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

  onSwitch() {
    if (this.appareilStatus === 'allumé') {
      this.appareilSerivce.switchOffOne(this.index);
    } else {
      this.appareilSerivce.switchOnOne(this.index);
    }
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }

  onDelete() {
    this.appareilSerivce.removeAppareil(this.index);
  }

}

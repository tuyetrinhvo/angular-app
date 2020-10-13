import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';

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

  constructor(private appareilSerivce: AppareilService) { }

  ngOnInit(): void { }

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

}

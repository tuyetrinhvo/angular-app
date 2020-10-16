import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from 'src/app/services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string;
  status: string;
  check: boolean;

  constructor(
    private appareilService: AppareilService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.appareilService.getAppareilById(+id).then(
      (data) => {
        if (data === null) {
          this.check = false;
        } else {
          this.name = data['name'];
          this.status = data['status'];
          this.check = true;
        }
      }
    );
  }

}

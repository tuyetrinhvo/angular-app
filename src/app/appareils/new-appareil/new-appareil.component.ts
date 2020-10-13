import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppareilService } from 'src/app/services/appareil.service';

@Component({
  selector: 'app-new-appareil',
  templateUrl: './new-appareil.component.html',
  styleUrls: ['./new-appareil.component.scss']
})
export class NewAppareilComponent implements OnInit {

  defaultStatus = 'éteint';

  constructor(
    private appareilService: AppareilService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
    this.appareilService.addAppareil(name, status);
    this.router.navigate(['/appareils']);
  }
}

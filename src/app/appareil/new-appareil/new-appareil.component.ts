import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-appareil',
  templateUrl: './new-appareil.component.html',
  styleUrls: ['./new-appareil.component.scss']
})
export class NewAppareilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}

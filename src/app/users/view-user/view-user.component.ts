import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  user: User;
  id: number;
  check = true;
  isUpdate = false;
  isAuth: boolean;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = new User('', '', '', '');
    const id = this.route.snapshot.params['id'];
    this.userService.getOneUser(+id).then(
      (user: User) => {
        this.user = user;
      }
    ).catch(() => {
      this.check = false;
    });

    this.id = id;

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

  onUpdate() {
    this.isUpdate = true;
  }

  onDelete() {
    this.userService.removeUser(this.id);
    this.router.navigate(['/users']);
  }

}
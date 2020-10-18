import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[];
  userSubscription: Subscription;
  isUpdate = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.getUsers();
    this.userService.emitUsers();
  }

  onDeleteUser(i: number) {
    this.userService.removeUser(i);
  }

  onUpdateUser() {
    this.isUpdate = true;
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();

  }
}

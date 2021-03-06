import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {

  users: User[];
  userSubscription: Subscription;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.getUsers();
    this.userService.emitUsers();
  }

  onViewUser(id: number) {
    this.router.navigate(['/users', 'view', id]);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}

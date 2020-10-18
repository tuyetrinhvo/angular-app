import { Subject } from 'rxjs';
import { User } from '../models/User.model';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable()
export class UserService {

  users: User[] = [];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users);
  }

  saveUsers() {
    firebase.database().ref('/characters').set(this.users);
  }

  addUser(user: User) {
    this.users.push(user);
    this.saveUsers();
    this.emitUsers();
  }

  getUsers() {
    firebase.database().ref('/characters').on('value', (data) => {
      this.users = data.val() ? data.val() : [];
      this.emitUsers();
    });
  }

  getOneUser(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/characters/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            console.log('Erreur ' + error);
            reject(error);
          }
        );
      }
    );
  }

  removeUser(userId: number) {
    firebase.database().ref('/characters/' + userId).remove();
    console.log('test');
    this.emitUsers();
  }

  findUserByIndex(user: User) {
    return this.users.findIndex(element => element === user);
  }

}
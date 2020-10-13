import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    isAuth = false;

    constructor() { }

    createNewUser(email: string, password: string) {
        return new Promise(
            (resolve, reject) => {

            }
        );

    }

    signIn() {
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        this.isAuth = true;
                        resolve(true);
                    }, 2000
                );
            }
        );
    }

    signOut() {
        this.isAuth = false;
    }
}
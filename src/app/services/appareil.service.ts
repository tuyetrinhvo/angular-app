import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AppareilService {

    appareilsSubject = new Subject<any[]>();

    private appareils = [];

    constructor(private httpClient: HttpClient) {
        this.getAppareils();
    }

    emitAppareilSubject() {
        this.appareilsSubject.next(this.appareils);
    }

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (s) => {
                return s.id === id;
            }
        );
        return appareil;
    }

    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
        this.saveAppareils();
        this.emitAppareilSubject();
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
        this.saveAppareils();
        this.emitAppareilSubject();
    }

    switchOnOne(i: number) {
        this.appareils[i].status = 'allumé';
        this.saveAppareils();
        this.emitAppareilSubject();
    }

    switchOffOne(i: number) {
        this.appareils[i].status = 'éteint';
        this.saveAppareils();
        this.emitAppareilSubject();
    }

    addAppareil(name: string, status: string) {
        const newAppareil = {
            id: 0,
            name: '',
            status: ''
        };

        newAppareil.name = name;
        newAppareil.status = status;
        newAppareil.id = this.appareils[(this.appareils.length - 1)].id + 1;

        this.appareils.push(newAppareil);
        this.saveAppareils();
        this.emitAppareilSubject();
    }

    saveAppareils() {
        firebase.database().ref('/appareils').set(this.appareils);
    }

    getAppareils() {
        firebase.database().ref('/appareils').on('value', (data) => {
            this.appareils = data.val() ? data.val() : [];
            this.emitAppareilSubject();
        });
    }

    removeAppareil(i: number) {

        const appareilToRemove = this.appareils.findIndex(
            (ele) => {
                if (ele === this.appareils[i]) {
                    return true;
                }
                console.log(ele);

            });

        this.appareils.splice(appareilToRemove, 1);
        this.saveAppareils();
        this.emitAppareilSubject();
    }

    /*     saveAppareilsToServer() {
            this.httpClient
                .put('https://applications-angular.firebaseio.com/appareils.json', this.appareils)
                .subscribe(
                    () => {
                        console.log('Enregistré !');
                    },
                    (error) => {
                        console.log('Erreur : ' + error);
                    }
                );
        }
    
        getAppareilsFromServer() {
            this.httpClient
                .get<any[]>('https://applications-angular.firebaseio.com/appareils.json')
                .subscribe(
                    (response) => {
                        this.appareils = response;
                        this.emitAppareilSubject();
                    },
                    (error) => {
                        console.log('Erreur : ' + error);
                    }
                );
        } */

}
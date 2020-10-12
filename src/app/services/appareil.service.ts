import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class AppareilService {

    appareilsSubject = new Subject<any[]>();

    private appareils = [
        {
            id: 1,
            name: 'Machine à laver',
            status: 'éteint'
        },
        {
            id: 2,
            name: 'Frigo',
            status: 'allumé'
        },
        {
            id: 3,
            name: 'Lave vaisselles',
            status: 'éteint'
        },
        {
            id: 4,
            name: 'Télé',
            status: 'allumé'
        }
    ];

    constructor(private httpClient: HttpClient) { }

    emitAppareilSubject() {
        this.appareilsSubject.next(this.appareils.slice());
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
        this.emitAppareilSubject();
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
        this.emitAppareilSubject();
    }

    switchOnOne(i: number) {
        this.appareils[i].status = 'allumé';
        this.emitAppareilSubject();
    }

    switchOffOne(i: number) {
        this.appareils[i].status = 'éteint';
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
        this.emitAppareilSubject();
    }

    saveAppareilsTOserver() {
        this.httpClient
            .post('https://angular-app-3809a.firebaseio.com/appareils.json', this.appareils)
            .subscribe(
                () => {
                    console.log('Enregistré !');
                },
                (error) => {
                    console.log('Erreur : ' + error);
                }
            );
    }

}
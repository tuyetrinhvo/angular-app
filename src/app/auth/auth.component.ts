import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isAuth: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Vous êtes connecté');
        this.isAuth = this.authService.isAuth;
        this.router.navigate(['appareils']);
      }
    )
  }

  onSignOut() {
    console.log('Vous êtes déconnecté');
    this.authService.signOut();
    this.isAuth = this.authService.isAuth;
  }

}

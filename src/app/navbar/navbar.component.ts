import { Component, OnInit } from '@angular/core';
import { SocialUser, AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { CentralAuthorisationService } from '../../services/backend/central-authorisation.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { UserService } from '../../security/UserService';
import { AuthGuard } from '../../security/AuthGuard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private userService: UserService) { }

  ngOnInit() {  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  signInGoogle(): boolean {
    this.userService.signInGoogle();
    return this.isLoggedIn();
  }

  signInFacebook(): boolean {
    this.userService.signInFacebook();
    return this.isLoggedIn();
  }
  
  signOut(): boolean {
    this.userService.signOut();
    return this.isLoggedIn();
  }

}

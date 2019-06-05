import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { UserService } from '../../../security/UserService';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  internalFrontendUrl: string;

 
  constructor(private userService: UserService,
    private cookieService: CookieService,
    private translate: TranslateService,
    private router: Router) { }

  ngOnInit() {  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
  
  logginWithGoogle(): boolean {
    this.userService.signInGoogle();
    return this.isLoggedIn();
    //return this.actLikeLoggedIn();
  }
  
  logginWithFacebook(): boolean {
    //this.userService.signInFacebook();
    //return this.isLoggedIn();
    return this.actLikeLoggedIn();
  }

  actLikeLoggedIn(): boolean {
    this.userService.actLikeLoggedIn();
    return this.isLoggedIn();
  }

}

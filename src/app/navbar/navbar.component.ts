import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../security/UserService';
import { environment } from '../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {  }
  
  signOut(): void {
    this.userService.signOut();
    this.router.navigate(['logout']);
  }

  signIn(): void {
    this.router.navigate(['login']);
  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  goHome(): void {
    this.router.navigate(['']);
  }

}

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../security/UserService';
import { environment } from '../../environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  constructor(private userService: UserService,
              private cookieService: CookieService,
              private translate: TranslateService) { }

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

  setLanguage(language: string) {
    this.cookieService.set(environment.cookieNameLanguage, language);
    this.loadLanguage();
  }

  loadLanguage(): void {
    this.translate.setDefaultLang(this.cookieService.get(environment.cookieNameLanguage));
  }

}

import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

const COOKIE_NAME_LANGUAGE = "lang";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private token;

  constructor(private cookieService: CookieService,
              private translate: TranslateService) {
    this.token = cookieService.get("token");
    if (this.cookieService.get(environment.cookieNameLanguage)) {
      this.translate.setDefaultLang(this.cookieService.get(environment.cookieNameLanguage));            
    } else {
      this.cookieService.set(environment.cookieNameLanguage, environment.defaultLanguage);
      this.translate.setDefaultLang(this.cookieService.get(environment.cookieNameLanguage));            
    }

    console.log(this.token);
  }

}

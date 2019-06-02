import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private token;

  constructor(private cookieService: CookieService) {
    this.token = cookieService.get("token");
    console.log(this.token);
  }
}

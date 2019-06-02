import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { CentralAuthorisationService } from '../../services/backend/central-authorisation.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.css']
})
export class InternalComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  

}

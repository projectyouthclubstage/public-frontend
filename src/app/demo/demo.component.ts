import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { CentralAuthorisationService } from '../../services/backend/central-authorisation.service';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  user: SocialUser;

  constructor(private authService: AuthService,
              private authorisationService: CentralAuthorisationService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  callBackend(): void {

    console.log(this.user);
    console.log(this.user.idToken);

    this.authorisationService.getUserForExternalAuth(this.user.provider, this.user.idToken).subscribe(
      data => {
        console.log(data);
      }
    )

  }

  signOut(): void {
    this.authService.signOut();
  }

}

import { AuthService, SocialUser, FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { CentralAuthorisationService } from "../services/backend/central-authorisation.service";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";

@Injectable()
export class UserService  {

    private user: SocialUser

    constructor(private authService: AuthService,
                private authorisationService: CentralAuthorisationService,
                private cookieService: CookieService,
                private router: Router) {
        this.authService.authState.subscribe((user) => {
            this.user = user;
        });
    }

    public signInGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
            .then(
                user => {
                    this.callBackend(user);
                })
            .catch(
                reason => {
                    console.log("Login with google failed! - " + reason);
                }
            );
    }

    public signInFacebook(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
        .then(
            user => {
                this.callBackend(user);
            })
        .catch(
            reason => {
                console.log("Login with facebook failed! - " + reason);
            }
        );
    }

    public actLikeLoggedIn(): void {        
        this.cookieService.set(environment.cookieNameToken, "fakeIt");
    }

    private callBackend(user: SocialUser): void {
        console.log("Provider: " + user.provider);
        console.log("IdToken: " + user.idToken);
        //this.authorisationService.getUserForExternalAuth(this.user.provider, this.user.idToken).subscribe(
        //data => {
        //    this.cookieService.set(environment.cookieNameToken, this.user.idToken);
        //});
        this.actLikeLoggedIn();
    }
    
    public signOut(): void {
        this.cookieService.delete(environment.cookieNameToken);
        this.authService.signOut();
    }

    public isLoggedIn(): boolean {
        return this.cookieService.check(environment.cookieNameToken);
    }

}
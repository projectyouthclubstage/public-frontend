import { AuthService, SocialUser, FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { CentralAuthorisationService } from "../services/backend/central-authorisation.service";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService  {

    private user: SocialUser
    private loggedIn: false;

    constructor(private authService: AuthService,
                private authorisationService: CentralAuthorisationService,
                private cookieService: CookieService,
                private router: Router) {
        this.authService.authState.subscribe((user) => {
            this.user = user;
        });
    }

    public signInGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
        this.callBackend();
    }

    public signInFacebook(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
        this.callBackend();
    }

    private callBackend(): void {

        this.authorisationService.getUserForExternalAuth(this.user.provider, this.user.idToken).subscribe(
        data => {
            console.log("asdasdadadds");
            this.cookieService.set("token", this.user.idToken);
        }
        )

        this.cookieService.set("token", this.user.idToken);

        this.router.navigate(['internal']);
    }

    
    public signOut(): void {
        this.cookieService.deleteAll();
        this.authService.signOut();
        console.log("JESSA");
        this.router.navigate(['logout']);
    }

    isLoggedIn(): boolean {
        return this.cookieService.check("token");
    }

}
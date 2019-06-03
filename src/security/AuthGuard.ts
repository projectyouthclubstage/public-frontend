import { CanActivate } from "@angular/router";
import { UserService } from "./UserService";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService) { }

    canActivate() {

        return true;

        if (this.userService.isLoggedIn()) {
            console.log("GUARD - yes");
            return true;
        } else {
            console.log("GUARD - no");
            window.alert("NONONONONO!");
            return false;
        }
    }

}
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../security/UserService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {  }

  isLoggedIn(): boolean {
    if(this.userService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

}

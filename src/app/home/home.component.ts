import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToContact(): void {
    location.href = 'mailto:contact@youth-club-stage.de', '_black';
  }

  goToImprint(): void {
    this.router.navigate(['/imprint']);
  }

}

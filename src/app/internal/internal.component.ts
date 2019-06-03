import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.css']
})
export class InternalComponent implements OnInit {

  internalFrontendUrl: string;

  constructor() {
    this.internalFrontendUrl = environment.internalFrontendUrl;
  }

  ngOnInit() {  }

}

import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public _router: Router, public _location: Location) {}

  ngOnInit(): void {
    // this.reloadCurrentRoute();
  }
  reloadCurrentRoute(): void {
    this._router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}

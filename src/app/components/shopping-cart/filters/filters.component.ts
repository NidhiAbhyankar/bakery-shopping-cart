import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  model: any = {};

  constructor(public _router: Router, public _location: Location) {}

  ngOnInit(): void {}
  filter() {
    console.log(this.model);
    this.reloadCurrentRoute();
  }

  reloadCurrentRoute(): void {
    //let currentUrl = this._router.url;
    // this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //   this._router
    //     .navigate([
    //       '/shop/',
    //       { fromValue: this.model.fromValue, toValue: this.model.toValue },
    //     ])
    //     .then(() => {
    //       window.location.reload();
    //     });
    //console.log(currentUrl);
    // });

    this._router
      .navigate([
        '/shop/',
        { fromValue: this.model.fromValue, toValue: this.model.toValue },
      ])
      .then(() => {
        window.location.reload();
      });
  }
}

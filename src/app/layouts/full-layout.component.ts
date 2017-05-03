import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  public disabled: boolean           = false;
  public status: {isopen: boolean}   = {isopen: false};
  public user:Object                 = {};
  public active;
  constructor(private router : Router, private _route: ActivatedRoute, private _cookieService: CookieService ) { 
    this.user = JSON.parse(localStorage.getItem("user"));
    this.active = this._route.snapshot["_urlSegment"].segments[0].path;
  }

  public toggled(open: boolean): void {
    // console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}

  layout(value) {
    this.active = value;
  }

  logout() {
    this._cookieService.removeAll();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}

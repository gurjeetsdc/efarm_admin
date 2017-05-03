import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
// import { UserService } from './shared/user.service';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie';

@Injectable()
export class DeactiveRouteGuard implements CanActivate {

  constructor(private router : Router, private _cookieService: CookieService) {
  }

  canActivate() {
  	
  	let token = this._cookieService.get('token');
  	console.log('DeactiveRouteGuard');
  	console.log(token);

    
    if(token) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
    /*if(localStorage.getItem("user")) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }*/
  }
}
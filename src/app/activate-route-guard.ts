import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
// import { UserService } from './shared/user.service';
import { Router } from '@angular/router';

@Injectable()
export class ActiveRouteGuard implements CanActivate {

  constructor(private router : Router) {
    console.log("In activate-route-guard file");
  }

  canActivate() {
  	console.log('AuthGuard#canActivate called');
    if(!localStorage.getItem("user")) {
      console.log("user not exists")
      return true;
    } else {
      console.log("user exists ",localStorage.getItem("user"))
      this.router.navigate(['/dashboard']);
    }
  }
}
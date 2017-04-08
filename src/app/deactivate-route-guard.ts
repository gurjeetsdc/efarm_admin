import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
// import { UserService } from './shared/user.service';
import { Router } from '@angular/router';

@Injectable()
export class DeactiveRouteGuard implements CanActivate {

  constructor(private router : Router) {
    console.log("In deactive-route-guard file");
  }

  canActivate() {
  	console.log('AuthGuard#canActivate called');
    if(localStorage.getItem("user")) {
      console.log("user exists")
      return true;
    } else {
      console.log("user not  exists ")
      this.router.navigate(['/login']);
    }
  }
}
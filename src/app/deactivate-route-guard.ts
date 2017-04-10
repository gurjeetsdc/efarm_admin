import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
// import { UserService } from './shared/user.service';
import { Router } from '@angular/router';

@Injectable()
export class DeactiveRouteGuard implements CanActivate {

  constructor(private router : Router) {
  }

  canActivate() {
    if(localStorage.getItem("user")) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
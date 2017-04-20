import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'add-user.component.html'
})
export class AddUserComponent {
	private user = {};
  constructor(private router : Router, private _userService: UserService) { }

  addUser() {
    this._userService.addUser(this.user)
                       .subscribe(
                           res => {
                             this.router.navigate(['/user/list']);
                           },
                           err => {

                           });
  }
}

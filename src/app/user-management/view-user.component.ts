import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { UserService } from './user.service';

@Component({
    templateUrl: 'view-user.component.html'
})
export class ViewUserComponent {
	private userID = '';
	private user = {};
    private copy_user = {};
    private edit = false;
    constructor(route: ActivatedRoute, private router : Router,private _userService: UserService) { 
        this.userID = route.snapshot.params['id'];
  	    this._userService.getUser(this.userID)
                       .subscribe(
                           res => {
                             this.user = res;
                           },
                           err => {

                           });
    }

    editUser() {
        this.edit = !this.edit;
        this.copy_user = JSON.parse(JSON.stringify(this.user));
    }

    cancel() {
        this.edit = !this.edit;
        this.user = JSON.parse(JSON.stringify(this.copy_user));
    }

    save() {
        this._userService.updateUser(this.user)
                       .subscribe(
                           res => {
                             this.edit = !this.edit;
                             this.copy_user = JSON.parse(JSON.stringify(this.user));
                           },
                           err => {

                           });
    }

    modify() {
      this.router.navigate(['/user/update/' + this.user["id"]]);
    }
}

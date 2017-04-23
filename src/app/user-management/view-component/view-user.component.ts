import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
    templateUrl: 'view-user.component.html'
})
export class ViewUserComponent {
	private userID = '';
	private user = {};
    private copy_user = {};
    private edit = false;
    private isLoading = false;

    constructor(route: ActivatedRoute, private _router : Router,private _userService: UserService) { 
        this.userID = route.snapshot.params['id'];
  	    this._userService.getUser(this.userID).subscribe(res => {
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
      this._router.navigate(['/user/update/' + this.user["id"]]);
    }

    removeUser() {
        if(confirm("Are you sure to delete User")) {
            this.isLoading = true;
            this.user["isDeleted"] = true;
            this._userService.updateUser(this.user).subscribe(res => {
                this.isLoading = false;
                this._router.navigate(['/user/list/']);      
            },err => {
                this.isLoading = false;
            });             
        }
    }
}

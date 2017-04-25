import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
    templateUrl: 'view-user.component.html'
})
export class ViewUserComponent {
	private userID = '';
	private user = {};
    private isLoading = true;

    constructor(route: ActivatedRoute, private _router : Router,private _userService: UserService) { 
        this.userID = route.snapshot.params['id'];
  	    this._userService.getUser(this.userID).subscribe(res => {
           this.user = res;
           this.isLoading = false;
        },err => {
           this.isLoading = false 
        });
    }

    updateUser(userid) {        
        let route = '/user/edit/'+ userid;
        this._router.navigate([route]);       
    }

    removeUser(userid) {
        if(confirm("Do you want to delete?")) {
            this.isLoading = true;
            this._userService.deleteUser(userid).subscribe(res => {
                this.isLoading = false;
                this._router.navigate(['/user/list/']);      
            },err => {
                this.isLoading = false;
            });             
        }
    }
}

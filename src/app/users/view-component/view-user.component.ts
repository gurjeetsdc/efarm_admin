import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
    templateUrl: 'view-user.component.html'
})
export class ViewUserComponent {
	public userID = '';
	public user = {};
    public isLoading = true;

    constructor(route: ActivatedRoute, private _router : Router,private _userService: UserService) { 
        this.userID = route.snapshot.params['id'];
  	    this._userService.get(this.userID).subscribe(res => {
           this.user = res;
           this.isLoading = false;
        },err => {
           this.isLoading = false
           this.checkAccessToken(err); 
        });
    }

    editUser(userid) {        
        let route = '/users/edit/'+ userid;
        this._router.navigate([route]);       
    }

    removeUser(userid) {
        if(confirm("Do you want to delete?")) {
            this.isLoading = true;
            this._userService.delete(userid).subscribe(res => {
                this.isLoading = false;
                this._router.navigate(['/users/list/']);      
            },err => {
                this.isLoading = false;
            });             
        }
    }

    checkAccessToken( err ): void {
        let status     = err.status;
        let statusText = err.statusText;

        if( (status == 401 && statusText == 'Unauthorized')) {
            localStorage.removeItem('user');
            this._router.navigate(['/login', {data: true}]);
        }else {
            console.log('Something unexpected happened, please try again later.');
        }        
    }
}

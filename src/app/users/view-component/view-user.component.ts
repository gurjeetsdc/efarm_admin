import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../services/user.service';
import { CookieService } from 'ngx-cookie';
@Component({
    templateUrl: 'view-user.component.html'
})
export class ViewUserComponent {
	public userID = '';
	public user = {};
    public isLoading = true;

    constructor(route: ActivatedRoute, private _router : Router,private _userService: UserService, private _cookieService: CookieService ) { 
        this.userID = route.snapshot.params['id'];
  	    this._userService.get(this.userID).subscribe(res => {
            if(res.success) {
               this.user = res.data;
               this.isLoading = false;
            } else {
               this.checkAccessToken(res.error); 
            } 
        },err => {
           this.isLoading = false
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

    /*This function is use to remove user session if Access token expired. */
    checkAccessToken( err ): void {
        let code    = err.code;
        let message = err.message;

        if( (code == 401 && message == "authorization")) {
            this._cookieService.removeAll();
            this._router.navigate(['/login', {data: true}]);
        }        
    }
}

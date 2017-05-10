import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
@Component({
  templateUrl: 'addupdate-user.component.html'
})
export class AddUpdateUserComponent {
	
    public user            = {};
    public isLoading       = false;
    public isPageLoading   = true;
    public userID:any;

    constructor(private _router : Router, private _activateRouter: ActivatedRoute, private _userService: UserService, private _cookieService: CookieService ) { 
        this.userID = _activateRouter.snapshot.params['id'];        
        if( this.userID ) {
            this._userService.get(this.userID).subscribe(res => {
                this.user = res.data;
                this.isPageLoading = false;
            },err => {
                this.isPageLoading = false;
                this.checkAccessToken(err);
            });
        } else {
            this.isPageLoading = false;
        }
    } 

    /*If useID exist then will update existing user otherwise will add new user*/
    save() {
        this.isLoading = true;
        if(this.userID) {
            this.user["username"] = this.user["email"];
            this._userService.update(this.user).subscribe(res => {
                this.isLoading = false;
                this._router.navigate(['/users/list']);
            },err => {
                this.isLoading = false;
                this.checkAccessToken(err);
            })
        } else {
            this.user["username"] = this.user["email"];
            this._userService.add(this.user).subscribe(res => {
                this.isLoading = false;
                this._router.navigate(['/users/list']);
            },err => {
                this.isLoading = false;
                this.checkAccessToken(err);
            });
        }
    }

    checkAccessToken( err ): void {
        let status     = err.status;
        let statusText = err.statusText;

        if( (status == 401 && statusText == 'Unauthorized')) {
            this._cookieService.removeAll();
            this._router.navigate(['/login', {data: true}]);
        } else {
            console.log('Something unexpected happened, please try again later.');
        }        
    } 
}

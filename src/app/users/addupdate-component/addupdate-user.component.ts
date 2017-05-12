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
                if(res.success) {
                    this.user = res.data;
                    this.isPageLoading = false;
                } else {
                    this.checkAccessToken(res.error);
                }
            },err => {
                this.isPageLoading = false;
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
                if(res.success) {                    
                    this.isLoading = false;
                    this._router.navigate(['/users/list']);
                } else {
                    this.checkAccessToken(res.error);
                }
            },err => {
                this.isLoading = false;
            })
        } else {
            this.user["username"] = this.user["email"];
            this._userService.add(this.user).subscribe(res => {
                if(res.success) {
                    this.isLoading = false;
                    this._router.navigate(['/users/list']);
                } else {
                    this.checkAccessToken(res.error);
                }
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

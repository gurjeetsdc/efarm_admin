import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'addupdate-user.component.html'
})
export class AddUpdateUserComponent {
	
    public user            = {};
    public isLoading       = true;
    public userID:any;

    constructor(private _router : Router, private _activateRouter: ActivatedRoute, private _userService: UserService) { 
        this.userID = _activateRouter.snapshot.params['id'];        
        if( this.userID ) {
            this._userService.get(this.userID).subscribe(res => {
                this.user = res;
                this.isLoading = false;
            },err => {
                this.isLoading = false;
                this.checkAccessToken(err);
            });
        } else {
            this.isLoading = false;
        }
    } 

    /*If useID exist then will update existing user otherwise will add new user*/
    save() {
        this.isLoading = true;
        if(this.userID) {
            this._userService.update(this.user).subscribe(res => {
                this.isLoading = false;
                this._router.navigate(['/user/list']);
            },err => {
                this.isLoading = false;
                this.checkAccessToken(err);
            })
        } else {
            this._userService.add(this.user).subscribe(res => {
                this.isLoading = false;
                this._router.navigate(['/user/list']);
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
            localStorage.removeItem('user');
            this._router.navigate(['/login', {data: true}]);
        }else {
            console.log('Something unexpected happened, please try again later.');
        }        
    } 
}

import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'addupdate-user.component.html'
})
export class AddUpdateUserComponent {
	private user = {};
    private userID:any;
    public isLoading =  true;
    constructor(private _router : Router, private _activateRouter: ActivatedRoute, private _userService: UserService) { 
        this.userID = _activateRouter.snapshot.params['id'];        
        if( this.userID ) {
            this._userService.getUser(this.userID).subscribe(res => {
                this.user = res;
                this.isLoading = false;
            },err => {
                this.isLoading = false;
            });
        } else {
            this.isLoading = false;
        }
    } 

    save() {
        if(this.userID) {
            this._userService.updateUser(this.user).subscribe(res => {
                this._router.navigate(['/user/list/' + this.user["id"]]);
            },err => {

            })
        } else {
            this._userService.addUser(this.user).subscribe(res => {
                this._router.navigate(['/user/list']);
            },err => {

            });
        }
    }
}

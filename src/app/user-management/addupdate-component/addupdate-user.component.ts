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
            this._userService.get(this.userID).subscribe(res => {
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
        this.isLoading = true;
        if(this.userID) {
            this._userService.update(this.user).subscribe(res => {
                this.isLoading = false;
                this._router.navigate(['/user/list']);
            },err => {
                this.isLoading = false;
            })
        } else {
            this._userService.add(this.user).subscribe(res => {
                this.isLoading = false;
                this._router.navigate(['/user/list']);
            },err => {
                this.isLoading = false;
            });
        }
    }
}

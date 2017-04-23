import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { FormGroup, FormBuilder ,Validators } from '@angular/forms';

import { UserService } from '../services/user.service';

@Component({
    templateUrl: 'addupdate-user.component.html'
})
export class AddUpdateUserComponent {
    
    private user    = {};
    private alluser = [];
    private userID: any;
    private response:any;
    private showMessage:boolean = false;

    private action:string = 'Add';

    constructor(private _router : Router,  private _activateRouter: ActivatedRoute, private _userService: UserService) {
        this.userID = _activateRouter.snapshot.params['id'];        
        if( this.userID ) {
            this._userService.getUser(this.userID).subscribe( res => { this.user = res; this.action = 'Update' }, err => {});
        }        
    }

    submitUser() {
        console.log('submitting User...');

        if( this.action == 'Update' ) {
            this.updateUser();            
        }else {
           this.addUser();
        }
    }

    addUser() {
        console.log('Posting User...');

        this._userService.postUser(this.user).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this.user   = {};
            this._router.navigate(['/user/list', {data: "success"} ]);
            console.log(this.response)
        });      
    	
    }

    updateUser() {
        console.log('Udpating User...');
        
        this._userService.putUser(this.user).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this.user   = {};
            this._router.navigate(['/user/list', {data: "success"} ]);
        }); 
    }

    closeMessage() {
        this.showMessage = false;
    } 
}

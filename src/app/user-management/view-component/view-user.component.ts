import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../services/user.service';


@Component({
  templateUrl: 'view-user.component.html'
})
export class ViewUserComponent {

    private userID    = '';
    private user      = {};
    private copy_user = {};
    private edit      = false;

    constructor(private _router: Router, private _activatedRouter: ActivatedRoute, private _userService: UserService) {     	
        
        this.userID = _activatedRouter.snapshot.params['id'];
        if( this.userID ) {
            this._userService.getUser(this.userID).subscribe( res => { this.user = res; console.log(res) }, err => {});
        }    
    }

    updateUser( userID ) {        
        let route = '/user/update/'+userID;
        this._router.navigate([route]);       
    }   
}

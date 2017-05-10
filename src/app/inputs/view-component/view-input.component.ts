import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { InputService } from '../services/input.service';
import { CookieService } from 'ngx-cookie';
@Component({
  templateUrl: 'view-input.component.html',
  providers: [InputService]
})
export class ViewInputComponent {

	public inputID             = '';
	public input               = {};
    public isLoading:boolean   = true;

    constructor(private _router: Router, private _activatedRouter: ActivatedRoute,  private _inputService: InputService, private _cookieService: CookieService ) { 
  	    this.inputID =  _activatedRouter.snapshot.params['id'];
  	
        if( this.inputID ) {
            this._inputService.get(this.inputID).subscribe( res => {
                this.input = res;
                this.isLoading = false;
            }, err => {
                this.isLoading = false;
                this.checkAccessToken(err);
            });
        }  

    }

   editInput( ID ) {        
        let route = '/inputs/edit/'+ID;
        this._router.navigate([route]);       
    }   

    /*This function is use to remove user session if Access token expired. */
    checkAccessToken( err ): void {
        let status     = err.status;
        let statusText = err.statusText;

        if( (status == 401 && statusText == 'Unauthorized')) {
            this._cookieService.removeAll();
            this._router.navigate(['/login', {data: true}]);
        }else {
            console.log('Something unexpected happened, please try again later.');
        }        
    }   
}

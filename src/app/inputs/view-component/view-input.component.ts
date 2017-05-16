import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { InputService } from '../services/input.service';
import { CookieService } from 'ngx-cookie';
import { CommanService } from '../../shared/services/comman.service';

@Component({
  templateUrl: 'view-input.component.html',
  providers: [InputService]
})
export class ViewInputComponent {

	public inputID             = '';
	public input               = {};
    public isLoading:boolean   = true;

    constructor(
        private _router: Router, 
        private _activatedRouter: ActivatedRoute,  
        private _inputService: InputService, 
        private _cookieService: CookieService,
        private _commanService: CommanService ) {

  	    this.inputID =  _activatedRouter.snapshot.params['id'];
  	
        if( this.inputID ) {
            this._inputService.get(this.inputID).subscribe( res => {
                this.isLoading = false;
                if(res.success) {
                    this.input     = res.data;
                } else {
                    this._commanService.checkAccessToken(res.error);
                }
            }, err => {
                this.isLoading = false;
                this._commanService.checkAccessToken(err);
            });
        }  

    }

   editInput( ID ) {        
        let route = '/inputs/edit/'+ID;
        this._router.navigate([route]);       
    }   
   
}

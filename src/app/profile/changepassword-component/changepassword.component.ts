import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { CommanService } from '../../shared/services/comman.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: 'changepassword.component.html'
})
export class ChangePasswordComponent implements OnInit {

	public password	      = '';
    public newPassword    = '';
    public confirmPassword= '';
	public errMessage 	  = '';
    public successMessage = '';
	public isPageLoading  = false;
    public currentUser:any = { };
    public user_id = '';

	constructor(private _router : Router, private _profileService: ProfileService, private _cookieService: CookieService) { }

	ngOnInit() {
        this.isPageLoading = true;
        this._profileService.getcurrentuser().subscribe(res => {
            this.isPageLoading = false;
            this.currentUser  = res;
            });
	}

	submit() {
		this.isPageLoading     = true;
        this.errMessage        = '';        
		this._profileService.changePassword( this.currentUser.id, this.password, this.newPassword, this.confirmPassword).subscribe(res => {
            this.isPageLoading = false;
            if(res.success) {
                this.successMessage = res.message; 
                this.password          = '';
                this.newPassword       = '';
                this.confirmPassword   = '';
                  
            } else {
                this.errMessage     = res.error.message;
                  
            }
        },err => {       
            this.isPageLoading = false;
            
        });
	}
}

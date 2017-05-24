import { Component, OnInit } from '@angular/core';
import { ChangePasswordService } from './change-password.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { CommanService } from '../../shared/services/comman.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
    providers: [ChangePasswordService, CommanService]
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

	constructor(private _router : Router, private _changePasswordService: ChangePasswordService, private _cookieService: CookieService) { }

	ngOnInit() {
        this.isPageLoading = true;

        this._changePasswordService.getcurrentuser().subscribe(res => {
            this.isPageLoading = false;
            this.currentUser  = res;
            
            if(res) {
               
                // this.user_id       = this.currentUser.id;         
            } else {
                this.errMessage     = res.error;
            }
        },err => {       
            this.isPageLoading = false;
            //this.errMessage    = "No such user exist";    
        });
	}

	submit() {
		this.isPageLoading     = true;
        this.errMessage        = '';        
		this._changePasswordService.changePassword( this.currentUser.id, this.password, this.newPassword, this.confirmPassword).subscribe(res => {
            this.isPageLoading = false;
            if(res)
            {
            this.successMessage = "Password has been changed"; 
            this._router.navigate(['/login']); 
            console.log(res);
            }
            else
            {
            this.errMessage  = "wrong old password";    
            }
           /* if(res.success) {
                this.successMessage = "Password has been changed"; 
                  
            } else {
                this.errMessage     = res.error.message;
                this._router.navigate(['/login']);   
            }*/
        },err => {       
            this.isPageLoading = false;
            //this.errMessage    = "res.error.message";    
        });
	}
   }

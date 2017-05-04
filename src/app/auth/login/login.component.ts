import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import tsConstants = require('./../../tsconstant');


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {
    
    public user = {
        grant_type : 'password',
        client_id  : tsConstants.CLIENT_ID
    };

    public errMessage            = '';
    public isPageLoading:boolean = false;
    

    constructor(private _router : Router, private _loginService: LoginService, private _cookieService: CookieService) { }

    ngOnInit() {}

  	login() {
        
        this.isPageLoading     = true;
        this.errMessage        = '';        

		this._loginService.login(this.user).subscribe(res => {

            this.isPageLoading = false;
            let token          = res.access_token;            
            /* Setup Cookie */
            this._cookieService.put('token', token );
            this._router.navigate(['/dashboard']);           

        },err => {       
            this.isPageLoading = false;
            this.errMessage    = "Email or Password is not correct.";
        });
	}
}

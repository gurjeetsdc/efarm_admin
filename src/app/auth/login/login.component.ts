import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import tsConstants = require('./../../tsconstant');
import { CookieService } from 'ngx-cookie';


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
    public validEmail            = true;
    

    constructor(private _router : Router, private _loginService: LoginService, private _cookieService: CookieService) { }

    ngOnInit() {}

    checkemail(email) {
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.validEmail = regex.test(email);
    }
  
  	login() {
        
        this.isPageLoading = true;
        this.errMessage    = '';        

		this._loginService.login(this.user).subscribe(res => {
            this.isPageLoading = false;
            
            /* Setup Cookie */
            let token = res.access_token;            
            this._cookieService.put('token', token );

            localStorage.setItem("user",JSON.stringify(res));
            this._router.navigate(['/dashboard']);           


        },err => {
            console.log("in else")          
            this.isPageLoading = false;
            this.errMessage    = "Email or Password is not correct.";
        });
	}

    /*getCookie(key: string){
        return this._cookieService.get(key);
    }

    putCookie(key: string, value: string){
        return this._cookieService.put(key, value);
    }

    putCookieObject(key: string, userData: object){
        return this._cookieService.putObject(key, userData);
    }*/
}

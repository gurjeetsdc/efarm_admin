import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  private user = {
    grant_type:'password',
    client_id: '5x7EuN09HAeBn2pYJnvvq7szgJaULh14'
  };
  private err_message = '';  
  private isPageLoading:boolean = false;
  public valid_email = true;
  constructor(private router : Router,private loginService: LoginService) { }

  ngOnInit() {
  }

    checkemail(email) {
       let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       this.valid_email=regex.test(email);
    }
  
  	login() {
        /* start loader */
        this.isPageLoading = true;
		this.err_message = '';
		this.loginService.login(this.user)
                       .subscribe(
                           res => {
                                /* end loader */
                                this.isPageLoading = false;
                                localStorage.setItem("user",JSON.stringify(res));
                                this.router.navigate(['/dashboard']);
                           },
                            err => {
                                /* end loader */
                                this.isPageLoading = false;
                                this.err_message = "Email id or password not correct";
                            });
	}
}

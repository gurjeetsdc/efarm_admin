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
  private user = {};
  private errMessage = {};
  constructor(private router : Router,private loginService: LoginService) { }

  ngOnInit() {
  }

  	login(){
  		console.log("login",this.user)
		this.errMessage = {};
		this.loginService.login(this.user)
                       .subscribe(
                           res => {
                             console.log("response",res)
                             localStorage.setItem("user",JSON.stringify(res));
                             // this.router.navigate(['/dashboard']);
                           },
                            err => {
                            	console.log("error",err);
                                // this.errMessage = JSON.parse(err._body);
                            });
	}
}

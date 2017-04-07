import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  private user = {};
  private errMessage = {};
  constructor(private router : Router, private _registerService: RegisterService) { }

  ngOnInit() {
  }

  onSubmit(){
  	console.log("register",this.user)
    	this.errMessage = {};
          this.user["username"] = this.user["email"];
          if(this.user["password"] !== this.user["confirmPassword"]) {
            console.log("not matched")
            this.errMessage["err"] = "Password and confirm Pasword not matched";
          } else {
              console.log("send call")
    	  this._registerService.register(this.user)
                           .subscribe(
                               res => {
                                 console.log("response",res)
                                 localStorage.setItem("user",JSON.stringify(res));
                                 this.router.navigate(['/dashboard']);
                               },
                                err => {
                                	console.log("error",err)
                                    // this.errMessage = JSON.parse(err._body);
                                });
        }                           
  	}

}

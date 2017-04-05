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

  register(){
  	console.log("register",this.user)
    	this.errMessage = {};
    	this._registerService.register(this.user)
                           .subscribe(
                               res => {
                                 console.log("response",res)
                                 localStorage.setItem("user",JSON.stringify(res));
                                 this.router.navigate(['/dashboard']);
                               },
                                err => {
                                	console.log("---------------")
                                    // this.errMessage = JSON.parse(err._body);
                                });
  	}

}

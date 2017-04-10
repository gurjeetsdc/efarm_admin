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
  public valid_email = true;
  public term = false;
  constructor(private router : Router, private _registerService: RegisterService) { }

  ngOnInit() {
  }

  checkemail(email) {
       let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       this.valid_email=regex.test(email);
  } 

  onSubmit(){
        this.user["username"] = this.user["email"];
	    this._registerService.register(this.user)
                       .subscribe(
                           res => {
                             console.log("response",res)
                             this.router.navigate(['/login']);
                           },
                            err => {
                            	console.log("error",err);
                            });
  	}

}

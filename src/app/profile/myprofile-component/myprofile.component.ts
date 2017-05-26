import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { CommanService } from '../../shared/services/comman.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: 'myprofile.component.html',
 
  
})
export class MyprofileComponent implements OnInit {

	
	public errMessage 	  = '';
    public successMessage = '';
	public isPageLoading  = false;
    public currentUser:any = { };
    

	constructor(private _router : Router, private _profileService: ProfileService, private _cookieService: CookieService) { }

	ngOnInit() {
        this.isPageLoading = true;
        this._profileService.getcurrentuser().subscribe(res => {
            this.isPageLoading = false;
            this.currentUser  = res;
            });
	}

   }

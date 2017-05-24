import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
// import 'rxjs/add/operator/map'
import tsConstants = require('./../../tsconstant');
import { CommanService } from '../../shared/services/comman.service';

@Injectable()
export class ChangePasswordService {

 	private _host = tsConstants.HOST;
    private _accessToken = '';
  	constructor(private _http: Http,   private _commanService: CommanService ) { }

    getcurrentuser(){

        let headers         = new Headers();
        this._accessToken   = this._commanService.getAccessToken();
        headers.append('Authorization', this._accessToken);
        console.log(this._accessToken)
        return this._http.get(this._host+'/users/current', { headers: headers }).map((res:Response) => res.json())

    }

	changePassword(user_id, password ,newPassword, confirmPassword) {

        console.log("user_id",user_id);
        console.log(password);
        console.log(newPassword);
        console.log(confirmPassword)
        
        let headers           = new Headers();   
        let urlSearchParams   = new URLSearchParams(); 

        this._accessToken   = this._commanService.getAccessToken();
        headers.append('Authorization', this._accessToken);

        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        urlSearchParams.append('password', password);
        urlSearchParams.append('newPassword', newPassword);
        urlSearchParams.append('confirmPassword', confirmPassword);
        let body = urlSearchParams.toString()

	    let url = this._host+"/changepassword/"+user_id;
        return this._http.post(url, body, { headers: headers }).map((res:Response) => res.json());
    }

}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import tsConstants = require('./../../tsconstant');

@Injectable()
export class UserService {
	   
    private access_token = {};
    private token        = '';

  	constructor(private _http: Http) { }
  	
  	getAllUser() {
  		
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];

        headers.append('Authorization', this.token );
		return this._http.get(tsConstants.HOST +'/user', { headers: headers }).map((res:Response) => res.json());
  	}

  	postUser( user ) {

      	let headers         = new Headers();
      	let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
    	return this._http.post(tsConstants.HOST +'/user', user, { headers: headers }).map((res:Response) => res.json());
    }

    /** get a single User by ID **/
    getUser( userID ) {
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        let body            = {};

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
        return this._http.get( tsConstants.HOST +'/user/' + userID, { headers: headers }).map((res:Response) => res.json());
    }

    /** update user **/
    putUser(user) {
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        
        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
    
        headers.append('Authorization', this.token );
        return this._http.put(tsConstants.HOST +'/user/'+ user.id, user, { headers: headers }).map((res:Response) => res.json());
    }

    /** DeleteID user by ID **/
    deleteUser( userID ) {
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        
        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
        return this._http.delete(tsConstants.HOST +'/user/'+ userID,  { headers: headers }).map((res:Response) => res.json());
    }        
}

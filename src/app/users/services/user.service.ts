import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { CookieService } from 'ngx-cookie';
import tsConstants = require('./../../tsconstant');
@Injectable()
export class UserService {
  
  private _host = tsConstants.HOST;
  private _accessToken = '';
  constructor(private _http: Http, private _cookieService: CookieService) { }

    /*Use to get all Users*/  
   getAllUsers() {

        let headers         = new Headers();        
        let urlSearchParams = new URLSearchParams();
        let token           = this._cookieService.get('token');
        this._accessToken   = 'Bearer ' + token;
        
        headers.append('Authorization', this._accessToken);
        return this._http.get(this._host +'/enduser', { headers: headers }).map((res:Response) => res.json())
    }
     
    /*Use to add new user*/
    add(user) {

        let headers         = new Headers();        
        let urlSearchParams = new URLSearchParams();
        let token           = this._cookieService.get('token');
        this._accessToken   = 'Bearer ' + token;
        
        headers.append('Authorization', this._accessToken);
        return this._http.post(this._host +'/enduser/add', user, { headers: headers }).map((res:Response) => res.json())
    }

    /*User to get user detail with ID*/
    get(userid) {

        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        let token           = this._cookieService.get('token');
        this._accessToken   = 'Bearer ' + token;
      
        headers.append('Authorization', this._accessToken);
        return this._http.get(this._host +'/enduser/'+ userid, { headers: headers }).map((res:Response) => res.json())
    }

    /*Use to update user detail with there ID*/
    update(user) {

        let headers         = new Headers();    
        let urlSearchParams = new URLSearchParams();
        let token           = this._cookieService.get('token');
        this._accessToken   = 'Bearer ' + token;
        
        headers.append('Authorization', this._accessToken);
        return this._http.put(this._host +'/enduser/'+ user.id, user, { headers: headers }).map((res:Response) => res.json())
    }

    /** Delete user by ID **/
    delete( userID ) {
        
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        let token           = this._cookieService.get('token');
        this._accessToken   = 'Bearer ' + token;
        
        headers.append('Authorization', this._accessToken);
        return this._http.delete(this._host +'/enduser/'+ userID,  { headers: headers }).map((res:Response) => res.json());
    }

}

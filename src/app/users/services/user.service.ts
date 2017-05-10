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
    getAllUsers(rowsOnPage, activePage ) {

        let headers         = new Headers();        
        this._accessToken   = this.getAccessToken();
        
        let url = this._host +'/user?count='+rowsOnPage+'&page='+activePage;

        headers.append('Authorization', this._accessToken);
        return this._http.get(url, { headers: headers }).map((res:Response) => res.json())
    }
     
    /*Use to add new user*/
    add(user) {

        let headers         = new Headers();        
        this._accessToken   = this.getAccessToken();
        
        headers.append('Authorization', this._accessToken);
        return this._http.post(this._host +'/user', user, { headers: headers }).map((res:Response) => res.json())
    }

    /*User to get user detail with ID*/
    get(userid) {

        let headers         = new Headers();
        this._accessToken   = this.getAccessToken();
      
        headers.append('Authorization', this._accessToken);
        return this._http.get(this._host +'/user/'+ userid, { headers: headers }).map((res:Response) => res.json())
    }

    /*Use to update user detail with there ID*/
    update(user) {

        let headers         = new Headers();    
        this._accessToken   = this.getAccessToken();
        
        headers.append('Authorization', this._accessToken);
        return this._http.put(this._host +'/user/'+ user.id, user, { headers: headers }).map((res:Response) => res.json())
    }

    /** Delete user by ID **/
    delete( userID ) {
        
        let headers         = new Headers();
        this._accessToken   = this.getAccessToken();
        
        headers.append('Authorization', this._accessToken);
        return this._http.delete(this._host +'/user/'+ userID,  { headers: headers }).map((res:Response) => res.json());
    }

    getAccessToken(): string {
        let token           = this._cookieService.get('token');
        return 'Bearer ' + token;
    }

}

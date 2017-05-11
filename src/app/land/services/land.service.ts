import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { CookieService } from 'ngx-cookie';
import tsConstants = require('./../../tsconstant');
@Injectable()
export class LandService {

 private _host = tsConstants.HOST;
 private access_token = {};
 private token = '';
  
  private _accessToken = '';
    constructor(private http: Http, private _cookieService: CookieService) { }

    /*
    *@Description: Land listing method
    *@Param: no parameter pass
    *@return: Multiple json array
    *@Author: Rohitk.kumar
    */
    landlist(rowsOnPage, activePage, search = '') {
        
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        this._accessToken          = this.getAccessToken();

        headers.append('Authorization', this._accessToken);

        let url = this._host +'/land?count='+rowsOnPage+'&page='+activePage+'&search='+search;

        
        //let body = urlSearchParams.toString()
    return this.http.get(url, { headers: headers }).map((res:Response) => res.json())
    }

    /*
    *@Description: land save data method
    *@Param: land form unicode data post
    *@return: success/fail
    *@Author: Rohitk.kumar
    */
    landadd(land) {
      console.log("inside land add");

        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        this._accessToken          = this.getAccessToken();
        headers.append('Authorization', this._accessToken);
        
    return this.http.post(this._host +'/land', land, { headers: headers }).map((res:Response) => res.json())
    }
    
    /*
    *@Description: land detail info method
    *@Param: land id param
    *@return: land detail data
    *@Author: Rohitk.kumar
    */
    getLand(land) {
      
        let headers = new Headers();
        let body = {};
        let urlSearchParams = new URLSearchParams();
        this._accessToken          = this.getAccessToken();

        headers.append('Authorization', this._accessToken);
        
    return this.http.get(this._host +'/land/'+ land, { headers: headers }).map((res:Response) => res.json())
    }

    /*
    *@Description: update land info method
    *@Param: land id param and land data
    *@return: update success/fail 
    *@Author: Rohitk.kumar
    */
    updateLand(land) {

        let body            = {};
        
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        this._accessToken          = this.getAccessToken();
        
        headers.append('Authorization', this._accessToken);
    return this.http.put(this._host +'/land/'+ land.id, land, { headers: headers }).map((res:Response) => res.json())
    }


    /*
    *@Description: update land info method
    *@Param: land id param and Land( data
    *@return: update success/fail 
    *@Author: Rohitk.kumar
    */
    deleteLand( landId ) {
        
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        this._accessToken          = this.getAccessToken();
        
        headers.append('Authorization', this._accessToken );
        return this.http.delete(this._host +'/land/'+ landId,  { headers: headers }).map((res:Response) => res.json());
    }    
    
    /*
    *@Description: get seller user list
    *@Param: nothing
    *@return: seller user list
    *@Author: Rohitk.kumar
    */
    getAllUsers() {
          
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        this._accessToken          = this.getAccessToken();
        headers.append('Authorization', this._accessToken );
        
        return this.http.get(this._host +'/user', { headers: headers }).map((res:Response) => res.json());
    }

    getAllCategories() {
          
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this._accessToken      = this.getAccessToken();

        headers.append('Authorization', this._accessToken );
        return this.http.get(this._host +'/category', { headers: headers }).map((res:Response) => res.json());
    }

    getAccessToken(): string {
        let token           = this._cookieService.get('token');
        return 'Bearer ' + token;
    }

}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { CookieService } from 'ngx-cookie';
import tsConstants = require('./../../tsconstant');
@Injectable()
export class CropService {

    private _host = tsConstants.HOST;
    private _accessToken = '';
    constructor(private _http: Http, private _cookieService: CookieService) { }

    /*Use to fetch all crops*/
  	getAllCrops(rowsOnPage, activePage, search = '') {

        let headers         = new Headers();
        this._accessToken   = this.getAccessToken();
        
        let url = this._host +'/crops?count='+rowsOnPage+'&page='+activePage+'&search='+search;

        headers.append('Authorization', this._accessToken);
		return this._http.get(url, { headers: headers }).map((res:Response) => res.json())
    }

    /*Use to add new crop*/
    add(crop) {

        let headers         = new Headers();
        this._accessToken   = this.getAccessToken();
        
        headers.append('Authorization', this._accessToken);
        return this._http.post(this._host +'/crops', crop, { headers: headers }).map((res:Response) => res.json())
    }

    /*Use to get crop with crop id*/
    get(cropID) {
        
        let headers         = new Headers();
        this._accessToken   = this.getAccessToken();
    
        headers.append('Authorization', this._accessToken);
        return this._http.get(this._host +'/crops/'+ cropID, { headers: headers }).map((res:Response) => res.json())
    }

    /*Use to update crop*/
    update(crop) {

        let headers         = new Headers();
        this._accessToken   = this.getAccessToken();

        headers.append('Authorization', this._accessToken);
        return this._http.put(this._host +'/crops/'+ crop.id, crop, { headers: headers }).map((res:Response) => res.json())
    }

    /*Use to Delete crop with crop id */
    delete( cropID ) {
        
        let headers         = new Headers();
        this._accessToken   = this.getAccessToken();
        
        headers.append('Authorization', this._accessToken );
        return this._http.delete(this._host +'/crops/'+ cropID,  { headers: headers }).map((res:Response) => res.json());
    }

    /*Use to fetch all categories*/
    getAllCategories() {
          
        let headers         = new Headers();
        this._accessToken   = this.getAccessToken();

        headers.append('Authorization', this._accessToken );
        return this._http.get(this._host +'/category', { headers: headers }).map((res:Response) => res.json());
    }

    /*Use to fetch all Users*/
    getAllUsers() {
          
        let headers         = new Headers();
        this._accessToken   = this.getAccessToken();

        headers.append('Authorization', this._accessToken );
        return this._http.get(this._host +'/user', { headers: headers }).map((res:Response) => res.json());
    }

    getAccessToken(): string {
        let token           = this._cookieService.get('token');
        return 'Bearer ' + token;
    }
}

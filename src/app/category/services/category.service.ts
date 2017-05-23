import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { CommanService } from '../../shared/services/comman.service';
import tsConstants = require('./../../tsconstant');

@Injectable()
export class CategoryService {

    private _host           = tsConstants.HOST;
    private _accessToken    = '';
  
    constructor(
        private _http: Http,
        private _commanService: CommanService ) {
    }

    /*Use to fetch all Inputs*/
  	getAllCatg(rowsOnPage, activePage, sortTrem , search = '') {

  		let headers         = new Headers();        
        this._accessToken   = this._commanService.getAccessToken();
        
        let url = this._host +'/allcategory?count='+rowsOnPage+'&page='+activePage+'&sortBy='+sortTrem+'&search='+search;;

        headers.append('Authorization', this._accessToken);
        return this._http.get(url, { headers: headers }).map((res:Response) => res.json())
    }

    /*Use to add new Input*/
    add(catg) {

        let headers         = new Headers();        
        this._accessToken   = this._commanService.getAccessToken();
        
        headers.append('Authorization', this._accessToken);
        return this._http.post(this._host +'/category', catg, { headers: headers }).map((res:Response) => res.json())
    }
    
    /*Use to get input with input id*/
    get(ID) {

        let headers         = new Headers();
        this._accessToken   = this._commanService.getAccessToken();
        
        headers.append('Authorization', this._accessToken);
        return this._http.get(this._host +'/category/'+ ID, { headers: headers }).map((res:Response) => res.json())
    }

    /*Use to update input*/
    update(catg) {
        
        let headers         = new Headers();
        this._accessToken   = this._commanService.getAccessToken();
        
        headers.append('Authorization', this._accessToken);
        return this._http.put(this._host +'/category/'+ catg.id, catg, { headers: headers }).map((res:Response) => res.json())
    }


    /*Use to Delete input with input id */
    delete( Id ) {
        
        let headers         = new Headers();
        this._accessToken   = this._commanService.getAccessToken();
        
        headers.append('Authorization', this._accessToken );
        return this._http.delete(this._host +'/category/'+ Id,  { headers: headers }).map((res:Response) => res.json());
    }   

   

}

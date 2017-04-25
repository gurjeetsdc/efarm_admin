import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import tsConstants = require('./../../tsconstant');

@Injectable()
export class CategoryService {
	   
    private access_token = {};
    private token        = '';

  	constructor(private _http: Http) { }
  	
  	getAllCategory() {
  		
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];

        headers.append('Authorization', this.token );
		return this._http.get(tsConstants.HOST +'/category', { headers: headers }).map((res:Response) => res.json());
  	}

  	postCategory( category ) {

      	let headers         = new Headers();
      	let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
    	return this._http.post(tsConstants.HOST +'/category', category, { headers: headers }).map((res:Response) => res.json());
    }

    /** get a single category by ID **/
    getCategory( categoryID ) {
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        let body            = {};

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
        return this._http.get( tsConstants.HOST +'/category/' + categoryID, { headers: headers }).map((res:Response) => res.json());
    }

    /** update category **/
    putCategory(category) {
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        
        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
    
        headers.append('Authorization', this.token );
        return this._http.put(tsConstants.HOST +'/category/'+ category.id, category, { headers: headers }).map((res:Response) => res.json());
    }

    /** DeleteID category by ID **/
    deleteCategory( categoryID ) {
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        
        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
        return this._http.delete(tsConstants.HOST +'/category/'+ categoryID,  { headers: headers }).map((res:Response) => res.json());
    }        
}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import tsConstants  = require('./../tsconstant');

@Injectable()
export class CategoryService {
    private access_token = {};
    private token        = '';

  	constructor(private _http: Http) { }
  	
  	getAllCategories() {
      this.access_token   = JSON.parse(localStorage.getItem("user"));
      this.token          = 'Bearer ' + this.access_token["access_token"];
      let headers         = new Headers();
      let urlSearchParams = new URLSearchParams();
      headers.append('Authorization', this.token );
      return this._http.get(tsConstants.HOST +'/category', { headers: headers }).map((res:Response) => res.json());
  	}

  	postCategory( inputs ) {
        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
      	let headers         = new Headers();
      	let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token );
   	    return this._http.post(tsConstants.HOST +'/category', inputs, { headers: headers }).map((res:Response) => res.json());
    }

    getCategory(category) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();
        let body = {};        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        console.log("category is ", category);
        return this._http.get(tsConstants.HOST +'/category/'+ category, { headers: headers }).map((res:Response) => res.json())
    }

    updateCategory(category) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();
        let body = {};        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        return this._http.post(tsConstants.HOST +'/category/'+ category.id, category, { headers: headers }).map((res:Response) => res.json())
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


}

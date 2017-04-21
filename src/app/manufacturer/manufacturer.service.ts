import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import tsConstants  = require('./../tsconstant');

@Injectable()
export class ManufacturerService {
	
	  private access_token = {};
    private token        = '';

  	constructor(private _http: Http) { }
  	
  	getAllmanufacturer() {
      this.access_token   = JSON.parse(localStorage.getItem("user"));
      this.token          = 'Bearer ' + this.access_token["access_token"];
      let headers         = new Headers();
      let urlSearchParams = new URLSearchParams();
      headers.append('Authorization', this.token );
      return this._http.get(tsConstants.HOST +'/manufacturer', { headers: headers }).map((res:Response) => res.json());
  	}

  	postManufacturer( inputs ) {
      console.log("test manu",inputs);
        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
      	let headers         = new Headers();
      	let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token );
   	    return this._http.post(tsConstants.HOST +'/manufacturer', inputs, { headers: headers }).map((res:Response) => res.json());
    }

    getManufacturer(manufacturer) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();
        let body = {};        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        console.log("Manufacturer is ", manufacturer);
        return this._http.get(tsConstants.HOST +'/manufacturer/'+ manufacturer, { headers: headers }).map((res:Response) => res.json())
    }

    updateManufacturer(manufacturer) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();
        let body = {};        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        return this._http.post(tsConstants.HOST +'/manufacturer/'+ manufacturer.id, manufacturer, { headers: headers }).map((res:Response) => res.json())
    }
}

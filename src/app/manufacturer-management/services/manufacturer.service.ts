import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class ManufacturerService {
	   
    private access_token = {};
    private token        = '';

  	constructor(private _http: Http) { }
  	
  	getAllManufacturer() {
  		
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];

        headers.append('Authorization', this.token );
		return this._http.get(this.host +'/manufacturer', { headers: headers }).map((res:Response) => res.json());
  	}

  	postManufacturer( manufacturer ) {

      	let headers         = new Headers();
      	let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
    	return this._http.post(this.host +'/manufacturer', manufacturer, { headers: headers }).map((res:Response) => res.json());
    }

    /** get a single Manufacturer by ID **/
    getManufacturer( manufacturerID ) {
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        let body            = {};

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
        return this._http.get( this.host +'/manufacturer/' + manufacturerID, { headers: headers }).map((res:Response) => res.json());
    }

    /** update manufacturer **/
    putManufacturer(manufacturer) {
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        
        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
    
        headers.append('Authorization', this.token );
        return this._http.put(this.host +'/manufacturer/'+ manufacturer.id, manufacturer, { headers: headers }).map((res:Response) => res.json());
    }

    /** DeleteID manufacturer by ID **/
    deleteManufacturer( manufacturerID ) {
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        
        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
        return this._http.delete(this.host +'/manufacturer/'+ manufacturerID,  { headers: headers }).map((res:Response) => res.json());
    }        
}

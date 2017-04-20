import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class ManufacturerService {
	
	private host = "http://localhost:1337";
  private access_token = {};
    private token        = '';

  	constructor(private _http: Http) { }
  	
  	getAllmanufacturer() {
      this.access_token   = JSON.parse(localStorage.getItem("user"));
      this.token          = 'Bearer ' + this.access_token["access_token"];
      let headers         = new Headers();
      let urlSearchParams = new URLSearchParams();
      headers.append('Authorization', this.token );
      return this._http.get(this.host +'/manufacturer', { headers: headers }).map((res:Response) => res.json());
  	}

  	postManufacturer( inputs ) {
      console.log("test manu",inputs);
        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
      	let headers         = new Headers();
      	let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token );
   	    return this._http.post(this.host +'/manufacturer', inputs, { headers: headers }).map((res:Response) => res.json());
    }

    getManufacturer(manufacturer) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();
        let body = {};        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        console.log("Manufacturer is ", manufacturer);
        return this._http.get(this.host +'/manufacturer/'+ manufacturer, { headers: headers }).map((res:Response) => res.json())
    }

    updateManufacturer(manufacturer) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();
        let body = {};        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        return this._http.post(this.host +'/manufacturer/'+ manufacturer.id, manufacturer, { headers: headers }).map((res:Response) => res.json())
    }


}

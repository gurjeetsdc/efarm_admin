import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class EquipmentService {
	
    private host         = "http://localhost:1337";
    private access_token = {};
    private token        = '';

  	constructor(private _http: Http) { }
  	
  	getAllEquipments() {
  		
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];

        headers.append('Authorization', this.token );
		return this._http.get(this.host +'/equipment', { headers: headers }).map((res:Response) => res.json());
  	}

  	postEquipment( inputs ) {

      	let headers         = new Headers();
      	let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
    	return this._http.post(this.host +'/equipment', inputs, { headers: headers }).map((res:Response) => res.json());
    }
}

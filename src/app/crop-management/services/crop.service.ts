import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
@Injectable()
export class CropService {

  // private host = "http://localhost:1337";
  private host = "https://efarmapi.herokuapp.com";
  private access_token = {};
  private token = '';
  constructor(private _http: Http) { }

  	getAllCrops() {

        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();

        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token);
		return this._http.get(this.host +'/crops/listing', { headers: headers }).map((res:Response) => res.json())
    }

    add(crop) {

        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token);
        return this._http.post(this.host +'/crops/add', crop, { headers: headers }).map((res:Response) => res.json())
    }

    get(crop) {
        
        let headers = new Headers();
        let urlSearchParams = new URLSearchParams();
    
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
    
        headers.append('Authorization', this.token);
        return this._http.get(this.host +'/crops/'+ crop, { headers: headers }).map((res:Response) => res.json())
    }

    update(crop) {

        let headers = new Headers();
        let urlSearchParams = new URLSearchParams();
        
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];

        headers.append('Authorization', this.token);
        return this._http.post(this.host +'/crops/'+ crop.id, crop, { headers: headers }).map((res:Response) => res.json())
    }

    /** Delete crop by ID **/
    delete( cropID ) {
        
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
        return this._http.delete(this.host +'/crops/'+ cropID,  { headers: headers }).map((res:Response) => res.json());
    }

    getAllCategories() {
          
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];

        headers.append('Authorization', this.token );
        return this._http.get(this.host +'/category', { headers: headers }).map((res:Response) => res.json());
    }

    getAllUsers() {
          
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];

        headers.append('Authorization', this.token );
        return this._http.get(this.host +'/users', { headers: headers }).map((res:Response) => res.json());
    }

}

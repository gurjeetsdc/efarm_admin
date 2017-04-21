import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
@Injectable()
export class CropService {

  // private host = "http://localhost:1337";
  private host = "https://efarmapi.herokuapp.com";
  private access_token = {};
  private token = '';
  constructor(private http: Http) { }

  	croplisting() {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        
        //let body = urlSearchParams.toString()
		return this.http.get(this.host +'/crops/listing', { headers: headers }).map((res:Response) => res.json())
    }

    addCrop(crop) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
    return this.http.post(this.host +'/crops/add', crop, { headers: headers }).map((res:Response) => res.json())
    }

    getCrop(crop) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();
        let body = {};        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
    return this.http.post(this.host +'/crops/'+ crop, body, { headers: headers }).map((res:Response) => res.json())
    }

    updateCrop(crop) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();
        let body = {};        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
    return this.http.post(this.host +'/crops/'+ crop.id, crop, { headers: headers }).map((res:Response) => res.json())
    }

}

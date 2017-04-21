import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
@Injectable()
export class LandService {

  private host = "https://efarmapi.herokuapp.com";
  //private host = "http://localhost:1337";
  private access_token = {};
  private token = '';
  
  constructor(private http: Http) { }

  	landlist() {
  		console.log("inside land")
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        
        //let body = urlSearchParams.toString()
		return this.http.get(this.host +'/land', { headers: headers }).map((res:Response) => res.json())
    }


    landadd(land) {
      console.log("inside input add");

        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        
    return this.http.post(this.host +'/land', land, { headers: headers }).map((res:Response) => res.json())
    }

    getLand(land) {
      console.log(land);
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();
        let body = {};
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        console.log("addCrop----------------",land);
    return this.http.get(this.host +'/land/'+ land, { headers: headers }).map((res:Response) => res.json())
    }

    updateLand(land) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();
        let body = {};        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
    return this.http.post(this.host +'/land/'+ land.id, land, { headers: headers }).map((res:Response) => res.json())
    }

}

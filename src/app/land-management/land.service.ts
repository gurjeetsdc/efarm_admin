import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
@Injectable()
export class LandService {

  private host = "https://efarmapi.herokuapp.com";
  //private host = "http://localhost:1337";
  private access_token = {};
  private token = '';
  
  constructor(private http: Http) { }

  	/*
    *@Description: Land listing method
    *@Param: no parameter pass
    *@return: Multiple json array
    *@Author: Rohitk.kumar
    */
    landlist() {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        
        //let body = urlSearchParams.toString()
    return this.http.get(this.host +'/land', { headers: headers }).map((res:Response) => res.json())
    }

    /*
    *@Description: land save data method
    *@Param: land form unicode data post
    *@return: success/fail
    *@Author: Rohitk.kumar
    */
    landadd(land) {
      console.log("inside land add");

        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        
    return this.http.post(this.host +'/land', land, { headers: headers }).map((res:Response) => res.json())
    }
    
    /*
    *@Description: land detail info method
    *@Param: land id param
    *@return: land detail data
    *@Author: Rohitk.kumar
    */
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

    /*
    *@Description: update land info method
    *@Param: land id param and land data
    *@return: update success/fail 
    *@Author: Rohitk.kumar
    */
    updateLand(land) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();
        let body = {};        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
    return this.http.put(this.host +'/land/'+ land.id, land, { headers: headers }).map((res:Response) => res.json())
    }


    /*
    *@Description: update land info method
    *@Param: land id param and Land( data
    *@return: update success/fail 
    *@Author: Rohitk.kumar
    */
    deleteLand( landId ) {
        
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
        return this.http.delete(this.host +'/land/'+ landId,  { headers: headers }).map((res:Response) => res.json());
    }   

}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
@Injectable()
export class UserService {
  
  // private host = "http://localhost:1337";
  private host = "https://efarmapi.herokuapp.com";
  private access_token = {};
  private token = '';
  constructor(private _http: Http) { }

   getAllUsers() {
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token);
        return this._http.get(this.host +'/enduser', { headers: headers }).map((res:Response) => res.json())
    }
     
   add(user) {
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token);
        return this._http.post(this.host +'/enduser/add', user, { headers: headers }).map((res:Response) => res.json())
    }

    get(userid) {
        let headers = new Headers();
        let urlSearchParams = new URLSearchParams();
      
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
      
        headers.append('Authorization', this.token);
        return this._http.get(this.host +'/enduser/'+ userid, { headers: headers }).map((res:Response) => res.json())
    }

    update(user) {
        let headers = new Headers();    
        let urlSearchParams = new URLSearchParams();
        
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token);
        return this._http.put(this.host +'/enduser/'+ user.id, user, { headers: headers }).map((res:Response) => res.json())
    }

    /** Delete user by ID **/
    delete( userID ) {
        
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
        return this._http.delete(this.host +'/enduser/'+ userID,  { headers: headers }).map((res:Response) => res.json());
    }

}

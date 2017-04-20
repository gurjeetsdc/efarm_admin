import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
@Injectable()
export class UserService {
  
  private host = "http://localhost:1337";
  private access_token = {};
  private token = '';
  constructor(private http: Http) { }

   userListing() {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
    return this.http.get(this.host +'/enduser', { headers: headers }).map((res:Response) => res.json())
    }
     
   addUser(user) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
    return this.http.post(this.host +'/enduser', user, { headers: headers }).map((res:Response) => res.json())
    }
}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class RegisterService {
  // private host = "https://efarmapi.herokuapp.com";
  private host = "http://localhost:1337";
  
  constructor(private http: Http) { }

  	register(user) {
        let headers = new Headers();        
        let username:string = user.username;
        let password:string = user.password;
        let email:string    = user.email;
        let urlSearchParams = new URLSearchParams();

        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        urlSearchParams.append('email', email);
        let body = urlSearchParams.toString()
		return this.http.post(this.host +'/users/register', body, { headers: headers }).map((res:Response) => res.json())
    }
}

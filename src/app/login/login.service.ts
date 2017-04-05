import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class LoginService {
    private host = "https://efarmxapi.herokuapp.com";
  	private port = 3000;
  	
  	constructor(private http: Http) { }

    login(user){
    	console.log("inside login service",user)
	  	return this.http.post("https://efarmxapi.herokuapp.com/api/oauth2/token",user)
                      .map((res:Response) => res.json())
	}
}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class RegisterService {
  private host = "https://efarmapi.herokuapp.com";
  private port = '';
  constructor(private http: Http) { }

  register(user){
  	console.log("register",user)
	  return this.http.post(this.host + ':' + this.port + '/users/register',user)
                      .map((res:Response) => res.json())
	}
}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class RegisterService {
  private host = "http://localhost";
  private port = 3000;
  constructor(private http: Http) { }

  register(user){
  	console.log("register",user)
	  return this.http.post(this.host + ':' + this.port + '/api/register',user)
                      .map((res:Response) => res.json())
	}
}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class RegisterService {
  private host = "https://efarmapi.herokuapp.com";
  private port = '';
  constructor(private http: Http) { }

  	register(user){
  		let headers = new Headers();		
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		console.log("body---------user--",user);
		console.log("body---------user--",user.email)
		// headers.append('origin', this.host);
		// headers.append('refer', this.host);

		let username:string =  user.username;
		let password:string =  user.password;
		let email:string 	=  user.email;

		let urlSearchParams = new URLSearchParams();

        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        urlSearchParams.append('email', email);
        let body = urlSearchParams.toString()
		
  		console.log("body---------body--",typeof body)
  		console.log("body---------body--",body)
		// this.user1 = {username: "test-aa", password: "test-aa", email: "test-aa@gmial.oxm"}
	  	
	  	console.log('working...') ;
		return this.http.post(this.host + ':' + this.port + '/users/register', body, { headers: headers }).map((res:Response) => res.json())
	}

 // 	register(user){
 //  		console.log("register",user)
	//   return this.http.post(this.host + ':' + this.port + '/users/register',user)
 //                      .map((res:Response) => res.json())
	// }
}

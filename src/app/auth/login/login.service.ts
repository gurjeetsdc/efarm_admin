import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
    private host = "https://efarmapi.herokuapp.com";
    // private host = "http://localhost:1337";
  	private port = 3000;
  	
  	constructor(private _http: Http) { }

	login(user) {

        console.log('User In service');
        console.log(user);

        let headers           = new Headers();
        let username:string   = user.username;
        let password:string   = user.password;
        let grant_type:string = user.grant_type;
        let client_id:string  = user.client_id
        let urlSearchParams   = new URLSearchParams();
        
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        urlSearchParams.append('grant_type', grant_type);
        urlSearchParams.append('client_id', client_id);
        let body = urlSearchParams.toString()
		
        return this._http.post(this.host +'/oauth/token', body, { headers: headers }).map((res:Response) => res.json())
    }
}

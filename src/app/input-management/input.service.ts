import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
@Injectable()
export class InputService {

  private host = "http://localhost:1337";
  private access_token = {};
  private token = '';
  
  constructor(private http: Http) { }

  	inputlist() {
  		console.log("inside inputlisting")
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        
        //let body = urlSearchParams.toString()
		return this.http.get(this.host +'/inputs', { headers: headers }).map((res:Response) => res.json())
    }


    inputadd(inputs) {
      console.log("inside input add");

        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        
    return this.http.post(this.host +'/inputs', inputs, { headers: headers }).map((res:Response) => res.json())
    }

    getInput(input) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();
        let body = {};
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        console.log("addCrop----------------",input);
    return this.http.post(this.host +'/inputs/'+ input, body, { headers: headers }).map((res:Response) => res.json())
    }

}

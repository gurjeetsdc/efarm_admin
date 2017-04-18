import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
@Injectable()
export class InputService {

  private host = "http://localhost:1337";
  
  constructor(private http: Http) { }

  	inputlist() {
  		console.log("inside inputlisting")
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', 'Bearer 67AgwREPU7naAECgGczTGgrMUt1MCst0');
        
        //let body = urlSearchParams.toString()
		return this.http.get(this.host +'/inputs', { headers: headers }).map((res:Response) => res.json())
    }

}

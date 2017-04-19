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
        headers.append('Authorization', 'Bearer FtvuJVQmkTaTVq4gDaL6h1y5tfZvGnQa');
        
        //let body = urlSearchParams.toString()
		return this.http.get(this.host +'/inputs', { headers: headers }).map((res:Response) => res.json())
    }


    inputadd(inputs) {
      console.log("inside input add");

        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', 'Bearer FtvuJVQmkTaTVq4gDaL6h1y5tfZvGnQa');
        
        //let body = urlSearchParams.toString()
    return this.http.post(this.host +'/inputs', inputs, { headers: headers }).map((res:Response) => res.json())
    }

}

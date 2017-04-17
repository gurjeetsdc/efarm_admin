import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
@Injectable()
export class CropService {

  private host = "http://localhost:1337";
  
  constructor(private http: Http) { }

  	croplisting() {
  		console.log("inside croplisting")
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', 'Bearer dY4DJQ2PgGfZ32pM1CsUhfXR4FxOvAWg');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        //let body = urlSearchParams.toString()
		return this.http.get(this.host +'/crops/listing', { headers: headers }).map((res:Response) => res.json())
    }

}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class CategoryService {
	
	private host = "http://localhost:1337";

  	constructor(private _http: Http) { }
  	
  	getAllCategories() {
  		
  		let headers         = new Headers();
  		let urlSearchParams = new URLSearchParams();

      headers.append('Authorization', 'Bearer Q7kvON6Zv6hzfkQXBSVC9L9YbAKypYLV' );
        
		return this._http.get(this.host +'/category', { headers: headers }).map((res:Response) => res.json());
  	}

  	postCategory( inputs ) {

      	let headers         = new Headers();
      	let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', 'Bearer Q7kvON6Zv6hzfkQXBSVC9L9YbAKypYLV');
        
        //let body = urlSearchParams.toString()
    	return this._http.post(this.host +'/category', inputs, { headers: headers }).map((res:Response) => res.json());
    }


}

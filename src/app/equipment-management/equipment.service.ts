import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class EquipmentService {
	
	private host = "http://localhost:1337";

  	constructor(private _http: Http) { }
  	
  	getAllEquipments() {
  		
  		let headers         = new Headers();
  		let urlSearchParams = new URLSearchParams();

        headers.append('Authorization', 'Bearer QCbOcPDSqWFge1WUgqPssNHThrc6KUUT' );
        
        //let body = urlSearchParams.toString()
		return this._http.get(this.host +'/equipment', { headers: headers }).map((res:Response) => res.json());
  	}

  	postEquipment( inputs ) {

      	let headers         = new Headers();
      	let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', 'Bearer QCbOcPDSqWFge1WUgqPssNHThrc6KUUT');
        
        //let body = urlSearchParams.toString()
    	return this._http.post(this.host +'/equipment', inputs, { headers: headers }).map((res:Response) => res.json());
    }


}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class EquipmentService {
	
    // private host         = "https://efarmapi.herokuapp.com";    
    private host         = "http://localhost:1337";    

    private access_token = {};
    private token        = '';


  	constructor(private _http: Http, private _cookieService: CookieService) { }
  	
  	getAllEquipments() {
  		
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.token          = this.getAccessToken();
        
        headers.append('Authorization', this.token );
		return this._http.get(this.host +'/equipment', { headers: headers }).map((res:Response) => res.json());
  	}

  	postEquipment( equipment ) {

      	let headers         = new Headers();
      	let urlSearchParams = new URLSearchParams();

        this.token          = this.getAccessToken();
        
        headers.append('Authorization', this.token );
    	return this._http.post(this.host +'/equipment', equipment, { headers: headers }).map((res:Response) => res.json());
    }

    /** get a single Equipment by ID **/
    getEquipment( equipmentID ) {
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        let body            = {};

        this.token          = this.getAccessToken();
        
        headers.append('Authorization', this.token );
        return this._http.get( this.host +'/equipment/' + equipmentID, { headers: headers }).map((res:Response) => res.json());
    }

    /** update equipment **/
    putEquipment(equipment) {
        
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.token          = this.getAccessToken();
        
        headers.append('Authorization', this.token );
        return this._http.put(this.host +'/equipment/'+ equipment.id, equipment, { headers: headers }).map((res:Response) => res.json());
    }

    /** DeleteID equipment by ID **/
    deleteEquipment( equipmentID ) {
        
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.token          = this.getAccessToken();
        
        headers.append('Authorization', this.token );
        return this._http.delete(this.host +'/equipment/'+ equipmentID,  { headers: headers }).map((res:Response) => res.json());
    }

    getAllCategories() {
          
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.token          = this.getAccessToken();

        headers.append('Authorization', this.token );
        return this._http.get(this.host +'/category', { headers: headers }).map((res:Response) => res.json());
    }

    getUsers() {
          
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.token          = this.getAccessToken();

        headers.append('Authorization', this.token );
        return this._http.get(this.host +'/users', { headers: headers }).map((res:Response) => res.json());
    }

    getAccessToken(): string {
        let token           = this._cookieService.get('token');
        return 'Bearer ' + token;
    }

}/*end class*/

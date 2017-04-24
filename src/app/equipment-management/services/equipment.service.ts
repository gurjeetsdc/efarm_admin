import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class EquipmentService {
	
    private host         = "https://efarmapi.herokuapp.com";
    private access_token = {};
    private token        = '';

  	constructor(private _http: Http) { }
  	
  	getAllEquipments() {
  		
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];

        headers.append('Authorization', this.token );
		return this._http.get(this.host +'/equipment', { headers: headers }).map((res:Response) => res.json());
  	}

  	postEquipment( equipment ) {

      	let headers         = new Headers();
      	let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
    	return this._http.post(this.host +'/equipment', equipment, { headers: headers }).map((res:Response) => res.json());
    }

    /** get a single Equipment by ID **/
    getEquipment( equipmentID ) {
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        let body            = {};

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
        return this._http.get( this.host +'/equipment/' + equipmentID, { headers: headers }).map((res:Response) => res.json());
    }

    /** update equipment **/
    putEquipment(equipment) {
        
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
        return this._http.put(this.host +'/equipment/'+ equipment.id, equipment, { headers: headers }).map((res:Response) => res.json());
    }

    /** DeleteID equipment by ID **/
    deleteEquipment( equipmentID ) {
        
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
        return this._http.delete(this.host +'/equipment/'+ equipmentID,  { headers: headers }).map((res:Response) => res.json());
    }

    getAllCategories() {
          
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];

        headers.append('Authorization', this.token );
        return this._http.get(this.host +'/category', { headers: headers }).map((res:Response) => res.json());
    }

    getCurrentUser() {
          
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];

        headers.append('Authorization', this.token );
        return this._http.get(this.host +'/users/current', { headers: headers }).map((res:Response) => res.json());
    }



}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { CookieService } from 'ngx-cookie';
import tsConstants = require('./../../tsconstant');

@Injectable()
export class EquipmentService {
	
    // private _host         = "https://efarmapi.herokuapp.com";    
    // private _host         = "http://localhost:1337";    
    private _host = tsConstants.HOST;

    private access_token = {};
    private token        = '';


  	constructor(private _http: Http, private _cookieService: CookieService) { }
  	
  	getAllEquipments( rowsOnPage, activePage, sortTrem , search = '',) {
  		
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.token          = this.getAccessToken();
        
        let url = this._host +'/equipment?count='+rowsOnPage+'&page='+activePage+'&sortBy='+sortTrem+'&search='+search;;

        headers.append('Authorization', this.token );
		return this._http.get( url, { headers: headers }).map((res:Response) => res.json());
  	}

  	postEquipment( equipment ) {

      	let headers         = new Headers();
      	let urlSearchParams = new URLSearchParams();

        this.token          = this.getAccessToken();
        
        headers.append('Authorization', this.token );
    	return this._http.post(this._host +'/equipment', equipment, { headers: headers }).map((res:Response) => res.json());
    }

    /** get a single Equipment by ID **/
    getEquipment( equipmentID ) {
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        let body            = {};

        this.token          = this.getAccessToken();
        
        headers.append('Authorization', this.token );
        return this._http.get( this._host +'/equipment/' + equipmentID, { headers: headers }).map((res:Response) => res.json());
    }

    /** update equipment **/
    putEquipment(equipment) {
        
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.token          = this.getAccessToken();
        
        headers.append('Authorization', this.token );
        return this._http.put(this._host +'/equipment/'+ equipment.id, equipment, { headers: headers }).map((res:Response) => res.json());
    }

    /** DeleteID equipment by ID **/
    deleteEquipment( equipmentID ) {
        
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();

        this.token          = this.getAccessToken();
        
        headers.append('Authorization', this.token );
        return this._http.delete(this._host +'/equipment/'+ equipmentID,  { headers: headers }).map((res:Response) => res.json());
    }
   

   /*Use to fetch all categories*/
    getAllCategories() {
          
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        this.token          = this.getAccessToken();

        headers.append('Authorization', this.token );
        return this._http.get(this._host +'/category?type=equipments&sort=name', { headers: headers }).map((res:Response) => res.json());
    }

    /*Use to fetch all Users*/
    getAllUsers() {
          
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        
        this.token          = this.getAccessToken();

        headers.append('Authorization', this.token );
        return this._http.get(this._host +'/user?roles=U', { headers: headers }).map((res:Response) => res.json());
    }

    /*Use to fetch all Manufactures*/
    getAllManufactures() {
          
        let headers = new Headers();        
        this.token   = this.getAccessToken();
        
        headers.append('Authorization', this.token);
        return this._http.get(this._host +'/manufacturer?sort=name', { headers: headers }).map((res:Response) => res.json())
    }

    getStates() {
        let headers = new Headers();        
        this.token   = this.getAccessToken();
        
        headers.append('Authorization', this.token);        
        return this._http.get(this._host +'/states?sort=stateName', { headers: headers }).map((res:Response) => res.json())
    }
    
    getAccessToken(): string {
        let token           = this._cookieService.get('token');
        return 'Bearer ' + token;
    }

}/*end class*/

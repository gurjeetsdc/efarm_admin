import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { CookieService } from 'ngx-cookie';
import tsConstants = require('./../../tsconstant');

@Injectable()
export class InputService {

    private _host = tsConstants.HOST;
    private _accessToken = '';
  
    constructor(private _http: Http, private _cookieService: CookieService) { }

    /*
    *@Description: Input listing method
    *@Param: no parameter pass
    *@return: Multiple json array
    *@Author: Rohitk.kumar
    */
  	inputlist() {

  		let headers         = new Headers();        
        let urlSearchParams = new URLSearchParams();
        let token           = this._cookieService.get('token');
        this._accessToken   = 'Bearer ' + token;
        
        headers.append('Authorization', this._accessToken);
		return this._http.get(this._host +'/inputs', { headers: headers }).map((res:Response) => res.json())
    }


    /*
    *@Description: Get Manufacturer list for dropdown in input section
    *@Param: no parameter pass
    *@return: Multiple json array
    *@Author: Rohitk.kumar
    */
      getManuf() {
          
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        let token           = this._cookieService.get('token');
        this._accessToken    = 'Bearer ' + token;
        
        headers.append('Authorization', this._accessToken);
        return this._http.get(this._host +'/manufacturer', { headers: headers }).map((res:Response) => res.json())
    }

    getAllCategories() {
          
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        let token           = this._cookieService.get('token');
        this._accessToken   = 'Bearer ' + token;

        headers.append('Authorization', this._accessToken );
        return this._http.get(this._host +'/category', { headers: headers }).map((res:Response) => res.json());
    }


    /*
    *@Description: Input save data method
    *@Param: Input form unicode data post
    *@return: success/fail
    *@Author: Rohitk.kumar
    */
    inputadd(inputs) {
      console.log("inside input add");

        let headers         = new Headers();        
        let urlSearchParams = new URLSearchParams();
        let token           = this._cookieService.get('token');
        this._accessToken   = 'Bearer ' + token;
        
        headers.append('Authorization', this._accessToken);
        return this._http.post(this._host +'/inputs', inputs, { headers: headers }).map((res:Response) => res.json())
    }
    
    /*
    *@Description: Input detail info method
    *@Param: input id param
    *@return: input detail data
    *@Author: Rohitk.kumar
    */
    getInput(input) {

        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        let token           = this._cookieService.get('token');
        this._accessToken   = 'Bearer ' + token;
        
        headers.append('Authorization', this._accessToken);
        return this._http.get(this._host +'/inputs/'+ input, { headers: headers }).map((res:Response) => res.json())
    }

    /*
    *@Description: update Input info method
    *@Param: input id param and input data
    *@return: update success/fail 
    *@Author: Rohitk.kumar
    */
    updateInput(input) {
        
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        let token           = this._cookieService.get('token');
        this._accessToken   = 'Bearer ' + token;
        
        headers.append('Authorization', this._accessToken);
        return this._http.put(this._host +'/inputs/'+ input.id, input, { headers: headers }).map((res:Response) => res.json())
    }


    /*
    *@Description: update Input info method
    *@Param: input id param and input data
    *@return: update success/fail 
    *@Author: Rohitk.kumar
    */
    deleteInput( inputId ) {
        
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        let token           = this._cookieService.get('token');
        this._accessToken   = 'Bearer ' + token;
        
        headers.append('Authorization', this._accessToken );
        return this._http.delete(this._host +'/inputs/'+ inputId,  { headers: headers }).map((res:Response) => res.json());
    }   

     /*
    *@Description: get seller user list
    *@Param: nothing
    *@return: seller user list
    *@Author: Rohitk.kumar
    */
    getAllUsers() {
        let headers         = new Headers();
        let urlSearchParams = new URLSearchParams();
        let token           = this._cookieService.get('token');
        this._accessToken   = 'Bearer ' + token;
        
        headers.append('Authorization', this._accessToken );
        return this._http.get(this._host +'/users', { headers: headers }).map((res:Response) => res.json());
    }

}

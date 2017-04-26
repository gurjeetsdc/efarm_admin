import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
@Injectable()
export class InputService {

  private host = "https://efarmapi.herokuapp.com";
  //private host = "http://localhost:1337";
  private access_token = {};
  private token = '';
  
  constructor(private http: Http) { }

    /*
    *@Description: Input listing method
    *@Param: no parameter pass
    *@return: Multiple json array
    *@Author: Rohitk.kumar
    */
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


    /*
    *@Description: Get Manufacturer list for dropdown in input section
    *@Param: no parameter pass
    *@return: Multiple json array
    *@Author: Rohitk.kumar
    */
      getManuf() {
          
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        
        //let body = urlSearchParams.toString()
        return this.http.get(this.host +'/manufacturer', { headers: headers }).map((res:Response) => res.json())
    }

    /*
    *@Description: Input save data method
    *@Param: Input form unicode data post
    *@return: success/fail
    *@Author: Rohitk.kumar
    */
    inputadd(inputs) {
      console.log("inside input add");

        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        
    return this.http.post(this.host +'/inputs', inputs, { headers: headers }).map((res:Response) => res.json())
    }
    
    /*
    *@Description: Input detail info method
    *@Param: input id param
    *@return: input detail data
    *@Author: Rohitk.kumar
    */
    getInput(input) {
      console.log(input);
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();
        let body = {};
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
        console.log("addCrop----------------",input);
    return this.http.get(this.host +'/inputs/'+ input, { headers: headers }).map((res:Response) => res.json())
    }

    /*
    *@Description: update Input info method
    *@Param: input id param and input data
    *@return: update success/fail 
    *@Author: Rohitk.kumar
    */
    updateInput(input) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        let headers = new Headers();
        let body = {};        
        let urlSearchParams = new URLSearchParams();
        headers.append('Authorization', this.token);
    return this.http.put(this.host +'/inputs/'+ input.id, input, { headers: headers }).map((res:Response) => res.json())
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

        this.access_token   = JSON.parse(localStorage.getItem("user"));
        this.token          = 'Bearer ' + this.access_token["access_token"];
        
        headers.append('Authorization', this.token );
        return this.http.delete(this.host +'/inputs/'+ inputId,  { headers: headers }).map((res:Response) => res.json());
    }   

}

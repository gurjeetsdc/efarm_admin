import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Injectable()
export class CommanService {

  	constructor(  private _router: Router, private _cookieService: CookieService ) { }

  	checkAccessToken( err ): void {
        let code    = err.code;
        let message = err.message;

        if( (code == 401 && message == "authorization")) {
            this._cookieService.removeAll();
            this._router.navigate(['/login', {data: true}]);
        }else {
            
        }      
    }
}

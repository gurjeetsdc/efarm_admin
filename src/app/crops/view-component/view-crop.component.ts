import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { CropService } from '../services/crop.service';
import { CookieService } from 'ngx-cookie';

@Component({
  templateUrl: 'view-crop.component.html'
})
export class ViewCropComponent {

	private cropID      = '';
	private crop        = {};
    private isLoading   = true;
    constructor(private _router: Router, route: ActivatedRoute,private _cropService: CropService, private _cookieService: CookieService ) { 
      	this.cropID = route.snapshot.params['id'];
  	    this._cropService.get(this.cropID).subscribe(res => {
            this.isLoading = false;
            this.crop = res;
        },err => {
            this.isLoading = false;
            this.checkAccessToken(err);
        });
    }

    editCrop(cropid) {        
        let route = '/crops/edit/'+ cropid;
        this._router.navigate([route]);       
    }

    /*This function is use to remove user session if Access token expired. */
    checkAccessToken( err ): void {
        let status     = err.status;
        let statusText = err.statusText;

        if( (status == 401 && statusText == 'Unauthorized')) {
            this._cookieService.removeAll();
            this._router.navigate(['/login', {data: true}]);
        }else {
            console.log('Something unexpected happened, please try again later.');
        }        
    }
}

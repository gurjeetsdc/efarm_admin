import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { CropService } from '../services/crop.service';
@Component({
  templateUrl: 'view-crop.component.html'
})
export class ViewCropComponent {

	private cropID      = '';
	private crop        = {};

    constructor(private _router: Router, route: ActivatedRoute,private _cropService: CropService) { 
      	this.cropID = route.snapshot.params['id'];
  	    this._cropService.getCrop(this.cropID).subscribe(res => {
            this.crop = res["Data"][0];
        },err => {

        });
    }

    updateCrop(cropid) {        
        let route = '/crop/update/'+ cropid;
        this._router.navigate([route]);       
    }

}

import { Component } from '@angular/core';
import { CropService } from '../services/crop.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'add-crop.component.html'
})
export class AddUpdateCropComponent {
	private crop = {
        terms:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    };
    private cropID:any;
    constructor(private router : Router,private _activateRouter: ActivatedRoute, private _cropService: CropService) { 
       this.cropID = _activateRouter.snapshot.params['id'];        
        if( this.cropID ) {
            this._cropService.getCrop(this.cropID).subscribe(res => {
                this.crop = res["Data"][0];
            },err => {

            });
        }
    }

    save() {
        if(this.cropID) {
            this._cropService.updateCrop(this.crop).subscribe(res => {
                this.router.navigate(['/crop/list']);
            },err => {

            })
        } else {
      	    this._cropService.addCrop(this.crop).subscribe(res => {
                this.router.navigate(['/crop/list']);
            },err => {

            });
        }
    }
}

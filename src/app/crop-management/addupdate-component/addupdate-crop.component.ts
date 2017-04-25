import { Component } from '@angular/core';
import { CropService } from '../services/crop.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'addupdate-crop.component.html'
})
export class AddUpdateCropComponent {
	private crop = {
        terms:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        category:'',
        variety:'',
        packaging:'',
        destination_shipping:'',
        payment_method:'COD'
    };
    public isLoading = true;
    private category = [];
    private cropID:any;
    constructor(private router : Router,private _activateRouter: ActivatedRoute, private _cropService: CropService) { 
        this._cropService.getAllCategories().subscribe( res => { this.category = res; }, err => {});
        this.cropID = _activateRouter.snapshot.params['id'];        
        if( this.cropID ) {
            this._cropService.getCrop(this.cropID).subscribe(res => {
                this.crop = res["Data"][0];
                this.isLoading = false;
            },err => {
                this.isLoading = false;
            });
        } else {
            this.isLoading = false;
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

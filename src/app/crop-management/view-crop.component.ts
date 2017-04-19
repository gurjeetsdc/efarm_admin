import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CropService } from './crop.service';
@Component({
  templateUrl: 'view-crop.component.html'
})
export class ViewCropComponent {
	private cropID = '';
	private crop = {};
  private copy_crop = {};
  // private edit = false;
  constructor(route: ActivatedRoute,private _cropService: CropService) { 
  	this.cropID = route.snapshot.params['id'];
  	this._cropService.getCrop(this.cropID)
                       .subscribe(
                           res => {
                             this.crop = res["Data"][0];
                             console.log("cropcropcropcrop",this.crop)
                           },
                           err => {

                           });
  }

  // edit() {
  //   this.edit = !this.edit;
  //   this.copy_crop = this.crop;
  // }

  // cancel() {
  //   this.edit = !this.edit;
  //   this.crop = this.copy_crop;
  // }
}

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
  private edit = false;
  constructor(route: ActivatedRoute,private _cropService: CropService) { 
  	this.cropID = route.snapshot.params['id'];
  	this._cropService.getCrop(this.cropID)
                       .subscribe(
                           res => {
                             this.crop = res["Data"][0];
                           },
                           err => {

                           });
  }

  editCrop() {
    this.edit = !this.edit;
    this.copy_crop = JSON.parse(JSON.stringify(this.crop));
  }

  cancel() {
    this.edit = !this.edit;
    this.crop = JSON.parse(JSON.stringify(this.copy_crop));
  }

  save() {
    this._cropService.updateCrop(this.crop)
                       .subscribe(
                           res => {
                             this.edit = !this.edit;
                             this.copy_crop = JSON.parse(JSON.stringify(this.crop));
                           },
                           err => {

                           });
  }
}

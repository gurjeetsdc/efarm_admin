import { Component } from '@angular/core';
import { CropService } from './crop.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'add-crop.component.html'
})
export class AddCropComponent {
	private crop = {
    terms:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
  };
  constructor(private router : Router, private _cropService: CropService) { }

  addCrop() {
  	this._cropService.addCrop(this.crop)
                       .subscribe(
                           res => {
                             this.router.navigate(['/crop/list']);
                           },
                           err => {

                           });
  }
}

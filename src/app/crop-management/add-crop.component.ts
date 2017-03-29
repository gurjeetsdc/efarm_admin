import { Component } from '@angular/core';

@Component({
  templateUrl: 'add-crop.component.html'
})
export class AddCropComponent {
	private crop = {};
  constructor() { }

  addCrop() {
  	console.log("inside addCrop",this.crop)
  }
}

import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  templateUrl: 'view-crop.component.html'
})
export class ViewCropComponent {
	private cropID = '';
	private crop = {};
  constructor(route: ActivatedRoute) { 
  	this.cropID = route.snapshot.params['id'];
  }

  addCrop() {
  	console.log("inside addCrop")
  }
}

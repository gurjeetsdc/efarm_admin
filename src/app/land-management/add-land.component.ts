import { Component } from '@angular/core';

@Component({
  templateUrl: 'add-land.component.html'
})
export class AddLandComponent {
	private land = {};
  constructor() { }

  addLand() {
  	console.log("inside addLand",this.land)
  }
}

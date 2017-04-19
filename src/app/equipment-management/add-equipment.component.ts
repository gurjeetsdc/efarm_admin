import { Component } from '@angular/core';

@Component({
  templateUrl: 'add-equipment.component.html'
})
export class AddEquipmentComponent {
	private equipment = {};
  constructor() { }

  addEquipment() {
  	console.log("inside addEquipment",this.equipment)
  }
}

import { Component } from '@angular/core';

@Component({
  templateUrl: 'add-input.component.html'
})
export class AddInputComponent {
	private input = {};
  constructor() { }

  addInput() {
  	console.log("inside addInput",this.input)
  }
}

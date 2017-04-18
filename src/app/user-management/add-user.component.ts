import { Component } from '@angular/core';

@Component({
  templateUrl: 'add-user.component.html'
})
export class AddUserComponent {
	private user = {};
  constructor() { }

  addUser() {
  	console.log("inside addInput",this.user)
  }
}

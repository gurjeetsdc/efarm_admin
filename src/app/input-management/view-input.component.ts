import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { InputService } from './input.service';
@Component({
  templateUrl: 'view-input.component.html',
  providers: [InputService]
})
export class ViewInputComponent {
	private Id = '';
	private input = {};
  private copy_input = {};
  private edit = false;
  constructor(route: ActivatedRoute,private _inputService: InputService) { 
  	this.Id = route.snapshot.params['id'];
  	this._inputService.getInput(this.Id)
                       .subscribe(
                           res => {
                             //console.log(res);
                             this.input = res;
                             //console.log("sfsdfdfdfd",this.input)
                           },
                           err => {

                           });
  }

  editInput() {
    this.edit = !this.edit;
    this.copy_input = JSON.parse(JSON.stringify(this.input));
  }

  cancel() {
    this.edit = !this.edit;
    this.input = JSON.parse(JSON.stringify(this.copy_input));
  }

  save() {
    this._inputService.updateInput(this.input)
                       .subscribe(
                           res => {
                             this.edit = !this.edit;
                             this.copy_input = JSON.parse(JSON.stringify(this.input));
                           },
                           err => {

                           });
  }

 
}

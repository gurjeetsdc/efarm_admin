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
  private copy_crop = {};
  // private edit = false;
  constructor(route: ActivatedRoute,private _inputService: InputService) { 
  	this.Id = route.snapshot.params['id'];
  	this._inputService.getInput(this.Id)
                       .subscribe(
                           res => {
                             this.input = res["Data"][0];
                             console.log("sfsdfdfdfd",this.input)
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

import { Component } from '@angular/core';
import { InputService } from './input.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'add-input.component.html',
  providers: [InputService]
})
export class AddInputComponent {
	private input = {};
  constructor(private router : Router, private _inputService: InputService) { }

  ngOnInit() { }

  addInput() {

  	console.log("inside addInput",this.input);

  	    this._inputService.inputadd(this.input)
                       .subscribe(
                           res => {
                             console.log("response",res)
                             this.router.navigate(['/input/list']);
                           },
                            err => {
                            	console.log("error",err);
                            });
	}
  
}

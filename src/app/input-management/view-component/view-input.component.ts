import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { InputService } from '../services/input.service';
@Component({
  templateUrl: 'view-input.component.html',
  providers: [InputService]
})
export class ViewInputComponent {
	private Id = '';
	private input = {};
  private copy_input = {};
  private edit = false;
  public isLoading:boolean   = true;
  constructor(private _router: Router, private _activatedRouter: ActivatedRoute,  private _inputService: InputService) { 
  	this.Id =  _activatedRouter.snapshot.params['id'];
  	
        if( this.Id ) {
            this._inputService.getInput(this.Id).subscribe( res => {
             this.input = res;
             //console.log(res)
             this.isLoading = false;
              }, err => {
                this.isLoading = false;
              });
        }  

  }

   updateInput( ID ) {        
        let route = '/input/update/'+ID;
        this._router.navigate([route]);       
    }   

 
}

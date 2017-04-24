import { Component } from '@angular/core';
import { InputService } from './input.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'add-input.component.html',
  providers: [InputService]
})
export class AddInputComponent {
    private input     = {};
    
    private Id: any;
    private response:any;
    
    private showMessage:boolean = false;

    private action:string = 'Add';

    constructor(private _router : Router,  private _activateRouter: ActivatedRoute, private _inputService: InputService) {
        this.Id = _activateRouter.snapshot.params['id'];        
        if( this.Id ) {
            this._inputService.getInput(this.Id).subscribe( res => { this.input = res; this.action = 'Update' }, err => {});
        }        
    }

    submitInput() {
        console.log('submitting Input...');

        if( this.action == 'Update' ) {
            this.updateInput();            
        }else {
           this.addInput();
        }
    }

    addInput() {
        console.log('Posting Input...');

        this._inputService.inputadd(this.input).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this.input   = {};
            this._router.navigate(['/input/list', {data: "success"} ]);
            console.log(this.response)
        });      
      
    }


    updateInput() {
        console.log('Udpating Input...');
        
        this._inputService.updateInput(this.input).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this.input   = {};
            this._router.navigate(['/input/list', {data: "success"} ]);
        }); 
    }

    closeMessage() {
        this.showMessage = false;
    } 




  
}

import { Component } from '@angular/core';
import { InputService } from '../services/input.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'add-input.component.html',
  providers: [InputService]
})
export class AddInputComponent {
    private input     = {
        category_id:'',
        manufacturer_id:'',
        units:'',
        variety:'',
        tearm_and_conditions:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    };
    
    private Id: any;
    private response:any;
    private showMessage:boolean = false;
    private action:string = 'Add';
    private category = [];
    private manuf = [];

    constructor(private _router : Router,  private _activateRouter: ActivatedRoute, private _inputService: InputService) {
        this.Id = _activateRouter.snapshot.params['id'];        
        if( this.Id ) {
            this._inputService.getInput(this.Id).subscribe( res => {

                 this.input = res;
                 this.input.manufacturer_id = res.manufacturer.id;
                 this.action = 'Update'
            }, err => {});
        }

        this._inputService.getAllCategories().subscribe( res => { this.category = res; }, err => {});
        this._inputService.getManuf().subscribe( res => { this.manuf = res; }, err => {});
    }

    submitInput() {

        if( this.action == 'Update' ) {
            this.updateInput();            
        }else {
           this.addInput();
        }
    }

    addInput() {
        this.input["manufacturer"] = this.input["manufacturer_id"];
        this.input["category"] = this.input["category_id"];
        this._inputService.inputadd(this.input).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this._router.navigate(['/input/list', {data: "success"} ]);
            console.log(this.response)
        });      
      
    }


    updateInput() {
        this.input["manufacturer"] = this.input["manufacturer_id"];
        this.input["category"] = this.input["category_id"];
        this._inputService.updateInput(this.input).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this._router.navigate(['/input/list', {data: "success"} ]);
        }); 
    }

    closeMessage() {
        this.showMessage = false;
    } 




  
}

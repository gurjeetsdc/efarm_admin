import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { FormGroup, FormBuilder ,Validators } from '@angular/forms';

import { ManufacturerService } from '../services/manufacturer.service';

@Component({
    templateUrl: 'addupdate-manufacturer.component.html'
})
export class AddUpdateManufacturerComponent {
    
    private manufacturer     = {};
    private allManufacturer = [];

    private manufacturerID: any;
    private response:any;
    
    private showMessage:boolean = false;

    private action:string = 'Add';

    constructor(private _router : Router,  private _activateRouter: ActivatedRoute, private _manufacturerService: ManufacturerService) {
        this.manufacturerID = _activateRouter.snapshot.params['id'];        
        if( this.manufacturerID ) {
            this._manufacturerService.getManufacturer(this.manufacturerID).subscribe( res => { this.manufacturer = res; this.action = 'Update' }, err => {});
        }        
    }

    submitManufacturer() {
        console.log('submitting Manufacturer...');

        if( this.action == 'Update' ) {
            this.updateManufacturer();            
        }else {
           this.addManufacturer();
        }
    }

    addManufacturer() {
        console.log('Posting Manufacturer...');

        this._manufacturerService.postManufacturer(this.manufacturer).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this.manufacturer   = {};
            this._router.navigate(['/manufacturer/list', {data: "success"} ]);
            console.log(this.response)
        });      
    	
    }


    updateManufacturer() {
        console.log('Udpating Manufacturer...');
        
        this._manufacturerService.putManufacturer(this.manufacturer).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this.manufacturer   = {};
            this._router.navigate(['/manufacturer/list', {data: "success"} ]);
        }); 
    }

    closeMessage() {
        this.showMessage = false;
    } 
}

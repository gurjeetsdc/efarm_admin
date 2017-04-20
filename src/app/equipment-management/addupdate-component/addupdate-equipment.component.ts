import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { FormGroup, FormBuilder ,Validators } from '@angular/forms';

import { EquipmentService } from '../services/equipment.service';

@Component({
    templateUrl: 'addupdate-equipment.component.html'
})
export class AddUpdateEquipmentComponent {
    
    private equipment     = {};
    private allEquipments = [];

    private equipmentID: any;
    private response:any;
    
    private showMessage:boolean = false;

    private action:string = 'Add';

    constructor(private _router : Router,  private _activateRouter: ActivatedRoute, private _equipmentService: EquipmentService) {
        this.equipmentID = _activateRouter.snapshot.params['id'];        
        if( this.equipmentID ) {
            this._equipmentService.getEquipment(this.equipmentID).subscribe( res => { this.equipment = res; this.action = 'Update' }, err => {});
        }        
    }

    submitEquipment() {
        console.log('submitting Equipment...');

        if( this.action == 'Update' ) {
            this.updateEquipment();            
        }else {
           this.addEquipment();
        }
    }

    addEquipment() {
        console.log('Posting Equipment...');

        this._equipmentService.postEquipment(this.equipment).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this.equipment   = {};
            this._router.navigate(['/equipment/list', {data: "success"} ]);
            console.log(this.response)
        });      
    	
    }


    updateEquipment() {
        console.log('Udpating Equipment...');
        
        this._equipmentService.putEquipment(this.equipment).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this.equipment   = {};
            this._router.navigate(['/equipment/list', {data: "success"} ]);
        }); 
    }

    closeMessage() {
        this.showMessage = false;
    } 
}

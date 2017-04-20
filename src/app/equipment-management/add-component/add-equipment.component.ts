import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { FormGroup, FormBuilder ,Validators } from '@angular/forms';

import { EquipmentService } from '../services/equipment.service';

@Component({
    templateUrl: 'add-equipment.component.html'
})
export class AddEquipmentComponent {
    
    private equipment     = {};
    private allEquipments = [];

    private equipmentID: any;
    private response:any;
    
    private showMessage:boolean = false;

    constructor(private _router : Router,  private _activateRouter: ActivatedRoute, private _equipmentService: EquipmentService) {
        this.equipmentID = _activateRouter.snapshot.params['id'];        
        this._equipmentService.getEquipment(this.equipmentID).subscribe( res => { this.equipment = res; console.log(res) }, err => {});   
    }

    addEquipment() {
        console.log('Posting Equipment...');

        // if( this.equipment.id ) {
        //     console.log( "Edit - Equipment" );
        // }else {
        //     console.log( "add - Equipment" );        
        // }
    	// this._equipmentService.postEquipment(this.equipment).subscribe(res => {
     //        this.response    = res;
     //        this.showMessage = true;
     //        this.equipment   = {};
     //        this._router.navigate(['/equipment/list', {data: "success"} ]);
     //        console.log(this.response)
     //    }); 
    }

    closeMessage() {
        this.showMessage = false;
    } 
}

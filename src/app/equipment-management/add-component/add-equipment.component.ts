import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FormGroup, FormBuilder ,Validators } from '@angular/forms';

import { EquipmentService } from '../services/equipment.service';

@Component({
    templateUrl: 'add-equipment.component.html'
})
export class AddEquipmentComponent {
    
    private equipment     = {};
    private allEquipments = [];

    private response:any;
    
    private showMessage:boolean = false;

    constructor(private _router : Router, private _equipmentService: EquipmentService) { }

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

    closeMessage() {
        this.showMessage = false;
    } 
}

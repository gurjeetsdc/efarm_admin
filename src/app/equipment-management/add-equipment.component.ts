import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FormGroup, FormBuilder ,Validators } from '@angular/forms';

import { EquipmentService } from './equipment.service';

@Component({
    templateUrl: 'add-equipment.component.html'
})
export class AddEquipmentComponent {
    
    private equipment     = {};
    private allEquipments = [];

    private response:any;
    
    private showMessage:boolean = false;

    constructor(private router : Router, private _equipmentService: EquipmentService) { }

    addEquipment() {
        console.log('Posting Equipment...');

    	this._equipmentService.postEquipment(this.equipment).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this.equipment   = {};
            this.router.navigate(['/equipment/list', {data: "success"} ]);
        }); 
    }

    closeMessage() {
        this.showMessage = false;
    } 
}

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
    
    private showMessgae:boolean = true;

    constructor(private router : Router, private _equipmentService: EquipmentService) { 
        
        this._equipmentService.getAllEquipments().subscribe(allEquipments => {
            this.allEquipments = allEquipments;
            console.log(allEquipments);
        }); 
    }

    addEquipment() {
        console.log('Posting Equipment...');

    	this._equipmentService.postEquipment(this.equipment).subscribe(res => {
            this.response    = res;
            this.showMessgae = true;
            this.equipment   = {};
        }); 
    }

    closeMessage() {
        this.showMessgae = false;
    } 
}

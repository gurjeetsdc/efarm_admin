import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EquipmentService } from '../services/equipment.service';


@Component({
    templateUrl: 'update-equipment.component.html'
})
export class UpdateEquipmentComponent {
    
    private equipment     = {};
    private allEquipments = [];

    private equipmentID:any;
    private response:any;
    
    private showMessage:boolean = false;

    constructor( private _router : Router, private _activateRouter: ActivatedRoute, private _equipmentService: EquipmentService) { 
        
        this.equipmentID = _activateRouter.snapshot.params['id'];        
        this._equipmentService.getEquipment(this.equipmentID).subscribe( res => { this.equipment = res; console.log(res) }, err => {});   
    }

    updateEquipment() {
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

import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { EquipmentService } from '../services/equipment.service';


@Component({
  templateUrl: 'view-equipment.component.html'
})
export class ViewEquipmentComponent {

    private equipmentID    = '';
    private equipment      = {};
    private copy_equipment = {};
    private edit           = false;

    private isLoading:boolean = true;

    constructor(private _router: Router, private _activatedRouter: ActivatedRoute, private _equipmentService: EquipmentService) {     	
        
        this.equipmentID = _activatedRouter.snapshot.params['id'];
        if( this.equipmentID ) {
            this._equipmentService.getEquipment(this.equipmentID).subscribe( res => { this.equipment = res;  this.isLoading = false; }, err => {});
        }    
    }

    editEquipment( equipmentID ) {        
        let route = '/equipment/edit/'+equipmentID;
        this._router.navigate([route]);       
    }   
}

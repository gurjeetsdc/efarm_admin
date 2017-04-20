import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EquipmentService } from './equipment.service';


@Component({
  templateUrl: 'view-equipment.component.html'
})
export class ViewEquipmentComponent {

    private equipmentID    = '';
    private equipment      = {};
    private copy_equipment = {};
    private edit      = false;

    constructor(private _route: ActivatedRoute, private _equipmentService: EquipmentService) {     	
        
        this.equipmentID = _route.snapshot.params['id'];    	
        this._equipmentService.getEquipment(this.equipmentID).subscribe( res => { this.equipment = res; console.log(res) }, err => {});
    }

    editCrop() {
        this.edit = !this.edit;
        this.copy_equipment = JSON.parse(JSON.stringify(this.equipment));
    }

    cancel() {
        this.edit = !this.edit;
        this.equipment = JSON.parse(JSON.stringify(this.copy_equipment));
    }

    save() {
        this._equipmentService.putEquipment(this.equipment)
                           .subscribe(
                               res => {
                                    this.edit = !this.edit;
                                    this.copy_equipment = JSON.parse(JSON.stringify(this.equipment));
                               },
                               err => {

                               });
    }
}

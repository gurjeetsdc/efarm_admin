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
            this._equipmentService.getEquipment(this.equipmentID).subscribe( res => { 
                this.equipment = res;  
                this.isLoading = false; 
            }, 
            err => {
                this.checkAccessToken( err );
            });
        }    
    }

    editEquipment( equipmentID ) {        
        let route = '/equipment/edit/'+equipmentID;
        this._router.navigate([route]);       
    }   

    checkAccessToken( err ): void {
        console.log(err);
        let status     = err.status;
        let statusText = err.statusText;

        if( (status == 401 && statusText == 'Unauthorized')) {
            localStorage.removeItem('user');
            this._router.navigate(['/login', {data: true}]);
        }else {
            console.log('Something unexpected happened, please try again later.');
        }        
    }   
}

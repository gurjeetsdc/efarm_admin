import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { EquipmentService } from '../services/equipment.service';
import { CookieService } from 'ngx-cookie';


@Component({
  templateUrl: 'view-equipment.component.html'
})
export class ViewEquipmentComponent {

    private equipmentID    = '';
    private equipment      = {};
    private copy_equipment = {};
    private edit           = false;

    private isLoading:boolean = true;

    constructor(private _router: Router, private _activatedRouter: ActivatedRoute, private _equipmentService: EquipmentService, private _cookieService: CookieService) {     	
        
        this.equipmentID = _activatedRouter.snapshot.params['id'];
        if( this.equipmentID ) {
            this._equipmentService.getEquipment(this.equipmentID).subscribe( res => { 
                this.isLoading = false;
                if( res.success  ){
                    this.equipment = res.data;  
                }else{
                    this.checkAccessToken( res.error );    
                }
            }, 
            err => {
                this.checkAccessToken( err );
            });
        }    
    }

    editEquipment( equipmentID ) {        
        let route = '/equipments/edit/'+equipmentID;
        this._router.navigate([route]);       
    }   

   checkAccessToken( err ): void {
        let code    = err.code;
        let message = err.message;

        if( (code == 401 && message == "authorization")) {
            this._cookieService.removeAll();
            this._router.navigate(['/login', {data: true}]);
        }else {
            
        }      
    }
}

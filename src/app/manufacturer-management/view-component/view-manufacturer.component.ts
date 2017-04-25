import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { ManufacturerService } from '../services/manufacturer.service';


@Component({
  templateUrl: 'view-manufacturer.component.html'
})
export class ViewManufacturerComponent {

    private manufacturerID    = '';
    private manufacturer      = {};
    private copy_manufacturer = {};
    private edit      = false;

    constructor(private _router: Router, private _activatedRouter: ActivatedRoute, private _manufacturerService: ManufacturerService) {     	
        
        this.manufacturerID = _activatedRouter.snapshot.params['id'];
        if( this.manufacturerID ) {
            this._manufacturerService.getManufacturer(this.manufacturerID).subscribe( res => { this.manufacturer = res; console.log(res) }, err => {});
        }    
    }

    updateManufacturer( manufacturerID ) {        
        let route = '/manufacturer/update/'+manufacturerID;
        this._router.navigate([route]);       
    }   
}

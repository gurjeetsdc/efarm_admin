import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ManufacturerService } from './manufacturer.service';

@Component({
    templateUrl: 'add-manufacturer.component.html'
})

export class AddManufacturerComponent {
    
    private manufacturer     = {};
    private allManufacturer = [];

    private response:any;
    
    private showMessage:boolean = false;

    constructor(private _router : Router, private _manufacturerService: ManufacturerService) { }

    addManufacturer() {
    	this._manufacturerService.postManufacturer(this.manufacturer).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this.manufacturer   = {};
            this._router.navigate(['/manufacturer/list', {data: "success"} ]);
        }); 
    }

    closeMessage() {
        this.showMessage = false;
    } 
}

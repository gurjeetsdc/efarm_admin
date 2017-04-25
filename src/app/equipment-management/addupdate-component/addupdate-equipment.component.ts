import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { FormGroup, FormBuilder ,Validators } from '@angular/forms';

import { EquipmentService } from '../services/equipment.service';

@Component({
    templateUrl: 'addupdate-equipment.component.html'
})
export class AddUpdateEquipmentComponent {
    
    private equipment     = {};
    private allEquipments = [];
    private category      = [];
    private equipmentID: any;
    private response:any;
    private user:any;
    
    private showMessage:boolean = false;
    private isLoading:boolean   = true;

    private action:string = 'Add';

    private currentYear = new Date().getFullYear();
    private years = [];
    
    constructor(private _router : Router,  private _activateRouter: ActivatedRoute, private _equipmentService: EquipmentService) {
        this.equipmentID = _activateRouter.snapshot.params['id'];        
        
        if( this.equipmentID ) {
            this._equipmentService.getEquipment(this.equipmentID).subscribe( res => { this.equipment = res; this.action = 'Edit'; this.isLoading = false;}, err => {});
        }else{
            this.isLoading = false;
        }
        
       let equipmentDefaultvalues = {
                                    name: '',
                                    category: '',
                                    companyManufacturer: '',
                                    model: '',
                                    modelyear: '',
                                    enginepower: '',
                                    rentSell: 'rent',
                                    rate: '',
                                    usage: '',
                                    description: '',
                                    termsConditions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
                                    quantity: '',
                                    user_id:'58f5e8e37329488e3095ba93'
                                };
        
        this.equipment = equipmentDefaultvalues;
        

        this._equipmentService.getAllCategories().subscribe( res => { this.category = res; console.log(this.category) }, err => {});
        // this._equipmentService.getCurrentUser().subscribe( res => { this.equipment.user_id = res; }, err => {});
        
         
        /*create years array. */
        this.years.push(this.currentYear);
        for (var i = 1; i <= 50; i++) {
            this.years.push(this.currentYear - i);
        }
    }

    submitEquipment() {
        console.log('submitting Equipment...');

        if( this.action == 'Edit' ) {
            this.editEquipment();            
        }else {
           this.addEquipment();
        }
    }

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


    editEquipment() {
        console.log('Udpating Equipment...');
        
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

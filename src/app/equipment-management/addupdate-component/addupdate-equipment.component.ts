import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// import { FormGroup, FormBuilder ,Validators } from '@angular/forms';

import { EquipmentService } from '../services/equipment.service';

@Component({
    templateUrl: 'addupdate-equipment.component.html'
})
export class AddUpdateEquipmentComponent {
    
    private equipment   = {
                            name: '',
                            category_id: '',
                            category: '',
                            companyManufacturer: '',
                            model: '',
                            modelyear: '',                            
                            rentSell: 'rent',
                            rate: '',
                            usage: '',
                            description: '',
                            termsConditions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
                            quantity: '',
                            user:'',
                            user_id:'',
                            supply_ablity: 'yes',
                            price_unit: 'Hour'
                        };


    private allEquipments = [];
    private category      = [];
    private users:any     = [];

    private equipmentID: any;
    private response:any;
    
    private showMessage:boolean = false;
    private isLoading:boolean   = true;

    private action:string = 'Add';

    private currentYear = new Date().getFullYear();
    private years = [];

    private address:any;
    
    constructor(private _router : Router,  private _activateRouter: ActivatedRoute, private _equipmentService: EquipmentService) {
        this.equipmentID = _activateRouter.snapshot.params['id'];        
        
        if( this.equipmentID ) {
            this._equipmentService.getEquipment(this.equipmentID).subscribe( res => { 
                        this.equipment = res; this.action = 'Edit'; this.isLoading = false;
                    }, 
                    err => {
                        this.checkAccessToken(err);
                    });
        }else{
            this.isLoading = false;
        }

        this._equipmentService.getAllCategories().subscribe( res => { 
                this.category = res; console.log(this.category) 
            }, 
            err => {
                this.checkAccessToken(err);
            });
        this._equipmentService.getUsers().subscribe( res => { 
                this.users = res; }, 
            err => {
                this.checkAccessToken(err);     
            });
        
         
        /*create years array. */
        this.years.push(this.currentYear);
        for (var i = 1; i <= 50; i++) {
            this.years.push(this.currentYear - i);
        }
    }

    getAddress(place: Object) {
        this.address = place['formatted_address'];
        console.log(this.address)

        let location = place['geometry']['location'];
        let lat      = location.lat();
        let lng      = location.lng();
        

        console.log("Address lat", lat);
        console.log("Address lng", lng);
        
        
    }

    submitEquipment() {
        this.isLoading = true;
        console.log('submitting Equipment...');

        if( this.action == 'Edit' ) {
            this.editEquipment();            
        }else {
           this.addEquipment();
        }
    }

    clearEquipment() {
        this.equipment   = {
                            name: '',
                            category_id: '',
                            category: '',
                            companyManufacturer: '',
                            model: '',
                            modelyear: '',                            
                            rentSell: 'rent',
                            rate: '',
                            usage: '',
                            description: '',
                            termsConditions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
                            quantity: '',
                            user:'',
                            user_id:'',
                            supply_ablity: 'yes',
                            price_unit: 'Hour'
                        };
    }

    addEquipment() {
        console.log('Posting Equipment...');
        this.equipment.category = this.equipment.category_id;
        this.equipment.user     = this.equipment.user_id;


        this._equipmentService.postEquipment(this.equipment).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            // this.equipment   = {};
            this.clearEquipment();
            this._router.navigate(['/equipment/list', {data: "success"} ]);
            console.log(this.response)
        },
        err => {
            this.checkAccessToken(err);
        });      
    	
    }


    editEquipment() {
        console.log('Udpating Equipment...');
        
        this.equipment.category = this.equipment.category_id;
        this.equipment.user     = this.equipment.user_id;

        this._equipmentService.putEquipment(this.equipment).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            

            this.clearEquipment();            
            this._router.navigate(['/equipment/list', {data: "success"} ]);
        },
        err =>{
            this.checkAccessToken(err);
        }); 
    }   

    closeMessage() {
        this.showMessage = false;
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

import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DatePickerOptions, DateModel } from 'ng2-datepicker';

// import { FormGroup, FormBuilder ,Validators } from '@angular/forms';


import { EquipmentService } from '../services/equipment.service';

@Component({
    templateUrl: 'addupdate-equipment.component.html'
})
export class AddUpdateEquipmentComponent {
    
    public equipment   = {
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
                            quantity: '1',
                            user:'',
                            user_id:'',
                            supply_ablity: 'No',
                            price_unit: 'Hour',
                            city: '',
                            district: '',
                            state: '',
                            pincode: '',
                            supply_area: '',
                            verified: 'No',
                            avalibilityperiodUnits: 'Hour',
                            variety: '',
                            payment_method: 'COD'
                        };


    private allEquipments = [];
    private category      = [];
    private sellers:any     = [];

    private equipmentID: any;
    private response:any;
    
    private showMessage:boolean = false;
    private isLoading:boolean   = true;

    private action:string = 'Add';

    private currentYear = new Date().getFullYear();
    private years = [];

    private address:any;

    private date: DateModel;
    private options: DatePickerOptions;
    
    constructor(private _router : Router,  private _activateRouter: ActivatedRoute, private _equipmentService: EquipmentService,  private changeDetectorRef: ChangeDetectorRef) {
        
        this.options = new DatePickerOptions();                

        this.equipmentID = _activateRouter.snapshot.params['id'];        
        
        if( this.equipmentID ) {
            this._equipmentService.getEquipment(this.equipmentID).subscribe( res => { 
                        this.equipment = res.data; this.action = 'Edit'; this.isLoading = false;
                    }, 
                    err => {
                        this.checkAccessToken(err);
                    });
        }else{
            this.isLoading = false;
        }

        this._equipmentService.getAllCategories().subscribe( res => { 
            this.category = res.data; console.log(this.category) 
        }, 
        err => {
            this.checkAccessToken(err);
        });
        
        this._equipmentService.getAllUsers().subscribe( res => { 
            this.sellers = res.data.users;  
            console.log(this.sellers);
        }, 
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
        
        let location = place['geometry']['location'];
        let lat      = location.lat();
        let lng      = location.lng();
        
        let address_components = place['address_components'];

        console.log(place);

        let city     = address_components[2].long_name;
        let district = address_components[3].long_name;
        let state    = address_components[4].long_name;
        let pin      = address_components[5].long_name;

        this.equipment.city     = city;
        this.equipment.district = district;
        this.equipment.state    = state;
        this.equipment.pincode  = pin;



        let arrayLength = address_components.length;        

        console.log(arrayLength);
        console.log(address_components);

        switch (new Date().getDay()) {
            case 0:
                console.log("Sunday");
                break;
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
        }



        
        console.log("Address lat", lat);
        console.log("Address lng", lng);

        this.changeDetectorRef.detectChanges();
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
                            quantity: '1',
                            user:'',
                            user_id:'',
                            supply_ablity: 'yes',
                            price_unit: 'Hour',
                            city: '',
                            district: '',
                            state: '',
                            pincode: '',
                            supply_area: '',
                            verified: 'No',
                            avalibilityperiodUnits: 'Hour',
                            variety: '',
                            payment_method: 'COD'
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

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
                            payment_method: 'COD',
                            availableFrom: {}
                        };


    private allEquipments     = [];
    private category          = [];
    private sellers:any       = [];
    private manufacturers:any = [];
    

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

    private varieties: any;
    
    private states: any;
    private districts: any;
    
    constructor(private _router : Router,  private _activateRouter: ActivatedRoute, private _equipmentService: EquipmentService,  private changeDetectorRef: ChangeDetectorRef) {
        
        this.options = new DatePickerOptions({ format: 'DD/MM/YYYY', autoApply: true});                

        this.equipmentID = _activateRouter.snapshot.params['id'];        
        
        if( this.equipmentID ) {
            this._equipmentService.getEquipment(this.equipmentID).subscribe( res => { 
                        this.equipment = res.data; 
                        this.action = 'Edit'; 
                        this.isLoading = false;                        
                    }, 
                    err => {
                        this.checkAccessToken(err);
                    });
        }else{
            this.isLoading = false;
        }

        this._equipmentService.getAllCategories().subscribe( res => { 
            this.category = res.data;
            if( this.action == 'Edit' ){                
                this.setVarieties();                
            }
        }, 
        err => {
            this.checkAccessToken(err);
        });
        
        this._equipmentService.getAllUsers().subscribe( res => { 
            this.sellers = res.data.users;              
        }, 
        err => {
            this.checkAccessToken(err);     
        });

        this._equipmentService.getAllManufactures().subscribe( res => { 
            this.manufacturers = res.data;              
        }, 
        err => {
            this.checkAccessToken(err);     
        });

        this._equipmentService.getStates().subscribe( res => { 
            this.states = res.data;   
            if( this.action == 'Edit' ){                
                this.setDistrict();
            }           
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
                            payment_method: 'COD',
                            availableFrom: {}
                        };
    }

    setVarieties( ): void {  
        /* reset values. */
        this.varieties         = null;
        if( this.action !== 'Edit' ){
            this.equipment.variety = null;
            this.equipment.variety = '';
        }
        /* Initialize category. */
        let categoryID = this.equipment.category_id;        
        if( categoryID ){
            this.category.filter(obj => obj.id == categoryID).map( obj => this.varieties = obj.variety)
        }
        
        this.changeDetectorRef.detectChanges();
    }

    setDistrict( ): void {  
        /* reset values. */
        this.districts         = null;
        if( this.action !== 'Edit' ){
            this.equipment.district = null;
            this.equipment.district = '';
        }    

        /* Initialize category. */
        let stateName = this.equipment.state; 

        console.log(stateName);

        if( stateName ){
            this.states.filter(obj => obj.stateName == stateName).map( obj => this.districts = obj.districts)
        }
        
        this.changeDetectorRef.detectChanges();
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
            this._router.navigate(['/equipments/list', {data: "success"} ]);
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
            this._router.navigate(['/equipments/list', {data: "success"} ]);
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


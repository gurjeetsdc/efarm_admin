import { Component } from '@angular/core';
import { LandService } from '../services/land.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { CookieService } from 'ngx-cookie';

@Component({
  templateUrl: 'add-land.component.html',
  providers: [LandService]

})
export class AddLandComponent {
	private land = {
        rentSell: 'Lease',
        unit:'Ft',
        categoryId:'',
        location:'',
        sellerId:'',
        city: '',
        district: '',
        state: '',
        pincode: '',        
        periodsunit:'Day',
        verified: 'No',
        priceunit:'Day',
        term_condition:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    };
    private sellers = [];
    private category = [];
    private years = [];
    private Id: any;
    private response:any;
        private address:any;

    private states: any;
    private districts: any;
    public options: DatePickerOptions;
    private isLoading:boolean   = true;
    
    private currentYear = new Date().getFullYear();
    private showMessage:boolean = false;
    private action:string = 'Add';
    
    constructor(private _router : Router,  private _activateRouter: ActivatedRoute, private _landService: LandService, private _cookieService: CookieService) {

        this.options = new DatePickerOptions({ format: 'DD/MM/YYYY', autoApply: true});                
        
        this.Id = _activateRouter.snapshot.params['id'];        

        if( this.Id ) {
            this._landService.getLand(this.Id).subscribe( res => { 
                 this.isLoading = false;
              if(res.success) {
                this.land = res.data; 
                this.action = 'Update'
                this.land.sellerId = res.data.user.id;
                this.land.categoryId = res.data.categoryId;

                  } else {
                    this.checkAccessToken(res.error);    
                  } 
              }, err => {
                 this.checkAccessToken(err);    
              });
        }else{
             this.isLoading = false;
        }
        this._landService.getAllCategories().subscribe( res => { this.category = res.data; }, err => { this.checkAccessToken(err); });
        this._landService.getAllUsers().subscribe( res => { this.sellers = res.data.users; }, err => { this.checkAccessToken(err); });

        this._landService.getStates().subscribe( res => { 
            this.states = res.data;   
            if( this.action == 'Update' ){                
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

    submitLand() {
        this.isLoading = true;
        if( this.action == 'Update' ) {
            this.updateLand();            
        }else {
           this.addLand();
        }
    }

    addLand() {
        if(this.land["sellerId"]) this.land["user"] = this.land["sellerId"];
        if(this.land["categoryId"]) this.land["category"] = this.land["categoryId"];

        this._landService.landadd(this.land).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this._cookieService.put('landAlert', 'Added Successfully.');
            this._router.navigate(['/land/list', {data: "success"} ]);
        });      
      
    }


    updateLand() {
        if(this.land["sellerId"]) this.land["user"] = this.land["sellerId"];
        if(this.land["categoryId"]) this.land["category"] = this.land["categoryId"];
        this._landService.updateLand(this.land).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this._cookieService.put('landAlert', 'Updated Successfully.');
            this._router.navigate(['/land/list', {data: "success"} ]);
        }); 
    }

    setDistrict( ): void {  
        /* reset values. */
        this.districts         = null;
        if( this.action !== 'Update' ){
            this.land.district = null;
            this.land.district = '';
        }    

        /* Initialize category. */
        let stateName = this.land.state; 


        if( stateName ){
            this.states.filter(obj => obj.stateName == stateName).map( obj => this.districts = obj.districts)
        }
        
    }


    closeMessage() {
        this.showMessage = false;
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

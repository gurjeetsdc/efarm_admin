import { Component, ChangeDetectorRef } from '@angular/core';
import { CropService } from '../services/crop.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { CookieService } from 'ngx-cookie';

@Component({
  templateUrl: 'addupdate-crop.component.html'
})
export class AddUpdateCropComponent {
	public crop = {
        terms:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        category:'',
        variety:'',
        packaging:'',
        paymentPreference:'COD',
        categoryID:'',
        sellerID:'',
        supplyArea:'',
        supplyAbility:'No',
        quantityUnit:'Kg',
        availableUnit : 'Days',
        verified: 'No',
        state:'',
        district:''
    };

    public isLoading       = false;
    public isPageLoading   = true;
    public category        = [];
    public sellers         = [];
    public cropID:any;
    public date: DateModel;
    public options: DatePickerOptions;

    public varieties: any;
    public states: any;
    public districts: any;
    
    constructor(private _router : Router,private _activateRouter: ActivatedRoute, private _cropService: CropService, private _cookieService: CookieService, private changeDetectorRef: ChangeDetectorRef ) { 
        this.cropID = _activateRouter.snapshot.params['id'];        
        
        if( this.cropID ) {
            this._cropService.get(this.cropID).subscribe(res => {
                this.isPageLoading = false;
                if(res.success) {
                    this.crop = res.data;
                    this.crop.categoryID = res.data.category.id;
                    if(res.data.seller && res.data.seller.id )this.crop.sellerID = res.data.seller.id;
                } else {
                    this.checkAccessToken(res.error);
                }
            },err => {
                this.isPageLoading = false;
            });
        } else {
            this.isPageLoading = false;
        }
        /*Use to get all Crops categories*/
        this._cropService.getAllCategories().subscribe( res => {
             this.category = res.data; 
            if( this.cropID ) this.setVarieties();
        }, err => {});
        
        /*Use to get all users*/
        this._cropService.getAllUsers().subscribe( res => {
             if(res.success) {this.sellers = res.data.users;} 
        }, err => {});

        /*Use to get all states*/
        this._cropService.getStates().subscribe( res => { 
            this.states = res.data;   
            if( this.cropID ) this.setDistrict();
        },err => {});
        
        this.options = new DatePickerOptions({ format: 'DD/MM/YYYY', autoApply: true});

    }

     /*If cropID exist then will update existing crop otherwise will add new crop*/
    save() {
        this.isLoading = true;
        if(this.crop["supplyAbility"] == "No") {
            this.crop["supplyRange"] = null;
        }
        if(this.cropID) {
            this.crop["category"] = this.crop["categoryID"];
            if(this.crop["sellerID"]) this.crop["seller"] = this.crop["sellerID"];
            this._cropService.update(this.crop).subscribe(res => {
                this.isLoading = false;
                this._cookieService.put('cropAlert', 'Updated successfully.');
                this._router.navigate(['/crops/list']);
            },err => {
                this.isLoading = false;
            })
        } else {
            this.crop["category"] = this.crop["categoryID"];
            if(this.crop["sellerID"]) this.crop["seller"] = this.crop["sellerID"];
      	    this._cropService.add(this.crop).subscribe(res => {
                this.isLoading = false;
                this._cookieService.put('cropAlert', 'Added successfully.');
                this._router.navigate(['/crops/list']);
            },err => {
                this.isLoading = false;
            });
        }
    }

    /*Use to set variety get from selected on category*/
    setVarieties( ): void {  
        /* reset values. */
        this.varieties         = null;
        if( !this.cropID ){
            this.crop.variety = null;
            this.crop.variety = '';
        }
        /* Initialize category. */
        let categoryID = this.crop.categoryID;        
        if( categoryID ){
            this.category.filter(obj => obj.id == categoryID).map( obj => this.varieties = obj.variety)
        }
        
        this.changeDetectorRef.detectChanges();
    }

    /*Use to set district based on state name*/
    setDistrict( ): void {  
        /* reset values. */
        this.districts         = null;
        if( !this.cropID ){
            this.crop.district = null;
            this.crop.district = '';
        }    

        /* Initialize category. */
        let stateName = this.crop.state; 

        if( stateName ){
            this.states.filter(obj => obj.stateName == stateName).map( obj => this.districts = obj.districts)
        }
        
        this.changeDetectorRef.detectChanges();
    }

    /*This function is use to remove user session if Access token expired. */
    checkAccessToken( err ): void {
        let code    = err.code;
        let message = err.message;

        if( (code == 401 && message == "authorization")) {
            this._cookieService.removeAll();
            this._router.navigate(['/login', {data: true}]);
        }       
    }
}

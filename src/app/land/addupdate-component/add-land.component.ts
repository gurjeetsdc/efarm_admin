import { Component } from '@angular/core';
import { LandService } from '../services/land.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

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
        periodsunit:'Day',
        priceunit:'Day',
        term_condition:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    };
    private sellers = [];
    private category = [];
    private Id: any;
    private response:any;
    public options: DatePickerOptions;
    
    private showMessage:boolean = false;
    private action:string = 'Add';
    
    constructor(private _router : Router,  private _activateRouter: ActivatedRoute, private _landService: LandService) {

        this.options = new DatePickerOptions();
        this.Id = _activateRouter.snapshot.params['id'];        

        if( this.Id ) {
            this._landService.getLand(this.Id).subscribe( res => { 
                this.land = res.data; 
                this.action = 'Update'
                this.land.sellerId = res.data.user.id;
                this.land.categoryId = res.data.categoryId;
              }, err => {});
        }
        this._landService.getAllCategories().subscribe( res => { this.category = res.data; }, err => {});
        this._landService.getAllUsers().subscribe( res => { this.sellers = res.data.users; }, err => {});
    }

    submitLand() {
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
            this._router.navigate(['/land/list', {data: "success"} ]);
            console.log(this.response)
        });      
      
    }


    updateLand() {
        if(this.land["sellerId"]) this.land["user"] = this.land["sellerId"];
        if(this.land["categoryId"]) this.land["category"] = this.land["categoryId"];
        this._landService.updateLand(this.land).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this._router.navigate(['/land/list', {data: "success"} ]);
        }); 
    }

    closeMessage() {
        this.showMessage = false;
    } 









}

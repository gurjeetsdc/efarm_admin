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
        unit:'',
        category_id:'',
        location:'',
        seller_id:'',
        periodsunit:'',
        priceunit:'',
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
                this.land = res; 
                this.action = 'Update'
                this.land.seller_id = res.user.id;
              }, err => {});
        }
        this._landService.getAllCategories().subscribe( res => { this.category = res; }, err => {});
        this._landService.getAllUsers().subscribe( res => { this.sellers = res; }, err => {});
    }

    submitLand() {
        if( this.action == 'Update' ) {
            this.updateLand();            
        }else {
           this.addLand();
        }
    }

    addLand() {
        if(this.land["seller_id"]) this.land["user"] = this.land["seller_id"];

        this._landService.landadd(this.land).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this._router.navigate(['/land/list', {data: "success"} ]);
            console.log(this.response)
        });      
      
    }


    updateLand() {
        if(this.land["seller_id"]) this.land["user_id"] = this.land["seller_id"];
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

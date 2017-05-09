import { Component } from '@angular/core';
import { CropService } from '../services/crop.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  templateUrl: 'addupdate-crop.component.html'
})
export class AddUpdateCropComponent {
	private crop = {
        terms:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        category:'',
        variety:'',
        packaging:'',
        payment_method:'COD',
        category_id:'',
        seller_id:'',
        supply_area:'',
        supply_ability:'No',
        quantity_unit:'Kg',
        available_unit : 'Days',
        verified: 'No'
    };
    public isLoading = true;
    private category = [];
    private sellers = [];
    private cropID:any;
    public date: DateModel;
    public options: DatePickerOptions;
    constructor(private router : Router,private _activateRouter: ActivatedRoute, private _cropService: CropService) { 
        this._cropService.getAllCategories().subscribe( res => { this.category = res; }, err => {});
        this._cropService.getAllUsers().subscribe( res => { this.sellers = res; }, err => {});
        this.cropID = _activateRouter.snapshot.params['id'];        
        if( this.cropID ) {
            this._cropService.get(this.cropID).subscribe(res => {
                this.crop = res;
                this.crop.category_id = res.category.id;
                if(res.seller && res.seller.id )this.crop.seller_id = res.seller.id;
                this.isLoading = false;
            },err => {
                this.isLoading = false;
            });
        } else {
            this.isLoading = false;
        }
        this.options = new DatePickerOptions();

    }

    save() {
        this.isLoading = true;
        if(this.crop["supply_ability"] == "No") {
            delete this.crop["supply_range"]
        }
        if(this.cropID) {
            this.crop["category"] = this.crop["category_id"];
            if(this.crop["seller_id"]) this.crop["seller"] = this.crop["seller_id"];
            this._cropService.update(this.crop).subscribe(res => {
                this.isLoading = false;
                this.router.navigate(['/crop/list']);
            },err => {
                this.isLoading = false;
            })
        } else {
            this.crop["category"] = this.crop["category_id"];
            if(this.crop["seller_id"]) this.crop["seller"] = this.crop["seller_id"];
      	    this._cropService.add(this.crop).subscribe(res => {
                this.isLoading = false;
                this.router.navigate(['/crop/list']);
            },err => {
                this.isLoading = false;
            });
        }
    }
}

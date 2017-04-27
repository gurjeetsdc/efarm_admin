import { Component } from '@angular/core';
import { CropService } from '../services/crop.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'addupdate-crop.component.html'
})
export class AddUpdateCropComponent {
	private crop = {
        terms:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        category:'',
        variety:'',
        packaging:'',
        destination_shipping:'Shipping 1',
        payment_method:'COD',
        category_id:'',
        user_id:'',
        moq:'moq',
        supply_ablity:''
    };
    public isLoading = true;
    private category = [];
    private users = [];
    private cropID:any;
    constructor(private router : Router,private _activateRouter: ActivatedRoute, private _cropService: CropService) { 
        this._cropService.getAllCategories().subscribe( res => { this.category = res; }, err => {});
        this._cropService.getAllUsers().subscribe( res => { this.users = res; }, err => {});
        this.cropID = _activateRouter.snapshot.params['id'];        
        if( this.cropID ) {
            this._cropService.get(this.cropID).subscribe(res => {
                this.crop = res;
                this.crop.category_id = res.category.id;
                this.crop.user_id = res.user.id;
                this.isLoading = false;
            },err => {
                this.isLoading = false;
            });
        } else {
            this.isLoading = false;
        }

    }

    save() {
        this.isLoading = true;
        if(this.cropID) {
            this.crop["category"] = this.crop["category_id"];
            this.crop["user"] = this.crop["user_id"];
            this._cropService.update(this.crop).subscribe(res => {
                this.isLoading = false;
                this.router.navigate(['/crop/list']);
            },err => {
                this.isLoading = false;
            })
        } else {
            this.crop["category"] = this.crop["category_id"];
            this.crop["user"] = this.crop["user_id"];
      	    this._cropService.add(this.crop).subscribe(res => {
                this.isLoading = false;
                this.router.navigate(['/crop/list']);
            },err => {
                this.isLoading = false;
            });
        }
    }
}

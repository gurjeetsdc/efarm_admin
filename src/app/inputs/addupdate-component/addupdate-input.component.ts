import { Component } from '@angular/core';
import { InputService } from '../services/input.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  templateUrl: 'addupdate-input.component.html',
  providers: [InputService]
})
export class AddUpdateInputComponent {
    public input     = {
        categoryID:'',
        manufacturerID:'',
        sellerID:'',
        units:'',
        variety:'',
        terms:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    };
    
    public isLoading       = false;
    public isPageLoading   = true;
    public inputID: any;
    public response:any;
    public categories = [];
    public manufacturers = [];
    public sellers = [];

    constructor(private _router : Router,  private _activateRouter: ActivatedRoute, private _inputService: InputService, private _cookieService: CookieService ) {
        this._inputService.getAllCategories().subscribe( res => { this.categories = res.data; }, err => {});
        this._inputService.getAllUsers().subscribe( res => { this.sellers = res.data.users; }, err => {});
        this._inputService.getAllManufactures().subscribe( res => { this.manufacturers = res.data; }, err => {});
        this.inputID = _activateRouter.snapshot.params['id'];        

        if( this.inputID ) {
            this._inputService.get(this.inputID).subscribe( res => {
                this.isPageLoading = false;
                if(res.data) {
                    this.input = res.data;
                    if(res.data.manufacturer && res.data.manufacturer.id) this.input.manufacturerID = res.data.manufacturer.id;
                    if(res.data.user && res.data.user.id ) this.input.sellerID = res.data.user.id;
                    if(res.data.category && res.data.category.id )this.input.categoryID = res.data.category.id;
                }
            }, err => {
                this.isPageLoading = false;
                this.checkAccessToken(err);
            });
        } else {
            this.isPageLoading = false;
        }
    }

    /*If inputID exist then will update existing input otherwise will add new input*/
    save() {
        this.isLoading = true;
        if(this.inputID) {
            this.input["manufacturer"] = this.input["manufacturerID"];
            this.input["category"]     = this.input["categoryID"];
            if(this.input["sellerID"]) this.input["user"] = this.input["sellerID"];
            this._inputService.update(this.input).subscribe(res => {
                this.response          = res;
                this.isLoading         = false;
                this._router.navigate(['/inputs/list']);
            });
        } else {
            this.input["manufacturer"] = this.input["manufacturerID"];
            this.input["category"]     = this.input["categoryID"];
            if(this.input["sellerID"]) this.input["user"] = this.input["sellerID"];
            this._inputService.add(this.input).subscribe(res => {
                this.response          = res;
                this.isLoading         = false;
                this._router.navigate(['/inputs/list']);
            });
            
        }   
    }

    /*This function is use to remove user session if Access token expired. */
    checkAccessToken( err ): void {
        let status     = err.status;
        let statusText = err.statusText;

        if( (status == 401 && statusText == 'Unauthorized')) {
            this._cookieService.removeAll();
            this._router.navigate(['/login', {data: true}]);
        }else {
            console.log('Something unexpected happened, please try again later.');
        }        
    }

}

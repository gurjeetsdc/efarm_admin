import { Component } from '@angular/core';
import { InputService } from '../services/input.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  templateUrl: 'addupdate-input.component.html',
  providers: [InputService]
})
export class AddUpdateInputComponent {
    private input     = {
        categoryID:'',
        manufacturerID:'',
        sellerID:'',
        units:'',
        variety:'',
        terms:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    };
    
    public isLoading       = false;
    public isPageLoading   = true;
    private inputID: any;
    private response:any;
    private showMessage:boolean = false;
    private action:string = 'Add';
    private category = [];
    private manuf = [];
    private sellers = [];

    constructor(private _router : Router,  private _activateRouter: ActivatedRoute, private _inputService: InputService, private _cookieService: CookieService ) {
        this._inputService.getAllCategories().subscribe( res => { this.category = res; }, err => {});
        this._inputService.getAllUsers().subscribe( res => { this.sellers = res; }, err => {});
        this._inputService.getManuf().subscribe( res => { this.manuf = res; }, err => {});
        this.inputID = _activateRouter.snapshot.params['id'];        

        if( this.inputID ) {
            this._inputService.getInput(this.inputID).subscribe( res => {
                this.isPageLoading = false;
                this.input = res;
                this.input.manufacturerID = res.manufacturer.id;
                if(res.user && res.user.id )this.input.sellerID = res.user.id;
                if(res.category && res.category.id )this.input.categoryID = res.category.id;
            }, err => {
                this.isPageLoading = false;
                this.checkAccessToken(err);
            });
        } else {
            this.isPageLoading = false;
        }
    }


    save() {
        this.isLoading = true;
        if(this.inputID) {
            this.input["manufacturer"] = this.input["manufacturerID"];
            this.input["category"]     = this.input["categoryID"];
            if(this.input["sellerID"]) this.input["user"] = this.input["sellerID"];
            this._inputService.updateInput(this.input).subscribe(res => {
                this.response          = res;
                this.showMessage       = true;
                this.isLoading         = false;
                this._router.navigate(['/inputs/list']);
            });
        } else {
            this.input["manufacturer"] = this.input["manufacturerID"];
            this.input["category"]     = this.input["categoryID"];
            if(this.input["sellerID"]) this.input["user"] = this.input["sellerID"];
            this._inputService.inputadd(this.input).subscribe(res => {
                this.response          = res;
                this.showMessage       = true;
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

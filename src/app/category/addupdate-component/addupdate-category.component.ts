import { Component, ChangeDetectorRef } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { CommanService } from '../../shared/services/comman.service';

@Component({
  templateUrl: 'addupdate-category.component.html'
})
export class AddUpdateCategoryComponent {
    public category     = {
        name:'',
        type:'',
        variety: []
    };

    public isLoading       = false;
    public isPageLoading   = true;
    public ID: any;
    public oBj = {vname: ''};
    public response:any;
    public type;
    public errMsg = '';
    

    constructor(
        private _router : Router,
        private _activateRouter: ActivatedRoute, 
        private _catgService: CategoryService, 
        private _cookieService: CookieService,
        private _commanService: CommanService,
        private changeDetectorRef: ChangeDetectorRef ) {

        this.ID = _activateRouter.snapshot.params['id'];        

        if( this.ID ) {
            this._catgService.get(this.ID).subscribe( res => {
                this.isPageLoading = false;
                if(res.success) {
                    this.category = res.data;
                   } else {
                    this._commanService.checkAccessToken(res.error);
                }
            }, err => {
                this.isPageLoading = false;
                this._commanService.checkAccessToken(err);
            });
        } else {
            this.isPageLoading = false;
        }
    }

    /*If ID exist then will update existing input otherwise will add new input*/
    save() {
        this.isLoading = true;
        if(this.ID) {
            this._catgService.update(this.category).subscribe(res => {
                this.response          = res;
                this.isLoading         = false;
                this._cookieService.put('inputAlert', 'Updated successfully.');
                this._router.navigate(['/category/list']);
            },err => {
                this.isLoading = false;
            })
        } else {
            this._catgService.add(this.category).subscribe(res => {
                this.response          = res;
                this.isLoading         = false;
                this._cookieService.put('inputAlert', 'Added successfully.');
                this._router.navigate(['/category/list']);
            },err => {
                this.isLoading = false;
            });
            
        }   
    }

    addEelement(){
     if(!this.oBj.vname){
         this.errMsg = "Variety is required." ;
         return false;
     }
        let index = this.category.variety.indexOf(this.oBj.vname);

        if(index >=0 ) {
            
           this.errMsg = "Already exists." ;
           return false;            

                } else {

                    this.category.variety.push(this.oBj.vname);
                    this.oBj.vname = "";
                    this.errMsg = "" ;
                    return true;

                }
      
    }

    removeEelement(index){
        this.category.variety.splice(index,1);
    }






}

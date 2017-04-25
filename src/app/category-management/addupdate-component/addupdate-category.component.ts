import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { FormGroup, FormBuilder ,Validators } from '@angular/forms';

import { CategoryService } from '../services/category.service';

@Component({
    templateUrl: 'addupdate-category.component.html'
})
export class AddUpdateCategoryComponent {
    
    private category    = {};
    private allCategory = [];
    private isPageLoading:boolean   = false;
    private categoryID: any;
    private response:any;
    private showMessage:boolean = false;

    private action:string = 'Add';

    constructor(private _router : Router,  private _activateRouter: ActivatedRoute, private _categoryService: CategoryService) {
        this.categoryID = _activateRouter.snapshot.params['id'];        
        if( this.categoryID ) {
            this._categoryService.getCategory(this.categoryID).subscribe( res => { this.category = res; this.action = 'Update' }, err => {});
        }        
    }

    submitCategory() {
        console.log('submitting Category...');

        if( this.action == 'Update' ) {
            this.updateCategory();            
        }else {
           this.addCategory();
        }
    }

    addCategory() {
        console.log('Posting Category...');
             this.isPageLoading = true;
        this._categoryService.postCategory(this.category).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this.category   = {};
            this.isPageLoading = false;
            this._router.navigate(['/category/list', {data: "success"} ]);

            console.log(this.response)
        });      
    	
    }

    updateCategory() {
        console.log('Udpating Category...');
            this.isPageLoading = true;
        this._categoryService.putCategory(this.category).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this.category   = {};
            this._router.navigate(['/category/list', {data: "success"} ]);
            this.isPageLoading = true;
        }); 
    }

    closeMessage() {
        this.showMessage = false;
    } 
}

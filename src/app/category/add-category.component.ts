import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from './category.service';

@Component({
    templateUrl: 'add-category.component.html'
})

export class AddCategoryComponent {
    
    private category     = {};
    private allCategories = [];

    private response:any;
    
    private showMessage:boolean = false;

    constructor(private _router : Router, private _categoryService: CategoryService) { }

    addCategory() {

    	this._categoryService.postCategory(this.category).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this.category   = {};
            this._router.navigate(['/category/list', {data: "success"} ]);
        }); 
    }

    closeMessage() {
        this.showMessage = false;
    } 
}

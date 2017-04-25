import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { CategoryService } from '../services/category.service';


@Component({
  templateUrl: 'view-category.component.html'
})
export class ViewCategoryComponent {

    private categoryID    = '';
    private category      = {};
    private copy_category = {};
    private edit      = false;

    constructor(private _router: Router, private _activatedRouter: ActivatedRoute, private _categoryService: CategoryService) {     	
        
        this.categoryID = _activatedRouter.snapshot.params['id'];
        if( this.categoryID ) {
            this._categoryService.getCategory(this.categoryID).subscribe( res => { this.category = res; console.log(res) }, err => {});
        }    
    }

    updateCategory( categoryID ) {        
        let route = '/category/update/'+categoryID;
        this._router.navigate([route]);       
    }   
}

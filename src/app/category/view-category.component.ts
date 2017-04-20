import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CategoryService } from './category.service';
@Component({
  templateUrl: 'view-category.component.html'
})
export class ViewCategoryComponent {
	private categoryID = '';
	private category = {};
  private copy_category = {};
  private edit = false;
  constructor(route: ActivatedRoute,private _categoryService: CategoryService) { 
  	this.categoryID = route.snapshot.params['id'];
    
  	this._categoryService.getCategory(this.categoryID)
                       .subscribe(
                           res => {
                             this.category = res;
                           },
                           err => {

                           });
  }

  editCategory() {
    this.edit = !this.edit;
    this.copy_category = JSON.parse(JSON.stringify(this.category));
  }

  cancel() {
    this.edit = !this.edit;
    this.category = JSON.parse(JSON.stringify(this.copy_category));
  }

  save() {
    this._categoryService.updateCategory(this.category)
                       .subscribe(
                           res => {
                             this.edit = !this.edit;
                             this.copy_category = JSON.parse(JSON.stringify(this.category));
                           },
                           err => {

                           });
  }
}

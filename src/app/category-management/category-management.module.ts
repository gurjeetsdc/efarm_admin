import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*For list table.*/
import {DataTableModule} from "angular2-datatable";


import { ListCategoryComponent } from './list-component/list-category.component';
import { ViewCategoryComponent } from './view-component/view-category.component';

import { AddUpdateCategoryComponent } from './addupdate-component/addupdate-category.component';


import { CategoryManagementRoutingModule } from './category-management-routing.module';

@NgModule({
    imports: [
        CategoryManagementRoutingModule,
        CommonModule,
        DataTableModule
    ],
    declarations: [
        ListCategoryComponent,
        AddUpdateCategoryComponent,
        ViewCategoryComponent        
    ]
})
export class CategoryManagementModule { }
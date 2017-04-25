import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { HttpModule } from '@angular/http';


import { ListCategoryComponent } from './list-component/list-category.component';
import { ViewCategoryComponent } from './view-component/view-category.component';

import { AddUpdateCategoryComponent } from './addupdate-component/addupdate-category.component';

import { CategoryService } from './services/category.service';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Category Management'
    },
    children: [
      {
        path: 'list',
        component: ListCategoryComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'add',
        component: AddUpdateCategoryComponent,
        data: {
          title: 'Add'
        }
      },
      {
            path: 'list/:id',
            component: ViewCategoryComponent,
            data: {
              title: 'View Category'
            }
      },
      {
        path: 'update/:id',
        component: AddUpdateCategoryComponent,
        data: {
          title: 'Update Category'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    Ng2TableModule,
    PaginationModule,
    HttpModule   
  ],
  providers: [
    CategoryService
  ],
  exports: [
    RouterModule,
    FormsModule,
    Ng2TableModule,
    PaginationModule    
  ]
})
export class CategoryManagementRoutingModule {}

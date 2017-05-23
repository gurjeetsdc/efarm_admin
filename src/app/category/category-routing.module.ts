import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { ListCategoryComponent } from './list-component/list-category.component';
import { AddUpdateCategoryComponent } from './addupdate-component/addupdate-category.component';
import { ViewCategoryComponent } from './view-component/view-category.component';

import { HttpModule } from '@angular/http';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Category'
    },
    children: [
     {
        path: '',
        component: ListCategoryComponent,
        data: {
          title: 'List'
        }
      },
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
          title: 'Add Category'
        }
      },
      {
        path: 'list/:id',
        component: ViewCategoryComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'edit/:id',
        component: AddUpdateCategoryComponent,
        data: {
          title: 'Edit Category'
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
  exports: [
    RouterModule,
    FormsModule,
    Ng2TableModule,
    PaginationModule
  ]
})
export class CategoryRoutingModule {}

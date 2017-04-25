import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { ListCategoryComponent } from './list-category.component';
import { AddCategoryComponent } from './add-category.component';
import { ViewCategoryComponent } from './view-category.component';
import { HttpModule } from '@angular/http';

import { CategoryService } from './category.service';


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
        component: AddCategoryComponent,
        data: {
          title: 'Add'
        }
      },
      {
        path: 'list/:id',
        component: ViewCategoryComponent,
        data: {
          title: 'View'
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
export class CategoryRoutingModule {}

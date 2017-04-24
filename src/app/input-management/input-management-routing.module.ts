import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { ListInputComponent } from './list-input.component';
import { AddInputComponent } from './add-input.component';
import { ViewInputComponent } from './view-input.component';

import { HttpModule } from '@angular/http';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Input Management'
    },
    children: [
      {
        path: 'list',
        component: ListInputComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'add',
        component: AddInputComponent,
        data: {
          title: 'Add'
        }
      },
      {
        path: 'list/:id',
        component: ViewInputComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'update/:id',
        component: AddInputComponent,
        data: {
          title: 'Update Input'
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
export class InputManagementRoutingModule {}

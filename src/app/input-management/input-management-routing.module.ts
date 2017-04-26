import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { ListInputComponent } from './list-component/list-input.component';
import { AddInputComponent } from './addupdate-component/add-input.component';

import { ViewInputComponent } from './view-component/view-input.component';

import { HttpModule } from '@angular/http';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Input Management'
    },
    children: [
     {
        path: '',
        component: ListInputComponent,
        data: {
          title: 'List'
        }
      },
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
          title: 'Add Input'
        }
      },
      {
        path: 'list/:id',
        component: ViewInputComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'update/:id',
        component: AddInputComponent,
        data: {
          title: 'Edit Input'
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

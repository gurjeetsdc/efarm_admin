import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { ListLandComponent } from './list-component/list-land.component';
import { AddLandComponent } from './addupdate-component/add-land.component';

import { ViewLandComponent } from './view-component/view-land.component';
import { HttpModule } from '@angular/http';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Lands'
    },
    children: [
      {
        path: '',
        component: ListLandComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'list',
        component: ListLandComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'add',
        component: AddLandComponent,
        data: {
          title: 'Add Land'
        }
      },
      {
        path: 'list/:id',
        component: ViewLandComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'update/:id',
        component: AddLandComponent,
        data: {
          title: 'Edit Land'
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
export class LandRoutingModule {}

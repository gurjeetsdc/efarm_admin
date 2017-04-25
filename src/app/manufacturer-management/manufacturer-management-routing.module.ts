import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { HttpModule } from '@angular/http';


import { ListManufacturerComponent } from './list-component/list-manufacturer.component';
import { ViewManufacturerComponent } from './view-component/view-manufacturer.component';

import { AddUpdateManufacturerComponent } from './addupdate-component/addupdate-manufacturer.component';

import { ManufacturerService } from './services/manufacturer.service';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Manufacturer Management'
    },
    children: [
      {
        path: 'list',
        component: ListManufacturerComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'add',
        component: AddUpdateManufacturerComponent,
        data: {
          title: 'Add'
        }
      },
      {
            path: 'list/:id',
            component: ViewManufacturerComponent,
            data: {
              title: 'View Manufacturer'
            }
      },
      {
        path: 'update/:id',
        component: AddUpdateManufacturerComponent,
        data: {
          title: 'Update Manufacturer'
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
    ManufacturerService
  ],
  exports: [
    RouterModule,
    FormsModule,
    Ng2TableModule,
    PaginationModule    
  ]
})
export class ManufacturerManagementRoutingModule {}

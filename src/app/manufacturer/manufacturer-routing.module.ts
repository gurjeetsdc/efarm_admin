import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { ListManufacturerComponent } from './list-component/list-manufacturer.component';
import { AddUpdateManufacturerComponent } from './addupdate-component/addupdate-manufacturer.component';
import { ViewManufacturerComponent } from './view-component/view-manufacturer.component';
import { HttpModule } from '@angular/http';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Manufacturer'
    },
    children: [
      {
        path: '',
        component: ListManufacturerComponent,
        data: {
          title: 'List'
        }
      },
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
          title: 'Add Manufacturers'
        }
      },
      {
        path: 'list/:id',
        component: ViewManufacturerComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'edit/:id',
        component: AddUpdateManufacturerComponent,
        data: {
          title: 'Edit Crop'
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
export class ManufacturerRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { ListManufacturerComponent } from './list-manufacturer.component';
import { AddManufacturerComponent } from './add-manufacturer.component';
import { ViewManufacturerComponent } from './view-manufacturer.component';
import { HttpModule } from '@angular/http';

import { ManufacturerService } from './manufacturer.service';


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
        component: AddManufacturerComponent,
        data: {
          title: 'Add'
        }
      },
      {
        path: 'list/:id',
        component: ViewManufacturerComponent,
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
    ManufacturerService
  ],
  exports: [
    RouterModule,
    FormsModule,
    Ng2TableModule,
    PaginationModule
  ]
})
export class ManufacturerRoutingModule {}

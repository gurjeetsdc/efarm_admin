import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { HttpModule } from '@angular/http';

import { ListEquipmentComponent } from './list-component/list-equipment.component';
import { ViewEquipmentComponent } from './view-component/view-equipment.component';

import { AddEquipmentComponent } from './add-component/add-equipment.component';
import { UpdateEquipmentComponent } from './update-component/update-equipment.component';


import { EquipmentService } from './services/equipment.service';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'equipment Management'
    },
    children: [
      {
        path: 'list',
        component: ListEquipmentComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'add',
        component: AddEquipmentComponent,
        data: {
          title: 'Add'
        }
      },
      {
            path: 'list/:id',
            component: ViewEquipmentComponent,
            data: {
              title: 'View Equipment'
            }
      },
      {
        path: 'update/:id',
        component: UpdateEquipmentComponent,
        data: {
          title: 'Update Equipment'
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
    EquipmentService
  ],
  exports: [
    RouterModule,
    FormsModule,
    Ng2TableModule,
    PaginationModule
  ]
})
export class EquipmentManagementRoutingModule {}

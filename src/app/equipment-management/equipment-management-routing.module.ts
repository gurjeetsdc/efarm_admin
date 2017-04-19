import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { ListEquipmentComponent } from './list-equipment.component';
import { AddEquipmentComponent } from './add-equipment.component';
import { HttpModule } from '@angular/http';

import { EquipmentService } from './equipment.service';


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

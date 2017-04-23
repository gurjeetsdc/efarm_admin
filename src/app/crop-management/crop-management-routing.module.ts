import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { ListCropComponent } from './list-component/list-crop.component';
import { AddUpdateCropComponent } from './addupdate-component/addupdate-crop.component';
import { ViewCropComponent } from './view-component/view-crop.component';
import { HttpModule } from '@angular/http';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Crop Management'
    },
    children: [
      {
        path: 'list',
        component: ListCropComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'add',
        component: AddUpdateCropComponent,
        data: {
          title: 'Add'
        }
      },
      {
        path: 'list/:id',
        component: ViewCropComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'update/:id',
        component: AddUpdateCropComponent,
        data: {
          title: 'Update'
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
export class CropManagementRoutingModule {}

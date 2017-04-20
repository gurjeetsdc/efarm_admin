import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { ListUserComponent } from './list-user.component';
import { AddUserComponent } from './add-user.component';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User Management'
    },
    children: [
      {
        path: 'list',
        component: ListUserComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'add',
        component: AddUserComponent,
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
       UserService
  ],
  exports: [
    RouterModule,
    FormsModule,
    Ng2TableModule,
    PaginationModule
  ]
})
export class UserManagementRoutingModule {}

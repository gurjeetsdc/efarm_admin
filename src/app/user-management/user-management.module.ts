import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule} from "angular2-datatable";

import { ListUserComponent } from './list-component/list-user.component';
import { AddUpdateUserComponent } from './addupdate-component/addupdate-user.component';
import { ViewUserComponent } from './view-component/view-user.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { CustomFormsModule } from 'ng2-validation'

@NgModule({
  imports: [
  	UserManagementRoutingModule,
  	 CommonModule,
  	 DataTableModule,
     CustomFormsModule    
  ],
  declarations: [
  	ListUserComponent,
  	AddUpdateUserComponent,
  	ViewUserComponent
  ]
})
export class UserManagementModule { }
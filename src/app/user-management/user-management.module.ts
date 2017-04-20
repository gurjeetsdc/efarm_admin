import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUserComponent } from './list-user.component';
import { AddUserComponent } from './add-user.component';
import { ViewUserComponent } from './view-user.component';
import { UserManagementRoutingModule } from './user-management-routing.module';

@NgModule({
  imports: [
  	UserManagementRoutingModule,
  	 CommonModule    
  ],
  declarations: [
  	ListUserComponent,
  	AddUserComponent,
  	ViewUserComponent
  ]
})
export class UserManagementModule { }
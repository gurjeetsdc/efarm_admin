import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from "angular2-datatable";

import { ListUserComponent } from './list-component/list-user.component';
import { AddUpdateUserComponent } from './addupdate-component/addupdate-user.component';
import { ViewUserComponent } from './view-component/view-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { CustomFormsModule } from 'ng2-validation'

@NgModule({
    imports: [
      	UsersRoutingModule,
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
export class UsersModule { }
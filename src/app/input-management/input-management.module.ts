import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/*For list table.*/
import {DataTableModule} from "angular2-datatable";


import { ListInputComponent } from './list-input.component';
import { AddInputComponent } from './add-input.component';
import { ViewInputComponent } from './view-input.component';
import { InputManagementRoutingModule } from './input-management-routing.module';

@NgModule({
  imports: [
  	InputManagementRoutingModule,
  	 CommonModule,
     DataTableModule
  ],
  declarations: [
  	ListInputComponent,
  	AddInputComponent,
  	ViewInputComponent
  ]
})
export class InputManagementModule { }
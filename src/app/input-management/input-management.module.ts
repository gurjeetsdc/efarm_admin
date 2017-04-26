import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/*For list table.*/
import {DataTableModule} from "angular2-datatable";
import { InputService } from './services/input.service';
import { ListInputComponent } from './list-component/list-input.component';
import { AddInputComponent } from './addupdate-component/add-input.component';
import { ViewInputComponent } from './view-component/view-input.component';
import { InputManagementRoutingModule } from './input-management-routing.module';

@NgModule({
  imports: [
  	InputManagementRoutingModule,
  	 CommonModule,
     DataTableModule
  ],
  providers: [
    InputService
  ],
  declarations: [
  	ListInputComponent,
  	AddInputComponent,
  	ViewInputComponent
  ]
})
export class InputManagementModule { }
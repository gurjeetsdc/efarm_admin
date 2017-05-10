import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/*For list table.*/
import {DataTableModule} from "angular2-datatable";
import { InputService } from './services/input.service';
import { ListInputComponent } from './list-component/list-input.component';
import { AddUpdateInputComponent } from './addupdate-component/addupdate-input.component';
import { ViewInputComponent } from './view-component/view-input.component';
import { InputsRoutingModule } from './inputs-routing.module';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  imports: [
  	InputsRoutingModule,
  	 CommonModule,
     DataTableModule,
     CustomFormsModule
  ],
  providers: [
    InputService
  ],
  declarations: [
  	ListInputComponent,
  	AddUpdateInputComponent,
  	ViewInputComponent
  ]
})
export class InputsModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG2DataTableModule } from "angular2-datatable-pagination";
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
     NG2DataTableModule,
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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG2DataTableModule } from "angular2-datatable-pagination";
import { InputService } from './services/input.service';
import { CommanService } from '../shared/services/comman.service';
import { ListInputComponent } from './list-component/list-input.component';
import { AddUpdateInputComponent } from './addupdate-component/addupdate-input.component';
import { ViewInputComponent } from './view-component/view-input.component';
import { InputsRoutingModule } from './inputs-routing.module';
import { CustomFormsModule } from 'ng2-validation';
import { DatePickerModule } from 'ng2-datepicker';
import { FlashMessagesModule } from 'ngx-flash-messages';

@NgModule({
  imports: [
  	InputsRoutingModule,
  	 CommonModule,
     NG2DataTableModule,
     CustomFormsModule,
     FlashMessagesModule
  ],
  providers: [
    InputService,
    CommanService
  ],
  declarations: [
  	ListInputComponent,
  	AddUpdateInputComponent,
  	ViewInputComponent
  ]
})
export class InputsModule { }
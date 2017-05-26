import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG2DataTableModule } from "angular2-datatable-pagination";
import { InputService } from './services/input.service';
import { SharedModule } from '../shared/shared.module';
import { ListInputComponent } from './list-component/list-input.component';
import { AddUpdateInputComponent } from './addupdate-component/addupdate-input.component';
import { ViewInputComponent } from './view-component/view-input.component';
import { InputsRoutingModule } from './inputs-routing.module';
import { CustomFormsModule } from 'ng2-validation';
import { DatePickerModule } from 'ng2-datepicker';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { PromptInputManufacturerComponent } from '../modals/promptInputManufacturer.component';

@NgModule({
  imports: [
  	InputsRoutingModule,
  	CommonModule,
    NG2DataTableModule,
    CustomFormsModule,
    FlashMessagesModule,
    SharedModule,
    BootstrapModalModule
  ],
  providers: [
    InputService
  ],
  declarations: [
  	ListInputComponent,
  	AddUpdateInputComponent,
  	ViewInputComponent,
    PromptInputManufacturerComponent
  ],
  //Don't forget add component to entryComponents section
  entryComponents: [
    PromptInputManufacturerComponent
  ]
})
export class InputsModule { }
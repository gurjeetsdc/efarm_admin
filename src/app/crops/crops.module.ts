import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {DataTableModule} from "angular2-datatable";
import {NG2DataTableModule} from "angular2-datatable-pagination";
import { ListCropComponent } from './list-component/list-crop.component';
import { AddUpdateCropComponent } from './addupdate-component/addupdate-crop.component';
import { ViewCropComponent } from './view-component/view-crop.component';
import { CropsRoutingModule } from './crops-routing.module';
import { CropService } from './services/crop.service';
import { CustomFormsModule } from 'ng2-validation';
import { DatePickerModule } from 'ng2-datepicker';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { SharedModule } from '../shared/shared.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { PromptComponent } from '../modals/prompt.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
  	CropsRoutingModule,
  	CommonModule,
    NG2DataTableModule,
    //DataTableModule,
    CustomFormsModule,
    DatePickerModule, 
    FlashMessagesModule,
    SharedModule,
    BootstrapModalModule,
    FormsModule
  ],
  providers: [
  	CropService
  ],
  declarations: [
  	ListCropComponent,
  	AddUpdateCropComponent,
  	ViewCropComponent,
    PromptComponent
  ],
  //Don't forget add component to entryComponents section
  entryComponents: [
    PromptComponent
  ],
})
export class CropsModule { }
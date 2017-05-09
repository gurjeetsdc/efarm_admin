import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule} from "angular2-datatable";

import { ListCropComponent } from './list-component/list-crop.component';
import { AddUpdateCropComponent } from './addupdate-component/addupdate-crop.component';
import { ViewCropComponent } from './view-component/view-crop.component';
import { CropManagementRoutingModule } from './crop-management-routing.module';
import { CropService } from './services/crop.service';
import { CustomFormsModule } from 'ng2-validation'
import { DatePickerModule } from 'ng2-datepicker';

@NgModule({
  imports: [
  	CropManagementRoutingModule,
  	 CommonModule,
     DataTableModule,
     CustomFormsModule,
     DatePickerModule    
  ],
  providers: [
  	CropService
  ],
  declarations: [
  	ListCropComponent,
  	AddUpdateCropComponent,
  	ViewCropComponent
  ]
})
export class CropManagementModule { }
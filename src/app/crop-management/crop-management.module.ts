import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCropComponent } from './list-component/list-crop.component';
import { AddCropComponent } from './addupdate-component/add-crop.component';
import { ViewCropComponent } from './view-component/view-crop.component';
import { CropManagementRoutingModule } from './crop-management-routing.module';
import { CropService } from './services/crop.service';

@NgModule({
  imports: [
  	CropManagementRoutingModule,
  	 CommonModule    
  ],
  providers: [
  	CropService
  ],
  declarations: [
  	ListCropComponent,
  	AddCropComponent,
  	ViewCropComponent
  ]
})
export class CropManagementModule { }
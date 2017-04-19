import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCropComponent } from './list-crop.component';
import { AddCropComponent } from './add-crop.component';
import { ViewCropComponent } from './view-crop.component';
import { CropManagementRoutingModule } from './crop-management-routing.module';
import { CropService } from './crop.service';

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
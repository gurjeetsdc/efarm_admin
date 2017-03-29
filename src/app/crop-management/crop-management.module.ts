import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCropComponent } from './list-crop.component';
import { AddCropComponent } from './add-crop.component';
import { CropManagementRoutingModule } from './crop-management-routing.module';

@NgModule({
  imports: [
  	CropManagementRoutingModule,
  	 CommonModule    
  ],
  declarations: [
  	ListCropComponent,
  	AddCropComponent
  ]
})
export class CropManagementModule { }
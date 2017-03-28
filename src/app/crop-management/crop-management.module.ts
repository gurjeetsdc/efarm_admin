import { NgModule } from '@angular/core';

import { CropManagementComponent } from './crop-management.component';
import { CropManagementRoutingModule } from './crop-management-routing.module';

@NgModule({
  imports: [
  	CropManagementRoutingModule    
  ],
  declarations: [CropManagementComponent]
})
export class CropManagementModule { }
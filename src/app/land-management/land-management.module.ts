import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListLandComponent } from './list-land.component';
import { AddLandComponent } from './add-land.component';
import { LandManagementRoutingModule } from './land-management-routing.module';

@NgModule({
  imports: [
  	LandManagementRoutingModule,
  	 CommonModule    
  ],
  declarations: [
  	ListLandComponent,
  	AddLandComponent
  ]
})
export class LandManagementModule { }
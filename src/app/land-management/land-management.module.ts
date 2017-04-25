import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandService } from './land.service';
import { ListLandComponent } from './list-land.component';
import { AddLandComponent } from './add-land.component';
import { ViewLandComponent } from './view-land.component';
import { LandManagementRoutingModule } from './land-management-routing.module';

@NgModule({
  imports: [
  	LandManagementRoutingModule,
  	 CommonModule    
  ],
  providers: [
    LandService
  ],
  declarations: [
  	ListLandComponent,
  	AddLandComponent,
  	ViewLandComponent
  ]
})
export class LandManagementModule { }
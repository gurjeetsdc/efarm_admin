import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandService } from './services/land.service';
import { DatePickerModule } from 'ng2-datepicker';
/*For list table.*/
import {DataTableModule} from "angular2-datatable";
import { ListLandComponent } from './list-component/list-land.component';
import { AddLandComponent } from './addupdate-component/add-land.component';
import { ViewLandComponent } from './view-component/view-land.component';
import { LandManagementRoutingModule } from './land-management-routing.module';

@NgModule({
  imports: [
  	LandManagementRoutingModule,
  	CommonModule,
    DataTableModule,
    DatePickerModule
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
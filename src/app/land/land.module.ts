import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandService } from './services/land.service';
import { DatePickerModule } from 'ng2-datepicker';
/*For list table.*/
import {NG2DataTableModule} from "angular2-datatable-pagination";
import { CustomFormsModule } from 'ng2-validation'
import { ListLandComponent } from './list-component/list-land.component';
import { AddLandComponent } from './addupdate-component/add-land.component';
import { ViewLandComponent } from './view-component/view-land.component';
import { LandRoutingModule } from './land-routing.module';

@NgModule({
  imports: [
  	LandRoutingModule,
  	CommonModule,
    NG2DataTableModule,
    CustomFormsModule,
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
export class LandModule { }
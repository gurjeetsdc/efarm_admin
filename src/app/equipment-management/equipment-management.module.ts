import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEquipmentComponent } from './list-equipment.component';
import { AddEquipmentComponent } from './add-equipment.component';
import { ViewEquipmentComponent } from './view-equipment.component';

import { EquipmentManagementRoutingModule } from './equipment-management-routing.module';

@NgModule({
    imports: [
  	    EquipmentManagementRoutingModule,
  	    CommonModule    
    ],
    declarations: [
  	    ListEquipmentComponent,
  		AddEquipmentComponent,
  	    ViewEquipmentComponent
    ]
})
export class EquipmentManagementModule { }
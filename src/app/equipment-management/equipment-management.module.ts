import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEquipmentComponent } from './list-component/list-equipment.component';
import { ViewEquipmentComponent } from './view-component/view-equipment.component';

import { AddEquipmentComponent } from './add-component/add-equipment.component';
import { UpdateEquipmentComponent } from './update-component/update-equipment.component';

import { EquipmentManagementRoutingModule } from './equipment-management-routing.module';

@NgModule({
    imports: [
        EquipmentManagementRoutingModule,
        CommonModule    
    ],
    declarations: [
        ListEquipmentComponent,
        AddEquipmentComponent,
        ViewEquipmentComponent,
        UpdateEquipmentComponent
    ]
})
export class EquipmentManagementModule { }
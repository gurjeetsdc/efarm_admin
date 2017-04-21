import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEquipmentComponent } from './list-component/list-equipment.component';
import { ViewEquipmentComponent } from './view-component/view-equipment.component';

import { AddUpdateEquipmentComponent } from './addupdate-component/addupdate-equipment.component';


import { EquipmentManagementRoutingModule } from './equipment-management-routing.module';

@NgModule({
    imports: [
        EquipmentManagementRoutingModule,
        CommonModule    
    ],
    declarations: [
        ListEquipmentComponent,
        AddUpdateEquipmentComponent,
        ViewEquipmentComponent        
    ]
})
export class EquipmentManagementModule { }
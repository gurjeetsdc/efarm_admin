import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*For list table.*/
import {DataTableModule} from "angular2-datatable";


import { ListManufacturerComponent } from './list-component/list-manufacturer.component';
import { ViewManufacturerComponent } from './view-component/view-manufacturer.component';

import { AddUpdateManufacturerComponent } from './addupdate-component/addupdate-manufacturer.component';


import { ManufacturerManagementRoutingModule } from './manufacturer-management-routing.module';

@NgModule({
    imports: [
        ManufacturerManagementRoutingModule,
        CommonModule,
        DataTableModule
    ],
    declarations: [
        ListManufacturerComponent,
        AddUpdateManufacturerComponent,
        ViewManufacturerComponent        
    ]
})
export class EquipmentManagementModule { }
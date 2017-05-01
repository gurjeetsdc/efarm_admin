import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*For list table.*/
import {DataTableModule} from "angular2-datatable";
import { CustomFormsModule } from 'ng2-validation'


import { ListEquipmentComponent } from './list-component/list-equipment.component';
import { ViewEquipmentComponent } from './view-component/view-equipment.component';

import { AddUpdateEquipmentComponent } from './addupdate-component/addupdate-equipment.component';


import { EquipmentManagementRoutingModule } from './equipment-management-routing.module';

import { GoogleplaceDirective } from '../shared/directives/googleplaces/googleplaces.directive';

@NgModule({
    imports: [
        EquipmentManagementRoutingModule,
        CommonModule,
        DataTableModule,
        CustomFormsModule
    ],
    declarations: [
        ListEquipmentComponent,
        AddUpdateEquipmentComponent,
        ViewEquipmentComponent,
        GoogleplaceDirective           
    ]
})
export class EquipmentManagementModule { }
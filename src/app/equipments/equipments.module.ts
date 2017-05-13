import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*For list table.*/
// import {DataTableModule} from "angular2-datatable";
import {NG2DataTableModule} from "angular2-datatable-pagination";
import { CustomFormsModule } from 'ng2-validation'


import { ListEquipmentComponent } from './list-component/list-equipment.component';
import { ViewEquipmentComponent } from './view-component/view-equipment.component';

import { AddUpdateEquipmentComponent } from './addupdate-component/addupdate-equipment.component';


import { EquipmentsRoutingModule } from './equipments-routing.module';

import { DatePickerModule } from 'ng2-datepicker';


import { GoogleplaceDirective } from '../shared/directives/googleplaces/googleplaces.directive';
import { FlashMessagesModule } from 'ngx-flash-messages';

@NgModule({
    imports: [
        EquipmentsRoutingModule,
        CommonModule,
        NG2DataTableModule,
        CustomFormsModule,
        DatePickerModule,
        FlashMessagesModule
    ],
    declarations: [
        ListEquipmentComponent,
        AddUpdateEquipmentComponent,
        ViewEquipmentComponent,
        GoogleplaceDirective           
    ]
})
export class EquipmentsModule { }
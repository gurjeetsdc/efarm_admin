import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListManufacturerComponent } from './list-manufacturer.component';
import { AddManufacturerComponent } from './add-manufacturer.component';
import { ViewManufacturerComponent } from './view-manufacturer.component';
import { ManufacturerRoutingModule } from './manufacturer-routing.module';

@NgModule({
  imports: [
  	ManufacturerRoutingModule,
  	CommonModule    
  ],
  declarations: [
  	ListManufacturerComponent,
  	AddManufacturerComponent,
  	ViewManufacturerComponent
  ]
})
export class ManufacturerModule { }
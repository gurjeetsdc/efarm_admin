import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ManufacturerService } from './manufacturer.service';
@Component({
  templateUrl: 'view-manufacturer.component.html'
})
export class ViewManufacturerComponent {
  private isLoading:boolean = true;
	private manufacturerID = '';
	private manufacturer = {};
  private copy_manufacturer = {};
  private edit = false;
  constructor(route: ActivatedRoute,private _manufacturerService: ManufacturerService) { 
  	this.manufacturerID = route.snapshot.params['id'];
    
  	this._manufacturerService.getManufacturer(this.manufacturerID)
                       .subscribe(
                           res => {
                             this.manufacturer = res;
                             this.isLoading = false;
                           },
                           err => {

                           });
  }

  editManufacturer() {
    this.edit = !this.edit;
    this.copy_manufacturer = JSON.parse(JSON.stringify(this.manufacturer));
  }

  cancel() {
    this.edit = !this.edit;
    this.manufacturer = JSON.parse(JSON.stringify(this.copy_manufacturer));
  }

  save() {
    this._manufacturerService.updateManufacturer(this.manufacturer)
                       .subscribe(
                           res => {
                             this.edit = !this.edit;
                             this.copy_manufacturer = JSON.parse(JSON.stringify(this.manufacturer));
                           },
                           err => {

                           });
  }
}

import { Component } from '@angular/core';
import { LandService } from './land.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  templateUrl: 'view-land.component.html',
  providers: [LandService]
})
export class ViewLandComponent {
	private landID = '';
	private land = {};
  private copy_land = {};
  private edit = false;
  constructor(route: ActivatedRoute, private _landService: LandService) { 
  	this.landID = route.snapshot.params['id'];
  	this._landService.getLand(this.landID)
                       .subscribe(
                           res => {
                             console.log(res);
                             this.land = res;
                           },
                           err => {

                           });
  }

  editLand() {
    this.edit = !this.edit;
    this.copy_land = JSON.parse(JSON.stringify(this.land));
  }

  cancel() {
    this.edit = !this.edit;
    this.land = JSON.parse(JSON.stringify(this.copy_land));
  }

  save() {
    this._landService.updateLand(this.land)
                       .subscribe(
                           res => {
                             this.edit = !this.edit;
                             this.copy_land = JSON.parse(JSON.stringify(this.land));
                           },
                           err => {

                           });
  }
}

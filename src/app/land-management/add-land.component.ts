import { Component } from '@angular/core';
import { LandService } from './land.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'add-land.component.html',
  providers: [LandService]

})
export class AddLandComponent {
	private land = {};

  constructor(private router : Router, private _landService: LandService) { }
  ngOnInit() { }
  

  addLand() {
  	console.log("inside addLand",this.land);
  	this._landService.landadd(this.land)
                       .subscribe(
                           res => {
                             console.log("response",res)
                             this.router.navigate(['/land/list']);
                           },
                            err => {
                            	console.log("error",err);
                            });
  }
}

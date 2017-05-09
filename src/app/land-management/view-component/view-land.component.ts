import { Component } from '@angular/core';
import { LandService } from '../services/land.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  templateUrl: 'view-land.component.html',
  providers: [LandService]
})
export class ViewLandComponent {
  private Id = '';
  private land = {};
  private copy_land = {};
  private edit = false;
      public isLoading:boolean   = true;
  constructor(private _router: Router, private _activatedRouter: ActivatedRoute,  private _landService: LandService) { 
    this.Id =  _activatedRouter.snapshot.params['id'];
    
        if( this.Id ) {
            this._landService.getLand(this.Id).subscribe( res => {
             this.land = res.data;
             this.isLoading = false;
             //console.log(res);
              }, err => {
                this.isLoading = false;                
              });
        }  

  }

   updateLand( ID ) {        
        let route = '/land/update/'+ID;
        this._router.navigate([route]);       
    }   

 
}

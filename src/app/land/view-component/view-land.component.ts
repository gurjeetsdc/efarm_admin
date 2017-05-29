import { Component } from '@angular/core';
import { LandService } from '../services/land.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewLandImageComponent } from '../../modals/view-image/ViewLandImage.component';
import { DialogService } from "ng2-bootstrap-modal";
import tsConstants = require('./../../tsconstant');

@Component({
  templateUrl: 'view-land.component.html',
  providers: [LandService]
})
export class ViewLandComponent {

    private _host = tsConstants.HOST;
    private Id = '';
    private land = {};

    private edit = false;
    public isLoading:boolean   = true;
    constructor(
        private _router: Router, 
        private _activatedRouter: ActivatedRoute,  
        private _landService: LandService,
        private _dialogService:DialogService ) { 
    
        this.Id =  _activatedRouter.snapshot.params['id'];
    
        if( this.Id ) {
            this._landService.getLand(this.Id).subscribe( res => {
                this.land = res.data;
                this.isLoading = false;
            }, err => {
                this.isLoading = false;                
            });
        }  

  }

   updateLand( ID ) {        
        let route = '/land/update/'+ID;
        this._router.navigate([route]);       
    }

    // Use to View Image Prompt
    viewImage(imageUrl) {
        this._dialogService.addDialog(ViewLandImageComponent, {
          imageUrl:imageUrl
        }).subscribe((res)=>{ });
    }   

 
}

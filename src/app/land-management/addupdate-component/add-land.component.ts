import { Component } from '@angular/core';
import { LandService } from '../services/land.service';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  templateUrl: 'add-land.component.html',
  providers: [LandService]

})
export class AddLandComponent {
	private land = {
        rentSell: 'Lease',
        unit:'',
        location:'',
        term_condition:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    };

    private Id: any;
    private response:any;
    
    private showMessage:boolean = false;

    private action:string = 'Add';

    constructor(private _router : Router,  private _activateRouter: ActivatedRoute, private _landService: LandService) {
        this.Id = _activateRouter.snapshot.params['id'];        
        if( this.Id ) {
            this._landService.getLand(this.Id).subscribe( res => { this.land = res; this.action = 'Update' }, err => {});
        }        
    }

    submitLand() {
        if( this.action == 'Update' ) {
            this.updateLand();            
        }else {
           this.addLand();
        }
    }

    addLand() {
        this._landService.landadd(this.land).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this._router.navigate(['/land/list', {data: "success"} ]);
            console.log(this.response)
        });      
      
    }


    updateLand() {
        this._landService.updateLand(this.land).subscribe(res => {
            this.response    = res;
            this.showMessage = true;
            this._router.navigate(['/land/list', {data: "success"} ]);
        }); 
    }

    closeMessage() {
        this.showMessage = false;
    } 









}

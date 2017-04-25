import { Component, OnInit } from '@angular/core';

import {PaginationInstance} from 'ng2-pagination';
import { LandService } from './land.service';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';
import {Http} from "@angular/http";
import {DataTableModule} from "angular2-datatable";

@Component({
  selector: 'app-land-management',
  templateUrl: './list-land.component.html',
  styleUrls: ['./list-land.component.scss']
})
export class ListLandComponent implements OnInit {

  test: any = [];

    public data;
    public totalRecords        = 0;
    public filterQuery         = "";
    public rowsOnPage          = 10;

    public sortBy      = "name";
    public sortOrder   = "asc";
    public response:any;

    private isLoading:boolean = true;

    public documents = [];
    public selectedDocument = [];
    public err_message = '';

    public constructor( private activatedRouter: ActivatedRoute,private _router: Router, private _landService: LandService) { 
        
    }
    ngOnInit(): void {

      this._router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

        this._landService.landlist().subscribe(resdata => {
            this.data = resdata;            
            this.isLoading = false;
            this.totalRecords = this.data.length;
            this.isLoading = false;
        });             
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    viewLand (Id) {
      console.log(Id);
      
       let route = '/land/list/'+Id;
       this._router.navigate([route]);       
    }

    sendUpdateLand( Id ) {    
        console.log(Id);
      
       let route = '/land/update/'+Id;
        this._router.navigate([route]);       
    }

    removeLand( Id ) {

      console.log(Id);
      
        if(confirm("Do you want to delete?")) {
            console.log("Implement delete functionality here");
            this.isLoading = true;
            this._landService.deleteLand(Id).subscribe(res => {
                this.response  = res;
                this.isLoading = false;

                
                this.removeByAttr(this.data, 'id', Id);     
            });  
        }
    } 

     removeByAttr(arr, attr, value){
        let i = arr.length;
        while(i--){
           if( arr[i] 
               && arr[i].hasOwnProperty(attr) 
               && (arguments.length > 2 && arr[i][attr] === value ) ){ 

               arr.splice(i,1);

           }
        }
        return arr;
    } 



}

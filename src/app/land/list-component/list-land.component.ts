import { Component, OnInit } from '@angular/core';

import {PaginationInstance} from 'ng2-pagination';
import { LandService } from '../services/land.service';
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

    public data                = [];
    public totalRecords        = 0;
    public filterQuery         = "";
    public rowsOnPage          = 5;
    public sortBy              = "createdAt";
    public sortOrder           = "desc";
    public activePage   = 1;
    public itemsTotal   = 0;
    public searchTerm   = '';

    public itemsOnPage;

    public response:any;
    public isLoading:boolean     = false;
    public documents = [];
    public selectedDocument = [];
    public errMessage = '';
    public isPageLoading:boolean = true;


    public constructor( private activatedRouter: ActivatedRoute,private _router: Router, private _landService: LandService) { 
        
    }
    ngOnInit(): void {

      this._router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });


        /*Load data*/
        this.getLands();        
        this.activePage = 1;
        this.getLands();

        this.itemsOnPage = this.rowsOnPage;

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
        
       let route = '/land/update/'+Id;
        this._router.navigate([route]);       
    }

    removeLand( Id ) {
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


        checkAccessToken( err ): void {
        console.log(err);
        let status     = err.status;
        let statusText = err.statusText;

        if( (status == 401 && statusText == 'Unauthorized')) {
            localStorage.removeItem('user');
            this._router.navigate(['/login', {data: true}]);
        }else {
            console.log('Something unexpected happened, please try again later.');
        }        
    }

    /*get all getLands*/
    getLands() {   
        this._landService.landlist( this.rowsOnPage, this.activePage, this.searchTerm ).subscribe(res => {
            this.data       = res.data.lands;
            this.itemsTotal = res.data.total;
            this.isLoading     = false;
            this.isPageLoading = false;
            console.log("allLand loaded");
        }, 
        err => {
              this.checkAccessToken( err );
              this.isLoading     = false;
              this.isPageLoading = false;
        });

    }

    public onPageChange(event) {
        this.isLoading     = true;
        this.rowsOnPage = event.rowsOnPage;
        this.activePage = event.activePage;
        this.getLands();
    }

    public onRowsChange( event ): void {
        this.isLoading  = true;
        this.rowsOnPage = this.itemsOnPage;
        this.activePage = 1;
        this.getLands();      
    }

    public onSortOrder(event) {
        this.getLands();
    }

    public search( ) {
        if( this.searchTerm.length > 3 ){
            // this.isLoading  = true;
            this.getLands(); 
        }else if( this.searchTerm.length == 0 ){
            // this.isLoading  = true;
            this.getLands(); 
        }
    }






}

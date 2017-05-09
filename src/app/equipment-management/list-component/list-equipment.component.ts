import { Component, OnInit } from '@angular/core';
// import { cropTable } from './crop-seed'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
// import {PaginationInstance} from 'ng2-pagination';
import {Http} from "@angular/http";
import {DataTableModule} from "angular2-datatable";

import { EquipmentService } from '../services/equipment.service';


@Component({
    selector: 'app-equipment-management',
    templateUrl: './list-equipment.component.html',
     // providers: [SweetAlertService],
    styleUrls: ['./list-equipment.component.scss']
})
export class ListEquipmentComponent implements OnInit {

 
    public data         = [];
    public totalRecords = 0;
    public filterQuery  = "";
    public rowsOnPage   = 5;
    public sortBy       = "createdAt";
    public sortOrder    = "desc";
    public activePage   = 1;
    public itemsTotal   = 0;
    public searchTerm   = '';

    public itemsOnPage;


    public response:any;
    public isLoading:boolean     = false;
    public isPageLoading:boolean = true;
    public errMessage            = "";

   
    public constructor( private activatedRouter: ActivatedRoute, private _router: Router, private _equipmentService: EquipmentService) { 
        
    }

    ngOnInit(): void {
        
        this._router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
        
        /*Load data*/
        this.getEquipments();        
        this.activePage = 1;
        this.getEquipments();

        this.itemsOnPage = this.rowsOnPage;
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    viewEquipment (equipmentID) {
        let route = '/equipment/list/'+equipmentID;
        this._router.navigate([route]);       
    }

    sendUpdateEquipment( equipmentID ) {     
        console.log(equipmentID);   
        let route = '/equipment/edit/'+equipmentID;
        this._router.navigate([route]);       
    }

     
    removeEquipment( equipmentID ) {
        if(confirm("Do you want to delete?")) {
            this.isLoading = true;
            this._equipmentService.deleteEquipment(equipmentID).subscribe(res => {
                this.response     = res;
                this.isLoading    = false;
                this.totalRecords = this.data.length;
                // this.data = [];
                this.removeByAttr(this.data, 'id', equipmentID);   
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

    /*get all equipments*/
    getEquipments() {   
        this._equipmentService.getAllEquipments( this.rowsOnPage, this.activePage, this.searchTerm ).subscribe(res => {
            this.data       = res.data.equipments;
            this.itemsTotal = res.data.total;
            this.isLoading     = false;
            this.isPageLoading = false;
            console.log("allEquipments loaded");
        }, 
        err => {
              this.checkAccessToken( err );
              this.isLoading     = false;
              this.isPageLoading = false;
        });
    }

    /**/
    public onPageChange(event) {
        this.isLoading     = true;
        this.rowsOnPage = event.rowsOnPage;
        this.activePage = event.activePage;
        this.getEquipments();
    }

    public onRowsChange( event ): void {
        this.isLoading  = true;
        this.rowsOnPage = this.itemsOnPage;
        this.activePage = 1;
        this.getEquipments();      
    }

    public onSortOrder(event) {
        this.getEquipments();
    }

    public searchEquipment( ) {
        console.log(this.searchTerm);

        if( this.searchTerm.length > 3 ){
            // this.isLoading  = true;
            this.getEquipments(); 
        }else if( this.searchTerm.length == 0 ){
            // this.isLoading  = true;
            this.getEquipments(); 
        }
    }

}

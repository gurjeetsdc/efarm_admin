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

    public data;
    public totalRecords;
    public filterQuery = "";
    public rowsOnPage  = 10;
    public sortBy      = "createdAt";
    public sortOrder   = "desc";


    public response:any;
    public isLoading:boolean = true;

   
    public constructor( private activatedRouter: ActivatedRoute, private _router: Router, private _equipmentService: EquipmentService) { 
        
    }

    ngOnInit(): void {
        
        this._router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

        this._equipmentService.getAllEquipments().subscribe(allEquipments => {
            this.data         = allEquipments;
            this.totalRecords = this.data.length;
            this.isLoading    = false;
            // console.log(allEquipments);
            console.log("allEquipments loaded");
        }, 
        err => {
              this.checkAccessToken( err );
        });             
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
}

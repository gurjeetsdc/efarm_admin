import { Component, OnInit } from '@angular/core';
// import { cropTable } from './crop-seed'
import { Router, ActivatedRoute } from '@angular/router';
// import {PaginationInstance} from 'ng2-pagination';
import {Http} from "@angular/http";
import {DataTableModule} from "angular2-datatable";


//import { SweetAlertService } from 'ng2-sweetalert2';

import { ManufacturerService } from '../services/manufacturer.service';


@Component({
    selector: 'app-manufacturer-management',
    templateUrl: './list-manufacturer.component.html',
     // providers: [SweetAlertService],
    styleUrls: ['./list-manufacturer.component.scss']
})
export class ListManufacturerComponent implements OnInit {

    public data;
    public filterQuery = "";
    public rowsOnPage  = 10;
    public sortBy      = "name";
    public sortOrder   = "asc";


    public response:any;
    public isLoading:boolean = true;

   
    public constructor( private activatedRouter: ActivatedRoute,private _router: Router, private _manufacturerService: ManufacturerService) { 
        
    }

    ngOnInit(): void {

        this._manufacturerService.getAllManufacturer().subscribe(allManufacturers => {
            this.data = allManufacturers;            
            this.isLoading = false;
            console.log(allManufacturers);
            console.log("allManufacturers loaded");
        });             
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    viewManufacturer(manufacturerID) {
        let route = '/manufacturer/list/'+manufacturerID;
        this._router.navigate([route]);       
    }

    sendUpdateManufacturer( manufacturerID ) {     
        console.log(manufacturerID);   
        let route = '/manufacturer/update/'+manufacturerID;
        this._router.navigate([route]);       
    }

     
    removeManufacturer( manufacturerID ) {
        if(confirm("Are you sure to delete manufacturer")) {
            console.log("Implement delete functionality here");
            this.isLoading = true;
            this._manufacturerService.deleteManufacturer(manufacturerID).subscribe(res => {
                this.response  = res;
                this.isLoading = false;

                /* reload list */
                this._router.navigate(['/manufacturer/list/']);      
            });  
        }
    } 
}

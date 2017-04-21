import { Component, OnInit } from '@angular/core';
// import { cropTable } from './crop-seed'
import { Router, ActivatedRoute } from '@angular/router';
// import {PaginationInstance} from 'ng2-pagination';
import {Http} from "@angular/http";
import {DataTableModule} from "angular2-datatable";


import { SweetAlertService } from 'ng2-sweetalert2';

import { EquipmentService } from '../services/equipment.service';


@Component({
    selector: 'app-equipment-management',
    templateUrl: './list-equipment.component.html',
     // providers: [SweetAlertService],
    styleUrls: ['./list-equipment.component.scss']
})
export class ListEquipmentComponent implements OnInit {

    public data;
    public filterQuery = "";
    public rowsOnPage  = 10;
    public sortBy      = "name";
    public sortOrder   = "asc";


    public response:any;
    public isLoading:boolean = true;

   
    public constructor( private activatedRouter: ActivatedRoute,private _router: Router, private _equipmentService: EquipmentService) { 
        
    }

    ngOnInit(): void {

        this._equipmentService.getAllEquipments().subscribe(allEquipments => {
            this.data = allEquipments;            
            this.isLoading = false;
            console.log(allEquipments);
            console.log("allEquipments loaded");
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
        let route = '/equipment/update/'+equipmentID;
        this._router.navigate([route]);       
    }

     
    removeEquipment( equipmentID ) {
        if(confirm("Are you sure to delete Equipment")) {
            console.log("Implement delete functionality here");
            this.isLoading = true;
            this._equipmentService.deleteEquipment(equipmentID).subscribe(res => {
                this.response  = res;
                this.isLoading = false;

                /* reload list */
                this._router.navigate(['/equipment/list/']);      
            });  
        }
    } 
}

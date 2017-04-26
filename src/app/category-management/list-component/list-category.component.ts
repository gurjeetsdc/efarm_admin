import { Component, OnInit } from '@angular/core';
// import { cropTable } from './crop-seed'
import { Router, ActivatedRoute } from '@angular/router';
// import {PaginationInstance} from 'ng2-pagination';
import {Http} from "@angular/http";
import {DataTableModule} from "angular2-datatable";


//import { SweetAlertService } from 'ng2-sweetalert2';

import { CategoryService } from '../services/category.service';


@Component({
    selector: 'app-category-management',
    templateUrl: './list-category.component.html',
     // providers: [SweetAlertService],
    styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

    public data;
    public filterQuery = "";
    public rowsOnPage  = 10;
    public sortBy      = "name";
    public sortOrder   = "asc";


    public response:any;
    public isLoading:boolean = true;

   
    public constructor( private activatedRouter: ActivatedRoute,private _router: Router, private _categoryService: CategoryService) { 
        
    }

    ngOnInit(): void {
        this._categoryService.getAllCategory().subscribe(allCategory => {
            this.data = allCategory;            
            this.isLoading = false;
            console.log(allCategory);
            console.log("allCategory loaded");
        });             
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    viewCategory(categoryID) {
        let route = '/category/list/'+categoryID;
        this._router.navigate([route]);       
    }

    sendUpdateCategory( categoryID ) {     
        console.log(categoryID);   
        let route = '/category/update/'+categoryID;
        this._router.navigate([route]);       
    }

     
    removeCategory( categoryID ) {
        if(confirm("Are you sure to delete category")) {
            console.log("Implement delete functionality here");
            this.isLoading = true;
            this._categoryService.deleteCategory(categoryID).subscribe(res => {
                this.response  = res;
                this.isLoading = false;

                /* reload list */
                this._router.navigate(['/category/list/']);      
            });  
        }
    } 
}

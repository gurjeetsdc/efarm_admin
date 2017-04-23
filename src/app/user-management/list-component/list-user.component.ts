import { Component, OnInit } from '@angular/core';
// import { cropTable } from './crop-seed'
import { Router, ActivatedRoute } from '@angular/router';
// import {PaginationInstance} from 'ng2-pagination';
import {Http} from "@angular/http";
import {DataTableModule} from "angular2-datatable";


//import { SweetAlertService } from 'ng2-sweetalert2';

import { UserService } from '../services/user.service';


@Component({
    selector: 'app-user-management',
    templateUrl: './list-user.component.html',
     // providers: [SweetAlertService],
    styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

    public data;
    public filterQuery = "";
    public rowsOnPage  = 10;
    public sortBy      = "name";
    public sortOrder   = "asc";


    public response:any;
    public isLoading:boolean = true;

   
    public constructor( private activatedRouter: ActivatedRoute,private _router: Router, private _userService: UserService) { 
        
    }

    ngOnInit(): void {

        this._userService.getAllUser().subscribe(allUsers => {
            this.data = allUsers;            
            this.isLoading = false;
            console.log(allUsers);
            console.log("allUsers loaded");
        });             
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    viewUser(userID) {
        let route = '/user/list/'+userID;
        this._router.navigate([route]);       
    }

    sendUpdateUser( userID ) {     
        console.log(userID);   
        let route = '/user/update/'+userID;
        this._router.navigate([route]);       
    }

     
    removeUser( userID ) {
        if(confirm("Are you sure to delete user")) {
            console.log("Implement delete functionality here");
            this.isLoading = true;
            this._userService.deleteUser(userID).subscribe(res => {
                this.response  = res;
                this.isLoading = false;

                /* reload list */
                this._router.navigate(['/user/list/']);      
            });  
        }
    } 
}

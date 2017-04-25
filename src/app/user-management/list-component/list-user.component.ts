import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// import {PaginationInstance} from 'ng2-pagination';
import { UserService } from '../services/user.service';
// import {DataTableModule} from "angular2-datatable";

@Component({
  selector: 'app-user-management',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
    public data;
    public totalRecords        = 0;
    public filterQuery         = "";
    public rowsOnPage          = 10;
    public sortBy              = "name";
    public sortOrder           = "asc";
    public err_message         = "";
    public isLoading:boolean   = true;
    public response:any;
   
    public constructor(private _router: Router, private _userService: UserService) { 
        
    }

    ngOnInit(): void {

        this._router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

        this._userService.userListing().subscribe(res => {
            this.data = res;
            this.totalRecords = this.data.length;
            this.isLoading = false;
        },err => {
            this.isLoading = false;
            this.err_message = "No record to display";
       });             
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    viewUser (userID) {
        let route = '/user/list/' + userID;
        this._router.navigate([route]);       
    }

    sendUpdateUser(userID) {     
        let route = '/user/edit/'+ userID;
        this._router.navigate([route]);       
    } 

}

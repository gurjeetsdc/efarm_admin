import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from '../services/user.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-users',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

    public data                  = [];
    public totalRecords          = 0;
    public filterQuery           = "";
    public rowsOnPage            = 10;
    public sortBy                = "createdAt";
    public sortOrder             = "desc";
    public activePage            = 1;
    public itemsTotal            = 0;
    public searchTerm            = '';
    public roles                 = 'U';
    public itemsOnPage;  
    
    public response:any;
    public isLoading:boolean     = false;
    public isPageLoading:boolean = true;
   
    public constructor(private _router: Router, private _userService: UserService, private _cookieService: CookieService ) { 
        
    }

    ngOnInit(): void {

        this._router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

        /*Load data*/
        this.getUsers();        
        this.activePage = 1;
        this.getUsers();
        
        this.itemsOnPage = this.rowsOnPage;
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    viewUser (userID) {
        let route = '/users/list/' + userID;
        this._router.navigate([route]);       
    }

    editUser(userID) {     
        let route = '/users/edit/'+ userID;
        this._router.navigate([route]);       
    } 
    
    removeUser(userID) {
        if(confirm("Do you want to delete?")) {
            this.isLoading = true;
            this._userService.delete(userID).subscribe(res => {
                this.response  = res;
                this.isLoading = false;
                this.totalRecords = this.data.length;
                this.removeByAttr(this.data, 'id', userID);
            },err => {
                this.isLoading = false;
                this.checkAccessToken(err);
            });             
        }
    }

    /*Function use to remove deleted crop from list*/ 
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

    /*This function is use to remove user session if Access token expired. */
    checkAccessToken( err ): void {
        let status     = err.status;
        let statusText = err.statusText;

        if( (status == 401 && statusText == 'Unauthorized')) {
            this._cookieService.removeAll();
            this._router.navigate(['/login', {data: true}]);
        }else {
            console.log('Something unexpected happened, please try again later.');
        }        
    }

    /*Get all Users */
    getUsers(): void {
        this._userService.getAllUsers( this.rowsOnPage, this.activePage, this.searchTerm, this.roles ).subscribe(res => {
            this.data          = res.data.users;
            this.itemsTotal    = res.data.total;
            this.isLoading     = false;
            this.isPageLoading = false;
        },err => {
            this.checkAccessToken(err);
            this.isLoading     = false;
            this.isPageLoading = false;
       });             
    }    

    public onPageChange(event) {
        this.isLoading     = true;
        this.rowsOnPage = event.rowsOnPage;
        this.activePage = event.activePage;
        this.getUsers();
    }

    public onRowsChange( event ): void {
        this.isLoading  = true;
        this.rowsOnPage = this.itemsOnPage;
        this.activePage = 1;
        this.getUsers();      
    }

    public onSortOrder(event) {
        this.getUsers();
    }

    public search( ) {
        if( this.searchTerm.length > 3 ){
            this.getUsers(); 
        }else if( this.searchTerm.length == 0 ){
            this.getUsers(); 
        }
    }
}

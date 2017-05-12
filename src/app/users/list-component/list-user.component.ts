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
    public rowsOnPage            = 5;
    public sortBy                = "createdAt";
    public sortOrder             = "desc";
    public activePage            = 1;
    public itemsTotal            = 0;
    public searchTerm            = '';
    public sortTrem              = '';
    
    public itemsOnPage;  
    
    public response:any;
    public isLoading:boolean     = false;
    public isPageLoading:boolean = true;
    public roles                 = 'U';
   
    public constructor(private _router: Router, private _userService: UserService, private _cookieService: CookieService ) { 
        
    }

    ngOnInit(): void {

        this._router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

        /*set initial sort condition */
        this.sortTrem = this.sortBy + ' ' + this.sortOrder; 

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
                let start       = (this.activePage * this.rowsOnPage - this.rowsOnPage + 1);
                this.itemsTotal = this.itemsTotal - 1;
                
                if( ! (this.itemsTotal >= start) ){
                   this.activePage = this.activePage -1
                }
                /* reload page. */
                this.getUsers();
            },err => {
                this.isLoading = false;
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
        let code    = err.code;
        let message = err.message;

        if( (code == 401 && message == "authorization")) {
            this._cookieService.removeAll();
            this._router.navigate(['/login', {data: true}]);
        }       
    }

    /*Get all Users */
    getUsers(): void {
        this._userService.getAllUsers( this.rowsOnPage, this.activePage, this.sortTrem,  this.searchTerm, this.roles ).subscribe(res => {
            this.isLoading     = false;
            this.isPageLoading = false;
            if(res.success) {
                this.data          = res.data.users;
                this.itemsTotal    = res.data.total;
            } else {
                this.checkAccessToken(res.error);
            }
        },err => {
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
        this.sortTrem = this.sortBy+' '+this.sortOrder;
        this.isLoading  = true; 
        this.getUsers();
    }

    public search( event, element = 'input' ) {
        if( element == 'input' ) {
            if(event.keyCode == 13 || this.searchTerm == '') {
                this.isLoading  = true;
                this.activePage = 1;
                this.getUsers(); 
            }
        }else{
            
            this.isLoading  = true;
            this.activePage = 1;
            this.getUsers(); 
        }
    }
}

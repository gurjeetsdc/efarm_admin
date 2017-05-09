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
    
    public isLoading:boolean     = false;
    public isPageLoading:boolean = true;
    public errMessage            = "";
    
    public response:any;
   
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
        // this.changePage(1);
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

    /* getUsers */
    getUsers(): void {

        this._userService.getAllUsers( this.rowsOnPage, this.activePage ).subscribe(res => {

            this.data         = res.data.users;
            this.itemsTotal   = res.data.total;

            if(this.data.length == 0) {this.errMessage = "No record to display";}
            
            this.isLoading     = false;
            this.isPageLoading = false;
        
        },err => {
            
            this.isLoading     = false;
            this.isPageLoading = false;
            
            this.errMessage = "No record to display";
            this.checkAccessToken(err);
       });             
    }    
    
    removeUser(userid) {
        if(confirm("Do you want to delete?")) {
            this.isLoading = true;
            this._userService.delete(userid).subscribe(res => {
                this.isLoading = false;
                this.removeByAttr(this.data, 'id', userid);
                this._router.navigate(['/users/list/']);      
            },err => {
                this.isLoading = false;
                this.checkAccessToken(err);
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
        if(this.data.length == 0) this.errMessage = "No record to display";
        return arr;
    }

    editUser(userID) {     
        let route = '/users/edit/'+ userID;
        this._router.navigate([route]);       
    } 

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


    public onSortOrder(event) {
        this.getUsers();
    }
    public onPageChange(event) {
        this.isLoading     = true;
        this.rowsOnPage = event.rowsOnPage;
        this.activePage = event.activePage;
        this.getUsers();
    }

    changePage( page ) {
        console.log("showing: ",page)
        // this.rowsOnPage = event.rowsOnPage;
        this.activePage = page;
        this.getUsers();   
    }

    onRowsChange( event ): void {
        /*this.rowsOnPage = event.rowsOnPage;
        this.activePage = this.activePage;*/
        console.log("Changed.")
        this.rowsOnPage = event.rowsOnPage;
        this.activePage = event.activePage;
        
        this.getUsers();      
    }
}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

    public data                = [];
    public totalRecords        = 0;
    public filterQuery         = "";
    public rowsOnPage          = 10;
    public sortBy              = "createdAt";
    public sortOrder           = "desc";
    public errMessage          = "";
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

        this._userService.getAllUsers().subscribe(res => {
            this.data = res;
            this.totalRecords = this.data.length;
            if(this.data.length == 0) this.errMessage = "No record to display";
            this.isLoading = false;
        },err => {
            this.isLoading = false;
            this.errMessage = "No record to display";
            this.checkAccessToken(err);
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
    
    removeUser(userid) {
        if(confirm("Do you want to delete?")) {
            this.isLoading = true;
            this._userService.delete(userid).subscribe(res => {
                this.isLoading = false;
                this.removeByAttr(this.data, 'id', userid);
                this._router.navigate(['/user/list/']);      
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
        let route = '/user/edit/'+ userID;
        this._router.navigate([route]);       
    } 

    checkAccessToken( err ): void {
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

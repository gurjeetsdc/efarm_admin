import { Component, OnInit } from '@angular/core';
import { CropService } from '../services/crop.service';
import { Router, NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-crop-management',
  templateUrl: './list-crop.component.html',
  styleUrls: ['./list-crop.component.scss']
})

export class ListCropComponent implements OnInit {

    public data                  = [];
    public totalRecords          = 0;
    public filterQuery           = "";
    public rowsOnPage            = 10;
    public sortBy                = "createdAt";
    public sortOrder             = "desc";
    public activePage            = 1;
    public itemsTotal            = 0;
    public searchTerm            = '';
    public itemsOnPage;    

    public response:any;
    public isLoading:boolean     = false;
    public isPageLoading:boolean = true;

    public constructor(private _router: Router, private _cropService: CropService, private _cookieService: CookieService ) { 
        
    }

    ngOnInit(): void {
        
        this._router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

        /*Load data*/
        this.getCrops();        
        this.activePage = 1;
        this.getCrops();   

        this.itemsOnPage = this.rowsOnPage;        
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    viewCrop(cropID) {
        let route = '/crops/list/' + cropID;
        this._router.navigate([route]);       
    }

    editCrop(cropID) {     
        let route = '/crops/edit/'+cropID;
        this._router.navigate([route]);       
    }

     /* Function use to remove Crop with crop id*/
    removeCrop(cropID) {
        if(confirm("Do you want to delete?")) {
            this.isLoading = true;
            this._cropService.delete(cropID).subscribe(res => {
                this.response  = res;
                this.isLoading = false;
                this.totalRecords = this.data.length;
                this.removeByAttr(this.data, 'id', cropID);    
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

    /*get all Crops*/
    getCrops(): void {   
        this._cropService.getAllCrops( this.rowsOnPage, this.activePage, this.searchTerm ).subscribe(res => {
            this.data          = res.data.crops;
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
        this.getCrops();
    }

    public onRowsChange( event ): void {
        this.isLoading  = true;
        this.rowsOnPage = this.itemsOnPage;
        this.activePage = 1;
        this.getCrops();      
    }

    public onSortOrder(event) {
        this.getCrops();
    }

    public search( ) {
        if( this.searchTerm.length > 3 ){
            this.getCrops(); 
        }else if( this.searchTerm.length == 0 ){
            this.getCrops(); 
        }
    }
}

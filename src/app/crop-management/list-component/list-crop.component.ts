import { Component, OnInit } from '@angular/core';
// import {PaginationInstance} from 'ng2-pagination';
import { CropService } from '../services/crop.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-crop-management',
  templateUrl: './list-crop.component.html',
  styleUrls: ['./list-crop.component.scss']
})

export class ListCropComponent implements OnInit {

    public data                = [];
    public totalRecords        = 0;
    public filterQuery         = "";
    public rowsOnPage          = 10;
    public sortBy              = "createdAt";
    public sortOrder           = "desc";
    public err_message         = "";
    public isLoading:boolean   = true;
    public response:any;
   
    public constructor(private _router: Router, private _cropService: CropService) { 
        
    }

    ngOnInit(): void {
        
        this._router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

        this._cropService.getAllCrops().subscribe(res => {
            this.data = res;
            this.totalRecords = this.data.length;
            if(this.data.length == 0) this.err_message = "No record to display";
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

    viewCrop (cropID) {
        let route = '/crop/list/' + cropID;
        this._router.navigate([route]);       
    }

    sendUpdateCrop(cropID) {     
        let route = '/crop/edit/'+cropID;
        this._router.navigate([route]);       
    }

     
    removeCrop(cropid) {
        if(confirm("Do you want to delete?")) {
            this.isLoading = true;
            // crop["isDeleted"] = true;
            this._cropService.delete(cropid).subscribe(res => {
                this.response  = res;
                this.isLoading = false;
                this.removeByAttr(this.data, 'id', cropid);
                this._router.navigate(['/crop/list/']);      
            },err => {
                this.isLoading = false;
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
        return arr;
    } 
}

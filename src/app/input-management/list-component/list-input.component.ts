import { Component, OnInit } from '@angular/core';
// import { cropTable } from './crop-seed'
//import {PaginationInstance} from 'ng2-pagination';
import { InputService } from '../services/input.service';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';
import {Http} from "@angular/http";
import {DataTableModule} from "angular2-datatable";



@Component({
  selector: 'app-input-management',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.scss'],
  providers: [InputService]
})
export class ListInputComponent implements OnInit {

  test: any = [];

    public data;

    public totalRecords        = 0;
    public filterQuery         = "";
    public rowsOnPage          = 10;
    public sortBy      = "name";
    public sortOrder   = "asc";
    public response:any;

    private isLoading:boolean = true;
    public documents = [];
    public selectedDocument = [];
    public err_message = '';

    public constructor( private activatedRouter: ActivatedRoute,private _router: Router, private _inputService: InputService) { 
        
    }
    ngOnInit(): void {

      this._router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

        this._inputService.inputlist().subscribe(resInputs => {
            this.data = resInputs;            
            this.isLoading = false;
            this.totalRecords = this.data.length;
            this.isLoading = false;
            //console.log(resInputs);
            //console.log("resInputs loaded");
        });             
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    viewInput (inputID) {
      //console.log(inputID);
      
       let route = '/input/list/'+inputID;
       this._router.navigate([route]);       
    }

    sendUpdateinput( inputID ) {     
        //console.log(inputID);
      
       let route = '/input/update/'+inputID;
        this._router.navigate([route]);       
    }

     
    removeInput( inputID ) {

      //console.log(inputID);
      
        if(confirm("Do you want to delete?")) {
            console.log("Implement delete functionality here");
            this.isLoading = true;
            this._inputService.deleteInput(inputID).subscribe(res => {
                this.response  = res;
                this.isLoading = false;

                
                this.removeByAttr(this.data, 'id', inputID);     
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

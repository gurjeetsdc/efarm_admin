import { Component, OnInit } from '@angular/core';
import { InputService } from '../services/input.service';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';
import {DataTableModule} from "angular2-datatable";



@Component({
  selector: 'app-input-management',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.scss'],
  providers: [InputService]
})
export class ListInputComponent implements OnInit {

    public data                = [];
    public totalRecords        = 0;
    public filterQuery         = "";
    public rowsOnPage          = 10;
    public sortBy              = "createdAt";
    public sortOrder           = "desc";
    public response:any;
    public isLoading:boolean   = true;
    public documents           = [];
    public selectedDocument    = [];
    public err_message         = '';

    public constructor( private activatedRouter: ActivatedRoute,private _router: Router, private _inputService: InputService) { 
        
    }
    ngOnInit(): void {

      this._router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

        this._inputService.getAllInputs().subscribe(resInputs => {
                
            this.data = resInputs;            
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

    viewInput (inputID) {
       let route = '/inputs/list/'+inputID;
       this._router.navigate([route]);       
    }

    sendUpdateinput( inputID ) {     
       let route = '/inputs/edit/'+inputID;
        this._router.navigate([route]);       
    }

     
    removeInput( inputID ) {
        if(confirm("Do you want to delete?")) {
            console.log("Implement delete functionality here");
            this.isLoading = true;
            this._inputService.delete(inputID).subscribe(res => {
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

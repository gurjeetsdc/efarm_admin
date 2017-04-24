import { Component, OnInit } from '@angular/core';
// import { cropTable } from './crop-seed'
//import {PaginationInstance} from 'ng2-pagination';
import { InputService } from './input.service';
import { Router,ActivatedRoute } from '@angular/router';
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
    public filterQuery = "";
    public rowsOnPage  = 10;
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

        this._inputService.inputlist().subscribe(resInputs => {
            this.data = resInputs;            
            this.isLoading = false;
            console.log(resInputs);
            console.log("resInputs loaded");
        });             
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    viewInput (inputID) {
      console.log(inputID);
      
       let route = '/input/list/'+inputID;
       this._router.navigate([route]);       
    }

    sendUpdateinput( inputID ) {     
        console.log(inputID);
      
       let route = '/input/update/'+inputID;
        this._router.navigate([route]);       
    }

     
    removeInput( inputID ) {

      console.log(inputID);
      
        if(confirm("Are you sure to delete Input")) {
            console.log("Implement delete functionality here");
            this.isLoading = true;
            this._inputService.deleteInput(inputID).subscribe(res => {
                this.response  = res;
                this.isLoading = false;

                this._router.navigate(['/input/list/']);      
            });  
        }
    } 

/*************************************************************/
/*
  public constructor(private router : Router,private _inputService: InputService) {
    this.length = this.data.length;
     this._inputService.inputlist()
                       .subscribe(
                          res => {
                             this.data = res;
                             this.isLoading = false;
                             
                             //console.log("response---data---------",res)
                             this.onChangeTable(this.config);
                             
                           },
                            err => {
                              this.isLoading = false;
                              console.log("error--------------",err);
                              this.err_message = "No record to display";
                          });
  }

  private addDeleteButton (data){

    let keyArr = data;
    let newData = [];
    let delButton = "";
     keyArr.forEach(function(element,key) {
         delButton = '<button type="button" (click)="this.deleteInput()" class="btn btn-danger">Delete</button>';
          element.button = delButton;
          newData.push(element);      
      });
    // console.log(newData);
    return newData;
  }

  public ngOnInit():void {
    this.onChangeTable(this.config);
  }

  public changePage(page:any, data:Array<any> = this.data):Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    // create service here to fetch data from server;
    return data.slice(start, end);
  }

  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data:any, config:any):any {
    let filteredData:Array<any> = data;
    this.columns.forEach((column:any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item:any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item:any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray:Array<any> = [];
    filteredData.forEach((item:any) => {
      let flag = false;
      this.columns.forEach((column:any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    this.err_message ='';
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }
    
    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    //console.log(data);
    this.router.navigate(['/input/list/' + data["row"]["id"]]);
  }

  public viewInput(data: any): any {
    console.log(data);
    //this.router.navigate(['/input/list/' + data["row"]["id"]]);
  }
  public deleteInput(): any {
    console.log("gfhjgfhjfhjgfjhf");
  }
*/
/*  public onCellClick(data: any): any {
this.selectedDocument = data.row;

    // If Button View
    if (data.column == "viewbutton") {
      this.router.navigate(['/list', this.selectedDocument.doknr]);
    }

    // If Button Select
    if (data.column == "selectbutton") {
      // If not selected - add to selection
      if (data.row.selection == false) {
        this.selectedDocuments.push(data.row);
      }
      // If already selected, delete from selection
      else {
        for (let j = 0; j < this.selectedDocuments.length; j++)
          if (this.selectedDocuments[j].doknr === data.row.doknr) {
            this.selectedDocuments.splice(j, 1);
            break;
          }
      }
      // Refresh Table
      this.ngOnChanges();
    }
  }

  ngOnChanges() {
    // Just if search result exist
    if (this.documents != null) {
      this.extendData();
      // set Table data by search result
      this.data = this.documents;
    }
  }

 // Button
  private viewButton(viewbutton: string) {
    viewbutton = "<span class='glyphicon glyphicon-search' style='pointer-events: none;'></span>";
    return viewbutton;
  }

// Button
  private selectButton(selectbutton: string) {
    selectbutton = "<span class='glyphicon glyphicon-plus' style='pointer-events: none;'></span>";
    return selectbutton;
  }

// button
  private unselectButton(selectbutton: string) {
    selectbutton = "<span class='glyphicon glyphicon-minus' style='pointer-events: none;'></span>";
    return selectbutton;
  }

  private extendData() {
    // For every resulttable entry
    for (let i = 0; i < this.data.length; i++) {

      // Add View Button
     // this.data[i].viewbutton = this.viewButton(this.data[i].viewbutton);

      // Add Select Button
      this.data[i].selectbutton = this.selectButton(this.data[i].selectbutton);
      this.data[i].selection = false;
      // Check if entry was already selected
      for (let j = 0; j < this.selectedDocuments.length; j++) {
        if (this.selectedDocuments[j].doknr === this.data[i].doknr) {
          this.data[i].selectbutton = this.unselectButton(this.data[i].selectbutton);
          this.data[i].selection = true;
          break;
        }
      }
    }
  }*/

  // notification from ng-table to delete a row



  // constructor() { }

  // ngOnInit() {
  // }
}

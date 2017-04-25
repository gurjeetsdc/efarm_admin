import { Component, OnInit } from '@angular/core';
// import { cropTable } from './crop-seed'
import {PaginationInstance} from 'ng2-pagination';
import { LandService } from './land.service';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';
import {Http} from "@angular/http";
import {DataTableModule} from "angular2-datatable";

@Component({
  selector: 'app-land-management',
  templateUrl: './list-land.component.html',
  styleUrls: ['./list-land.component.scss']
})
export class ListLandComponent implements OnInit {

   test: any = [];
   private isLoading:boolean = true;
  private TableData = [{
    name:"Urea",
    distributor:"Harmind Singh",
    company:"The Garderner",
    district:"Ludhyana",
    variety:"Seeds",
    qty:15,
    price:1200
  }];
  public documents = [];
  public selectedDocument = [];
  public err_message = '';

  public rows:Array<any> = [];
  public columns:Array<any> = [
    {
      title: 'Name',
      name: 'name',
      // filtering: {filterString: '', placeholder: 'Filter by position'}
    },
    {title: 'location', name: 'location',sort: false},
    {title: 'area', name: 'area',sort: false},
    {title: 'khasra_no', name: 'khasra_no',sort: false},
    {title: 'expected_price.', name: 'expected_price',sort: false}
    //{title: 'Action', name: 'button'},
  ];
  public page:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;
  public isShowNORcd = false;
  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };

  private data = [];

  public constructor(private router : Router,private _landService: LandService) {
    this.length = this.data.length;
     this._landService.landlist()
                       .subscribe(
                          res => {
                             this.data = res;
                             this.isLoading = false;                             
                             console.log("response---data---------",res)
                             this.onChangeTable(this.config);
                           },
                            err => {
                              console.log("error--------------",err);
                              this.isLoading = false;
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
    this.router.navigate(['/land/list/' + data["row"]["id"]]);
  }



}

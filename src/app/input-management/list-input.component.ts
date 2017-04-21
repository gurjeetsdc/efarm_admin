import { Component, OnInit } from '@angular/core';
// import { cropTable } from './crop-seed'
import {PaginationInstance} from 'ng2-pagination';
import { InputService } from './input.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-input-management',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.scss'],
  providers: [InputService]
})
export class ListInputComponent implements OnInit {

  test: any = [];

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

  public rows:Array<any> = [];
  public columns:Array<any> = [
    {
      title: 'Name',
      name: 'name',
      // filtering: {filterString: '', placeholder: 'Filter by position'}
    },
    {title: 'Units', name: 'unit'},
    {title: 'Price', name: 'price'},
    {title: 'Variety', name: 'variety',sort: false},
    {title: 'Qty.', name: 'quantity',sort: false},
    {title: 'status', name: 'status',sort: false},
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

  public constructor(private router : Router,private _inputService: InputService) {
    this.length = this.data.length;
     this._inputService.inputlist()
                       .subscribe(
                          res => {
                             //let mainData = this.addDeleteButton(res)
                             //let mainData = this.addDeleteButton(res)
                             //console.log(mainData);
                             this.data = res;
                             if(this.data.length == 0){
                               this.isShowNORcd = true;
                             }
                             
                             //console.log("response---data---------",res)
                             this.onChangeTable(this.config);
                             
                           },
                            err => {
                              console.log("error--------------",err);
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

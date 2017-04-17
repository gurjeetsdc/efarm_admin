import { Component, OnInit } from '@angular/core';
// import { cropTable } from './crop-seed'
import {PaginationInstance} from 'ng2-pagination';
import { CropService } from './crop.service';
@Component({
  selector: 'app-crop-management',
  templateUrl: './list-crop.component.html',
  styleUrls: ['./list-crop.component.scss'],
  providers: [CropService]
})
export class ListCropComponent implements OnInit {

  test: any = [];

  private TableData = [{
  	name:"Mangoes",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Carrot",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Hardeep Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Peas",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Summit",
  	endDate:"1d 2h 20m"
  },{
  	name:"Potato",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Potato",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Gudev",
  	endDate:"1d 2h 20m"
  },{
  	name:"Potato",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Deep Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Mangoes",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Mangoes",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Preet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Potato",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Mangoes",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Potato",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Potato",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Ginger",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Potato",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Mangoes",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Potato",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Mangoes",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Potato",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Potato",
  	price:"1160",
  	qty:2,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Potato",
  	price:"1160",
  	qty:9,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Potato",
  	price:"1160",
  	qty:1,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Mangoes",
  	price:"1160",
  	qty:1,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Potato",
  	price:"1160",
  	qty:1,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Potato",
  	price:"1160",
  	qty:1,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"Potato",
  	price:"1160",
  	qty:1,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  },{
  	name:"xyz",
  	price:"1160",
  	qty:22,
  	highestBid:"1160",
  	totalBid:"5",
  	by:"Manpreet Singh",
  	endDate:"1d 2h 20m"
  }]; 

  public rows:Array<any> = [];
  public columns:Array<any> = [
    {title: 'Crop', name: 'name'},
    {
      title: 'Offer Price',
      name: 'price',
      sort: false
      // filtering: {filterString: '', placeholder: 'Filter by position'}
    },
    {title: 'Qty', className: ['office-header', 'text-success'], name: 'qty', sort: 'asc'},
    {title: 'Highest Bid', name: 'highestBid', sort: ''},
    {title: '# of Bid', name: 'totalBid'},
    {title: 'Farmer', className: 'text-warning', name: 'by'},
    {title: 'Ends in', name: 'endDate'}
  ];
  public page:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };

  private data:Array<any> = this.TableData;

  public constructor(private _cropService: CropService) {
    this.length = this.data.length;

    this._cropService.croplisting()
                       .subscribe(
                           res => {
                             console.log("response------------",res)
                             
                           },
                            err => {
                              console.log("error--------------",err);
                            });


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
    console.log(data);
  }	

  // constructor() { }

  // ngOnInit() {
  // }
}

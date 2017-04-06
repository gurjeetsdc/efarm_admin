webpackJsonp([1,12],{

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(17);
var list_crop_component_1 = __webpack_require__(954);
var add_crop_component_1 = __webpack_require__(953);
var crop_management_routing_module_1 = __webpack_require__(965);
var CropManagementModule = (function () {
    function CropManagementModule() {
    }
    return CropManagementModule;
}());
CropManagementModule = __decorate([
    core_1.NgModule({
        imports: [
            crop_management_routing_module_1.CropManagementRoutingModule,
            common_1.CommonModule
        ],
        declarations: [
            list_crop_component_1.ListCropComponent,
            add_crop_component_1.AddCropComponent
        ]
    })
], CropManagementModule);
exports.CropManagementModule = CropManagementModule;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarmx-backend/src/crop-management.module.js.map

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
// import {setProperty} from 'angular2/ts/src/core/forms/directives/shared';
function setProperty(renderer, elementRef, propName, propValue) {
    renderer.setElementProperty(elementRef, propName, propValue);
}
var NgTableFilteringDirective = (function () {
    function NgTableFilteringDirective(element, renderer) {
        this.ngTableFiltering = {
            filterString: '',
            columnName: 'name'
        };
        this.tableChanged = new core_1.EventEmitter();
        this.element = element;
        this.renderer = renderer;
        // Set default value for filter
        setProperty(this.renderer, this.element, 'value', this.ngTableFiltering.filterString);
    }
    Object.defineProperty(NgTableFilteringDirective.prototype, "config", {
        get: function () {
            return this.ngTableFiltering;
        },
        set: function (value) {
            this.ngTableFiltering = value;
        },
        enumerable: true,
        configurable: true
    });
    NgTableFilteringDirective.prototype.onChangeFilter = function (event) {
        this.ngTableFiltering.filterString = event;
        this.tableChanged.emit({ filtering: this.ngTableFiltering });
    };
    NgTableFilteringDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ngTableFiltering]' },] },
    ];
    /** @nocollapse */
    NgTableFilteringDirective.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
    ];
    NgTableFilteringDirective.propDecorators = {
        'ngTableFiltering': [{ type: core_1.Input },],
        'tableChanged': [{ type: core_1.Output },],
        'config': [{ type: core_1.Input },],
        'onChangeFilter': [{ type: core_1.HostListener, args: ['input', ['$event.target.value'],] },],
    };
    return NgTableFilteringDirective;
}());
exports.NgTableFilteringDirective = NgTableFilteringDirective;


/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var NgTablePagingDirective = (function () {
    function NgTablePagingDirective() {
        this.ngTablePaging = true;
        this.tableChanged = new core_1.EventEmitter();
    }
    Object.defineProperty(NgTablePagingDirective.prototype, "config", {
        get: function () {
            return this.ngTablePaging;
        },
        set: function (value) {
            this.ngTablePaging = value;
        },
        enumerable: true,
        configurable: true
    });
    NgTablePagingDirective.prototype.onChangePage = function (event) {
        // Object.assign(this.config, event);
        if (this.ngTablePaging) {
            this.tableChanged.emit({ paging: event });
        }
    };
    NgTablePagingDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ngTablePaging]' },] },
    ];
    /** @nocollapse */
    NgTablePagingDirective.ctorParameters = [];
    NgTablePagingDirective.propDecorators = {
        'ngTablePaging': [{ type: core_1.Input },],
        'tableChanged': [{ type: core_1.Output },],
        'config': [{ type: core_1.Input },],
        'onChangePage': [{ type: core_1.HostListener, args: ['pagechanged', ['$event'],] },],
    };
    return NgTablePagingDirective;
}());
exports.NgTablePagingDirective = NgTablePagingDirective;


/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var NgTableSortingDirective = (function () {
    function NgTableSortingDirective() {
        this.sortChanged = new core_1.EventEmitter();
    }
    Object.defineProperty(NgTableSortingDirective.prototype, "config", {
        get: function () {
            return this.ngTableSorting;
        },
        set: function (value) {
            this.ngTableSorting = value;
        },
        enumerable: true,
        configurable: true
    });
    NgTableSortingDirective.prototype.onToggleSort = function (event) {
        if (event) {
            event.preventDefault();
        }
        if (this.ngTableSorting && this.column && this.column.sort !== false) {
            switch (this.column.sort) {
                case 'asc':
                    this.column.sort = 'desc';
                    break;
                case 'desc':
                    this.column.sort = '';
                    break;
                default:
                    this.column.sort = 'asc';
                    break;
            }
            this.sortChanged.emit(this.column);
        }
    };
    NgTableSortingDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ngTableSorting]' },] },
    ];
    /** @nocollapse */
    NgTableSortingDirective.ctorParameters = [];
    NgTableSortingDirective.propDecorators = {
        'ngTableSorting': [{ type: core_1.Input },],
        'column': [{ type: core_1.Input },],
        'sortChanged': [{ type: core_1.Output },],
        'config': [{ type: core_1.Input },],
        'onToggleSort': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return NgTableSortingDirective;
}());
exports.NgTableSortingDirective = NgTableSortingDirective;


/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(121);
var NgTableComponent = (function () {
    function NgTableComponent(sanitizer) {
        this.sanitizer = sanitizer;
        // Table values
        this.rows = [];
        // Outputs (Events)
        this.tableChanged = new core_1.EventEmitter();
        this.cellClicked = new core_1.EventEmitter();
        this.showFilterRow = false;
        this._columns = [];
        this._config = {};
    }
    Object.defineProperty(NgTableComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (conf) {
            if (!conf.className) {
                conf.className = 'table-striped table-bordered';
            }
            if (conf.className instanceof Array) {
                conf.className = conf.className.join(' ');
            }
            this._config = conf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgTableComponent.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (values) {
            var _this = this;
            values.forEach(function (value) {
                if (value.filtering) {
                    _this.showFilterRow = true;
                }
                if (value.className && value.className instanceof Array) {
                    value.className = value.className.join(' ');
                }
                var column = _this._columns.find(function (col) { return col.name === value.name; });
                if (column) {
                    Object.assign(column, value);
                }
                if (!column) {
                    _this._columns.push(value);
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    NgTableComponent.prototype.sanitize = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    Object.defineProperty(NgTableComponent.prototype, "configColumns", {
        get: function () {
            var sortColumns = [];
            this.columns.forEach(function (column) {
                if (column.sort) {
                    sortColumns.push(column);
                }
            });
            return { columns: sortColumns };
        },
        enumerable: true,
        configurable: true
    });
    NgTableComponent.prototype.onChangeTable = function (column) {
        this._columns.forEach(function (col) {
            if (col.name !== column.name && col.sort !== false) {
                col.sort = '';
            }
        });
        this.tableChanged.emit({ sorting: this.configColumns });
    };
    NgTableComponent.prototype.getData = function (row, propertyName) {
        return propertyName.split('.').reduce(function (prev, curr) { return prev[curr]; }, row);
    };
    NgTableComponent.prototype.cellClick = function (row, column) {
        this.cellClicked.emit({ row: row, column: column });
    };
    NgTableComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-table',
                    template: "\n    <table class=\"table dataTable\" ngClass=\"{{config.className || ''}}\"\n           role=\"grid\" style=\"width: 100%;\">\n      <thead>\n        <tr role=\"row\">\n          <th *ngFor=\"let column of columns\" [ngTableSorting]=\"config\" [column]=\"column\" \n              (sortChanged)=\"onChangeTable($event)\" ngClass=\"{{column.className || ''}}\">\n            {{column.title}}\n            <i *ngIf=\"config && column.sort\" class=\"pull-right fa\"\n              [ngClass]=\"{'fa-chevron-down': column.sort === 'desc', 'fa-chevron-up': column.sort === 'asc'}\"></i>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr *ngIf=\"showFilterRow\">\n        <td *ngFor=\"let column of columns\">\n          <input *ngIf=\"column.filtering\" placeholder=\"{{column.filtering.placeholder}}\"\n                 [ngTableFiltering]=\"column.filtering\"\n                 class=\"form-control\"\n                 style=\"width: auto;\"\n                 (tableChanged)=\"onChangeTable(config)\"/>\n        </td>\n      </tr>\n        <tr *ngFor=\"let row of rows\">\n          <td (click)=\"cellClick(row, column.name)\" *ngFor=\"let column of columns\" [innerHtml]=\"sanitize(getData(row, column.name))\"></td>\n        </tr>\n      </tbody>\n    </table>\n  "
                },] },
    ];
    /** @nocollapse */
    NgTableComponent.ctorParameters = [
        { type: platform_browser_1.DomSanitizer, },
    ];
    NgTableComponent.propDecorators = {
        'rows': [{ type: core_1.Input },],
        'config': [{ type: core_1.Input },],
        'tableChanged': [{ type: core_1.Output },],
        'cellClicked': [{ type: core_1.Output },],
        'columns': [{ type: core_1.Input },],
    };
    return NgTableComponent;
}());
exports.NgTableComponent = NgTableComponent;


/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var AddCropComponent = (function () {
    function AddCropComponent() {
        this.crop = {};
    }
    AddCropComponent.prototype.addCrop = function () {
        console.log("inside addCrop", this.crop);
    };
    return AddCropComponent;
}());
AddCropComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(983)
    }),
    __metadata("design:paramtypes", [])
], AddCropComponent);
exports.AddCropComponent = AddCropComponent;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarmx-backend/src/add-crop.component.js.map

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ListCropComponent = (function () {
    function ListCropComponent() {
        this.test = [];
        this.TableData = [{
                name: "Mangoes",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Carrot",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Hardeep Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Peas",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Summit",
                endDate: "1d 2h 20m"
            }, {
                name: "Potato",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Potato",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Gudev",
                endDate: "1d 2h 20m"
            }, {
                name: "Potato",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Deep Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Mangoes",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Mangoes",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Preet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Potato",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Mangoes",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Potato",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Potato",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Ginger",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Potato",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Mangoes",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Potato",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Mangoes",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Potato",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Potato",
                price: "1160",
                qty: 2,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Potato",
                price: "1160",
                qty: 9,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Potato",
                price: "1160",
                qty: 1,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Mangoes",
                price: "1160",
                qty: 1,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Potato",
                price: "1160",
                qty: 1,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Potato",
                price: "1160",
                qty: 1,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "Potato",
                price: "1160",
                qty: 1,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }, {
                name: "xyz",
                price: "1160",
                qty: 22,
                highestBid: "1160",
                totalBid: "5",
                by: "Manpreet Singh",
                endDate: "1d 2h 20m"
            }];
        this.rows = [];
        this.columns = [
            { title: 'Crop', name: 'name' },
            {
                title: 'Offer Price',
                name: 'price',
                sort: false
                // filtering: {filterString: '', placeholder: 'Filter by position'}
            },
            { title: 'Qty', className: ['office-header', 'text-success'], name: 'qty', sort: 'asc' },
            { title: 'Highest Bid', name: 'highestBid', sort: '' },
            { title: '# of Bid', name: 'totalBid' },
            { title: 'Farmer', className: 'text-warning', name: 'by' },
            { title: 'Ends in', name: 'endDate' }
        ];
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-striped', 'table-bordered']
        };
        this.data = this.TableData;
        this.length = this.data.length;
    }
    ListCropComponent.prototype.ngOnInit = function () {
        this.onChangeTable(this.config);
    };
    ListCropComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.data; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        // create service here to fetch data from server;
        return data.slice(start, end);
    };
    ListCropComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    ListCropComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    ListCropComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.data, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    ListCropComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    return ListCropComponent;
}());
ListCropComponent = __decorate([
    core_1.Component({
        selector: 'app-crop-management',
        template: __webpack_require__(984),
        styles: [__webpack_require__(970)]
    }),
    __metadata("design:paramtypes", [])
], ListCropComponent);
exports.ListCropComponent = ListCropComponent;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarmx-backend/src/list-crop.component.js.map

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(119);
var forms_1 = __webpack_require__(27);
var ng2_table_1 = __webpack_require__(973);
var ng2_bootstrap_1 = __webpack_require__(595);
var list_crop_component_1 = __webpack_require__(954);
var add_crop_component_1 = __webpack_require__(953);
var http_1 = __webpack_require__(120);
var routes = [
    {
        path: '',
        data: {
            title: 'Crop Management'
        },
        children: [
            {
                path: 'list',
                component: list_crop_component_1.ListCropComponent,
                data: {
                    title: 'List'
                }
            },
            {
                path: 'add',
                component: add_crop_component_1.AddCropComponent,
                data: {
                    title: 'Add'
                }
            }
        ]
    }
];
var CropManagementRoutingModule = (function () {
    function CropManagementRoutingModule() {
    }
    return CropManagementRoutingModule;
}());
CropManagementRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routes),
            forms_1.FormsModule,
            ng2_table_1.Ng2TableModule,
            ng2_bootstrap_1.PaginationModule,
            http_1.HttpModule
        ],
        exports: [
            router_1.RouterModule,
            forms_1.FormsModule,
            ng2_table_1.Ng2TableModule,
            ng2_bootstrap_1.PaginationModule
        ]
    })
], CropManagementRoutingModule);
exports.CropManagementRoutingModule = CropManagementRoutingModule;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarmx-backend/src/crop-management-routing.module.js.map

/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(122)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng_table_component_1 = __webpack_require__(943);
var ng_table_filtering_directive_1 = __webpack_require__(940);
var ng_table_paging_directive_1 = __webpack_require__(941);
var ng_table_sorting_directive_1 = __webpack_require__(942);
exports.NG_TABLE_DIRECTIVES = [ng_table_component_1.NgTableComponent, ng_table_filtering_directive_1.NgTableFilteringDirective, ng_table_paging_directive_1.NgTablePagingDirective, ng_table_sorting_directive_1.NgTableSortingDirective];


/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(17);
var ng_table_component_1 = __webpack_require__(943);
var ng_table_filtering_directive_1 = __webpack_require__(940);
var ng_table_paging_directive_1 = __webpack_require__(941);
var ng_table_sorting_directive_1 = __webpack_require__(942);
var Ng2TableModule = (function () {
    function Ng2TableModule() {
    }
    Ng2TableModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [ng_table_component_1.NgTableComponent, ng_table_filtering_directive_1.NgTableFilteringDirective, ng_table_paging_directive_1.NgTablePagingDirective, ng_table_sorting_directive_1.NgTableSortingDirective],
                    exports: [ng_table_component_1.NgTableComponent, ng_table_filtering_directive_1.NgTableFilteringDirective, ng_table_paging_directive_1.NgTablePagingDirective, ng_table_sorting_directive_1.NgTableSortingDirective]
                },] },
    ];
    /** @nocollapse */
    Ng2TableModule.ctorParameters = [];
    return Ng2TableModule;
}());
exports.Ng2TableModule = Ng2TableModule;


/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var ng_table_component_1 = __webpack_require__(943);
var ng_table_filtering_directive_1 = __webpack_require__(940);
var ng_table_paging_directive_1 = __webpack_require__(941);
var ng_table_sorting_directive_1 = __webpack_require__(942);
__export(__webpack_require__(943));
__export(__webpack_require__(940));
__export(__webpack_require__(941));
__export(__webpack_require__(942));
__export(__webpack_require__(971));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    directives: [
        ng_table_component_1.NgTableComponent,
        ng_table_filtering_directive_1.NgTableFilteringDirective,
        ng_table_sorting_directive_1.NgTableSortingDirective,
        ng_table_paging_directive_1.NgTablePagingDirective
    ]
};
var ng_table_module_1 = __webpack_require__(972);
exports.Ng2TableModule = ng_table_module_1.Ng2TableModule;


/***/ }),

/***/ 983:
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <strong>Add Crop</strong>\n        </div>\n        <div class=\"card-block\">\n            <form role=\"form\" (ngSubmit)=\"addCrop()\" #dailyExpenseForm=\"ngForm\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-name\">Crop Name*</label>\n                            <input type=\"text\" id=\"nf-name\" name=\"nf-name\" class=\"form-control\" placeholder=\"Enter Name\" [(ngModel)]=\"crop.name\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-password\">Category*</label>\n                            <select id=\"select\" name=\"select\" class=\"form-control\" size=\"1\" [(ngModel)]=\"crop.category\" required=\"\">\n                                <option value=\"0\">Please select</option>\n                                <option value=\"1\">Option #1</option>\n                                <option value=\"2\">Option #2</option>\n                                <option value=\"3\">Option #3</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-variety\">Variety</label>\n                            <select id=\"select1\" name=\"select1\" class=\"form-control\" [(ngModel)]=\"crop.variety\" size=\"1\">\n                                <option value=\"0\">Please select</option>\n                                <option value=\"1\">Variety 1</option>\n                                <option value=\"2\">Variety 2</option>\n                                <option value=\"3\">Variety 3</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-price\">Price</label>\n                            <input type=\"text\" id=\"nf-price\" name=\"nf-price\" class=\"form-control\" [(ngModel)]=\"crop.price\" placeholder=\"Enter Price\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-grade\">Grade</label>\n                            <input type=\"text\" id=\"nf-grade\" name=\"nf-grade\" class=\"form-control\" [(ngModel)]=\"crop.grade\" placeholder=\"Enter Grade\">\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-color\">Color*</label>\n                            <input type=\"text\" id=\"nf-color\" name=\"nf-color\" class=\"form-control\" [(ngModel)]=\"crop.color\" placeholder=\"Enter Color\" required>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-size\">Size/Weight*</label>\n                            <input type=\"text\" id=\"nf-size\" name=\"nf-size\" class=\"form-control\" [(ngModel)]=\"crop.size\" placeholder=\"Enter Size\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-otherSpeciality\">Other Speciality</label>\n                            <input type=\"text\" id=\"nf-otherSpeciality\" name=\"nf-otherSpeciality\" class=\"form-control\" [(ngModel)]=\"crop.otherSpeciality\" placeholder=\"Enter Color\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-availibility\">Availibility Peroid*</label>\n                            <input type=\"text\" id=\"nf-availibility\" name=\"nf-availibility\" class=\"form-control\" [(ngModel)]=\"crop.availibility\" placeholder=\"Enter Size\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-packaging\">Packaging*</label>\n                            <select id=\"select2\" name=\"select2\" class=\"form-control\" size=\"1\" [(ngModel)]=\"crop.packaging\" required>\n                                <option value=\"0\">Please select</option>\n                                <option value=\"1\">Option #1</option>\n                                <option value=\"2\">Option #2</option>\n                                <option value=\"3\">Option #3</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-supplyAblity\">Supply Ablity*</label>\n                            <input type=\"text\" id=\"nf-supplyAblity\" name=\"nf-supplyAblity\" class=\"form-control\" [(ngModel)]=\"crop.supplyAblity\" placeholder=\"Enter Supply Ablity\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-destinationForShipping\">Destination for Shipping*</label>\n                            <select id=\"select3\" name=\"select3\" class=\"form-control\" size=\"1\" [(ngModel)]=\"crop.destinationForShipping\" required>\n                                <option value=\"0\">Please select</option>\n                                <option value=\"1\">Option #1</option>\n                                <option value=\"2\">Option #2</option>\n                                <option value=\"3\">Option #3</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-packSize\">Pack Size*</label>\n                            <input type=\"text\" id=\"nf-packSize\" name=\"nf-packSize\" class=\"form-control\" [(ngModel)]=\"crop.packSize\" placeholder=\"Enter Pack Size\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-qty\">Quantity Per Pack*</label>\n                            <input type=\"text\" id=\"nf-qty\" name=\"nf-qty\" class=\"form-control\" [(ngModel)]=\"crop.qty\" placeholder=\"Enter Quantity Per Pack\" required>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-label\">Label/Making on Pack*</label>\n                            <input type=\"text\" id=\"nf-label\" name=\"nf-label\" class=\"form-control\" [(ngModel)]=\"crop.label\" placeholder=\"Enter Label\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-paymentTerms\">Payment Terms*</label>\n                            <select id=\"select4\" name=\"select4\" class=\"form-control\" size=\"1\" [(ngModel)]=\"crop.paymentTerms\" required>\n                                <option value=\"0\">Please select</option>\n                                <option value=\"1\">COD</option>\n                                <option value=\"2\">Cheque</option>\n                                <option value=\"3\">Net Banking</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-moq\">MOQ*</label>\n                            <input type=\"text\" id=\"nf-moq\" name=\"nf-moq\" class=\"form-control\" [(ngModel)]=\"crop.moq\" placeholder=\"Enter MOQ\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-averageLeadTime\">Average Lead Time*</label>\n                            <input type=\"text\" id=\"nf-averageLeadTime\" name=\"nf-averageLeadTime\" class=\"form-control\" [(ngModel)]=\"crop.averageLeadTime\" placeholder=\"Enter Average Lead Time\" required>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-additionalInformation\">Additional Information*</label>\n                            <textarea type=\"text\" id=\"nf-additionalInformation\" name=\"nf-additionalInformation\" class=\"form-control\" [(ngModel)]=\"crop.additionalInformation\" placeholder=\"Enter Additional Information\" rows=\"4\" required ></textarea>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-termsConditions\">Terms & Conditions</label>\n                            <textarea type=\"text\" id=\"nf-termsConditions\" name=\"nf-termsConditions\" class=\"form-control\" [(ngModel)]=\"crop.termsConditions\" placeholder=\"Enter Terms & Conditions\" rows=\"4\"></textarea>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-image\">Image</label>\n                            <input type=\"file\" name=\"\" class=\"form-control\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer\">\n                    <button type=\"reset\" class=\"btn btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n                    <button type=\"submit\" class=\"pull-right btn btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Save</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 984:
/***/ (function(module, exports) {

module.exports = "<div> \n    <div class=\"card\">\n        <div class=\"card-header\">\n        <input type=\"text\" name=\"\" placeholder=\"Search...\" [(ngModel)]=\"search\" (ngModelChange)=\"doSomething($event)\">\n        <button type=\"button\" class=\"btn btn-success pull-right\" [routerLink]=\"['/crop/add']\">Add Crop</button>\n        </div>\n        <ng-table [config]=\"config\"\n                  (tableChanged)=\"onChangeTable(config)\"\n                  (cellClicked)=\"onCellClick($event)\"\n                  [rows]=\"rows\" [columns]=\"columns\">\n        </ng-table>\n        <pagination *ngIf=\"config.paging\"\n                    class=\"pagination-sm\"\n                    [(ngModel)]=\"page\"\n                    [totalItems]=\"length\"\n                    [itemsPerPage]=\"itemsPerPage\"\n                    [maxSize]=\"maxSize\"\n                    [boundaryLinks]=\"true\"\n                    [rotate]=\"false\"\n                    (pageChanged)=\"onChangeTable(config, $event)\"\n                    (numPages)=\"numPages = $event\">\n        </pagination>\n        <pre *ngIf=\"config.paging\" class=\"card card-block card-header\">Page: {{page}} / {{numPages}}</pre>\n    </div>\n</div>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map
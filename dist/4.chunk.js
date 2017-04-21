webpackJsonp([4,16],{

/***/ 1028:
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
var router_1 = __webpack_require__(63);
var forms_1 = __webpack_require__(27);
var ng2_table_1 = __webpack_require__(952);
var ng2_bootstrap_1 = __webpack_require__(599);
var list_input_component_1 = __webpack_require__(987);
var add_input_component_1 = __webpack_require__(986);
var view_input_component_1 = __webpack_require__(988);
var http_1 = __webpack_require__(121);
var routes = [
    {
        path: '',
        data: {
            title: 'Input Management'
        },
        children: [
            {
                path: 'list',
                component: list_input_component_1.ListInputComponent,
                data: {
                    title: 'List'
                }
            },
            {
                path: 'add',
                component: add_input_component_1.AddInputComponent,
                data: {
                    title: 'Add'
                }
            },
            {
                path: 'list/:id',
                component: view_input_component_1.ViewInputComponent,
                data: {
                    title: 'List'
                }
            }
        ]
    }
];
var InputManagementRoutingModule = (function () {
    function InputManagementRoutingModule() {
    }
    return InputManagementRoutingModule;
}());
InputManagementRoutingModule = __decorate([
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
], InputManagementRoutingModule);
exports.InputManagementRoutingModule = InputManagementRoutingModule;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/input-management-routing.module.js.map

/***/ }),

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(123)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1058:
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <strong>Add Input</strong>\n        </div>\n        <div class=\"card-block\">\n            <form role=\"form\" (ngSubmit)=\"addInput()\" #dailyExpenseForm=\"ngForm\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group  has-required\">\n                            <label for=\"nf-name\">Input Name</label>\n                            <input type=\"text\" id=\"nf-name\" name=\"nf-name\" class=\"form-control\" placeholder=\"Enter Name\" [(ngModel)]=\"input.name\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group  has-required\">\n                            <label for=\"nf-password\">Company/Manufacturer</label>\n                            <select id=\"select\" name=\"select\" class=\"form-control\" size=\"1\" [(ngModel)]=\"input.manufacturer_id\" required=\"\">\n                                <option value=\"0\">Please select</option>\n                                <option value=\"1\">catg1</option>\n                                <option value=\"2\">catg2</option>\n                                <option value=\"3\">catg3</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-variety\">Variety</label>\n                            <select id=\"select1\" name=\"select1\" class=\"form-control\" [(ngModel)]=\"input.variety\" size=\"1\" required>\n                                <option value=\"0\">Please select</option>\n                                <option value=\"1\">Variety 1</option>\n                                <option value=\"2\">Variety 2</option>\n                                <option value=\"3\">Variety 3</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group  has-required\">\n                            <label for=\"nf-quantity\">Quantity</label>\n                            <input type=\"text\" id=\"nf-quantity\" name=\"nf-quantity\" class=\"form-control\" [(ngModel)]=\"input.quantity\" placeholder=\"Enter Color\" required>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-unit\">Unit</label>\n                            <input type=\"text\" id=\"nf-unit\" name=\"nf-unit\" class=\"form-control\" [(ngModel)]=\"input.unit\" placeholder=\"Enter Grade\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                    <div class=\"form-group  has-required\">\n                            <label for=\"nf-price\">Price</label>\n                            <input type=\"text\" id=\"nf-price\" name=\"nf-price\" class=\"form-control\" [(ngModel)]=\"input.price\" placeholder=\"Enter Price\" required>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-termsConditions\">Terms & Conditions</label>\n                            <textarea type=\"text\" id=\"nf-termsConditions\" name=\"nf-termsConditions\" class=\"form-control\" [(ngModel)]=\"input.tearm_and_conditions\" placeholder=\"Enter Terms & Conditions\" rows=\"4\"></textarea>\n                        </div>\n                    </div>\n                </div>\n               <!--  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-image\">Image</label>\n                            <input type=\"file\" name=\"\" class=\"form-control\">\n                        </div>\n                    </div>\n                </div> -->\n                <div class=\"card-footer\">\n                    <button class=\"btn btn-secondary\" [routerLink]=\"['/input/list']\"> Cancel</button>\n                    <button type=\"submit\" class=\"pull-right btn btn-primary orangeclr\">Save</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 1059:
/***/ (function(module, exports) {

module.exports = "<div> \n    <div class=\"card\">\n        <div class=\"card-header\">\n        <input type=\"text\" name=\"\" placeholder=\"Search...\" [(ngModel)]=\"search\" (ngModelChange)=\"doSomething($event)\">\n        <button type=\"button\" class=\"btn btn-success pull-right\" [routerLink]=\"['/input/add']\">Add Input</button>\n        </div>\n        <ng-table [config]=\"config\"\n                  (tableChanged)=\"onChangeTable(config)\"\n                  (cellClicked)=\"onCellClick($event)\"\n                  [rows]=\"rows\" [columns]=\"columns\">\n        </ng-table>\n        <div *ngIf='isShowNORcd == true' style=\"text-align: center;\">\n            <p>No Record Found</p>\n            </div>\n        <div *ngIf='isShowNORcd != true'>\n            <pagination *ngIf=\"config.paging\"\n                        class=\"pagination-sm\"\n                        [(ngModel)]=\"page\"\n                        [totalItems]=\"length\"\n                        [itemsPerPage]=\"itemsPerPage\"\n                        [maxSize]=\"maxSize\"\n                        [boundaryLinks]=\"true\"\n                        [rotate]=\"false\"\n                        (pageChanged)=\"onChangeTable(config, $event)\"\n                        (numPages)=\"numPages = $event\">\n            </pagination>\n            <pre *ngIf=\"config.paging\" class=\"card card-block card-header\">Page: {{page}} / {{numPages}}</pre>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 1060:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-lg-12\">\r\n            <div class=\"content-header\">\r\n                <ol class=\"breadcrumb\">\r\n                    <li><a href=\"#\">Dashboard</a></li>\r\n                    <li><a href=\"#\">Input</a></li>\r\n                    <li class=\"active\"><a href=\"#\">View</a></li>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">\r\n            <strong>{{!edit ? 'View' : 'Edit'}} Input</strong>\r\n\t\t\t<button class=\"btn btn-secondary pull-right\" *ngIf=\"!edit\" (click)=\"editInput()\"><i class=\"fa fa-pencil\"></i> Edit</button>\r\n            <button class=\"btn btn-secondary pull-right\" *ngIf=\"edit\" (click)=\"cancel()\">Cancel</button>\r\n            <button class=\"btn btn-success pull-right\" *ngIf=\"edit\" (click)=\"save()\">Save</button>\r\n        </div>\r\n        <div class=\"card-block viewmode\" *ngIf=\"!edit\">\r\n            <form role=\"form\" (ngSubmit)=\"addInput()\" #dailyExpenseForm=\"ngForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-name\">Input Name*</label>\r\n\t\t\t\t\t\t\t<p>{{input.name}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label >Manufacturer</label>\r\n                            <p>{{input.manufacturer_id}}</p>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                 </div>   \r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-variety\">Variety</label>\r\n\t\t\t\t\t\t\t<p>{{input.variety}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-price\">Price</label>\r\n\t\t\t\t\t\t\t<p><i class=\"fa fa-rupee\"></i>{{input.price}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-grade\">Quantity</label>\r\n\t\t\t\t\t\t\t<p>{{input.quantity}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-color\">unit</label>\r\n\t\t\t\t\t\t\t<p>{{input.unit}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-termsConditions\">Terms & Conditions</label>\r\n\t\t\t\t\t\t\t<p>{{input.tearm_and_conditions}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n <div class=\"card-block\" *ngIf=\"edit\">\r\n            <form role=\"form\" (ngSubmit)=\"addInput()\" #dailyExpenseForm=\"ngForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-name\">Input Name</label>\r\n                            <input type=\"text\" id=\"nf-name\" name=\"nf-name\" class=\"form-control\" placeholder=\"Enter Name\" [(ngModel)]=\"input.name\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-password\">Manufacturer</label>\r\n                            <p>{{input.manufacturer_id}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-variety\">Variety</label>\r\n                            <select id=\"select1\" name=\"select1\" class=\"form-control\" [(ngModel)]=\"input.variety\" size=\"1\">\r\n                                <option value=\"0\">Please select</option>\r\n                                <option value=\"1\">Variety 1</option>\r\n                                <option value=\"2\">Variety 2</option>\r\n                                <option value=\"3\">Variety 3</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-price\">Price</label>\r\n                            <input type=\"number\" id=\"nf-price\" name=\"nf-price\" class=\"form-control\" [(ngModel)]=\"input.price\" placeholder=\"Enter Price\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n               \r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-size\">Quantity</label>\r\n                            <input type=\"text\" id=\"nf-size\" name=\"nf-size\" class=\"form-control\" [(ngModel)]=\"input.quantity\" placeholder=\"Enter quantity\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-other_speciality\">Unit</label>\r\n                            <input type=\"text\" id=\"nf-other_speciality\" name=\"nf-other_speciality\" class=\"form-control\" [(ngModel)]=\"input.unit\" placeholder=\"Enter unit\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n               \r\n                <div class=\"row\">\r\n                    \r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-terms\">Terms & Conditions</label>\r\n                            <textarea type=\"text\" id=\"nf-terms\" name=\"nf-terms\" class=\"form-control\" [(ngModel)]=\"input.tearm_and_conditions\" placeholder=\"Enter Terms & Conditions\" rows=\"4\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 941:
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
var list_input_component_1 = __webpack_require__(987);
var add_input_component_1 = __webpack_require__(986);
var view_input_component_1 = __webpack_require__(988);
var input_management_routing_module_1 = __webpack_require__(1028);
var InputManagementModule = (function () {
    function InputManagementModule() {
    }
    return InputManagementModule;
}());
InputManagementModule = __decorate([
    core_1.NgModule({
        imports: [
            input_management_routing_module_1.InputManagementRoutingModule,
            common_1.CommonModule
        ],
        declarations: [
            list_input_component_1.ListInputComponent,
            add_input_component_1.AddInputComponent,
            view_input_component_1.ViewInputComponent
        ]
    })
], InputManagementModule);
exports.InputManagementModule = InputManagementModule;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/input-management.module.js.map

/***/ }),

/***/ 946:
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

/***/ 947:
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

/***/ 948:
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

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(122);
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

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng_table_component_1 = __webpack_require__(949);
var ng_table_filtering_directive_1 = __webpack_require__(946);
var ng_table_paging_directive_1 = __webpack_require__(947);
var ng_table_sorting_directive_1 = __webpack_require__(948);
exports.NG_TABLE_DIRECTIVES = [ng_table_component_1.NgTableComponent, ng_table_filtering_directive_1.NgTableFilteringDirective, ng_table_paging_directive_1.NgTablePagingDirective, ng_table_sorting_directive_1.NgTableSortingDirective];


/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(17);
var ng_table_component_1 = __webpack_require__(949);
var ng_table_filtering_directive_1 = __webpack_require__(946);
var ng_table_paging_directive_1 = __webpack_require__(947);
var ng_table_sorting_directive_1 = __webpack_require__(948);
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

/***/ 952:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var ng_table_component_1 = __webpack_require__(949);
var ng_table_filtering_directive_1 = __webpack_require__(946);
var ng_table_paging_directive_1 = __webpack_require__(947);
var ng_table_sorting_directive_1 = __webpack_require__(948);
__export(__webpack_require__(949));
__export(__webpack_require__(946));
__export(__webpack_require__(947));
__export(__webpack_require__(948));
__export(__webpack_require__(950));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    directives: [
        ng_table_component_1.NgTableComponent,
        ng_table_filtering_directive_1.NgTableFilteringDirective,
        ng_table_sorting_directive_1.NgTableSortingDirective,
        ng_table_paging_directive_1.NgTablePagingDirective
    ]
};
var ng_table_module_1 = __webpack_require__(951);
exports.Ng2TableModule = ng_table_module_1.Ng2TableModule;


/***/ }),

/***/ 962:
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
var http_1 = __webpack_require__(121);
var InputService = (function () {
    function InputService(http) {
        this.http = http;
        this.host = "https://efarmapi.herokuapp.com";
        //private host = "http://localhost:1337";
        this.access_token = {};
        this.token = '';
    }
    InputService.prototype.inputlist = function () {
        console.log("inside inputlisting");
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        var headers = new http_1.Headers();
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Authorization', this.token);
        //let body = urlSearchParams.toString()
        return this.http.get(this.host + '/inputs', { headers: headers }).map(function (res) { return res.json(); });
    };
    InputService.prototype.inputadd = function (inputs) {
        console.log("inside input add");
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        var headers = new http_1.Headers();
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Authorization', this.token);
        return this.http.post(this.host + '/inputs', inputs, { headers: headers }).map(function (res) { return res.json(); });
    };
    InputService.prototype.getInput = function (input) {
        console.log(input);
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        var headers = new http_1.Headers();
        var body = {};
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Authorization', this.token);
        console.log("addCrop----------------", input);
        return this.http.get(this.host + '/inputs/' + input, { headers: headers }).map(function (res) { return res.json(); });
    };
    InputService.prototype.updateInput = function (input) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        var headers = new http_1.Headers();
        var body = {};
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Authorization', this.token);
        return this.http.post(this.host + '/inputs/' + input.id, input, { headers: headers }).map(function (res) { return res.json(); });
    };
    return InputService;
}());
InputService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], InputService);
exports.InputService = InputService;
var _a;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/input.service.js.map

/***/ }),

/***/ 986:
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
var input_service_1 = __webpack_require__(962);
var router_1 = __webpack_require__(63);
var AddInputComponent = (function () {
    function AddInputComponent(router, _inputService) {
        this.router = router;
        this._inputService = _inputService;
        this.input = {};
    }
    AddInputComponent.prototype.ngOnInit = function () { };
    AddInputComponent.prototype.addInput = function () {
        var _this = this;
        console.log("inside addInput", this.input);
        this._inputService.inputadd(this.input)
            .subscribe(function (res) {
            console.log("response", res);
            _this.router.navigate(['/input/list']);
        }, function (err) {
            console.log("error", err);
        });
    };
    return AddInputComponent;
}());
AddInputComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(1058),
        providers: [input_service_1.InputService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof input_service_1.InputService !== "undefined" && input_service_1.InputService) === "function" && _b || Object])
], AddInputComponent);
exports.AddInputComponent = AddInputComponent;
var _a, _b;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/add-input.component.js.map

/***/ }),

/***/ 987:
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
var input_service_1 = __webpack_require__(962);
var router_1 = __webpack_require__(63);
var ListInputComponent = (function () {
    function ListInputComponent(router, _inputService) {
        var _this = this;
        this.router = router;
        this._inputService = _inputService;
        this.test = [];
        this.TableData = [{
                name: "Urea",
                distributor: "Harmind Singh",
                company: "The Garderner",
                district: "Ludhyana",
                variety: "Seeds",
                qty: 15,
                price: 1200
            }];
        this.documents = [];
        this.selectedDocument = [];
        this.rows = [];
        this.columns = [
            {
                title: 'Name',
                name: 'name',
            },
            { title: 'Units', name: 'unit' },
            { title: 'Price', name: 'price' },
            { title: 'Variety', name: 'variety', sort: false },
            { title: 'Qty.', name: 'quantity', sort: false },
            { title: 'status', name: 'status', sort: false },
        ];
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.isShowNORcd = false;
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-striped', 'table-bordered']
        };
        this.data = [];
        this.length = this.data.length;
        this._inputService.inputlist()
            .subscribe(function (res) {
            //let mainData = this.addDeleteButton(res)
            //let mainData = this.addDeleteButton(res)
            //console.log(mainData);
            _this.data = res;
            if (_this.data.length == 0) {
                _this.isShowNORcd = true;
            }
            //console.log("response---data---------",res)
            _this.onChangeTable(_this.config);
        }, function (err) {
            console.log("error--------------", err);
        });
    }
    ListInputComponent.prototype.addDeleteButton = function (data) {
        var keyArr = data;
        var newData = [];
        var delButton = "";
        keyArr.forEach(function (element, key) {
            delButton = '<button type="button" (click)="this.deleteInput()" class="btn btn-danger">Delete</button>';
            element.button = delButton;
            newData.push(element);
        });
        // console.log(newData);
        return newData;
    };
    ListInputComponent.prototype.ngOnInit = function () {
        this.onChangeTable(this.config);
    };
    ListInputComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.data; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        // create service here to fetch data from server;
        return data.slice(start, end);
    };
    ListInputComponent.prototype.changeSort = function (data, config) {
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
    ListInputComponent.prototype.changeFilter = function (data, config) {
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
    ListInputComponent.prototype.onChangeTable = function (config, page) {
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
    ListInputComponent.prototype.onCellClick = function (data) {
        //console.log(data);
        this.router.navigate(['/input/list/' + data["row"]["id"]]);
    };
    ListInputComponent.prototype.viewInput = function (data) {
        console.log(data);
        //this.router.navigate(['/input/list/' + data["row"]["id"]]);
    };
    ListInputComponent.prototype.deleteInput = function () {
        console.log("gfhjgfhjfhjgfjhf");
    };
    return ListInputComponent;
}());
ListInputComponent = __decorate([
    core_1.Component({
        selector: 'app-input-management',
        template: __webpack_require__(1059),
        styles: [__webpack_require__(1037)],
        providers: [input_service_1.InputService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof input_service_1.InputService !== "undefined" && input_service_1.InputService) === "function" && _b || Object])
], ListInputComponent);
exports.ListInputComponent = ListInputComponent;
var _a, _b;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/list-input.component.js.map

/***/ }),

/***/ 988:
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
var router_1 = __webpack_require__(63);
var input_service_1 = __webpack_require__(962);
var ViewInputComponent = (function () {
    function ViewInputComponent(route, _inputService) {
        var _this = this;
        this._inputService = _inputService;
        this.Id = '';
        this.input = {};
        this.copy_input = {};
        this.edit = false;
        this.Id = route.snapshot.params['id'];
        this._inputService.getInput(this.Id)
            .subscribe(function (res) {
            //console.log(res);
            _this.input = res;
            //console.log("sfsdfdfdfd",this.input)
        }, function (err) {
        });
    }
    ViewInputComponent.prototype.editInput = function () {
        this.edit = !this.edit;
        this.copy_input = JSON.parse(JSON.stringify(this.input));
    };
    ViewInputComponent.prototype.cancel = function () {
        this.edit = !this.edit;
        this.input = JSON.parse(JSON.stringify(this.copy_input));
    };
    ViewInputComponent.prototype.save = function () {
        var _this = this;
        this._inputService.updateInput(this.input)
            .subscribe(function (res) {
            _this.edit = !_this.edit;
            _this.copy_input = JSON.parse(JSON.stringify(_this.input));
        }, function (err) {
        });
    };
    return ViewInputComponent;
}());
ViewInputComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(1060),
        providers: [input_service_1.InputService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof input_service_1.InputService !== "undefined" && input_service_1.InputService) === "function" && _b || Object])
], ViewInputComponent);
exports.ViewInputComponent = ViewInputComponent;
var _a, _b;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/view-input.component.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map
webpackJsonp([3,16],{

/***/ 1029:
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
var list_land_component_1 = __webpack_require__(990);
var add_land_component_1 = __webpack_require__(989);
var view_land_component_1 = __webpack_require__(991);
var http_1 = __webpack_require__(121);
var routes = [
    {
        path: '',
        data: {
            title: 'land Management'
        },
        children: [
            {
                path: 'list',
                component: list_land_component_1.ListLandComponent,
                data: {
                    title: 'List'
                }
            },
            {
                path: 'add',
                component: add_land_component_1.AddLandComponent,
                data: {
                    title: 'Add'
                }
            },
            {
                path: 'list/:id',
                component: view_land_component_1.ViewLandComponent,
                data: {
                    title: 'List'
                }
            }
        ]
    }
];
var LandManagementRoutingModule = (function () {
    function LandManagementRoutingModule() {
    }
    return LandManagementRoutingModule;
}());
LandManagementRoutingModule = __decorate([
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
], LandManagementRoutingModule);
exports.LandManagementRoutingModule = LandManagementRoutingModule;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/land-management-routing.module.js.map

/***/ }),

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(123)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1061:
/***/ (function(module, exports) {

module.exports = "<div>\n\n      \n      <div class=\"row\">\n      <div class=\"col-12 col-lg-12\">\n      <div class=\"content-header\">\n         <ol class=\"breadcrumb\">\n          <li><a href=\"#\">Dashboard</a></li>\n          <li><a href=\"#\">Land</a></li>\n          <li class=\"active\"><a href=\"#\">Add new</a></li>\n        </ol>\n      </div>\n          </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <strong>Add Land</strong>\n        </div>\n        <div class=\"card-block\">\n            <form role=\"form\" (ngSubmit)=\"addLand()\" #dailyExpenseForm=\"ngForm\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-name\">Owner Name</label>\n                            <input type=\"text\" id=\"nf-name\" name=\"nf-name\" class=\"form-control\" placeholder=\"Enter Name\" [(ngModel)]=\"land.name\" required>\n                        </div>\n                    </div>\n                    <!-- <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-password\">Category*</label>\n                            <select id=\"select\" name=\"select\" class=\"form-control\" size=\"1\" [(ngModel)]=\"land.category\" required=\"\">\n                                <option value=\"0\">Please select</option>\n                                <option value=\"1\">Option #1</option>\n                                <option value=\"2\">Option #2</option>\n                                <option value=\"3\">Option #3</option>\n                            </select>\n                        </div>\n                    </div> -->\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-variety\">Location</label>\n                            <select id=\"select1\" name=\"select1\" class=\"form-control\" [(ngModel)]=\"land.location\" size=\"1\" required>\n                                <option value=\"0\">Please select</option>\n                                <option value=\"1\">location 1</option>\n                                <option value=\"2\">location 2</option>\n                                <option value=\"3\">location 3</option>\n                            </select>\n                        </div>\n                    </div>\n                      <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-password\">Area</label>\n                            <select id=\"select\" name=\"select\" class=\"form-control\" size=\"1\" [(ngModel)]=\"land.area\" required=\"\">\n                                <option value=\"0\">Please select</option>\n                                <option value=\"1\">area 1</option>\n                                <option value=\"2\">area 2</option>\n                                <option value=\"3\">area 3</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                        <label for=\"nf-password\">Khasra no</label>\n                        <input type=\"number\" id=\"nf-khasra\" name=\"nf-khasra\" class=\"form-control\" [(ngModel)]=\"land.khasra_no\" required>\n                    </div>\n                </div>\n                \n                    <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                            <label for=\"nf-price\">Expected price</label>\n                            <input type=\"number\" id=\"nf-expected_price\" name=\"nf-expected_price\" class=\"form-control\" [(ngModel)]=\"land.expected_price\" placeholder=\"Enter expected price\" required>\n                        </div>\n                    </div>\n                </div>\n                 \n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-termsConditions\">Description</label>\n                            <textarea type=\"text\" id=\"nf-termsConditions\" name=\"nf-termsConditions\" class=\"form-control\" [(ngModel)]=\"land.description\" placeholder=\"Enter Terms & Conditions\" rows=\"4\"></textarea>\n                        </div>\n                    </div>\n                \n                \n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-termsConditions\">Terms & Conditions</label>\n                            <textarea type=\"text\" id=\"nf-termsConditions\" name=\"nf-termsConditions\" class=\"form-control\" [(ngModel)]=\"land.term_condition\" placeholder=\"Enter Terms & Conditions\" rows=\"4\"></textarea>\n                        </div>\n                    </div>\n                </div>\n                \n                <!-- <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-image\">Image</label>\n                            <input type=\"file\" name=\"\" class=\"form-control\">\n                        </div>\n                    </div>\n                </div> -->\n\n                <div class=\"card-footer\">\n                    <button type=\"reset\" class=\"btn btn-secondary\" [routerLink]=\"['/land/list']\"> Cancel</button>\n                    <button type=\"submit\" class=\"pull-right btn btn-primary orangeclr\">Save</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 1062:
/***/ (function(module, exports) {

module.exports = "<div> \n\n      \n      <div class=\"row\">\n      <div class=\"col-12 col-lg-12\">\n      <div class=\"content-header\">\n         <ol class=\"breadcrumb\">\n          <li><a href=\"#\">Dashboard</a></li>\n          <li><a href=\"#\">Land</a></li>\n          <li class=\"active\"><a href=\"#\">Add new</a></li>\n        </ol>\n      </div>\n          </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n        <input type=\"text\" name=\"\" placeholder=\"Search...\" [(ngModel)]=\"search\" (ngModelChange)=\"doSomething($event)\">\n        <button type=\"button\" class=\"btn btn-success pull-right\" [routerLink]=\"['/land/add']\">Add Land</button>\n        </div>\n        <ng-table [config]=\"config\"\n                  (tableChanged)=\"onChangeTable(config)\"\n                  (cellClicked)=\"onCellClick($event)\"\n                  [rows]=\"rows\" [columns]=\"columns\">\n        </ng-table>\n        <pagination *ngIf=\"config.paging\"\n                    class=\"pagination-sm\"\n                    [(ngModel)]=\"page\"\n                    [totalItems]=\"length\"\n                    [itemsPerPage]=\"itemsPerPage\"\n                    [maxSize]=\"maxSize\"\n                    [boundaryLinks]=\"true\"\n                    [rotate]=\"false\"\n                    (pageChanged)=\"onChangeTable(config, $event)\"\n                    (numPages)=\"numPages = $event\">\n        </pagination>\n        <pre *ngIf=\"config.paging\" class=\"card card-block card-header\">Page: {{page}} / {{numPages}}</pre>\n    </div>\n</div>"

/***/ }),

/***/ 1063:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-lg-12\">\r\n            <div class=\"content-header\">\r\n                <ol class=\"breadcrumb\">\r\n                    <li><a href=\"#\">Dashboard</a></li>\r\n                    <li><a href=\"#\">Land</a></li>\r\n                    <li class=\"active\"><a href=\"#\">View</a></li>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">\r\n            <strong>{{!edit ? 'View' : 'Edit'}} Land</strong>\r\n\t\t\t<button class=\"btn btn-secondary pull-right\" *ngIf=\"!edit\" (click)=\"editLand()\"><i class=\"fa fa-pencil\"></i> Edit</button>\r\n            <button class=\"btn btn-secondary pull-right\" *ngIf=\"edit\" (click)=\"cancel()\">Cancel</button>\r\n            <button class=\"btn btn-success pull-right\" *ngIf=\"edit\" (click)=\"save()\">Save</button>\r\n        </div>\r\n        <div class=\"card-block viewmode\" *ngIf=\"!edit\">\r\n            <form role=\"form\" (ngSubmit)=\"addLand()\" #dailyExpenseForm=\"ngForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-name\">Owner Name</label>\r\n\t\t\t\t\t\t\t<p>{{land.name}}</p>\r\n                        </div>\r\n                    </div>\r\n                   <!--  <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-rentsell\">Rent/sell</label>\r\n\t\t\t\t\t\t\t<p>{{land.rentsell}}</p>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-location\">Location</label>\r\n\t\t\t\t\t\t\t<p>{{land.location}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-area\">Area</label>\r\n\t\t\t\t\t\t\t<p>{{land.area}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-khasrano\">Khasra no</label>\r\n\t\t\t\t\t\t\t<p>{{land.khasra_no}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-expectedprice\">Expected Price</label>\r\n\t\t\t\t\t\t\t<p><i class=\"fa fa-rupee\"></i>{{land.expected_price}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-description\">Description</label>\r\n\t\t\t\t\t\t\t<p>{{land.description}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-termsConditions\">Terms & Conditions</label>\r\n\t\t\t\t\t\t\t<p>{{land.term_condition}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n               <!--  <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-image\">Image</label>\r\n\t\t\t\t\t\t\t<p><i class=\"fa fa-file-image-o\"></i> {{land.image}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n            </form>\r\n        </div>\r\n        <div class=\"card-block\" *ngIf=\"edit\">\r\n            <form role=\"form\" (ngSubmit)=\"addLand()\" #dailyExpenseForm=\"ngForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-name\">Owner Name</label>\r\n                            <input type=\"text\" id=\"nf-name\" name=\"nf-name\" class=\"form-control\" placeholder=\"Enter Name\" [(ngModel)]=\"land.name\" required>\r\n                        </div>\r\n                    </div>\r\n                   <!--   <div class=\"col-sm-6\">\r\n                     <label>&nbsp;</label>\r\n                        <div class=\"form-group radiobuttons\">\r\n                            <input type=\"radio\"  name=\"rentSell\" class=\"\" value=\"rent\"  [(ngModel)]=\"land.rentSell\" checked required>\r\n                            <label for=\"nf-rentslell\">Rent</label>\r\n                            &nbsp;&nbsp;                            \r\n                            <input type=\"radio\" name=\"rentSell\" class=\"\" value=\"sell\"  [(ngModel)]=\"land.rentSell\" required>\r\n                            <label for=\"rentSell\">sell</label>\r\n                        </div>                      \r\n                    </div> -->\r\n\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-location\">Location</label>\r\n                            <select id=\"location\" name=\"location\" class=\"form-control\" [(ngModel)]=\"land.location\" size=\"1\" required>\r\n                                <option value=\"0\">Please select</option>\r\n                                <option value=\"1\">Variety 1</option>\r\n                                <option value=\"2\">Variety 2</option>\r\n                                <option value=\"3\">Variety 3</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-area\">Area</label>\r\n                            <div class=\"input-group\">\r\n                              <input type=\"text\" id=\"nf-area\" name=\"area\" class=\"form-control\" aria-label=\"Text input with dropdown button\" [(ngModel)]=\"land.area\" placeholder=\"Enter Bigha\" required>\r\n                              <div class=\"input-group-btn\">\r\n                                <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                  Bigha\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                       </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"khasrano\">Khasra no</label>\r\n                            <input type=\"khasrano\" id=\"nf-khasrano\" name=\"nf-khasrano\" class=\"form-control\" [(ngModel)]=\"land.khasra_no\" placeholder=\"Khasra no\" required>\r\n                        </div>\r\n                    </div>\r\n                \r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"expectedprice\">Expected price</label>\r\n                            <input type=\"expectedprice\" id=\"nf-expectedprice\" name=\"nf-expectedprice\" class=\"form-control\" [(ngModel)]=\"land.expected_price\" placeholder=\"Expected price\" required>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-description\">Description</label>\r\n                            <textarea type=\"text\" id=\"nf-description\" name=\"nf-description\" class=\"form-control\" [(ngModel)]=\"land.description\" placeholder=\"Enter Description\" rows=\"4\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                \r\n                \r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-termsConditions\">Terms & Conditions</label>\r\n                            <textarea type=\"text\" id=\"nf-termsConditions\" name=\"nf-termsConditions\" class=\"form-control\" [(ngModel)]=\"land.term_condition\" placeholder=\"Enter Terms & Conditions\" rows=\"4\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <!-- <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-image\">Image</label>\r\n                            <input type=\"file\" name=\"\" class=\"form-control\">\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 942:
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
var list_land_component_1 = __webpack_require__(990);
var add_land_component_1 = __webpack_require__(989);
var view_land_component_1 = __webpack_require__(991);
var land_management_routing_module_1 = __webpack_require__(1029);
var LandManagementModule = (function () {
    function LandManagementModule() {
    }
    return LandManagementModule;
}());
LandManagementModule = __decorate([
    core_1.NgModule({
        imports: [
            land_management_routing_module_1.LandManagementRoutingModule,
            common_1.CommonModule
        ],
        declarations: [
            list_land_component_1.ListLandComponent,
            add_land_component_1.AddLandComponent,
            view_land_component_1.ViewLandComponent
        ]
    })
], LandManagementModule);
exports.LandManagementModule = LandManagementModule;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/land-management.module.js.map

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

/***/ 963:
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
var LandService = (function () {
    function LandService(http) {
        this.http = http;
        this.host = "https://efarmapi.herokuapp.com";
        //private host = "http://localhost:1337";
        this.access_token = {};
        this.token = '';
    }
    LandService.prototype.landlist = function () {
        console.log("inside land");
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        var headers = new http_1.Headers();
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Authorization', this.token);
        //let body = urlSearchParams.toString()
        return this.http.get(this.host + '/land', { headers: headers }).map(function (res) { return res.json(); });
    };
    LandService.prototype.landadd = function (land) {
        console.log("inside input add");
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        var headers = new http_1.Headers();
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Authorization', this.token);
        return this.http.post(this.host + '/land', land, { headers: headers }).map(function (res) { return res.json(); });
    };
    LandService.prototype.getLand = function (land) {
        console.log(land);
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        var headers = new http_1.Headers();
        var body = {};
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Authorization', this.token);
        console.log("addCrop----------------", land);
        return this.http.get(this.host + '/land/' + land, { headers: headers }).map(function (res) { return res.json(); });
    };
    LandService.prototype.updateLand = function (land) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        var headers = new http_1.Headers();
        var body = {};
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Authorization', this.token);
        return this.http.post(this.host + '/land/' + land.id, land, { headers: headers }).map(function (res) { return res.json(); });
    };
    return LandService;
}());
LandService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], LandService);
exports.LandService = LandService;
var _a;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/land.service.js.map

/***/ }),

/***/ 989:
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
var land_service_1 = __webpack_require__(963);
var router_1 = __webpack_require__(63);
var AddLandComponent = (function () {
    function AddLandComponent(router, _landService) {
        this.router = router;
        this._landService = _landService;
        this.land = {};
    }
    AddLandComponent.prototype.ngOnInit = function () { };
    AddLandComponent.prototype.addLand = function () {
        var _this = this;
        console.log("inside addLand", this.land);
        this._landService.landadd(this.land)
            .subscribe(function (res) {
            console.log("response", res);
            _this.router.navigate(['/land/list']);
        }, function (err) {
            console.log("error", err);
        });
    };
    return AddLandComponent;
}());
AddLandComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(1061),
        providers: [land_service_1.LandService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof land_service_1.LandService !== "undefined" && land_service_1.LandService) === "function" && _b || Object])
], AddLandComponent);
exports.AddLandComponent = AddLandComponent;
var _a, _b;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/add-land.component.js.map

/***/ }),

/***/ 990:
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
var land_service_1 = __webpack_require__(963);
var router_1 = __webpack_require__(63);
var ListLandComponent = (function () {
    function ListLandComponent(router, _landService) {
        var _this = this;
        this.router = router;
        this._landService = _landService;
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
            { title: 'location', name: 'location', sort: false },
            { title: 'area', name: 'area', sort: false },
            { title: 'khasra_no', name: 'khasra_no', sort: false },
            { title: 'expected_price.', name: 'expected_price', sort: false }
            //{title: 'Action', name: 'button'},
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
        this._landService.landlist()
            .subscribe(function (res) {
            _this.data = res;
            /*if(this.data.length == 0){
              this.isShowNORcd = true;
            }*/
            console.log("response---data---------", res);
            _this.onChangeTable(_this.config);
        }, function (err) {
            console.log("error--------------", err);
        });
    }
    ListLandComponent.prototype.addDeleteButton = function (data) {
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
    ListLandComponent.prototype.ngOnInit = function () {
        this.onChangeTable(this.config);
    };
    ListLandComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.data; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        // create service here to fetch data from server;
        return data.slice(start, end);
    };
    ListLandComponent.prototype.changeSort = function (data, config) {
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
    ListLandComponent.prototype.changeFilter = function (data, config) {
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
    ListLandComponent.prototype.onChangeTable = function (config, page) {
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
    ListLandComponent.prototype.onCellClick = function (data) {
        //console.log(data);
        this.router.navigate(['/land/list/' + data["row"]["id"]]);
    };
    return ListLandComponent;
}());
ListLandComponent = __decorate([
    core_1.Component({
        selector: 'app-land-management',
        template: __webpack_require__(1062),
        styles: [__webpack_require__(1038)],
        providers: [land_service_1.LandService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof land_service_1.LandService !== "undefined" && land_service_1.LandService) === "function" && _b || Object])
], ListLandComponent);
exports.ListLandComponent = ListLandComponent;
var _a, _b;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/list-land.component.js.map

/***/ }),

/***/ 991:
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
var land_service_1 = __webpack_require__(963);
var router_1 = __webpack_require__(63);
var ViewLandComponent = (function () {
    function ViewLandComponent(route, _landService) {
        var _this = this;
        this._landService = _landService;
        this.landID = '';
        this.land = {};
        this.copy_land = {};
        this.edit = false;
        this.landID = route.snapshot.params['id'];
        this._landService.getLand(this.landID)
            .subscribe(function (res) {
            console.log(res);
            _this.land = res;
        }, function (err) {
        });
    }
    ViewLandComponent.prototype.editLand = function () {
        this.edit = !this.edit;
        this.copy_land = JSON.parse(JSON.stringify(this.land));
    };
    ViewLandComponent.prototype.cancel = function () {
        this.edit = !this.edit;
        this.land = JSON.parse(JSON.stringify(this.copy_land));
    };
    ViewLandComponent.prototype.save = function () {
        var _this = this;
        this._landService.updateLand(this.land)
            .subscribe(function (res) {
            _this.edit = !_this.edit;
            _this.copy_land = JSON.parse(JSON.stringify(_this.land));
        }, function (err) {
        });
    };
    return ViewLandComponent;
}());
ViewLandComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(1063),
        providers: [land_service_1.LandService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof land_service_1.LandService !== "undefined" && land_service_1.LandService) === "function" && _b || Object])
], ViewLandComponent);
exports.ViewLandComponent = ViewLandComponent;
var _a, _b;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/view-land.component.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map
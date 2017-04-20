webpackJsonp([3,16],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(122)();
// imports


// module
exports.push([module.i, "/*.is-loading {\n\ttext-align: center;\n\tfont-size: 40px!important\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1017:
/***/ (function(module, exports) {

module.exports = "<div class=\"equipment-wrapper\">\n    <div class=\"row\">\n        <div class=\"col-12 col-lg-12\">\n            <div class=\"content-header\">\n                <ol class=\"breadcrumb\">\n                    <li><a href=\"javascript:void(0)\">Dashboard</a></li>\n                    <li class=\"active\"><a href=\"javascript:void(0)\">Equipment Management</a></li>      \n                </ol>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <strong>{{action}} Equipment</strong>\n        </div>\n        <div class=\"card-block\">\n            <form role=\"form\" (ngSubmit)=\"submitEquipment()\" #addEquipmentForm=\"ngForm\">\n                \n               <div *ngIf=\"showMessage\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\"  (click)=\"closeMessage()\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <strong>Success</strong> Equipment Added Successfully.\n                </div>\n                \n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-name\">Equipment Name*</label>\n                            <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter Name\" [(ngModel)]=\"equipment.name\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"category\">Category*</label>\n                            <select id=\"category\" name=\"category\" class=\"form-control\" size=\"1\" [(ngModel)]=\"equipment.category\" required>\n                                <option value=\"\">Please select</option>\n                                <option value=\"1\">Option #1</option>\n                                <option value=\"2\">Option #2</option>\n                                <option value=\"3\">Option #3</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"companyManufacturer\">Company/Manufacturer*</label>\n                            <select id=\"companyManufacturer\" name=\"companyManufacturer\" class=\"form-control\" [(ngModel)]=\"equipment.companyManufacturer\" size=\"1\" required>\n                                <option value=\"0\">Please select</option>\n                                <option value=\"1\">Variety 1</option>\n                                <option value=\"2\">Variety 2</option>\n                                <option value=\"3\">Variety 3</option>\n                            </select>\n                        </div>\n                    </div>\n                      <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"model\">Model*</label>\n                            <select id=\"model\" name=\"model\" class=\"form-control\" size=\"1\" [(ngModel)]=\"equipment.model\" required>\n                                <option value=\"0\">Please select</option>\n                                <option value=\"1\">Option #1</option>\n                                <option value=\"2\">Option #2</option>\n                                <option value=\"3\">Option #3</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"modelyear\">Model year</label>\n                            <select id=\"modelyear\" name=\"modelyear\" class=\"form-control\" size=\"1\" [(ngModel)]=\"equipment.modelyear\">\n                                <option value=\"\">Please select</option>\n                                <option value=\"2010\">2010</option>                                \n                                <option value=\"2011\">2011</option>                                \n                                <option value=\"2012\">2012</option>                                \n                                <option value=\"2013\">2013</option>                                \n                                <option value=\"2014\">2014</option>                                \n                                <option value=\"2015\">2015</option>                                \n                                <option value=\"2016\">2016</option>                                \n                                <option value=\"2017\">2017</option>                                                                \n                            </select>\n                        </div>\n                    </div>\n                \n                    <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                            <label for=\"enginePower\">Engine power</label>\n                            <input type=\"text\" id=\"enginePower\" name=\"enginePower\" class=\"form-control\" [(ngModel)]=\"equipment.enginepower\" placeholder=\"Enter Engine Power\">\n                        </div>\n                    </div>\n                </div>\n                 <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <input type=\"radio\"  name=\"rentSell\" class=\"\" value=\"rent\"  [(ngModel)]=\"equipment.rentSell\" checked required>\n                            <label for=\"nf-rentslell\">Rent</label>\n                            &nbsp;&nbsp;                            \n                            <input type=\"radio\" name=\"rentSell\" class=\"\" value=\"sell\"  [(ngModel)]=\"equipment.rentSell\" required>\n                            <label for=\"rentSell\">sell</label>\n                        </div>                      \n                    </div>\n\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"rate\"></label>                         \n                            <input type=\"text\" id=\"rate\" name=\"rate\" class=\"form-control\" [(ngModel)]=\"equipment.rate\" placeholder=\"Enter Rate/hr\">\n                        </div>\n                    </div>\n                </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"usage\">Usage*</label>\n                            <textarea type=\"text\" id=\"usage\" name=\"usage\" class=\"form-control\" [(ngModel)]=\"equipment.usage\" placeholder=\"\" rows=\"4\" required></textarea>\n                        </div>\n                    </div>\n\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"description\">Description*</label>\n                            <textarea type=\"text\" id=\"description\" name=\"description\" class=\"form-control\" [(ngModel)]=\"equipment.description\" placeholder=\"\" rows=\"4\" required></textarea>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"termsConditions\">Terms & Conditions</label>\n                            <textarea type=\"text\" id=\"termsConditions\" name=\"termsConditions\" class=\"form-control\" [(ngModel)]=\"equipment.termsConditions\" placeholder=\"\" rows=\"4\"></textarea>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-image\">Image</label>\n                            <input type=\"file\" name=\"\" class=\"form-control\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer\">\n                    <button type=\"reset\" class=\"btn btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n                    <button type=\"submit\" class=\"pull-right btn btn-primary\" [disabled]=\"!addEquipmentForm.valid\"><i class=\"fa fa-dot-circle-o\"></i> Save</button>\n                </div>\n            </form>\n        </div>\n    </div> <!-- .card -->\n</div> <!-- .equipment-wrapper -->"

/***/ }),

/***/ 1018:
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\"overlayloader\">     \n     <div class=\"loader\"></div>\n</div>  -->\n\n<div class=\"equipment-wrapper\">      \n    <div class=\"row\">\n        <div class=\"col-12 col-lg-12\">\n            <div class=\"content-header\">\n                <ol class=\"breadcrumb\">\n                    <li><a href=\"javascript:void(0)\">Dashboard</a></li>\n                    <li class=\"active\"><a href=\"javascript:void(0)\">Equipment Management</a></li>      \n                </ol>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"isNewAdded\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\"  (click)=\"closeMessage()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <strong>Success</strong> Equipment Added Successfully.\n    </div>\n\n    <div class=\"card\">      \n        \n        <div class=\"card-header\">\n          <input type=\"text\" name=\"\" placeholder=\"Search...\" [(ngModel)]=\"search\" (ngModelChange)=\"doSomething($event)\">\n          <button type=\"button\" class=\"btn btn-success pull-right\" [routerLink]=\"['/equipment/add']\">Add Equipment</button>          \n        </div>\n\n        <ng-table [config]=\"config\"\n                  (tableChanged)=\"onChangeTable(config)\"\n                  (cellClicked)=\"onCellClick($event)\"\n                  [rows]=\"rows\" [columns]=\"columns\">\n        </ng-table>\n\n        <!-- loader -->\n        <div *ngIf=\"isLoading\" class=\"is-loading\"><i class=\"page-loader\"></i></div>\n\n        <pagination *ngIf=\"config.paging\"\n                    class=\"pagination-sm\"\n                    [(ngModel)]=\"page\"\n                    [totalItems]=\"length\"\n                    [itemsPerPage]=\"itemsPerPage\"\n                    [maxSize]=\"maxSize\"\n                    [boundaryLinks]=\"true\"\n                    [rotate]=\"false\"\n                    (pageChanged)=\"onChangeTable(config, $event)\"\n                    (numPages)=\"numPages = $event\">\n        </pagination>\n        <p *ngIf=\"config.paging\" class=\"card card-block card-header\">Page: {{page}} / {{numPages}}</p>\n        \n    </div>\n</div>"

/***/ }),

/***/ 1019:
/***/ (function(module, exports) {

module.exports = "<div class=\"equipment-wrapper\">    \r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-lg-12\">\r\n            <div class=\"content-header\">\r\n                <ol class=\"breadcrumb\">\r\n                    <li><a href=\"javascript:void(0)\">Dashboard</a></li>\r\n                    <li class=\"active\"><a href=\"javascript:void(0)\">Equipment Management</a></li>      \r\n                </ol>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">\r\n            <strong>View Equipment</strong>\r\n            <button type=\"button\" class=\"btn btn-success pull-right\" (click)=\"updateEquipment(equipment.id)\">Edit Equipment</button>              \r\n        </div>\r\n        <div class=\"card-block\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"nf-name\">Equipment Name</label>\r\n                        <p>{{equipment.name}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"category\">Category</label>\r\n                        <p>{{equipment.category}}</p>                            \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"companyManufacturer\">Company/Manufacturer</label>\r\n                        <p>{{equipment.companyManufacturer}}</p>                           \r\n                    </div>\r\n                </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"model\">Model</label>\r\n                        <p>{{equipment.model}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"modelyear\">Model year</label>\r\n                        <p>{{equipment.modelyear}}</p>\r\n                    </div>\r\n                </div>\r\n            \r\n                <div class=\"col-sm-6\">\r\n                <div class=\"form-group\">\r\n                        <label for=\"enginePower\">Engine power</label>\r\n                        <p>{{equipment.enginepower}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n             <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"nf-rentslell\">Rent/sell</label>\r\n                        <p>{{equipment.rentSell}}</p>                        \r\n                    </div>                      \r\n                </div>\r\n\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"rate\">Price</label>                         \r\n                        <p>{{equipment.rate}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"usage\">Usage</label>\r\n                        <p>{{equipment.usage}}</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"description\">Description</label>\r\n                        <p>{{equipment.description}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"termsConditions\">Terms & Conditions</label>\r\n                        <p>{{equipment.termsConditiop}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"image\">Image</label>\r\n                        <p>Not Available</p>\r\n                    </div>\r\n                </div>\r\n            </div>                           \r\n        </div>\r\n    </div> <!-- .card -->\r\n</div> <!-- .equipment-wrapper -->"

/***/ }),

/***/ 939:
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
var list_equipment_component_1 = __webpack_require__(971);
var view_equipment_component_1 = __webpack_require__(972);
var addupdate_equipment_component_1 = __webpack_require__(970);
var equipment_management_routing_module_1 = __webpack_require__(992);
var EquipmentManagementModule = (function () {
    function EquipmentManagementModule() {
    }
    return EquipmentManagementModule;
}());
EquipmentManagementModule = __decorate([
    core_1.NgModule({
        imports: [
            equipment_management_routing_module_1.EquipmentManagementRoutingModule,
            common_1.CommonModule
        ],
        declarations: [
            list_equipment_component_1.ListEquipmentComponent,
            addupdate_equipment_component_1.AddUpdateEquipmentComponent,
            view_equipment_component_1.ViewEquipmentComponent
        ]
    })
], EquipmentManagementModule);
exports.EquipmentManagementModule = EquipmentManagementModule;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/equipment-management.module.js.map

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
var http_1 = __webpack_require__(120);
var EquipmentService = (function () {
    function EquipmentService(_http) {
        this._http = _http;
        this.host = "https://efarmapi.herokuapp.com";
        this.access_token = {};
        this.token = '';
    }
    EquipmentService.prototype.getAllEquipments = function () {
        var headers = new http_1.Headers();
        var urlSearchParams = new http_1.URLSearchParams();
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        headers.append('Authorization', this.token);
        return this._http.get(this.host + '/equipment', { headers: headers }).map(function (res) { return res.json(); });
    };
    EquipmentService.prototype.postEquipment = function (equipment) {
        var headers = new http_1.Headers();
        var urlSearchParams = new http_1.URLSearchParams();
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        headers.append('Authorization', this.token);
        return this._http.post(this.host + '/equipment', equipment, { headers: headers }).map(function (res) { return res.json(); });
    };
    /** get a single Equipment by ID **/
    EquipmentService.prototype.getEquipment = function (equipmentID) {
        var headers = new http_1.Headers();
        var urlSearchParams = new http_1.URLSearchParams();
        var body = {};
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        headers.append('Authorization', this.token);
        return this._http.get(this.host + '/equipment/' + equipmentID, { headers: headers }).map(function (res) { return res.json(); });
    };
    /** update equipment **/
    EquipmentService.prototype.putEquipment = function (equipment) {
        var headers = new http_1.Headers();
        var urlSearchParams = new http_1.URLSearchParams();
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        headers.append('Authorization', this.token);
        return this._http.put(this.host + '/equipment/' + equipment.id, equipment, { headers: headers }).map(function (res) { return res.json(); });
    };
    /** DeleteID equipment by ID **/
    EquipmentService.prototype.deleteEquipment = function (equipmentID) {
        var headers = new http_1.Headers();
        var urlSearchParams = new http_1.URLSearchParams();
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        headers.append('Authorization', this.token);
        return this._http.delete(this.host + '/equipment/' + equipmentID, { headers: headers }).map(function (res) { return res.json(); });
    };
    return EquipmentService;
}());
EquipmentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], EquipmentService);
exports.EquipmentService = EquipmentService;
var _a;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/equipment.service.js.map

/***/ }),

/***/ 970:
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
// import { FormGroup, FormBuilder ,Validators } from '@angular/forms';
var equipment_service_1 = __webpack_require__(954);
var AddUpdateEquipmentComponent = (function () {
    function AddUpdateEquipmentComponent(_router, _activateRouter, _equipmentService) {
        var _this = this;
        this._router = _router;
        this._activateRouter = _activateRouter;
        this._equipmentService = _equipmentService;
        this.equipment = {};
        this.allEquipments = [];
        this.showMessage = false;
        this.action = 'Add';
        this.equipmentID = _activateRouter.snapshot.params['id'];
        if (this.equipmentID) {
            this._equipmentService.getEquipment(this.equipmentID).subscribe(function (res) { _this.equipment = res; _this.action = 'Update'; }, function (err) { });
        }
    }
    AddUpdateEquipmentComponent.prototype.submitEquipment = function () {
        console.log('submitting Equipment...');
        if (this.action == 'Update') {
            this.updateEquipment();
        }
        else {
            this.addEquipment();
        }
    };
    AddUpdateEquipmentComponent.prototype.addEquipment = function () {
        var _this = this;
        console.log('Posting Equipment...');
        this._equipmentService.postEquipment(this.equipment).subscribe(function (res) {
            _this.response = res;
            _this.showMessage = true;
            _this.equipment = {};
            _this._router.navigate(['/equipment/list', { data: "success" }]);
            console.log(_this.response);
        });
    };
    AddUpdateEquipmentComponent.prototype.updateEquipment = function () {
        var _this = this;
        console.log('Udpating Equipment...');
        this._equipmentService.putEquipment(this.equipment).subscribe(function (res) {
            _this.response = res;
            _this.showMessage = true;
            _this.equipment = {};
            _this._router.navigate(['/equipment/list', { data: "success" }]);
        });
    };
    AddUpdateEquipmentComponent.prototype.closeMessage = function () {
        this.showMessage = false;
    };
    return AddUpdateEquipmentComponent;
}());
AddUpdateEquipmentComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(1017)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof equipment_service_1.EquipmentService !== "undefined" && equipment_service_1.EquipmentService) === "function" && _c || Object])
], AddUpdateEquipmentComponent);
exports.AddUpdateEquipmentComponent = AddUpdateEquipmentComponent;
var _a, _b, _c;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/addupdate-equipment.component.js.map

/***/ }),

/***/ 971:
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
// import { cropTable } from './crop-seed'
var router_1 = __webpack_require__(63);
var equipment_service_1 = __webpack_require__(954);
var ListEquipmentComponent = (function () {
    function ListEquipmentComponent(activatedRouter, router, _equipmentService) {
        var _this = this;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this._equipmentService = _equipmentService;
        this.isLoading = true;
        this.isPageLoading = true;
        this.isNewAdded = false;
        this.rows = [];
        this.columns = [
            // { title: 'Image', name: 'image'},        
            { title: 'Farm Equipment', name: 'name' },
            { title: 'description', name: 'description' },
            // { title: 'District', name: 'district'},
            // { title: 'Type', name: 'type'},
            { title: 'Model Year.', name: 'modelyear' },
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
        // private data:Array<any> = this.TableData;
        this.data = [];
        this.length = this.data.length;
        this._equipmentService.getAllEquipments().subscribe(function (allEquipments) {
            _this.data = allEquipments;
            _this.onChangeTable(_this.config);
            _this.isLoading = false;
            console.log("allEquipments loaded");
        });
    }
    ListEquipmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.onChangeTable(this.config);
        this.sub = this.activatedRouter.params.subscribe(function (params) {
            _this.id = +params['data']; // (+) converts string 'id' to a number
            console.log(params);
            _this.isNewAdded = params.data;
        });
    };
    ListEquipmentComponent.prototype.closeMessage = function () {
        this.isNewAdded = false;
    };
    ListEquipmentComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.data; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        // create service here to fetch data from server;
        return data.slice(start, end);
    };
    ListEquipmentComponent.prototype.changeSort = function (data, config) {
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
    ListEquipmentComponent.prototype.changeFilter = function (data, config) {
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
    ListEquipmentComponent.prototype.onChangeTable = function (config, page) {
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
    ListEquipmentComponent.prototype.onCellClick = function (data) {
        console.log("testing...");
        this.router.navigate(['/equipment/list/' + data["row"]["id"]]);
    };
    return ListEquipmentComponent;
}());
ListEquipmentComponent = __decorate([
    core_1.Component({
        selector: 'app-equipment-management',
        template: __webpack_require__(1018),
        styles: [__webpack_require__(1000)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof equipment_service_1.EquipmentService !== "undefined" && equipment_service_1.EquipmentService) === "function" && _c || Object])
], ListEquipmentComponent);
exports.ListEquipmentComponent = ListEquipmentComponent;
var _a, _b, _c;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/list-equipment.component.js.map

/***/ }),

/***/ 972:
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
var equipment_service_1 = __webpack_require__(954);
var ViewEquipmentComponent = (function () {
    function ViewEquipmentComponent(_router, _activatedRouter, _equipmentService) {
        var _this = this;
        this._router = _router;
        this._activatedRouter = _activatedRouter;
        this._equipmentService = _equipmentService;
        this.equipmentID = '';
        this.equipment = {};
        this.copy_equipment = {};
        this.edit = false;
        this.equipmentID = _activatedRouter.snapshot.params['id'];
        if (this.equipmentID) {
            this._equipmentService.getEquipment(this.equipmentID).subscribe(function (res) { _this.equipment = res; console.log(res); }, function (err) { });
        }
    }
    ViewEquipmentComponent.prototype.updateEquipment = function (equipmentID) {
        var route = '/equipment/update/' + equipmentID;
        this._router.navigate([route]);
    };
    return ViewEquipmentComponent;
}());
ViewEquipmentComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(1019)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof equipment_service_1.EquipmentService !== "undefined" && equipment_service_1.EquipmentService) === "function" && _c || Object])
], ViewEquipmentComponent);
exports.ViewEquipmentComponent = ViewEquipmentComponent;
var _a, _b, _c;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/view-equipment.component.js.map

/***/ }),

/***/ 992:
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
var ng2_bootstrap_1 = __webpack_require__(596);
var http_1 = __webpack_require__(120);
var list_equipment_component_1 = __webpack_require__(971);
var view_equipment_component_1 = __webpack_require__(972);
var addupdate_equipment_component_1 = __webpack_require__(970);
var equipment_service_1 = __webpack_require__(954);
var routes = [
    {
        path: '',
        data: {
            title: 'equipment Management'
        },
        children: [
            {
                path: 'list',
                component: list_equipment_component_1.ListEquipmentComponent,
                data: {
                    title: 'List'
                }
            },
            {
                path: 'add',
                component: addupdate_equipment_component_1.AddUpdateEquipmentComponent,
                data: {
                    title: 'Add'
                }
            },
            {
                path: 'list/:id',
                component: view_equipment_component_1.ViewEquipmentComponent,
                data: {
                    title: 'View Equipment'
                }
            },
            {
                path: 'update/:id',
                component: addupdate_equipment_component_1.AddUpdateEquipmentComponent,
                data: {
                    title: 'Update Equipment'
                }
            }
        ]
    }
];
var EquipmentManagementRoutingModule = (function () {
    function EquipmentManagementRoutingModule() {
    }
    return EquipmentManagementRoutingModule;
}());
EquipmentManagementRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routes),
            forms_1.FormsModule,
            ng2_table_1.Ng2TableModule,
            ng2_bootstrap_1.PaginationModule,
            http_1.HttpModule
        ],
        providers: [
            equipment_service_1.EquipmentService
        ],
        exports: [
            router_1.RouterModule,
            forms_1.FormsModule,
            ng2_table_1.Ng2TableModule,
            ng2_bootstrap_1.PaginationModule
        ]
    })
], EquipmentManagementRoutingModule);
exports.EquipmentManagementRoutingModule = EquipmentManagementRoutingModule;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/equipment-management-routing.module.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map
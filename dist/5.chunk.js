webpackJsonp([5,16],{

/***/ 1024:
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
var list_crop_component_1 = __webpack_require__(978);
var add_crop_component_1 = __webpack_require__(977);
var view_crop_component_1 = __webpack_require__(979);
var http_1 = __webpack_require__(121);
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
            },
            {
                path: 'list/:id',
                component: view_crop_component_1.ViewCropComponent,
                data: {
                    title: 'List'
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
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/crop-management-routing.module.js.map

/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(123)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1049:
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"row\">\r\n        <div class=\"col-12 col-lg-12\">\r\n            <div class=\"content-header\">\r\n                <ol class=\"breadcrumb\">\r\n                    <li><a href=\"JavaScript:Void(0);\">Dashboard</a></li>\r\n                    <li><a href=\"JavaScript:Void(0);\">Crops</a></li>\r\n                    <li class=\"active\"><a href=\"JavaScript:Void(0);\">Add Crop</a></li>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">\r\n            <strong>Add Crop</strong>\r\n        </div>\r\n         <form role=\"form\" (ngSubmit)=\"addCrop()\" #dailyExpenseForm=\"ngForm\">\r\n        <div class=\"card-block\">\r\n           \r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-name\">Crop Name</label>\r\n                            <input autofocus type=\"text\" id=\"nf-name\" name=\"nf-name\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"crop.name\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-password\">Category</label>\r\n                            <select id=\"select\" name=\"select\" class=\"form-control\" size=\"1\" [(ngModel)]=\"crop.category\" required>\r\n                                <option >Please select</option>\r\n                                <option value=\"Category 1\">Category 1</option>\r\n                                <option value=\"Category 2\">Category 2</option>\r\n                                <option value=\"Category 3\">Category 3</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-variety\">Variety</label>\r\n                            <select id=\"select1\" name=\"select1\" class=\"form-control\" [(ngModel)]=\"crop.variety\" size=\"1\">\r\n                                <option>Please select</option>\r\n                                <option value=\"Variety 1\">Variety 1</option>\r\n                                <option value=\"Variety 2\">Variety 2</option>\r\n                                <option value=\"Variety 3\">Variety 3</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-price\">Offer Price <i class=\"fa fa-rupee\"></i></label>\r\n                            <input type=\"number\" id=\"nf-price\" name=\"nf-price\" class=\"form-control\" [(ngModel)]=\"crop.price\" placeholder=\"\" required=\"\" min=\"1\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-grade\">Grade</label>\r\n                            \r\n\t\t\t\t\t\t<form class=\"grade\">\r\n\t\t\t\t\t\t\t<div class=\"btn-group\" data-toggle=\"buttons\">\r\n\t\t\t\t\t\t\t<label class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t<input name=\"grade\" value=\"A+\" type=\"radio\" [(ngModel)]=\"crop.grade\" >A+\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t<input name=\"grade\" value=\"A\" type=\"radio\" [(ngModel)]=\"crop.grade\">A\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t<input name=\"grade\" value=\"B\" class=\"active\" type=\"radio\" [(ngModel)]=\"crop.grade\">B\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t<input name=\"grade\" value=\"C\" type=\"radio\" [(ngModel)]=\"crop.grade\">C\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n                       \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-color\">Color</label>\r\n                            <input type=\"text\" id=\"nf-color\" name=\"nf-color\" class=\"form-control\" [(ngModel)]=\"crop.color\" placeholder=\"\" required>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-size\">Size/Weight</label>\r\n                            <input type=\"text\" id=\"nf-size\" name=\"nf-size\" class=\"form-control\" [(ngModel)]=\"crop.size\" placeholder=\"\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-other_speciality\">Other Speciality</label>\r\n                            <input type=\"text\" id=\"nf-other_speciality\" name=\"nf-other_speciality\" class=\"form-control\" [(ngModel)]=\"crop.other_speciality\" placeholder=\"\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-availibility\">Availibility Peroid</label>\r\n                            <input type=\"text\" id=\"nf-availibility\" name=\"nf-availibility\" class=\"form-control\" [(ngModel)]=\"crop.availibility\" placeholder=\"\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-packaging\">Packaging</label>\r\n                            <select id=\"select2\" name=\"select2\" class=\"form-control\" size=\"1\" [(ngModel)]=\"crop.packaging\" required>\r\n                                <option >Please select</option>\r\n                                <option value=\"Pack 1\">Pack 1</option>\r\n                                <option value=\"Pack 2\">Pack 2</option>\r\n                                <option value=\"Pack 3\">Pack 3</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-supply_ablity\">Supply Ability</label>\r\n                            <input type=\"text\" id=\"nf-supply_ablity\" name=\"nf-supply_ablity\" class=\"form-control\" [(ngModel)]=\"crop.supply_ablity\" placeholder=\"\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-destination_shipping\">Destination for Shipping*</label>\r\n                            <select id=\"select3\" name=\"select3\" class=\"form-control\" size=\"1\" [(ngModel)]=\"crop.destination_shipping\" required>\r\n                                <option >Please select</option>\r\n                                <option value=\"Shipping 1\">Shipping 1</option>\r\n                                <option value=\"Shipping 2\">Shipping 2</option>\r\n                                <option value=\"Shipping 3\">Shipping 3</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-pack_size\">Pack Size</label>\r\n                            <input type=\"text\" id=\"nf-pack_size\" name=\"nf-pack_size\" class=\"form-control\" [(ngModel)]=\"crop.pack_size\" placeholder=\"\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-qty\">Quantity Per Pack</label>\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n                              <input type=\"text\" id=\"nf-quantity_per_pack\" name=\"quantity_per_pack\" class=\"form-control\" aria-label=\"Text input with dropdown button\" [(ngModel)]=\"crop.quantity_per_pack\" placeholder=\"\" required>\r\n                              <div class=\"input-group-btn\">\r\n                                <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                  Kg\r\n                                </button>\r\n                                <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                  <a class=\"dropdown-item\" href=\"JavaScript:void(0)\">Miles</a>\r\n                                 \r\n                                </div>\r\n                              </div>\r\n                            </div>                       \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-label\">Label/Making on Pack</label>\r\n                            <input type=\"text\" id=\"nf-label\" name=\"nf-label\" class=\"form-control\" [(ngModel)]=\"crop.label\" placeholder=\"\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-paymentTerms\">Payment Terms</label>\r\n                           <form class=\"grade\">\r\n\t\t\t\t\t\t\t<div class=\"btn-group\" data-toggle=\"buttons\">\r\n\t\t\t\t\t\t\t<label class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t<input name=\"payment_mode\" value=\"COD\" type=\"radio\" [(ngModel)]=\"crop.payment_method\">COD\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t<input name=\"payment_mode\" value=\"Cheque\" type=\"radio\" [(ngModel)]=\"crop.payment_method\">Cheque\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t<input name=\"payment_mode\" value=\"Net Banking\" class=\"active\" type=\"radio\" [(ngModel)]=\"crop.payment_method\">Net Banking\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-moq\">MOQ</label>\r\n                            <input type=\"text\" id=\"nf-moq\" name=\"nf-moq\" class=\"form-control\" [(ngModel)]=\"crop.moq\" placeholder=\"\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-average_lead_time\">Average Lead Time</label>\r\n                            \r\n                            <div class=\"input-group\">\r\n                        <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">\r\n                        <span class=\"input-group-addon width\">Days</span>\r\n                        </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-additional_info\">Additional Information</label>\r\n                            <textarea type=\"text\" id=\"nf-additional_info\" name=\"nf-additional_info\" class=\"form-control\" [(ngModel)]=\"crop.additional_info\" placeholder=\"\" rows=\"4\" required ></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-terms\">Terms & Conditions</label>\r\n                            <textarea type=\"text\" id=\"nf-terms\" name=\"nf-terms\" class=\"form-control\" [(ngModel)]=\"crop.terms\" placeholder=\"\" rows=\"4\" [disabled]=\"true\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-image\">Image</label>\r\n\r\n\r\n                             <input type=\"file\" name=\"file-7[]\" id=\"file-7\" class=\"inputfile inputfile-6\" data-multiple-caption=\"{count} files selected\" multiple />\r\n                    <label for=\"file-7\"><span></span> <strong><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"17\" viewBox=\"0 0 20 17\"><path d=\"M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z\"/></svg> Upload image</strong></label>\r\n            \r\n\r\n\r\n                         <!--   <input type=\"file\" name=\"\" class=\"form-control\"> -->\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"card-footer\">\r\n                    <button type=\"reset\" class=\"btn btn-secondary whiteclr\" [routerLink]=\"['/crop/list']\"> Cancel</button>\r\n                    <button type=\"submit\" class=\"pull-right btn btn-primary orangeclr\">Save</button>\r\n                </div>\r\n          </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 1050:
/***/ (function(module, exports) {

module.exports = "<div> \n  <div class=\"row\">\n    <div class=\"col-12 col-lg-12\">\n        <div class=\"content-header\">\n            <ol class=\"breadcrumb\">\n                <li><a>Dashboard</a></li>\n                <li><a>Crops</a></li>\n                <li class=\"active\"><a>List</a></li>\n            </ol>\n        </div>\n    </div>\n</div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">\n        <div class=\"row\">\n        <div class=\"col-3\">\n      <!--  <input type=\"text\" name=\"\" placeholder=\"Search...\" [(ngModel)]=\"search\" (ngModelChange)=\"doSomething($event)\">-->\n        \n        <form action=\"#\" class=\"pull-left ng-untouched ng-pristine ng-valid\" method=\"get\">\n        <div class=\"input-group\">\n          <input class=\"form-control\" name=\"q\" placeholder=\"Search\" type=\"text\">\n          <span class=\"input-group-btn\">\n          <button class=\"btn btn-flat\" id=\"search-btn\" name=\"search\" type=\"submit\"><i class=\"fa fa-search\"></i> </button>\n          </span> </div>\n      </form>\n      \n            </div>\n       <div class=\"col-9 text-right\">\n        <button type=\"button\" class=\"btn btn-success btnadd\" [routerLink]=\"['/crop/add']\">Add Crop</button>\n        <div class=\"icns\">\n                     <a><img src=\"assets/img/pdf.png\" alt=\"pdf\"></a>\n                     <a><img src=\"assets/img/xls.png\" alt=\"pdf\"></a>\n              </div>\n            </div>\n            </div>\n        </div>\n        <ng-table [config]=\"config\"\n                  (tableChanged)=\"onChangeTable(config)\"\n                  (cellClicked)=\"onCellClick($event)\"\n                  [rows]=\"rows\" [columns]=\"columns\">\n        </ng-table>\n\n        <div *ngIf=\"isLoading\" class=\"is-loading\"><i class=\"page-loader\"></i></div>\n        <div *ngIf=\"err_message\" class=\"text-center text-danger\">{{err_message}}</div>\n        \n        <div class=\"row\"> \n        <div class=\"col-6\">       \n        <pre *ngIf=\"config.paging\" class=\"pagenumber\">Page: {{page}} / {{numPages}}</pre>\n        </div>\n\n        <div class=\"col-6\">        \n        <pagination *ngIf=\"config.paging\"\n                    class=\"pagination-sm\"\n                    [(ngModel)]=\"page\"\n                    [totalItems]=\"length\"\n                    [itemsPerPage]=\"itemsPerPage\"\n                    [maxSize]=\"maxSize\"\n                    [boundaryLinks]=\"true\"\n                    [rotate]=\"false\"\n                    (pageChanged)=\"onChangeTable(config, $event)\"\n                    (numPages)=\"numPages = $event\">\n        </pagination>\n        </div>\n        </div>\n\n    </div>\n</div>\n\n<!-- <div> \n    <div class=\"card\">\n        <div class=\"card-header\">\n        <input type=\"text\" name=\"\" placeholder=\"Search...\" [(ngModel)]=\"search\" (ngModelChange)=\"doSomething($event)\">\n        <button type=\"button\" class=\"btn btn-success pull-right\" [routerLink]=\"['/crop/add']\">Add Crop</button>\n        </div>\n        <ng-table [config]=\"config\"\n                  (tableChanged)=\"onChangeTable(config)\"\n                  (cellClicked)=\"onCellClick($event)\"\n                  [rows]=\"rows\" [columns]=\"columns\">\n        </ng-table>\n        <pagination *ngIf=\"config.paging\"\n                    class=\"pagination-sm\"\n                    [(ngModel)]=\"page\"\n                    [totalItems]=\"length\"\n                    [itemsPerPage]=\"itemsPerPage\"\n                    [maxSize]=\"maxSize\"\n                    [boundaryLinks]=\"true\"\n                    [rotate]=\"false\"\n                    (pageChanged)=\"onChangeTable(config, $event)\"\n                    (numPages)=\"numPages = $event\">\n        </pagination>\n        <pre *ngIf=\"config.paging\" class=\"card card-block card-header\">Page: {{page}} / {{numPages}}</pre>\n    </div>\n</div> -->"

/***/ }),

/***/ 1051:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-lg-12\">\r\n            <div class=\"content-header\">\r\n                <ol class=\"breadcrumb\">\r\n                    <li><a href=\"#\">Dashboard</a></li>\r\n                    <li><a href=\"#\">Crops</a></li>\r\n                    <li class=\"active\"><a href=\"#\">{{!edit ? 'View' : 'Edit'}}</a></li>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n    </div>\r\n<form role=\"form\" (ngSubmit)=\"save()\" #dailyExpenseForm=\"ngForm\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">\r\n            <strong>{{!edit ? 'View' : 'Edit'}} Crop</strong>\r\n\t\t\t<button class=\"btn btn-secondary pull-right\" *ngIf=\"!edit\" (click)=\"editCrop()\"><i class=\"fa fa-pencil\"></i> Edit</button>\r\n            <button class=\"btn btn-secondary whiteclr pull-right\" *ngIf=\"edit\" (click)=\"cancel()\">Cancel</button>\r\n            <button type=\"submit\" class=\"btn btn-success orangeclr pull-right\" *ngIf=\"edit\">Save</button>\r\n        </div>\r\n        <div class=\"card-block viewmode\" *ngIf=\"!edit\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-name\">Crop Name*</label>\r\n\t\t\t\t\t\t\t<p>{{crop.name}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-password\">Category*</label>\r\n\t\t\t\t\t\t\t<p>{{crop.category}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-variety\">Variety</label>\r\n\t\t\t\t\t\t\t<p>{{crop.variety}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-price\">Offer Price <i class=\"fa fa-rupee\"></i> *</label>\r\n\t\t\t\t\t\t\t<p><i class=\"fa fa-rupee\"></i>{{crop.price}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-grade\">Grade</label>\r\n\t\t\t\t\t\t\t<p>{{crop.grade}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-color\">Color*</label>\r\n\t\t\t\t\t\t\t<p>{{crop.color}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-size\">Size/Weight*</label>\r\n\t\t\t\t\t\t\t<p>{{crop.size}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-otherSpeciality\">Other Speciality</label>\r\n\t\t\t\t\t\t\t<p>{{crop.other_speciality}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-availibility\">Availibility Period*</label>\r\n\t\t\t\t\t\t\t<p>{{crop.availibility}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-packaging\">Packaging*</label>\r\n\t\t\t\t\t\t\t<p>{{crop.packaging}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-supplyAblity\">Supply Ability*</label>\r\n\t\t\t\t\t\t\t<p>{{crop.supply_ablity}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-destinationForShipping\">Destination for Shipping*</label>\r\n\t\t\t\t\t\t\t<p>{{crop.destination_shipping}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-packSize\">Pack Size*</label>\r\n\t\t\t\t\t\t\t<p>{{crop.pack_size}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-qty\">Quantity Per Pack*</label>\r\n\t\t\t\t\t\t\t<p>{{crop.quantity_per_pack}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-label\">Label/Making on Pack*</label>\r\n\t\t\t\t\t\t\t<p>{{crop.label}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-paymentTerms\">Payment Terms*</label>\r\n\t\t\t\t\t\t\t<p>{{crop.payment_method}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-moq\">MOQ*</label>\r\n\t\t\t\t\t\t\t<p>{{crop.moq}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-averageLeadTime\">Average Lead Time*</label>\r\n\t\t\t\t\t\t\t<p>{{crop.average_lead_time}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-additionalInformation\">Additional Information*</label>\r\n\t\t\t\t\t\t\t<p>{{crop.additional_info}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-termsConditions\">Terms & Conditions</label>\r\n\t\t\t\t\t\t\t<p>{{crop.terms}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-image\">Image</label>\r\n\t\t\t\t\t\t\t<p><i class=\"fa fa-file-image-o\"></i> {{crop.image}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n        <div class=\"card-block\" *ngIf=\"edit\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-name\">Crop Name</label>\r\n                            <input type=\"text\" id=\"nf-name\" name=\"nf-name\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"crop.name\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-password\">Category</label>\r\n                            <p>{{crop.category}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-variety\">Variety</label>\r\n                            <select id=\"select1\" name=\"select1\" class=\"form-control\" [(ngModel)]=\"crop.variety\" size=\"1\">\r\n                                <option value=\"0\">Please select</option>\r\n                                <option value=\"1\">Variety 1</option>\r\n                                <option value=\"2\">Variety 2</option>\r\n                                <option value=\"3\">Variety 3</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-price\">Offer Price <i class=\"fa fa-rupee\"></i></label>\r\n                            <input type=\"number\" id=\"nf-price\" name=\"nf-price\" class=\"form-control\" [(ngModel)]=\"crop.price\" placeholder=\"\" min='1'>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-grade\">Grade</label>\r\n                            \r\n                        <form class=\"grade\">\r\n                            <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                            <label class=\"btn btn-default\">\r\n                            <input name=\"grade\" value=\"A+\" type=\"radio\" [(ngModel)]=\"crop.grade\" >A+\r\n                            </label>\r\n                            <label class=\"btn btn-default\">\r\n                            <input name=\"grade\" value=\"A\" type=\"radio\" [(ngModel)]=\"crop.grade\">A\r\n                            </label>\r\n                            <label class=\"btn btn-default\">\r\n                            <input name=\"grade\" value=\"B\" class=\"active\" type=\"radio\" [(ngModel)]=\"crop.grade\">B\r\n                            </label>\r\n                            <label class=\"btn btn-default\">\r\n                            <input name=\"grade\" value=\"C\" type=\"radio\" [(ngModel)]=\"crop.grade\">C\r\n                            </label>\r\n                            </div>\r\n                        </form>\r\n                       \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-color\">Color</label>\r\n                            <input type=\"text\" id=\"nf-color\" name=\"nf-color\" class=\"form-control\" [(ngModel)]=\"crop.color\" placeholder=\"\" required>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-size\">Size/Weight</label>\r\n                            <input type=\"text\" id=\"nf-size\" name=\"nf-size\" class=\"form-control\" [(ngModel)]=\"crop.size\" placeholder=\"\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-other_speciality\">Other Speciality</label>\r\n                            <input type=\"text\" id=\"nf-other_speciality\" name=\"nf-other_speciality\" class=\"form-control\" [(ngModel)]=\"crop.other_speciality\" placeholder=\"\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-availibility\">Availibility Period</label>\r\n                            <input type=\"text\" id=\"nf-availibility\" name=\"nf-availibility\" class=\"form-control\" [(ngModel)]=\"crop.availibility\" placeholder=\"\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-packaging\">Packaging</label>\r\n                            <select id=\"select2\" name=\"select2\" class=\"form-control\" size=\"1\" [(ngModel)]=\"crop.packaging\" required>\r\n                                <option >Please select</option>\r\n                                <option value=\"Pack 1\">Pack 1</option>\r\n                                <option value=\"Pack 2\">Pack 2</option>\r\n                                <option value=\"Pack 3\">Pack 3</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-supply_ablity\">Supply Ability</label>\r\n                            <input type=\"text\" id=\"nf-supply_ablity\" name=\"nf-supply_ablity\" class=\"form-control\" [(ngModel)]=\"crop.supply_ablity\" placeholder=\"\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-destination_shipping\">Destination for Shipping*</label>\r\n                            <select id=\"select3\" name=\"select3\" class=\"form-control\" size=\"1\" [(ngModel)]=\"crop.destination_shipping\" required>\r\n                                <option >Please select</option>\r\n                                <option value=\"Shipping 1\">Shipping 1</option>\r\n                                <option value=\"Shipping 2\">Shipping 2</option>\r\n                                <option value=\"Shipping 3\">Shipping 3</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-pack_size\">Pack Size</label>\r\n                            <input type=\"text\" id=\"nf-pack_size\" name=\"nf-pack_size\" class=\"form-control\" [(ngModel)]=\"crop.pack_size\" placeholder=\"\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-qty\">Quantity Per Pack</label>               \r\n                            <div class=\"input-group\">\r\n                              <input type=\"text\" id=\"nf-quantity_per_pack\" name=\"quantity_per_pack\" class=\"form-control\" aria-label=\"Text input with dropdown button\" [(ngModel)]=\"crop.quantity_per_pack\" placeholder=\"\" required>\r\n                              <div class=\"input-group-btn\">\r\n                                <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                  Kg\r\n                                </button>\r\n                                <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                  <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                                  <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                                  <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                                  <div role=\"separator\" class=\"dropdown-divider\"></div>\r\n                                  <a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                                </div>\r\n                              </div>\r\n                            </div>                       \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-label\">Label/Making on Pack</label>\r\n                            <input type=\"text\" id=\"nf-label\" name=\"nf-label\" class=\"form-control\" [(ngModel)]=\"crop.label\" placeholder=\"\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-paymentTerms\">Payment Terms</label>\r\n                           <form class=\"grade\">\r\n                            <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                            <label class=\"btn btn-default\">\r\n                            <input name=\"payment_mode\" value=\"COD\" type=\"radio\" [(ngModel)]=\"crop.payment_method\">COD\r\n                            </label>\r\n                            <label class=\"btn btn-default\">\r\n                            <input name=\"payment_mode\" value=\"Cheque\" type=\"radio\" [(ngModel)]=\"crop.payment_method\">Cheque\r\n                            </label>\r\n                            <label class=\"btn btn-default\">\r\n                            <input name=\"payment_mode\" value=\"Net Banking\" class=\"active\" type=\"radio\" [(ngModel)]=\"crop.payment_method\">Net Banking\r\n                            </label>\r\n                            \r\n                            </div>\r\n                        </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-moq\">MOQ</label>\r\n                            <input type=\"text\" id=\"nf-moq\" name=\"nf-moq\" class=\"form-control\" [(ngModel)]=\"crop.moq\" placeholder=\"\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-average_lead_time\">Average Lead Time</label>\r\n                            <input type=\"text\" id=\"nf-average_lead_time\" name=\"nf-average_lead_time\" class=\"form-control\" [(ngModel)]=\"crop.average_lead_time\" placeholder=\"\" required>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group has-required\">\r\n                            <label for=\"nf-additional_info\">Additional Information</label>\r\n                            <textarea type=\"text\" id=\"nf-additional_info\" name=\"nf-additional_info\" class=\"form-control\" [(ngModel)]=\"crop.additional_info\" placeholder=\"\" rows=\"4\" required ></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nf-terms\">Terms & Conditions</label>\r\n                            <textarea type=\"text\" id=\"nf-terms\" name=\"nf-terms\" class=\"form-control\" [(ngModel)]=\"crop.terms\" placeholder=\"\" rows=\"4\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n    </div>\r\n</form>    \r\n</div>\r\n"

/***/ }),

/***/ 937:
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
var list_crop_component_1 = __webpack_require__(978);
var add_crop_component_1 = __webpack_require__(977);
var view_crop_component_1 = __webpack_require__(979);
var crop_management_routing_module_1 = __webpack_require__(1024);
var crop_service_1 = __webpack_require__(955);
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
        providers: [
            crop_service_1.CropService
        ],
        declarations: [
            list_crop_component_1.ListCropComponent,
            add_crop_component_1.AddCropComponent,
            view_crop_component_1.ViewCropComponent
        ]
    })
], CropManagementModule);
exports.CropManagementModule = CropManagementModule;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/crop-management.module.js.map

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

/***/ 955:
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
var CropService = (function () {
    function CropService(http) {
        this.http = http;
        // private host = "http://localhost:1337";
        this.host = "https://efarmapi.herokuapp.com";
        this.access_token = {};
        this.token = '';
    }
    CropService.prototype.croplisting = function () {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        var headers = new http_1.Headers();
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Authorization', this.token);
        //let body = urlSearchParams.toString()
        return this.http.get(this.host + '/crops/listing', { headers: headers }).map(function (res) { return res.json(); });
    };
    CropService.prototype.addCrop = function (crop) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        var headers = new http_1.Headers();
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Authorization', this.token);
        return this.http.post(this.host + '/crops/add', crop, { headers: headers }).map(function (res) { return res.json(); });
    };
    CropService.prototype.getCrop = function (crop) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        var headers = new http_1.Headers();
        var body = {};
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Authorization', this.token);
        return this.http.post(this.host + '/crops/' + crop, body, { headers: headers }).map(function (res) { return res.json(); });
    };
    CropService.prototype.updateCrop = function (crop) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        var headers = new http_1.Headers();
        var body = {};
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Authorization', this.token);
        return this.http.post(this.host + '/crops/' + crop.id, crop, { headers: headers }).map(function (res) { return res.json(); });
    };
    return CropService;
}());
CropService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], CropService);
exports.CropService = CropService;
var _a;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/crop.service.js.map

/***/ }),

/***/ 977:
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
var crop_service_1 = __webpack_require__(955);
var router_1 = __webpack_require__(63);
var AddCropComponent = (function () {
    function AddCropComponent(router, _cropService) {
        this.router = router;
        this._cropService = _cropService;
        this.crop = {
            terms: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
        };
    }
    AddCropComponent.prototype.addCrop = function () {
        var _this = this;
        this._cropService.addCrop(this.crop)
            .subscribe(function (res) {
            _this.router.navigate(['/crop/list']);
        }, function (err) {
        });
    };
    return AddCropComponent;
}());
AddCropComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(1049)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof crop_service_1.CropService !== "undefined" && crop_service_1.CropService) === "function" && _b || Object])
], AddCropComponent);
exports.AddCropComponent = AddCropComponent;
var _a, _b;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/add-crop.component.js.map

/***/ }),

/***/ 978:
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
var crop_service_1 = __webpack_require__(955);
var router_1 = __webpack_require__(63);
var ListCropComponent = (function () {
    function ListCropComponent(router, _cropService) {
        var _this = this;
        this.router = router;
        this._cropService = _cropService;
        this.isLoading = true;
        this.err_message = '';
        this.rows = [];
        this.columns = [
            { title: 'Crop', name: 'name' },
            { title: 'Offer Price', name: 'price' },
            { title: 'Qty', name: 'quantity_per_pack' },
            { title: 'Category', name: 'category' },
            { title: 'Grade', name: 'grade' },
            { title: 'Color', name: 'color' }
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
        this.data = [];
        this.length = this.data.length;
        this._cropService.croplisting()
            .subscribe(function (res) {
            _this.data = res["Data"];
            _this.isLoading = false;
            _this.onChangeTable(_this.config);
        }, function (err) {
            _this.isLoading = false;
            _this.err_message = "No record to display";
        });
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
        this.err_message = '';
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
        this.router.navigate(['/crop/list/' + data["row"]["id"]]);
    };
    return ListCropComponent;
}());
ListCropComponent = __decorate([
    core_1.Component({
        selector: 'app-crop-management',
        template: __webpack_require__(1050),
        styles: [__webpack_require__(1035)]
        // providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof crop_service_1.CropService !== "undefined" && crop_service_1.CropService) === "function" && _b || Object])
], ListCropComponent);
exports.ListCropComponent = ListCropComponent;
var _a, _b;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/list-crop.component.js.map

/***/ }),

/***/ 979:
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
var crop_service_1 = __webpack_require__(955);
var ViewCropComponent = (function () {
    function ViewCropComponent(route, _cropService) {
        var _this = this;
        this._cropService = _cropService;
        this.cropID = '';
        this.crop = {};
        this.copy_crop = {};
        this.edit = false;
        this.cropID = route.snapshot.params['id'];
        this._cropService.getCrop(this.cropID)
            .subscribe(function (res) {
            _this.crop = res["Data"][0];
        }, function (err) {
        });
    }
    ViewCropComponent.prototype.editCrop = function () {
        this.edit = !this.edit;
        this.copy_crop = JSON.parse(JSON.stringify(this.crop));
    };
    ViewCropComponent.prototype.cancel = function () {
        this.edit = !this.edit;
        this.crop = JSON.parse(JSON.stringify(this.copy_crop));
    };
    ViewCropComponent.prototype.save = function () {
        var _this = this;
        this._cropService.updateCrop(this.crop)
            .subscribe(function (res) {
            _this.edit = !_this.edit;
            _this.copy_crop = JSON.parse(JSON.stringify(_this.crop));
        }, function (err) {
        });
    };
    return ViewCropComponent;
}());
ViewCropComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(1051)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof crop_service_1.CropService !== "undefined" && crop_service_1.CropService) === "function" && _b || Object])
], ViewCropComponent);
exports.ViewCropComponent = ViewCropComponent;
var _a, _b;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/view-crop.component.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map
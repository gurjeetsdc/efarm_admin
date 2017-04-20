webpackJsonp([1,16],{

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(122)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1031:
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row\">\n        <div class=\"col-12 col-lg-12\">\n            <div class=\"content-header\">\n                <ol class=\"breadcrumb\">\n                    <li><a href=\"#\">Dashboard</a></li>\n                    <li><a href=\"#\">User Management</a></li>\n                    <li class=\"active\"><a href=\"#\">Add new</a></li>\n                </ol>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <strong>Add User</strong>\n        </div>\n        <div class=\"card-block\">\n            <form role=\"form\" (ngSubmit)=\"addUser()\" #dailyExpenseForm=\"ngForm\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group has-required\">\n                            <label for=\"nf-name\">First Name</label>\n                            <input type=\"text\" id=\"nf-name\" name=\"nf-name\" class=\"form-control\" placeholder=\"Enter Name\" [(ngModel)]=\"user.first_name\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group has-required\">\n                            <label for=\"nf-password\">Last Name</label>\n                            <input type=\"text\" id=\"nf-name\" name=\"nf-name\" class=\"form-control\" placeholder=\"Enter Name\" [(ngModel)]=\"user.last_name\" required>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group has-required\">\n                            <label for=\"nf-password\">Phone</label>\n                            <input type=\"number\" id=\"nf-phone\" name=\"nf-phone\" class=\"form-control\" placeholder=\"Enter Phone\" [(ngModel)]=\"user.phone\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group has-required\">\n                            <label for=\"nf-email\">Email</label>\n                            <input type=\"text\" id=\"nf-email\" name=\"nf-email\" class=\"form-control\" [(ngModel)]=\"user.email\" placeholder=\"Enter Color\" required>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group has-required\">\n                            <label for=\"nf-city\">City/Village</label>\n                            <input type=\"text\" id=\"nf-city\" name=\"nf-city\" class=\"form-control\" [(ngModel)]=\"user.city\" placeholder=\"Enter Grade\" required=\"\">\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group has-required\">\n                            <label for=\"nf-pincode\">Pincode</label>\n                            <input type=\"number\" id=\"nf-pincode\" name=\"nf-pincode\" class=\"form-control\" [(ngModel)]=\"user.pincode\" placeholder=\"Enter Pincode\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group has-required\">\n                            <label for=\"nf-state\">State</label>\n                            <input type=\"text\" id=\"nf-state\" name=\"nf-state\" class=\"form-control\" [(ngModel)]=\"user.state\" placeholder=\"Enter Stage\" required=\"\">\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group has-required\">\n                            <label for=\"nf-district\">District</label>\n                            <input type=\"text\" id=\"nf-district\" name=\"nf-district\" class=\"form-control\" [(ngModel)]=\"user.district\" placeholder=\"Enter Pincode\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-image\">Image</label>\n                            <input type=\"file\" name=\"\" class=\"form-control\">\n                        </div>\n                    </div>\n                </div>\n                <button type=\"reset\" class=\"btn btn-secondary\"> Cancel</button>\n                <button type=\"submit\" class=\"pull-right btn btn-primary orangeclr\">Save</button>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 1032:
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row\">\n        <div class=\"col-12 col-lg-12\">\n            <div class=\"content-header\">\n                <ol class=\"breadcrumb\">\n                    <li><a href=\"#\">Dashboard</a></li>\n                    <li><a href=\"#\">User Management</a></li>\n                    <li class=\"active\"><a href=\"#\">List</a></li>\n                </ol>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <input type=\"text\" name=\"\" placeholder=\"Search...\" [(ngModel)]=\"search\">\n            <button type=\"button\" class=\"btn btn-success pull-right\" [routerLink]=\"['/user/add']\">Add User</button>\n        </div>\n        <ng-table [config]=\"config\" (tableChanged)=\"onChangeTable(config)\" (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\" [columns]=\"columns\">\n        </ng-table>\n        <pagination *ngIf=\"config.paging\" class=\"pagination-sm\" [(ngModel)]=\"page\" [totalItems]=\"length\" [itemsPerPage]=\"itemsPerPage\" [maxSize]=\"maxSize\" [boundaryLinks]=\"true\" [rotate]=\"false\" (pageChanged)=\"onChangeTable(config, $event)\" (numPages)=\"numPages = $event\">\n        </pagination>\n        <pre *ngIf=\"config.paging\" class=\"card card-block card-header\">Page: {{page}} / {{numPages}}</pre>\n    </div>\n</div>\n"

/***/ }),

/***/ 1033:
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row\">\n        <div class=\"col-12 col-lg-12\">\n            <div class=\"content-header\">\n                <ol class=\"breadcrumb\">\n                    <li><a href=\"#\">Dashboard</a></li>\n                    <li><a href=\"#\">User Management</a></li>\n                    <!-- <li class=\"active\"><a href=\"#\">View</a></li> -->\n                </ol>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"!edit\">\n        <div class=\"col-9\">\n            <div class=\"card\">\n                <div class=\"card-block userdetail\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label>Name:</label>\n                                <span>{{user.first_name + ' ' + user.last_name}}</span>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Email:</label>\n                                <span>{{user.email}}</span>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Address:</label>\n                                <span>{{user.city}} {{user.district}} {{user.state}} {{user.pincode}}</span>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Phone</label>\n                                <span>{{user.phone}}</span>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Registered on</label>\n                                <span>{{user.createdAt | date}}</span>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Modified on</label>\n                                <span>{{user.updatedAt | date}}</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header p-b10\">\n                    <div class=\"row\">\n                        <div class=\"col-9\">\n                            <h3>Orders (Items Purchased)</h3>\n                        </div>\n                        <div class=\"col-3\">\n                            <form action=\"#\" class=\"pull-left ng-untouched ng-pristine ng-valid\" method=\"get\">\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" name=\"q\" placeholder=\"Search...\" type=\"text\">\n                                    <span class=\"input-group-btn\">\n        <button class=\"btn btn-flat\" id=\"search-btn\" name=\"search\" type=\"submit\"><i class=\"fa fa-search\"></i> </button>\n        </span> </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <!-- table-->\n                <table class=\"table dataTable table-striped table-bordered\" role=\"grid\" style=\"width: 100%;\" ng-reflect-klass=\"table dataTable\" ng-reflect-ng-class=\"table-striped table-bordered\">\n                    <thead>\n                        <tr role=\"row\">\n                            <th ng-reflect-ng-table-sorting=\"[object Object]\" ng-reflect-column=\"[object Object]\">\n                                Crop\n                            </th>\n                            <th ng-reflect-ng-table-sorting=\"[object Object]\" ng-reflect-column=\"[object Object]\">\n                                Offer Price\n                            </th>\n                            <th ng-reflect-ng-class=\"office-header text-success\" class=\"office-header text-success\" ng-reflect-ng-table-sorting=\"[object Object]\" ng-reflect-column=\"[object Object]\">\n                                Qty\n                                <i class=\"pull-right fa fa-chevron-up\" ng-reflect-klass=\"pull-right fa\" ng-reflect-ng-class=\"[object Object]\"></i>\n                            </th>\n                            <th ng-reflect-ng-table-sorting=\"[object Object]\" ng-reflect-column=\"[object Object]\">\n                                Highest Bid\n                            </th>\n                            <th ng-reflect-ng-table-sorting=\"[object Object]\" ng-reflect-column=\"[object Object]\">\n                                # of Bid\n                            </th>\n                            <th ng-reflect-ng-class=\"text-warning\" class=\"text-warning\" ng-reflect-ng-table-sorting=\"[object Object]\" ng-reflect-column=\"[object Object]\">\n                                Farmer\n                            </th>\n                            <th ng-reflect-ng-table-sorting=\"[object Object]\" ng-reflect-column=\"[object Object]\">\n                                Ends in\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td ng-reflect-inner-h-t-m-l=\"Mangoes\">Mangoes</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"2\">2</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"5\">5</td>\n                            <td ng-reflect-inner-h-t-m-l=\"Manpreet Singh\">Manpreet Singh</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1d 2h 20m\">1d 2h 20m</td>\n                        </tr>\n                        <tr>\n                            <td ng-reflect-inner-h-t-m-l=\"Carrot\">Carrot</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"2\">2</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"5\">5</td>\n                            <td ng-reflect-inner-h-t-m-l=\"Hardeep Singh\">Hardeep Singh</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1d 2h 20m\">1d 2h 20m</td>\n                        </tr>\n                        <tr>\n                            <td ng-reflect-inner-h-t-m-l=\"Peas\">Peas</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"2\">2</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"5\">5</td>\n                            <td ng-reflect-inner-h-t-m-l=\"Summit\">Summit</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1d 2h 20m\">1d 2h 20m</td>\n                        </tr>\n                        <tr>\n                            <td ng-reflect-inner-h-t-m-l=\"Potato\">Potato</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"2\">2</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"5\">5</td>\n                            <td ng-reflect-inner-h-t-m-l=\"Manpreet Singh\">Manpreet Singh</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1d 2h 20m\">1d 2h 20m</td>\n                        </tr>\n                        <tr>\n                            <td ng-reflect-inner-h-t-m-l=\"Potato\">Potato</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"2\">2</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"5\">5</td>\n                            <td ng-reflect-inner-h-t-m-l=\"Gudev\">Gudev</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1d 2h 20m\">1d 2h 20m</td>\n                        </tr>\n                        <tr>\n                            <td ng-reflect-inner-h-t-m-l=\"Potato\">Potato</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"2\">2</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"5\">5</td>\n                            <td ng-reflect-inner-h-t-m-l=\"Deep Singh\">Deep Singh</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1d 2h 20m\">1d 2h 20m</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <!-- table-->\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header p-b10\">\n                    <div class=\"row\">\n                        <div class=\"col-9\">\n                            <h3>Items for Sell</h3>\n                        </div>\n                        <div class=\"col-3\">\n                            <form action=\"#\" class=\"pull-left ng-untouched ng-pristine ng-valid\" method=\"get\">\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" name=\"q\" placeholder=\"Search...\" type=\"text\">\n                                    <span class=\"input-group-btn\">\n        <button class=\"btn btn-flat\" id=\"search-btn\" name=\"search\" type=\"submit\"><i class=\"fa fa-search\"></i> </button>\n        </span> </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <!-- table-->\n                <table class=\"table dataTable table-striped table-bordered\" role=\"grid\" style=\"width: 100%;\" ng-reflect-klass=\"table dataTable\" ng-reflect-ng-class=\"table-striped table-bordered\">\n                    <thead>\n                        <tr role=\"row\">\n                            <th ng-reflect-ng-table-sorting=\"[object Object]\" ng-reflect-column=\"[object Object]\">\n                                Crop\n                            </th>\n                            <th ng-reflect-ng-table-sorting=\"[object Object]\" ng-reflect-column=\"[object Object]\">\n                                Offer Price\n                            </th>\n                            <th ng-reflect-ng-class=\"office-header text-success\" class=\"office-header text-success\" ng-reflect-ng-table-sorting=\"[object Object]\" ng-reflect-column=\"[object Object]\">\n                                Qty\n                                <i class=\"pull-right fa fa-chevron-up\" ng-reflect-klass=\"pull-right fa\" ng-reflect-ng-class=\"[object Object]\"></i>\n                            </th>\n                            <th ng-reflect-ng-table-sorting=\"[object Object]\" ng-reflect-column=\"[object Object]\">\n                                Highest Bid\n                            </th>\n                            <th ng-reflect-ng-table-sorting=\"[object Object]\" ng-reflect-column=\"[object Object]\">\n                                # of Bid\n                            </th>\n                            <th ng-reflect-ng-class=\"text-warning\" class=\"text-warning\" ng-reflect-ng-table-sorting=\"[object Object]\" ng-reflect-column=\"[object Object]\">\n                                Farmer\n                            </th>\n                            <th ng-reflect-ng-table-sorting=\"[object Object]\" ng-reflect-column=\"[object Object]\">\n                                Ends in\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td ng-reflect-inner-h-t-m-l=\"Mangoes\">Mangoes</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"2\">2</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"5\">5</td>\n                            <td ng-reflect-inner-h-t-m-l=\"Manpreet Singh\">Manpreet Singh</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1d 2h 20m\">1d 2h 20m</td>\n                        </tr>\n                        <tr>\n                            <td ng-reflect-inner-h-t-m-l=\"Carrot\">Carrot</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"2\">2</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"5\">5</td>\n                            <td ng-reflect-inner-h-t-m-l=\"Hardeep Singh\">Hardeep Singh</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1d 2h 20m\">1d 2h 20m</td>\n                        </tr>\n                        <tr>\n                            <td ng-reflect-inner-h-t-m-l=\"Peas\">Peas</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"2\">2</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"5\">5</td>\n                            <td ng-reflect-inner-h-t-m-l=\"Summit\">Summit</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1d 2h 20m\">1d 2h 20m</td>\n                        </tr>\n                        <tr>\n                            <td ng-reflect-inner-h-t-m-l=\"Potato\">Potato</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"2\">2</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"5\">5</td>\n                            <td ng-reflect-inner-h-t-m-l=\"Manpreet Singh\">Manpreet Singh</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1d 2h 20m\">1d 2h 20m</td>\n                        </tr>\n                        <tr>\n                            <td ng-reflect-inner-h-t-m-l=\"Potato\">Potato</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"2\">2</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"5\">5</td>\n                            <td ng-reflect-inner-h-t-m-l=\"Gudev\">Gudev</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1d 2h 20m\">1d 2h 20m</td>\n                        </tr>\n                        <tr>\n                            <td ng-reflect-inner-h-t-m-l=\"Potato\">Potato</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"2\">2</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1160\">1160</td>\n                            <td ng-reflect-inner-h-t-m-l=\"5\">5</td>\n                            <td ng-reflect-inner-h-t-m-l=\"Deep Singh\">Deep Singh</td>\n                            <td ng-reflect-inner-h-t-m-l=\"1d 2h 20m\">1d 2h 20m</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <!-- table-->\n            </div>\n        </div>\n        <div class=\"col-3\">\n            <div class=\"card actions\">\n                <h2>Actions</h2>\n                <ul>\n                    <li><span>Login as User</span></li>\n                    <li><span>View Account</span></li>\n                    <li (click)='editUser()'><span>Modify User</span></li>\n                    <li><span>Reset Password</span></li>\n                    <li><span>Delete User</span></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"edit\">\n        <div class=\"row\">\n        </div>\n        <div class=\"card\">\n            <div class=\"card-block\">\n                <form role=\"form\" (ngSubmit)=\"save()\" #dailyExpenseForm=\"ngForm\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group has-required\">\n                                <label for=\"nf-name\">First Name</label>\n                                <input type=\"text\" id=\"nf-name\" name=\"nf-name\" class=\"form-control\" placeholder=\"Enter first name\" [(ngModel)]=\"user.first_name\" required>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group has-required\">\n                                <label for=\"nf-password\">Last Name</label>\n                                <input type=\"text\" id=\"nf-lname\" name=\"nf-lname\" class=\"form-control\" placeholder=\"Enter last name\" [(ngModel)]=\"user.last_name\" required>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group has-required\">\n                                <label for=\"nf-password\">Phone</label>\n                                <input type=\"number\" id=\"nf-phone\" name=\"nf-phone\" class=\"form-control\" placeholder=\"Enter Phone\" [(ngModel)]=\"user.phone\" required>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group has-required\">\n                                <label for=\"nf-email\">Email</label>\n                                <input type=\"text\" id=\"nf-email\" name=\"nf-email\" class=\"form-control\" [(ngModel)]=\"user.email\" placeholder=\"Enter email\" required>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group has-required\">\n                                <label for=\"nf-city\">City/Village</label>\n                                <input type=\"text\" id=\"nf-city\" name=\"nf-city\" class=\"form-control\" [(ngModel)]=\"user.city\" placeholder=\"Enter city\" required=\"\">\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group has-required\">\n                                <label for=\"nf-pincode\">Pincode</label>\n                                <input type=\"number\" id=\"nf-pincode\" name=\"nf-pincode\" class=\"form-control\" [(ngModel)]=\"user.pincode\" placeholder=\"Enter Pincode\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group has-required\">\n                                <label for=\"nf-state\">State</label>\n                                <input type=\"text\" id=\"nf-state\" name=\"nf-state\" class=\"form-control\" [(ngModel)]=\"user.state\" placeholder=\"Enter state\" required=\"\">\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group has-required\">\n                                <label for=\"nf-district\">District</label>\n                                <input type=\"text\" id=\"nf-district\" name=\"nf-district\" class=\"form-control\" [(ngModel)]=\"user.district\" placeholder=\"Enter District\">\n                            </div>\n                        </div>\n                    </div>\n                    <button type=\"reset\" class=\"btn btn-secondary\" (click)='cancel()'> Cancel</button>\n                    <button type=\"submit\" class=\"pull-right btn btn-primary orangeclr\">Save</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 944:
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
var list_user_component_1 = __webpack_require__(985);
var add_user_component_1 = __webpack_require__(984);
var view_user_component_1 = __webpack_require__(986);
var user_management_routing_module_1 = __webpack_require__(997);
var UserManagementModule = (function () {
    function UserManagementModule() {
    }
    return UserManagementModule;
}());
UserManagementModule = __decorate([
    core_1.NgModule({
        imports: [
            user_management_routing_module_1.UserManagementRoutingModule,
            common_1.CommonModule
        ],
        declarations: [
            list_user_component_1.ListUserComponent,
            add_user_component_1.AddUserComponent,
            view_user_component_1.ViewUserComponent
        ]
    })
], UserManagementModule);
exports.UserManagementModule = UserManagementModule;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/user-management.module.js.map

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
var http_1 = __webpack_require__(120);
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        // private host = "http://localhost:1337";
        this.host = "https://efarmapi.herokuapp.com";
        this.access_token = {};
        this.token = '';
    }
    UserService.prototype.userListing = function () {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        var headers = new http_1.Headers();
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Authorization', this.token);
        return this.http.get(this.host + '/enduser', { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (user) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        var headers = new http_1.Headers();
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Authorization', this.token);
        return this.http.post(this.host + '/enduser', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.getUser = function (userid) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        var headers = new http_1.Headers();
        var body = {};
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Authorization', this.token);
        return this.http.get(this.host + '/enduser/' + userid, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.updateUser = function (user) {
        this.access_token = JSON.parse(localStorage.getItem("user"));
        this.token = 'Bearer ' + this.access_token["access_token"];
        var headers = new http_1.Headers();
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Authorization', this.token);
        return this.http.put(this.host + '/enduser/' + user.id, user, { headers: headers }).map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], UserService);
exports.UserService = UserService;
var _a;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/user.service.js.map

/***/ }),

/***/ 984:
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
var user_service_1 = __webpack_require__(955);
var router_1 = __webpack_require__(63);
var AddUserComponent = (function () {
    function AddUserComponent(router, _userService) {
        this.router = router;
        this._userService = _userService;
        this.user = {};
    }
    AddUserComponent.prototype.addUser = function () {
        var _this = this;
        this._userService.addUser(this.user)
            .subscribe(function (res) {
            _this.router.navigate(['/user/list']);
        }, function (err) {
        });
    };
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(1031)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _b || Object])
], AddUserComponent);
exports.AddUserComponent = AddUserComponent;
var _a, _b;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/add-user.component.js.map

/***/ }),

/***/ 985:
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
var user_service_1 = __webpack_require__(955);
var ListUserComponent = (function () {
    function ListUserComponent(router, _userService) {
        var _this = this;
        this.router = router;
        this._userService = _userService;
        this.isLoading = true;
        this.rows = [];
        this.columns = [
            { title: 'Name', name: 'first_name' },
            { title: 'Phone', name: 'phone' },
            { title: 'District', name: 'district' },
            { title: 'Email', name: 'email' },
            { title: 'Created On', name: 'createdAt' }
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
        this._userService.userListing()
            .subscribe(function (res) {
            _this.data = res;
            _this.isLoading = false;
            _this.onChangeTable(_this.config);
        }, function (err) {
        });
    }
    ListUserComponent.prototype.ngOnInit = function () {
        this.onChangeTable(this.config);
    };
    ListUserComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.data; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    ListUserComponent.prototype.changeSort = function (data, config) {
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
    ListUserComponent.prototype.changeFilter = function (data, config) {
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
    ListUserComponent.prototype.onChangeTable = function (config, page) {
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
    ListUserComponent.prototype.onCellClick = function (data) {
        this.router.navigate(['/user/list/' + data["row"]["id"]]);
    };
    return ListUserComponent;
}());
ListUserComponent = __decorate([
    core_1.Component({
        selector: 'app-user-management',
        template: __webpack_require__(1032),
        styles: [__webpack_require__(1003)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _b || Object])
], ListUserComponent);
exports.ListUserComponent = ListUserComponent;
var _a, _b;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/list-user.component.js.map

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
var router_1 = __webpack_require__(63);
var user_service_1 = __webpack_require__(955);
var ViewUserComponent = (function () {
    function ViewUserComponent(route, router, _userService) {
        var _this = this;
        this.router = router;
        this._userService = _userService;
        this.userID = '';
        this.user = {};
        this.copy_user = {};
        this.edit = false;
        this.userID = route.snapshot.params['id'];
        this._userService.getUser(this.userID)
            .subscribe(function (res) {
            _this.user = res;
        }, function (err) {
        });
    }
    ViewUserComponent.prototype.editUser = function () {
        this.edit = !this.edit;
        this.copy_user = JSON.parse(JSON.stringify(this.user));
    };
    ViewUserComponent.prototype.cancel = function () {
        this.edit = !this.edit;
        this.user = JSON.parse(JSON.stringify(this.copy_user));
    };
    ViewUserComponent.prototype.save = function () {
        var _this = this;
        this._userService.updateUser(this.user)
            .subscribe(function (res) {
            _this.edit = !_this.edit;
            _this.copy_user = JSON.parse(JSON.stringify(_this.user));
        }, function (err) {
        });
    };
    ViewUserComponent.prototype.modify = function () {
        this.router.navigate(['/user/update/' + this.user["id"]]);
    };
    return ViewUserComponent;
}());
ViewUserComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(1033)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _c || Object])
], ViewUserComponent);
exports.ViewUserComponent = ViewUserComponent;
var _a, _b, _c;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/view-user.component.js.map

/***/ }),

/***/ 997:
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
var list_user_component_1 = __webpack_require__(985);
var add_user_component_1 = __webpack_require__(984);
var view_user_component_1 = __webpack_require__(986);
var http_1 = __webpack_require__(120);
var user_service_1 = __webpack_require__(955);
var routes = [
    {
        path: '',
        data: {
            title: 'User Management'
        },
        children: [
            {
                path: 'list',
                component: list_user_component_1.ListUserComponent,
                data: {
                    title: 'List'
                }
            },
            {
                path: 'add',
                component: add_user_component_1.AddUserComponent,
                data: {
                    title: 'Add'
                }
            },
            {
                path: 'list/:id',
                component: view_user_component_1.ViewUserComponent,
                data: {
                    title: 'List'
                }
            }
        ]
    }
];
var UserManagementRoutingModule = (function () {
    function UserManagementRoutingModule() {
    }
    return UserManagementRoutingModule;
}());
UserManagementRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routes),
            forms_1.FormsModule,
            ng2_table_1.Ng2TableModule,
            ng2_bootstrap_1.PaginationModule,
            http_1.HttpModule
        ],
        providers: [
            user_service_1.UserService
        ],
        exports: [
            router_1.RouterModule,
            forms_1.FormsModule,
            ng2_table_1.Ng2TableModule,
            ng2_bootstrap_1.PaginationModule
        ]
    })
], UserManagementRoutingModule);
exports.UserManagementRoutingModule = UserManagementRoutingModule;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/user-management-routing.module.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map
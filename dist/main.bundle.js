webpackJsonp([3,7],{

/***/ 1071:
/***/ (function(module, exports) {

module.exports = "<!-- Loader div -->\n<div *ngIf=\"isPageLoading\" class=\"overlayloader\">\n    <div class=\"loader\"></div>\n</div>\n<section class=\"login-page\"></section>\n<div class=\"login-box\">\n    <!-- /.login-logo -->\n    <div class=\"login-box-body\">\n        <div class=\"login-logo\">\n            <img src=\"assets/img/logo.png\" alt=\"logo\">\n        </div>\n        <form role=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n            <div class=\"text-center\" *ngIf=\"errMessage\">\n                <span class=\"text-danger\">\n                    {{errMessage}}\n                </span>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <label>Email</label>\n                <input type=\"text\" name=\"username\" class=\"form-control\" [(ngModel)]=\"user.username\" (ngModelChange)=\"errMessage=''\" #username=\"ngModel\" autofocus email required>\n                <li *ngIf=\"username.errors && username.touched\">\n                    <span class=\"text-danger\" [hidden]=\"!username.errors.required\">Email is required</span>\n                </li>\n                <li *ngIf=\"username.errors?.email && username.touched\">\n                    <span class=\"text-danger\">Email id not valid.</span>\n                </li>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <label>Password</label>\n                <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" #password=\"ngModel\" (ngModelChange)=\"errMessage=''\" required>\n                <li *ngIf=\"password.errors && password.touched\">\n                    <span class=\"text-danger\" [hidden]=\"!password.errors.required\">Password is required</span>\n                </li>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-12\">\n                    <button type=\"submit\" class=\"btn btn-success btn-block btn-flat\" [disabled]=\"!loginForm.valid\">Login</button>\n                </div>\n            </div>            \n        </form>\n    </div>\n    <!-- /.login-box-body -->\n</div>\n"

/***/ }),

/***/ 1072:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\r\n  <button class=\"navbar-toggler mobile-sidebar-toggler hidden-lg-up\" type=\"button\">&#9776;</button>\r\n  <a class=\"navbar-brand hidden-md-down\" href=\"#\"></a>\r\n \r\n  <ul class=\"nav navbar-nav hidden-md-down width\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link navbar-toggler sidebar-toggler\" href=\"#\">&#9776;</a>\r\n    </li>\r\n\t  <li class=\"search\">\r\n\t  \t\r\n\t  \t<form action=\"#\" method=\"get\" class=\"topsearch-form pull-left\">\r\n        <div class=\"flex\">\r\n          <input name=\"q\" class=\"form-control\" placeholder=\"Search here\" type=\"text\">\r\n          <span class=\"input-group-btn\">\r\n          <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i> </button>\r\n          </span> </div>\r\n      </form>\r\n      \r\n\t  </li>\r\n  </ul>\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n   \r\n\t <li class=\"nav-item dropdown\" dropdown (onToggle)=\"toggled($event)\">\r\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>\r\n          All Market\r\n        </a>\r\n       <!-- <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\" id=\"navbarDropdownMenuLink\">\r\n          <a class=\"dropdown-item\" href=\"JavaScript:Void(0);\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"JavaScript:Void(0);\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"JavaScript:Void(0);\">Something else here</a>\r\n        </div> -->\r\n      </li>\r\n   \r\n   \r\n   \r\n   \r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"JavaScript:Void(0);\" title=\"Notifications\"><i class=\"fa fa-bell\"></i>\r\n      <span class=\"badge badge-pill badge-danger\"><!-- 5 --></span></a>\r\n    </li>\r\n   \r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"JavaScript:Void(0);\" title=\"Messages\"><i class=\"fa fa-envelope\"></i>\r\n\t\t  <span class=\"badge badge-pill badge-danger\"><!-- 11 --></span>\r\n       </a>\r\n    </li>\r\n    <li class=\"nav-item dropdown removedropdwn\" dropdown (onToggle)=\"toggled($event)\">\r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>\r\n          <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n\t\t  <i class=\"fa fa-ellipsis-v\"></i> \r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\">\r\n        <a class=\"dropdown-item\" href=\"JavaScript:Void(0);\"><i class=\"fa fa-user\"></i> Profile</a>\r\n        <a class=\"dropdown-item\" href=\"JavaScript:Void(0);\"><i class=\"fa fa-wrench\"></i> Setting</a>\r\n        <div class=\"divider\"></div>\r\n        <a class=\"dropdown-item\" (click)=\"logout()\" href=\"#\"><i class=\"fa fa-lock\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</header>\r\n\r\n<div class=\"app-body\">\r\n  <div class=\"sidebar\">\r\n    <nav class=\"sidebar-nav\">\r\n      <ul class=\"nav panel-body\">\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" title=\"Dashboard\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-dashboard\"></i><span> Dashboard</span></a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"javascript:void(0)\" title=\"Logistic Partners\"> <i class=\"icon-logistic-partner\"></i> <span>Logistic Partners</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"javascript:void(0)\" title=\"Channel Partners\"> <i class=\"icon-channel-partner\"></i> <span>Channel Partners</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"javascript:void(0)\" title=\"Orders\"> <i class=\"icon-order\"></i> <span>Orders</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"javascript:void(0)\" title=\"Category\"> <i class=\"fa fa-list-alt\"></i> <span>Category</span></a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"javascript:void(0)\" title=\"Manufacturer\"> <i class=\"fa fa-cogs\"></i> <span>Manufacturer</span></a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"javascript:void(0)\" title=\"Settings\"> <i class=\"icon-settings\"></i> <span>Settings</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"javascript:void(0)\" title=\"Wishlist\"> <i class=\"fa fa-heart-o\"></i> <span>Wishlist</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"javascript:void(0)\" title=\"SMS\"> <i class=\"icon-sms\"></i> <span>SMS</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"javascript:void(0)\" title=\"Email\"> <i class=\"fa fa-envelope-o\"></i> <span>Email</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"javascript:void(0)\" title=\"Cart\"> <i class=\"icon-cart\"></i> <span>Cart</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"javascript:void(0)\" title=\"Admin Roles\"> <i class=\"icon-user\"></i> <span>Admin Roles</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"javascript:void(0)\" title=\"Blog\"> <i class=\"icon-post\"></i> <span>Blog</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"javascript:void(0)\" title=\"Reports\"> <i class=\"icon-Shape-1194\"></i> <span>Reports</span></a> </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n\r\n    <div class=\"mainarea\">\r\n        <!-- top header -->\r\n        <div class=\"top-nav-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-2 col-md-4 col-6\"> \r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-green\">\r\n                        <div class=\"inner\" title=\"Crops\" style=\"cursor:not-allowed;\">\r\n                          <p>Crops</p>\r\n                        </div>\r\n                        <div class=\"icon\">                           \r\n                            <i class=\"icon-Shape-13\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col -->\r\n                <div class=\"col-lg-2 col-md-4 col-6\"> \r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-aqua\">\r\n                        <div class=\"inner\" title=\"Inputs\" style=\"cursor:not-allowed;\">\r\n                            <p>Inputs</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"icon-Shape-18\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col -->\r\n                <div class=\"col-lg-2 col-md-4 col-6\"> \r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-red\">\r\n                        <div class=\"inner\" title=\"Equipments\" style=\"cursor:not-allowed;\">\r\n                            <p>Equipments</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"icon-Shape-19\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col -->\r\n                <div class=\"col-lg-2 col-md-4 col-6\"> \r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-yellow\">\r\n                        <div class=\"inner\" title=\"Lands\" style=\"cursor:not-allowed;\">\r\n                          <p>Lands</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"icon-Shape-21\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col --> \r\n\r\n                <!-- col -->\r\n                <div class=\"col-lg-2 col-md-4 col-6\"> \r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-purple\">\r\n                        <div class=\"inner\" title=\"Services\" style=\"cursor:not-allowed;\">\r\n                          <p>Services</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"icon-Shape-22\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col --> \r\n\r\n                <!-- col -->\r\n                <div class=\"col-lg-2 col-md-4 col-6\">\r\n                    <div class=\"small-box bg-teal\" (click)=\"layout('user')\" [ngClass]=\"{'active': active == 'user'}\" [routerLink]=\"['/users/list']\">\r\n                        <div class=\"inner\" title=\"Users\">\r\n                            <p>Users</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"fa fa-user\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col --> \r\n            </div>\r\n        </div>\r\n\r\n       \r\n\r\n        <div class=\"main-content\">\r\n\r\n        <div class=\"content-header\">\r\n           <!-- Breadcrumb -->\r\n        <ol class=\"breadcrumb\">\r\n          <breadcrumbs></breadcrumbs>\r\n        </ol>\r\n        </div>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div><!-- /.conainer-fluid -->\r\n  </main>\r\n\r\n  <aside class=\"aside-menu\">\r\n    <tabset>\r\n      <tab>\r\n        <template tabHeading><i class=\"icon-list\"></i></template>\r\n        <div class=\"callout m-0 py-h text-muted text-center bg-faded text-uppercase\">\r\n          <small><b>Today</b></small>\r\n        </div>\r\n        <hr class=\"transparent mx-1 my-0\">\r\n        <div class=\"callout callout-warning m-0 py-1\">\r\n          <div class=\"avatar float-right\">\r\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div>Meeting with <strong>Lucas</strong></div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\r\n        </div>\r\n        <hr class=\"mx-1 my-0\">\r\n        <div class=\"callout callout-info m-0 py-1\">\r\n          <div class=\"avatar float-right\">\r\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div>Skype with <strong>Megan</strong></div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line </small>\r\n        </div>\r\n        <hr class=\"transparent mx-1 my-0\">\r\n        <div class=\"callout m-0 py-h text-muted text-center bg-faded text-uppercase\">\r\n          <small><b>Tomorrow</b></small>\r\n        </div>\r\n        <hr class=\"transparent mx-1 my-0\">\r\n        <div class=\"callout callout-danger m-0 py-1\">\r\n          <div>New UI Project - <strong>deadline</strong></div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\r\n          <div class=\"avatars-stack mt-h\">\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mx-1 my-0\">\r\n        <div class=\"callout callout-success m-0 py-1\">\r\n          <div><strong>#10 Startups.Garden</strong> Meetup</div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\r\n        </div>\r\n        <hr class=\"mx-1 my-0\">\r\n        <div class=\"callout callout-primary m-0 py-1\">\r\n          <div><strong>Team meeting</strong></div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\r\n          <div class=\"avatars-stack mt-h\">\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mx-1 my-0\">\r\n      </tab>\r\n      <tab>\r\n        <template tabHeading><i class=\"icon-speech\"></i></template>\r\n        <div class=\"p-1\">\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n      <tab>\r\n        <template tabHeading><i class=\"icon-settings\"></i></template>\r\n        <div class=\"p-1\">\r\n          <h6>Settings</h6>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-2\">\r\n              <small><b>Option 1</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-1\">\r\n              <small><b>Option 2</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\">\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-1\">\r\n              <small><b>Option 3</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\">\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-1\">\r\n              <small><b>Option 4</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <hr>\r\n          <h6>System Utilization</h6>\r\n\r\n          <div class=\"text-uppercase mb-q mt-2\"><small><b>CPU Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\r\n\r\n          <div class=\"text-uppercase mb-q mt-h\"><small><b>Memory Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">11444GB/16384MB</small>\r\n\r\n          <div class=\"text-uppercase mb-q mt-h\"><small><b>SSD 1 Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">243GB/256GB</small>\r\n\r\n          <div class=\"text-uppercase mb-q mt-h\"><small><b>SSD 2 Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">25GB/256GB</small>\r\n        </div>\r\n      </tab>\r\n    </tabset>\r\n  </aside>\r\n</div>\r\n\r\n<!-- <footer class=\"app-footer\">\r\n</footer> -->\r\n"

/***/ }),

/***/ 1084:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(655);


/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SEP = '/';
exports.HOST = "https://efarmapi.herokuapp.com";
exports.CLIENT_ID = '5x7EuN09HAeBn2pYJnvvq7szgJaULh14';
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/tsconstant.js.map

/***/ }),

/***/ 405:
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
var login_service_1 = __webpack_require__(797);
var router_1 = __webpack_require__(76);
var ngx_cookie_1 = __webpack_require__(96);
var tsConstants = __webpack_require__(310);
var LoginComponent = (function () {
    function LoginComponent(_router, _loginService, _cookieService) {
        this._router = _router;
        this._loginService = _loginService;
        this._cookieService = _cookieService;
        this.user = {
            grant_type: 'password',
            client_id: tsConstants.CLIENT_ID
        };
        this.errMessage = '';
        this.isPageLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isPageLoading = true;
        this.errMessage = '';
        this._loginService.login(this.user).subscribe(function (res) {
            _this.isPageLoading = false;
            var token = res.access_token;
            /* Setup Cookie */
            _this._cookieService.put('token', token);
            _this._router.navigate(['/dashboard']);
        }, function (err) {
            _this.isPageLoading = false;
            _this.errMessage = "Email or Password is not correct.";
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        template: __webpack_require__(1071),
        styles: [__webpack_require__(990)],
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _b || Object, typeof (_c = typeof ngx_cookie_1.CookieService !== "undefined" && ngx_cookie_1.CookieService) === "function" && _c || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b, _c;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/login.component.js.map

/***/ }),

/***/ 406:
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
var router_1 = __webpack_require__(76);
var ngx_cookie_1 = __webpack_require__(96);
var ActiveRouteGuard = (function () {
    function ActiveRouteGuard(router, _cookieService) {
        this.router = router;
        this._cookieService = _cookieService;
    }
    ActiveRouteGuard.prototype.canActivate = function () {
        var token = this._cookieService.get('token');
        if (!token) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    return ActiveRouteGuard;
}());
ActiveRouteGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof ngx_cookie_1.CookieService !== "undefined" && ngx_cookie_1.CookieService) === "function" && _b || Object])
], ActiveRouteGuard);
exports.ActiveRouteGuard = ActiveRouteGuard;
var _a, _b;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/activate-route-guard.js.map

/***/ }),

/***/ 407:
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
var router_1 = __webpack_require__(76);
var ngx_cookie_1 = __webpack_require__(96);
var DeactiveRouteGuard = (function () {
    function DeactiveRouteGuard(router, _cookieService) {
        this.router = router;
        this._cookieService = _cookieService;
    }
    DeactiveRouteGuard.prototype.canActivate = function () {
        var token = this._cookieService.get('token');
        if (token) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    return DeactiveRouteGuard;
}());
DeactiveRouteGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof ngx_cookie_1.CookieService !== "undefined" && ngx_cookie_1.CookieService) === "function" && _b || Object])
], DeactiveRouteGuard);
exports.DeactiveRouteGuard = DeactiveRouteGuard;
var _a, _b;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/deactivate-route-guard.js.map

/***/ }),

/***/ 408:
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
var router_1 = __webpack_require__(76);
var ngx_cookie_1 = __webpack_require__(96);
var FullLayoutComponent = (function () {
    function FullLayoutComponent(router, _route, _cookieService) {
        this.router = router;
        this._route = _route;
        this._cookieService = _cookieService;
        this.disabled = false;
        this.status = { isopen: false };
        this.user = {};
        this.user = JSON.parse(localStorage.getItem("user"));
        this.active = this._route.snapshot["_urlSegment"].segments[0].path;
    }
    FullLayoutComponent.prototype.toggled = function (open) {
        // console.log('Dropdown is now: ', open);
    };
    FullLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutComponent.prototype.ngOnInit = function () { };
    FullLayoutComponent.prototype.layout = function (value) {
        this.active = value;
    };
    FullLayoutComponent.prototype.logout = function () {
        this._cookieService.removeAll();
        this.router.navigate(['/login']);
    };
    return FullLayoutComponent;
}());
FullLayoutComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        template: __webpack_require__(1072)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof ngx_cookie_1.CookieService !== "undefined" && ngx_cookie_1.CookieService) === "function" && _c || Object])
], FullLayoutComponent);
exports.FullLayoutComponent = FullLayoutComponent;
var _a, _b, _c;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/full-layout.component.js.map

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		1088,
		1
	],
	"./users/users.module": [
		1089,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 654;


/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_dynamic_1 = __webpack_require__(764);
var app_module_1 = __webpack_require__(795);
var environment_1 = __webpack_require__(802);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/main.js.map

/***/ }),

/***/ 794:
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
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        // tslint:disable-next-line
        selector: 'body',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/app.component.js.map

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(130);
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(15);
var forms_1 = __webpack_require__(3);
var app_component_1 = __webpack_require__(794);
// import { DropdownModule } from 'ng2-bootstrap/dropdown';
var tabs_1 = __webpack_require__(606);
var nav_dropdown_directive_1 = __webpack_require__(800);
var ngx_cookie_1 = __webpack_require__(96);
var activate_route_guard_1 = __webpack_require__(406);
var deactivate_route_guard_1 = __webpack_require__(407);
var ng2_charts_1 = __webpack_require__(669);
var sidebar_directive_1 = __webpack_require__(801);
var aside_directive_1 = __webpack_require__(798);
var breadcrumb_component_1 = __webpack_require__(799);
var ng2_bootstrap_1 = __webpack_require__(668);
// Routing Module
var app_routing_1 = __webpack_require__(796);
var http_1 = __webpack_require__(196);
// Layouts
var full_layout_component_1 = __webpack_require__(408);
var login_component_1 = __webpack_require__(405);
var ng2_validation_1 = __webpack_require__(670);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.AppRoutingModule,
            // DropdownModule.forRoot(),
            tabs_1.TabsModule.forRoot(),
            ng2_charts_1.ChartsModule,
            ng2_bootstrap_1.PaginationModule.forRoot(),
            ngx_cookie_1.CookieModule.forRoot(),
            http_1.HttpModule,
            ng2_validation_1.CustomFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            full_layout_component_1.FullLayoutComponent,
            nav_dropdown_directive_1.NAV_DROPDOWN_DIRECTIVES,
            breadcrumb_component_1.BreadcrumbsComponent,
            sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES,
            aside_directive_1.AsideToggleDirective,
            login_component_1.LoginComponent
        ],
        providers: [
            {
                provide: common_1.LocationStrategy,
                useClass: common_1.HashLocationStrategy
            },
            activate_route_guard_1.ActiveRouteGuard,
            deactivate_route_guard_1.DeactiveRouteGuard
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/app.module.js.map

/***/ }),

/***/ 796:
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
var router_1 = __webpack_require__(76);
var http_1 = __webpack_require__(196);
// Layouts
var full_layout_component_1 = __webpack_require__(408);
var login_component_1 = __webpack_require__(405);
var activate_route_guard_1 = __webpack_require__(406);
var deactivate_route_guard_1 = __webpack_require__(407);
exports.routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        canActivate: [activate_route_guard_1.ActiveRouteGuard]
    },
    {
        path: '',
        component: full_layout_component_1.FullLayoutComponent,
        data: {
            title: 'Home'
        },
        canActivate: [deactivate_route_guard_1.DeactiveRouteGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'users',
                loadChildren: './users/users.module#UsersModule'
            }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.routes), http_1.HttpModule],
        exports: [router_1.RouterModule, http_1.HttpModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/app.routing.js.map

/***/ }),

/***/ 797:
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
var http_1 = __webpack_require__(196);
__webpack_require__(312);
var tsConstants = __webpack_require__(310);
var LoginService = (function () {
    function LoginService(_http) {
        this._http = _http;
        this._host = tsConstants.HOST;
    }
    LoginService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        var username = user.username;
        var password = user.password;
        var grant_type = user.grant_type;
        var client_id = user.client_id;
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        urlSearchParams.append('grant_type', grant_type);
        urlSearchParams.append('client_id', client_id);
        var body = urlSearchParams.toString();
        return this._http.post(this._host + '/oauth/token', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], LoginService);
exports.LoginService = LoginService;
var _a;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/login.service.js.map

/***/ }),

/***/ 798:
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
/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    return AsideToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AsideToggleDirective.prototype, "toggleOpen", null);
AsideToggleDirective = __decorate([
    core_1.Directive({
        selector: '.aside-menu-toggler',
    }),
    __metadata("design:paramtypes", [])
], AsideToggleDirective);
exports.AsideToggleDirective = AsideToggleDirective;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/aside.directive.js.map

/***/ }),

/***/ 799:
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
var router_1 = __webpack_require__(76);
__webpack_require__(311);
var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    };
    return BreadcrumbsComponent;
}());
BreadcrumbsComponent = __decorate([
    core_1.Component({
        selector: 'breadcrumbs',
        template: "\n  <template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n    <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/' || breadcrumb.label.title&&last\" [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>\n  </template>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
], BreadcrumbsComponent);
exports.BreadcrumbsComponent = BreadcrumbsComponent;
var _a, _b;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/breadcrumb.component.js.map

/***/ }),

/***/ 800:
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
var NavDropdownDirective = (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    return NavDropdownDirective;
}());
NavDropdownDirective = __decorate([
    core_1.Directive({
        selector: '.nav-dropdown'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], NavDropdownDirective);
exports.NavDropdownDirective = NavDropdownDirective;
/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    return NavDropdownToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavDropdownToggleDirective.prototype, "toggleOpen", null);
NavDropdownToggleDirective = __decorate([
    core_1.Directive({
        selector: '.nav-dropdown-toggle',
    }),
    __metadata("design:paramtypes", [NavDropdownDirective])
], NavDropdownToggleDirective);
exports.NavDropdownToggleDirective = NavDropdownToggleDirective;
exports.NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
var _a;
// export const NGB_DROPDOWN_DIRECTIVES = [NgbDropdownToggle, NgbDropdown];
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/nav-dropdown.directive.js.map

/***/ }),

/***/ 801:
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
/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    return SidebarToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarToggleDirective.prototype, "toggleOpen", null);
SidebarToggleDirective = __decorate([
    core_1.Directive({
        selector: '.sidebar-toggler',
    }),
    __metadata("design:paramtypes", [])
], SidebarToggleDirective);
exports.SidebarToggleDirective = SidebarToggleDirective;
var MobileSidebarToggleDirective = (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    return MobileSidebarToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
MobileSidebarToggleDirective = __decorate([
    core_1.Directive({
        selector: '.mobile-sidebar-toggler',
    }),
    __metadata("design:paramtypes", [])
], MobileSidebarToggleDirective);
exports.MobileSidebarToggleDirective = MobileSidebarToggleDirective;
/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    return SidebarOffCanvasCloseDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
SidebarOffCanvasCloseDirective = __decorate([
    core_1.Directive({
        selector: '.sidebar-close',
    }),
    __metadata("design:paramtypes", [])
], SidebarOffCanvasCloseDirective);
exports.SidebarOffCanvasCloseDirective = SidebarOffCanvasCloseDirective;
exports.SIDEBAR_TOGGLE_DIRECTIVES = [SidebarToggleDirective, SidebarOffCanvasCloseDirective, MobileSidebarToggleDirective];
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/sidebar.directive.js.map

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/environment.js.map

/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(200)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 460,
	"./af.js": 460,
	"./ar": 466,
	"./ar-dz": 461,
	"./ar-dz.js": 461,
	"./ar-ly": 462,
	"./ar-ly.js": 462,
	"./ar-ma": 463,
	"./ar-ma.js": 463,
	"./ar-sa": 464,
	"./ar-sa.js": 464,
	"./ar-tn": 465,
	"./ar-tn.js": 465,
	"./ar.js": 466,
	"./az": 467,
	"./az.js": 467,
	"./be": 468,
	"./be.js": 468,
	"./bg": 469,
	"./bg.js": 469,
	"./bn": 470,
	"./bn.js": 470,
	"./bo": 471,
	"./bo.js": 471,
	"./br": 472,
	"./br.js": 472,
	"./bs": 473,
	"./bs.js": 473,
	"./ca": 474,
	"./ca.js": 474,
	"./cs": 475,
	"./cs.js": 475,
	"./cv": 476,
	"./cv.js": 476,
	"./cy": 477,
	"./cy.js": 477,
	"./da": 478,
	"./da.js": 478,
	"./de": 480,
	"./de-at": 479,
	"./de-at.js": 479,
	"./de.js": 480,
	"./dv": 481,
	"./dv.js": 481,
	"./el": 482,
	"./el.js": 482,
	"./en-au": 483,
	"./en-au.js": 483,
	"./en-ca": 484,
	"./en-ca.js": 484,
	"./en-gb": 485,
	"./en-gb.js": 485,
	"./en-ie": 486,
	"./en-ie.js": 486,
	"./en-nz": 487,
	"./en-nz.js": 487,
	"./eo": 488,
	"./eo.js": 488,
	"./es": 490,
	"./es-do": 489,
	"./es-do.js": 489,
	"./es.js": 490,
	"./et": 491,
	"./et.js": 491,
	"./eu": 492,
	"./eu.js": 492,
	"./fa": 493,
	"./fa.js": 493,
	"./fi": 494,
	"./fi.js": 494,
	"./fo": 495,
	"./fo.js": 495,
	"./fr": 498,
	"./fr-ca": 496,
	"./fr-ca.js": 496,
	"./fr-ch": 497,
	"./fr-ch.js": 497,
	"./fr.js": 498,
	"./fy": 499,
	"./fy.js": 499,
	"./gd": 500,
	"./gd.js": 500,
	"./gl": 501,
	"./gl.js": 501,
	"./he": 502,
	"./he.js": 502,
	"./hi": 503,
	"./hi.js": 503,
	"./hr": 504,
	"./hr.js": 504,
	"./hu": 505,
	"./hu.js": 505,
	"./hy-am": 506,
	"./hy-am.js": 506,
	"./id": 507,
	"./id.js": 507,
	"./is": 508,
	"./is.js": 508,
	"./it": 509,
	"./it.js": 509,
	"./ja": 510,
	"./ja.js": 510,
	"./jv": 511,
	"./jv.js": 511,
	"./ka": 512,
	"./ka.js": 512,
	"./kk": 513,
	"./kk.js": 513,
	"./km": 514,
	"./km.js": 514,
	"./ko": 515,
	"./ko.js": 515,
	"./ky": 516,
	"./ky.js": 516,
	"./lb": 517,
	"./lb.js": 517,
	"./lo": 518,
	"./lo.js": 518,
	"./lt": 519,
	"./lt.js": 519,
	"./lv": 520,
	"./lv.js": 520,
	"./me": 521,
	"./me.js": 521,
	"./mi": 522,
	"./mi.js": 522,
	"./mk": 523,
	"./mk.js": 523,
	"./ml": 524,
	"./ml.js": 524,
	"./mr": 525,
	"./mr.js": 525,
	"./ms": 527,
	"./ms-my": 526,
	"./ms-my.js": 526,
	"./ms.js": 527,
	"./my": 528,
	"./my.js": 528,
	"./nb": 529,
	"./nb.js": 529,
	"./ne": 530,
	"./ne.js": 530,
	"./nl": 532,
	"./nl-be": 531,
	"./nl-be.js": 531,
	"./nl.js": 532,
	"./nn": 533,
	"./nn.js": 533,
	"./pa-in": 534,
	"./pa-in.js": 534,
	"./pl": 535,
	"./pl.js": 535,
	"./pt": 537,
	"./pt-br": 536,
	"./pt-br.js": 536,
	"./pt.js": 537,
	"./ro": 538,
	"./ro.js": 538,
	"./ru": 539,
	"./ru.js": 539,
	"./se": 540,
	"./se.js": 540,
	"./si": 541,
	"./si.js": 541,
	"./sk": 542,
	"./sk.js": 542,
	"./sl": 543,
	"./sl.js": 543,
	"./sq": 544,
	"./sq.js": 544,
	"./sr": 546,
	"./sr-cyrl": 545,
	"./sr-cyrl.js": 545,
	"./sr.js": 546,
	"./ss": 547,
	"./ss.js": 547,
	"./sv": 548,
	"./sv.js": 548,
	"./sw": 549,
	"./sw.js": 549,
	"./ta": 550,
	"./ta.js": 550,
	"./te": 551,
	"./te.js": 551,
	"./tet": 552,
	"./tet.js": 552,
	"./th": 553,
	"./th.js": 553,
	"./tl-ph": 554,
	"./tl-ph.js": 554,
	"./tlh": 555,
	"./tlh.js": 555,
	"./tr": 556,
	"./tr.js": 556,
	"./tzl": 557,
	"./tzl.js": 557,
	"./tzm": 559,
	"./tzm-latn": 558,
	"./tzm-latn.js": 558,
	"./tzm.js": 559,
	"./uk": 560,
	"./uk.js": 560,
	"./uz": 561,
	"./uz.js": 561,
	"./vi": 562,
	"./vi.js": 562,
	"./x-pseudo": 563,
	"./x-pseudo.js": 563,
	"./yo": 564,
	"./yo.js": 564,
	"./zh-cn": 565,
	"./zh-cn.js": 565,
	"./zh-hk": 566,
	"./zh-hk.js": 566,
	"./zh-tw": 567,
	"./zh-tw.js": 567
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 993;


/***/ })

},[1084]);
//# sourceMappingURL=main.bundle.js.map
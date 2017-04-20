webpackJsonp([12,16],{

/***/ 366:
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
// import { UserService } from './shared/user.service';
var router_1 = __webpack_require__(63);
var ActiveRouteGuard = (function () {
    function ActiveRouteGuard(router) {
        this.router = router;
    }
    ActiveRouteGuard.prototype.canActivate = function () {
        if (!localStorage.getItem("user")) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], ActiveRouteGuard);
exports.ActiveRouteGuard = ActiveRouteGuard;
var _a;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/activate-route-guard.js.map

/***/ }),

/***/ 367:
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
// import { UserService } from './shared/user.service';
var router_1 = __webpack_require__(63);
var DeactiveRouteGuard = (function () {
    function DeactiveRouteGuard(router) {
        this.router = router;
    }
    DeactiveRouteGuard.prototype.canActivate = function () {
        if (localStorage.getItem("user")) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], DeactiveRouteGuard);
exports.DeactiveRouteGuard = DeactiveRouteGuard;
var _a;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/deactivate-route-guard.js.map

/***/ }),

/***/ 368:
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
var FullLayoutComponent = (function () {
    function FullLayoutComponent(router) {
        this.router = router;
        this.disabled = false;
        this.status = { isopen: false };
        this.user = {};
        this.user = JSON.parse(localStorage.getItem("user"));
    }
    FullLayoutComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    FullLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutComponent.prototype.ngOnInit = function () { };
    FullLayoutComponent.prototype.logout = function () {
        console.log("logout");
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    };
    return FullLayoutComponent;
}());
FullLayoutComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        template: __webpack_require__(898)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], FullLayoutComponent);
exports.FullLayoutComponent = FullLayoutComponent;
var _a;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/full-layout.component.js.map

/***/ }),

/***/ 369:
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
var SimpleLayoutComponent = (function () {
    function SimpleLayoutComponent() {
    }
    SimpleLayoutComponent.prototype.ngOnInit = function () { };
    return SimpleLayoutComponent;
}());
SimpleLayoutComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        template: '<router-outlet></router-outlet>',
    }),
    __metadata("design:paramtypes", [])
], SimpleLayoutComponent);
exports.SimpleLayoutComponent = SimpleLayoutComponent;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/simple-layout.component.js.map

/***/ }),

/***/ 370:
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
var login_service_1 = __webpack_require__(715);
var router_1 = __webpack_require__(63);
var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.user = {
            grant_type: 'password',
            client_id: '5x7EuN09HAeBn2pYJnvvq7szgJaULh14'
        };
        this.err_message = '';
        this.isPageLoading = false;
        this.valid_email = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.checkemail = function (email) {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.valid_email = regex.test(email);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        /* start loader */
        this.isPageLoading = true;
        this.err_message = '';
        this.loginService.login(this.user)
            .subscribe(function (res) {
            /* end loader */
            _this.isPageLoading = false;
            localStorage.setItem("user", JSON.stringify(res));
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            /* end loader */
            _this.isPageLoading = false;
            _this.err_message = "Email id or password not correct";
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        template: __webpack_require__(899),
        styles: [__webpack_require__(872)],
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _b || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/login.component.js.map

/***/ }),

/***/ 371:
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
var register_service_1 = __webpack_require__(716);
var router_1 = __webpack_require__(63);
var RegisterComponent = (function () {
    function RegisterComponent(router, _registerService) {
        this.router = router;
        this._registerService = _registerService;
        this.user = {};
        this.valid_email = true;
        this.term = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.checkemail = function (email) {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.valid_email = regex.test(email);
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.user["username"] = this.user["email"];
        this._registerService.register(this.user)
            .subscribe(function (res) {
            console.log("response", res);
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log("error", err);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        template: __webpack_require__(900),
        styles: [__webpack_require__(873)],
        providers: [register_service_1.RegisterService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof register_service_1.RegisterService !== "undefined" && register_service_1.RegisterService) === "function" && _b || Object])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
var _a, _b;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/register.component.js.map

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./chartjs/chartjs.module": [
		935,
		10
	],
	"./components/components.module": [
		936,
		0
	],
	"./crop-management/crop-management.module": [
		937,
		4
	],
	"./dashboard/dashboard.module": [
		938,
		9
	],
	"./equipment-management/equipment-management.module": [
		939,
		3
	],
	"./icons/icons.module": [
		940,
		7
	],
	"./input-management/input-management.module": [
		941,
		2
	],
	"./land-management/land-management.module": [
		942,
		5
	],
	"./pages/pages.module": [
		943,
		6
	],
	"./user-management/user-management.module": [
		944,
		1
	],
	"./widgets/widgets.module": [
		945,
		8
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
webpackAsyncContext.id = 590;


/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_dynamic_1 = __webpack_require__(682);
var app_module_1 = __webpack_require__(713);
var environment_1 = __webpack_require__(721);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/main.js.map

/***/ }),

/***/ 712:
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

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(121);
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(17);
var forms_1 = __webpack_require__(27);
var app_component_1 = __webpack_require__(712);
var dropdown_1 = __webpack_require__(279);
var tabs_1 = __webpack_require__(280);
var nav_dropdown_directive_1 = __webpack_require__(719);
var activate_route_guard_1 = __webpack_require__(366);
var deactivate_route_guard_1 = __webpack_require__(367);
var ng2_charts_1 = __webpack_require__(597);
var sidebar_directive_1 = __webpack_require__(720);
var aside_directive_1 = __webpack_require__(717);
var breadcrumb_component_1 = __webpack_require__(718);
var ng2_bootstrap_1 = __webpack_require__(596);
// Routing Module
var app_routing_1 = __webpack_require__(714);
var http_1 = __webpack_require__(120);
// Layouts
var full_layout_component_1 = __webpack_require__(368);
var simple_layout_component_1 = __webpack_require__(369);
var login_component_1 = __webpack_require__(370);
var register_component_1 = __webpack_require__(371);
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
            dropdown_1.DropdownModule.forRoot(),
            tabs_1.TabsModule.forRoot(),
            ng2_charts_1.ChartsModule,
            ng2_bootstrap_1.PaginationModule.forRoot(),
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            full_layout_component_1.FullLayoutComponent,
            simple_layout_component_1.SimpleLayoutComponent,
            nav_dropdown_directive_1.NAV_DROPDOWN_DIRECTIVES,
            breadcrumb_component_1.BreadcrumbsComponent,
            sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES,
            aside_directive_1.AsideToggleDirective,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
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

/***/ 714:
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
var http_1 = __webpack_require__(120);
// Layouts
var full_layout_component_1 = __webpack_require__(368);
var simple_layout_component_1 = __webpack_require__(369);
var login_component_1 = __webpack_require__(370);
var register_component_1 = __webpack_require__(371);
var activate_route_guard_1 = __webpack_require__(366);
var deactivate_route_guard_1 = __webpack_require__(367);
exports.routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
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
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            },
            {
                path: 'icons',
                loadChildren: './icons/icons.module#IconsModule'
            },
            {
                path: 'widgets',
                loadChildren: './widgets/widgets.module#WidgetsModule'
            },
            {
                path: 'charts',
                loadChildren: './chartjs/chartjs.module#ChartJSModule'
            },
            {
                path: 'crop',
                loadChildren: './crop-management/crop-management.module#CropManagementModule'
                // loadChildren: './chartjs/chartjs.module#ChartJSModule'        
            },
            {
                path: 'input',
                loadChildren: './input-management/input-management.module#InputManagementModule'
                // loadChildren: './chartjs/chartjs.module#ChartJSModule'        
            },
            {
                path: 'user',
                loadChildren: './user-management/user-management.module#UserManagementModule'
                // loadChildren: './chartjs/chartjs.module#ChartJSModule'        
            },
            {
                path: 'equipment',
                loadChildren: './equipment-management/equipment-management.module#EquipmentManagementModule'
            },
            {
                path: 'land',
                loadChildren: './land-management/land-management.module#LandManagementModule'
            }
        ]
    },
    {
        path: 'pages',
        component: simple_layout_component_1.SimpleLayoutComponent,
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: '',
                loadChildren: './pages/pages.module#PagesModule',
            }
        ]
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        canActivate: [activate_route_guard_1.ActiveRouteGuard]
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent,
        canActivate: [activate_route_guard_1.ActiveRouteGuard]
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

/***/ 715:
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
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.host = "https://efarmapi.herokuapp.com";
        // private host = "http://localhost:1337";
        this.port = 3000;
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
        return this.http.post(this.host + '/oauth/token', body, { headers: headers }).map(function (res) { return res.json(); });
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

/***/ 716:
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
var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
        // private host = "https://efarmapi.herokuapp.com";
        this.host = "http://localhost:1337";
    }
    RegisterService.prototype.register = function (user) {
        var headers = new http_1.Headers();
        var username = user.username;
        var password = user.password;
        var email = user.email;
        var urlSearchParams = new http_1.URLSearchParams();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        urlSearchParams.append('email', email);
        var body = urlSearchParams.toString();
        return this.http.post(this.host + '/users/register', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    return RegisterService;
}());
RegisterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], RegisterService);
exports.RegisterService = RegisterService;
var _a;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/register.service.js.map

/***/ }),

/***/ 717:
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

/***/ 718:
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
__webpack_require__(571);
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

/***/ 719:
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

/***/ 720:
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

/***/ 721:
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

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(122)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(122)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 410,
	"./af.js": 410,
	"./ar": 416,
	"./ar-dz": 411,
	"./ar-dz.js": 411,
	"./ar-ly": 412,
	"./ar-ly.js": 412,
	"./ar-ma": 413,
	"./ar-ma.js": 413,
	"./ar-sa": 414,
	"./ar-sa.js": 414,
	"./ar-tn": 415,
	"./ar-tn.js": 415,
	"./ar.js": 416,
	"./az": 417,
	"./az.js": 417,
	"./be": 418,
	"./be.js": 418,
	"./bg": 419,
	"./bg.js": 419,
	"./bn": 420,
	"./bn.js": 420,
	"./bo": 421,
	"./bo.js": 421,
	"./br": 422,
	"./br.js": 422,
	"./bs": 423,
	"./bs.js": 423,
	"./ca": 424,
	"./ca.js": 424,
	"./cs": 425,
	"./cs.js": 425,
	"./cv": 426,
	"./cv.js": 426,
	"./cy": 427,
	"./cy.js": 427,
	"./da": 428,
	"./da.js": 428,
	"./de": 430,
	"./de-at": 429,
	"./de-at.js": 429,
	"./de.js": 430,
	"./dv": 431,
	"./dv.js": 431,
	"./el": 432,
	"./el.js": 432,
	"./en-au": 433,
	"./en-au.js": 433,
	"./en-ca": 434,
	"./en-ca.js": 434,
	"./en-gb": 435,
	"./en-gb.js": 435,
	"./en-ie": 436,
	"./en-ie.js": 436,
	"./en-nz": 437,
	"./en-nz.js": 437,
	"./eo": 438,
	"./eo.js": 438,
	"./es": 440,
	"./es-do": 439,
	"./es-do.js": 439,
	"./es.js": 440,
	"./et": 441,
	"./et.js": 441,
	"./eu": 442,
	"./eu.js": 442,
	"./fa": 443,
	"./fa.js": 443,
	"./fi": 444,
	"./fi.js": 444,
	"./fo": 445,
	"./fo.js": 445,
	"./fr": 448,
	"./fr-ca": 446,
	"./fr-ca.js": 446,
	"./fr-ch": 447,
	"./fr-ch.js": 447,
	"./fr.js": 448,
	"./fy": 449,
	"./fy.js": 449,
	"./gd": 450,
	"./gd.js": 450,
	"./gl": 451,
	"./gl.js": 451,
	"./he": 452,
	"./he.js": 452,
	"./hi": 453,
	"./hi.js": 453,
	"./hr": 454,
	"./hr.js": 454,
	"./hu": 455,
	"./hu.js": 455,
	"./hy-am": 456,
	"./hy-am.js": 456,
	"./id": 457,
	"./id.js": 457,
	"./is": 458,
	"./is.js": 458,
	"./it": 459,
	"./it.js": 459,
	"./ja": 460,
	"./ja.js": 460,
	"./jv": 461,
	"./jv.js": 461,
	"./ka": 462,
	"./ka.js": 462,
	"./kk": 463,
	"./kk.js": 463,
	"./km": 464,
	"./km.js": 464,
	"./ko": 465,
	"./ko.js": 465,
	"./ky": 466,
	"./ky.js": 466,
	"./lb": 467,
	"./lb.js": 467,
	"./lo": 468,
	"./lo.js": 468,
	"./lt": 469,
	"./lt.js": 469,
	"./lv": 470,
	"./lv.js": 470,
	"./me": 471,
	"./me.js": 471,
	"./mi": 472,
	"./mi.js": 472,
	"./mk": 473,
	"./mk.js": 473,
	"./ml": 474,
	"./ml.js": 474,
	"./mr": 475,
	"./mr.js": 475,
	"./ms": 477,
	"./ms-my": 476,
	"./ms-my.js": 476,
	"./ms.js": 477,
	"./my": 478,
	"./my.js": 478,
	"./nb": 479,
	"./nb.js": 479,
	"./ne": 480,
	"./ne.js": 480,
	"./nl": 482,
	"./nl-be": 481,
	"./nl-be.js": 481,
	"./nl.js": 482,
	"./nn": 483,
	"./nn.js": 483,
	"./pa-in": 484,
	"./pa-in.js": 484,
	"./pl": 485,
	"./pl.js": 485,
	"./pt": 487,
	"./pt-br": 486,
	"./pt-br.js": 486,
	"./pt.js": 487,
	"./ro": 488,
	"./ro.js": 488,
	"./ru": 489,
	"./ru.js": 489,
	"./se": 490,
	"./se.js": 490,
	"./si": 491,
	"./si.js": 491,
	"./sk": 492,
	"./sk.js": 492,
	"./sl": 493,
	"./sl.js": 493,
	"./sq": 494,
	"./sq.js": 494,
	"./sr": 496,
	"./sr-cyrl": 495,
	"./sr-cyrl.js": 495,
	"./sr.js": 496,
	"./ss": 497,
	"./ss.js": 497,
	"./sv": 498,
	"./sv.js": 498,
	"./sw": 499,
	"./sw.js": 499,
	"./ta": 500,
	"./ta.js": 500,
	"./te": 501,
	"./te.js": 501,
	"./tet": 502,
	"./tet.js": 502,
	"./th": 503,
	"./th.js": 503,
	"./tl-ph": 504,
	"./tl-ph.js": 504,
	"./tlh": 505,
	"./tlh.js": 505,
	"./tr": 506,
	"./tr.js": 506,
	"./tzl": 507,
	"./tzl.js": 507,
	"./tzm": 509,
	"./tzm-latn": 508,
	"./tzm-latn.js": 508,
	"./tzm.js": 509,
	"./uk": 510,
	"./uk.js": 510,
	"./uz": 511,
	"./uz.js": 511,
	"./vi": 512,
	"./vi.js": 512,
	"./x-pseudo": 513,
	"./x-pseudo.js": 513,
	"./yo": 514,
	"./yo.js": 514,
	"./zh-cn": 515,
	"./zh-cn.js": 515,
	"./zh-hk": 516,
	"./zh-hk.js": 516,
	"./zh-tw": 517,
	"./zh-tw.js": 517
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
webpackContext.id = 874;


/***/ }),

/***/ 898:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\r\n  <button class=\"navbar-toggler mobile-sidebar-toggler hidden-lg-up\" type=\"button\">&#9776;</button>\r\n  <a class=\"navbar-brand hidden-md-down\" href=\"#\"></a>\r\n \r\n  <ul class=\"nav navbar-nav hidden-md-down\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link navbar-toggler sidebar-toggler\" href=\"#\">&#9776;</a>\r\n    </li>\r\n    <!--<li class=\"nav-item px-1\">\r\n      <a class=\"nav-link\" href=\"#\">Dashboard</a>\r\n    </li>\r\n    <li class=\"nav-item px-1\">\r\n      <a class=\"nav-link\" href=\"#\">Users</a>\r\n    </li>\r\n    <li class=\"nav-item px-1\">\r\n      <a class=\"nav-link\" href=\"#\">Settings</a>\r\n    </li>-->\r\n\t  <li>\r\n\t  \t\r\n\t  \t<form action=\"#\" method=\"get\" class=\"topsearch-form pull-left\">\r\n        <div class=\"input-group\">\r\n          <input name=\"q\" class=\"form-control\" placeholder=\"Search...\" type=\"text\">\r\n          <span class=\"input-group-btn\">\r\n          <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i> </button>\r\n          </span> </div>\r\n      </form>\r\n      \r\n\t  </li>\r\n  </ul>\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n   \r\n\t <li class=\"nav-item dropdown\" dropdown (onToggle)=\"toggled($event)\">\r\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>\r\n          All Market\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\" id=\"navbarDropdownMenuLink\">\r\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n        </div>\r\n      </li>\r\n   \r\n   \r\n   \r\n   \r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bell\"></i>\r\n      <span class=\"badge badge-pill badge-danger\"><!-- 5 --></span></a>\r\n    </li>\r\n   \r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-envelope\"></i>\r\n\t\t  <span class=\"badge badge-pill badge-danger\"><!-- 11 --></span>\r\n       </a>\r\n    </li>\r\n    <li class=\"nav-item dropdown removedropdwn\" dropdown (onToggle)=\"toggled($event)\">\r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>\r\n          <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n\t\t  <i class=\"fa fa-ellipsis-v\"></i> \r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\">\r\n\r\n        <!-- <div class=\"dropdown-header text-center\"><strong>Account</strong></div>\r\n        <a class=\"dropdown-item\" href=\"#\">\r\n        <i class=\"fa fa-envelope-o\"></i> Messages\r\n        <span class=\"badge badge-success\">42</span>\r\n        </a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a> -->\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\r\n        <div class=\"divider\"></div>\r\n        <a class=\"dropdown-item\" (click)=\"logout()\" href=\"#\"><i class=\"fa fa-lock\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n   <!-- <li class=\"nav-item hidden-md-down\">\r\n      <a class=\"nav-link navbar-toggler aside-menu-toggler\" href=\"#\">&#9776;</a>\r\n    </li>-->\r\n  </ul>\r\n</header>\r\n\r\n<div class=\"app-body\">\r\n  <div class=\"sidebar\">\r\n    <nav class=\"sidebar-nav\">\r\n      <ul class=\"nav\">\r\n        <li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-dashboard\"></i><span> Dashboard</span></a>\r\n        </li>\r\n        \r\n       \r\n        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\r\n\t\t\t<a class=\"nav-link nav-dropdown-toggle\" href=\"#\" ><i class=\"icon-Shape-13\"></i><span>Crop</span></a>\r\n          <ul class=\"nav-dropdown-items\">\r\n            <li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/crop/list']\"><i class=\"fa fa-th-list\"></i><small> Crop Listing</small></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/crop/add']\"><i class=\"fa fa-plus\"></i> <small>Add Crop</small></a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\r\n      <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" ><i class=\"icon-Shape-18\"></i><span>Inputs</span></a>\r\n          <ul class=\"nav-dropdown-items\">\r\n            <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/input/list']\"><i class=\"fa fa-th-list\"></i><span> Input Listing</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/input/add']\"><i class=\"fa fa-plus\"></i> <span>Add input</span></a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\r\n      <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" ><i class=\"icon-Shape-19\"></i><span>Equipment</span></a>\r\n          <ul class=\"nav-dropdown-items\">\r\n            <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/equipment/list']\"><i class=\"fa fa-th-list\"></i><span> Equipment Listing</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/equipment/add']\"><i class=\"fa fa-plus\"></i> <span>Add Equipment</span></a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\r\n      <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" ><i class=\"icon-Shape-21\"></i><span>Lands</span></a>\r\n          <ul class=\"nav-dropdown-items\">\r\n            <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/land/list']\"><i class=\"fa fa-th-list\"></i><span> Lands Listing</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/land/add']\"><i class=\"fa fa-plus\"></i> <span>Add Lands</span></a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\r\n      <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" ><i class=\"fa fa-user\"></i><span>Users</span></a>\r\n          <ul class=\"nav-dropdown-items\">\r\n            <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/user/list']\"><i class=\"fa fa-th-list\"></i><span> User Listing</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/user/add']\"><i class=\"fa fa-plus\"></i> <span>Add User</span></a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n       <!--  <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\r\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-puzzle\"></i> Components</a>\r\n          <ul class=\"nav-dropdown-items\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/buttons']\"><i class=\"icon-puzzle\"></i> Buttons</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/social-buttons']\"><i class=\"icon-puzzle\"></i> Social Buttons</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/cards']\"><i class=\"icon-puzzle\"></i> Cards</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/forms']\"><i class=\"icon-puzzle\"></i> Forms</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/modals']\"><i class=\"icon-puzzle\"></i> Modals</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/switches']\"><i class=\"icon-puzzle\"></i> Switches</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tables']\"><i class=\"icon-puzzle\"></i> Tables</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tabs']\"><i class=\"icon-puzzle\"></i> Tabs</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\r\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-star\"></i> Icons</a>\r\n          <ul class=\"nav-dropdown-items\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/font-awesome']\"><i class=\"icon-star\"></i> Font Awesome</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/simple-line-icons']\"><i class=\"icon-star\"></i> Simple Line Icons</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/widgets']\"><i class=\"icon-calculator\"></i> Widgets <span class=\"badge badge-info\">NEW</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/charts']\"><i class=\"icon-pie-chart\"></i> Charts</a>\r\n        </li>\r\n        <li class=\"divider\"></li>\r\n        <li class=\"nav-title\">\r\n          Extras\r\n        </li>\r\n        <li class=\"nav-item nav-dropdown\">\r\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-star\"></i> Pages</a>\r\n          <ul class=\"nav-dropdown-items\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"><i class=\"icon-star\"></i> Login</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\"><i class=\"icon-star\"></i> Register</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/404']\"><i class=\"icon-star\"></i> Error 404</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/500']\"><i class=\"icon-star\"></i> Error 500</a>\r\n            </li>\r\n          </ul>\r\n        </li> -->\r\n        \r\n      </ul>\r\n    </nav>\r\n  </div>\r\n\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n\r\n    <!-- Breadcrumb -->\r\n   <!-- <ol class=\"breadcrumb\">\r\n      <breadcrumbs></breadcrumbs>\r\n      \r\n      <!-- Breadcrumb Menu\r\n      <li class=\"breadcrumb-menu hidden-md-down\">\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n          <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\r\n          <a class=\"btn btn-secondary\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\r\n          <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\r\n        </div>\r\n      </li>\r\n      \r\n    </ol>-->\r\n\r\n    <div class=\"mainarea\">\r\n        <!-- top header -->\r\n        <div class=\"top-nav-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-2 col-6\"> \r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-green\" [routerLink]=\"['/crop/list']\">\r\n                        <div class=\"icon\">                           \r\n                            <i class=\"icon-Shape-13\"></i>\r\n                        </div>\r\n                        <div class=\"inner\">\r\n                          <p>Crops</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col -->\r\n                <div class=\"col-lg-2 col-6\"> \r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-aqua\" [routerLink]=\"['/input/list']\">\r\n                        <div class=\"inner\">\r\n                            <p>Inputs</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"icon-Shape-18\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col -->\r\n                <div class=\"col-lg-2 col-6\"> \r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-red\" [routerLink]=\"['/equipment/list']\">\r\n                        <div class=\"inner\">\r\n                            <p>Equipments</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"icon-Shape-19\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col -->\r\n                <div class=\"col-lg-2 col-6\"> \r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-yellow\" [routerLink]=\"['/land/list']\">\r\n                        <div class=\"inner\">\r\n                          <p>Lands</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"icon-Shape-21\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col --> \r\n\r\n                <!-- col -->\r\n                <div class=\"col-lg-2 col-6\"> \r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-purple\">\r\n                        <div class=\"inner\">\r\n                          <p>Services</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"icon-Shape-22\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col --> \r\n\r\n                <!-- col -->\r\n                <div class=\"col-lg-2 col-6\">\r\n                    <div class=\"small-box bg-teal\" [routerLink]=\"['/user/list']\">\r\n                        <div class=\"inner\">\r\n                            <p>Users</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"fa fa-user\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col --> \r\n            </div>\r\n        </div>\r\n        <div class=\"main-content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div><!-- /.conainer-fluid -->\r\n  </main>\r\n\r\n  <aside class=\"aside-menu\">\r\n    <tabset>\r\n      <tab>\r\n        <template tabHeading><i class=\"icon-list\"></i></template>\r\n        <div class=\"callout m-0 py-h text-muted text-center bg-faded text-uppercase\">\r\n          <small><b>Today</b></small>\r\n        </div>\r\n        <hr class=\"transparent mx-1 my-0\">\r\n        <div class=\"callout callout-warning m-0 py-1\">\r\n          <div class=\"avatar float-right\">\r\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div>Meeting with <strong>Lucas</strong></div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\r\n        </div>\r\n        <hr class=\"mx-1 my-0\">\r\n        <div class=\"callout callout-info m-0 py-1\">\r\n          <div class=\"avatar float-right\">\r\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div>Skype with <strong>Megan</strong></div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line </small>\r\n        </div>\r\n        <hr class=\"transparent mx-1 my-0\">\r\n        <div class=\"callout m-0 py-h text-muted text-center bg-faded text-uppercase\">\r\n          <small><b>Tomorrow</b></small>\r\n        </div>\r\n        <hr class=\"transparent mx-1 my-0\">\r\n        <div class=\"callout callout-danger m-0 py-1\">\r\n          <div>New UI Project - <strong>deadline</strong></div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\r\n          <div class=\"avatars-stack mt-h\">\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mx-1 my-0\">\r\n        <div class=\"callout callout-success m-0 py-1\">\r\n          <div><strong>#10 Startups.Garden</strong> Meetup</div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\r\n        </div>\r\n        <hr class=\"mx-1 my-0\">\r\n        <div class=\"callout callout-primary m-0 py-1\">\r\n          <div><strong>Team meeting</strong></div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\r\n          <div class=\"avatars-stack mt-h\">\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mx-1 my-0\">\r\n      </tab>\r\n      <tab>\r\n        <template tabHeading><i class=\"icon-speech\"></i></template>\r\n        <div class=\"p-1\">\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n      <tab>\r\n        <template tabHeading><i class=\"icon-settings\"></i></template>\r\n        <div class=\"p-1\">\r\n          <h6>Settings</h6>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-2\">\r\n              <small><b>Option 1</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-1\">\r\n              <small><b>Option 2</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\">\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-1\">\r\n              <small><b>Option 3</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\">\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-1\">\r\n              <small><b>Option 4</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <hr>\r\n          <h6>System Utilization</h6>\r\n\r\n          <div class=\"text-uppercase mb-q mt-2\"><small><b>CPU Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\r\n\r\n          <div class=\"text-uppercase mb-q mt-h\"><small><b>Memory Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">11444GB/16384MB</small>\r\n\r\n          <div class=\"text-uppercase mb-q mt-h\"><small><b>SSD 1 Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">243GB/256GB</small>\r\n\r\n          <div class=\"text-uppercase mb-q mt-h\"><small><b>SSD 2 Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">25GB/256GB</small>\r\n        </div>\r\n      </tab>\r\n    </tabset>\r\n  </aside>\r\n</div>\r\n\r\n<footer class=\"app-footer\">\r\n  <a href=\"http://www.smartdatainc.com\">eFarm</a> &copy; 2017 smartData.\r\n  <span class=\"float-right\">Powered by <a href=\"http://www.smartdatainc.com\">smartData</a></span>\r\n</footer>\r\n"

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

module.exports = "<!-- Loader div -->\n<div *ngIf=\"isPageLoading\" class=\"overlayloader\">     \n     <div class=\"loader\"></div>\n</div> \n\n<section class=\"login-page overlay\"></section>\n<div class=\"login-box\">\n    <!-- /.login-logo -->\n    <div class=\"login-box-body\">\n        <div class=\"login-logo\">\n            <img src=\"assets/img/logo.png\" alt=\"logo\">\n        </div>\n        <form role=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n            <div class=\"form-group has-feedback\">\n                <label>Email</label>\n                <!-- <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>-->\n                <input type=\"text\" name=\"username\" class=\"form-control\" [(ngModel)]=\"user.username\" (ngModelChange)=\"checkemail(user.username)\" #username=\"ngModel\" autofocus required>\n                <li *ngIf=\"username.errors && username.touched\">\n                    <span class=\"text-danger\" [hidden]=\"!username.errors.required\">Email is required</span>\n                </li>\n                <li *ngIf=\"!username.errors && !valid_email\">\n                    <span class=\"text-danger\">Email id is not valid</span>\n                </li>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <label>Password</label>\n                <!--<span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>-->\n                <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required>\n                <li *ngIf=\"password.errors && password.touched\">\n                    <span class=\"text-danger\" [hidden]=\"!password.errors.required\">Password is required</span>\n                </li>\n\n\n                 <li *ngIf=\"err_message\">\n                <span class=\"text-danger\">\n                    {{err_message}}\n                </span>\n            </li>\n\n\n\n            </div>\n           \n            <div class=\"row\">\n                <div class=\"col-sm-12 col-12\">\n                    <button type=\"submit\" class=\"btn btn-success btn-block btn-flat\" [disabled]=\"!loginForm.valid || !valid_email\">Login</button>\n                </div>\n            </div>\n            <!-- <div class=\"row\">\n                <div class=\"col-sm-6 col-6\">\n                    <div class=\"custome-check loginpage\">\n                        <input id=\"option5\" name=\"status\" type=\"checkbox\">\n                        <label for=\"option5\">Remember me</label>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-6\">\n                    <a class=\"forgotlink\" href=\"#\">Forgot password</a>\n                </div>\n                <div class=\"col-sm-12 col-12 text-center\">\n                    Don't have an account. <a class=\"\" routerLinkActive=\"active\" [routerLink]=\"['/register']\">Click here</a>\n                </div>\n            </div> -->\n        </form>\n    </div>\n    <!-- /.login-box-body -->\n</div>\n"

/***/ }),

/***/ 900:
/***/ (function(module, exports) {

module.exports = "<section class=\"login-page overlay\"></section>\n<div class=\"register-box\">\n    <!-- /.login-logo -->\n    <div class=\"login-box-body\">\n        <div class=\"login-logo\">\n            <img src=\"assets/img/logo.png\" alt=\"logo\">\n        </div>\n        <form role=\"form\" (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\">\n            <div class=\"form-group has-feedback\">\n                <label>Full name</label>\n                <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"user.name\" #name=\"ngModel\" required>\n                <li *ngIf=\"name.errors && name.touched\">\n                    <span class=\"text-danger\" [hidden]=\"!name.errors.required\">Full Name is required</span>\n                </li>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <label>Email</label>\n                <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n                <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" (ngModelChange)=\"checkemail(user.email)\" #email=\"ngModel\" required>\n                <li *ngIf=\"email.errors && email.touched && valid_email\">\n                    <span class=\"text-danger\" [hidden]=\"!email.errors.required\">Email is required</span>\n                </li>\n                <li *ngIf=\"!valid_email\">\n                    <span class=\"text-danger\">Email id is not valid</span>\n                </li>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <label>Password</label>\n                <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" #password=\"ngModel\" minlength=\"8\" required>\n                <li *ngIf=\"password.errors && password.touched\">\n                    <span class=\"text-danger\" [hidden]=\"!password.errors.required\">Password is required</span>\n                    <span class=\"text-danger\" [hidden]=\"!password.errors.minlength\">Minimum 8 character is Required</span>\n                </li>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <label>Confirm Password</label>\n                <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                <input type=\"password\" name=\"confirmPassword\" class=\"form-control\" [(ngModel)]=\"user.confirmPassword\" minlength=\"8\" #confirmPassword=\"ngModel\" required>\n                <li *ngIf=\"confirmPassword.errors && confirmPassword.touched\">\n                    <span class=\"text-danger\" [hidden]=\"!confirmPassword.errors.required\">Confirm Password is required</span>\n                    <span class=\"text-danger\" [hidden]=\"!confirmPassword.errors.minlength\">Minimum 8 character Required</span>\n                </li>\n                <li *ngIf=\"confirmPassword.touched && user.confirmPassword != user.password\" [hidden]=\"confirmPassword.errors && confirmPassword.errors.required\">\n                    <span class=\"text-danger\">Password and confirm password not matched..</span>\n                </li>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <button type=\"submit\" class=\"btn btn-success btn-block btn-flat\" [disabled]=\"!registerForm.valid || (user.confirmPassword != user.password)\">Register</button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-6 col-sm-6\">\n                    <div class=\"custome-check loginpage\">\n                        <input id=\"option5\" name=\"terms\" type=\"checkbox\" #terms=\"ngModel\" [(ngModel)]=\"term\" required>\n                        <label for=\"option5\">I agree to the terms.</label>\n                        <li *ngIf=\"term.errors && term.touched\">\n                            <span class=\"text-danger\" [hidden]=\"!term.errors.required\">Plese Select term and conditions</span>\n                        </li>\n                    </div>\n                </div>\n                <!-- /.col -->\n                <div class=\"col-6 col-sm-6 text-right\">\n                    <a class=\"forgotlink\" routerLinkActive=\"active\" [routerLink]=\"['/login']\">I already have membership.</a>\n                </div>\n                <!-- /.col -->\n            </div>\n        </form>\n    </div>\n    <!-- /.login-box-body -->\n</div>\n\n\n<!-- <div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"card mx-2\">\n          <div class=\"card-block p-2\">\n            <h1>Register</h1>\n            <p class=\"text-muted\">Create your account</p>\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n            </div>\n\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\">@</span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n            </div>\n\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n            </div>\n\n            <div class=\"input-group mb-2\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\">\n            </div>\n\n            <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\n          </div>\n          <div class=\"card-footer p-2\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\n              </div>\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n -->\n"

/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(591);


/***/ })

},[931]);
//# sourceMappingURL=main.bundle.js.map
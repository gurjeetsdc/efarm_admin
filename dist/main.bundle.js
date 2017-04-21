webpackJsonp([12,16],{

/***/ 380:
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
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/activate-route-guard.js.map

/***/ }),

/***/ 381:
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
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/deactivate-route-guard.js.map

/***/ }),

/***/ 382:
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
        template: __webpack_require__(917)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], FullLayoutComponent);
exports.FullLayoutComponent = FullLayoutComponent;
var _a;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/full-layout.component.js.map

/***/ }),

/***/ 383:
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
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/simple-layout.component.js.map

/***/ }),

/***/ 384:
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
var login_service_1 = __webpack_require__(734);
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
        template: __webpack_require__(918),
        styles: [__webpack_require__(891)],
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _b || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/login.component.js.map

/***/ }),

/***/ 385:
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
var register_service_1 = __webpack_require__(735);
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
        template: __webpack_require__(919),
        styles: [__webpack_require__(892)],
        providers: [register_service_1.RegisterService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof register_service_1.RegisterService !== "undefined" && register_service_1.RegisterService) === "function" && _b || Object])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
var _a, _b;
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/register.component.js.map

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
		1
	],
	"./crop-management/crop-management.module": [
		937,
		5
	],
	"./dashboard/dashboard.module": [
		938,
		9
	],
	"./equipment-management/equipment-management.module": [
		939,
		0
	],
	"./icons/icons.module": [
		940,
		7
	],
	"./input-management/input-management.module": [
		941,
		4
	],
	"./land-management/land-management.module": [
		942,
		3
	],
	"./pages/pages.module": [
		943,
		6
	],
	"./user-management/user-management.module": [
		944,
		2
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
var platform_browser_dynamic_1 = __webpack_require__(701);
var app_module_1 = __webpack_require__(732);
var environment_1 = __webpack_require__(740);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/main.js.map

/***/ }),

/***/ 731:
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
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/app.component.js.map

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(122);
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(17);
var forms_1 = __webpack_require__(27);
var app_component_1 = __webpack_require__(731);
var dropdown_1 = __webpack_require__(285);
var tabs_1 = __webpack_require__(286);
var nav_dropdown_directive_1 = __webpack_require__(738);
var activate_route_guard_1 = __webpack_require__(380);
var deactivate_route_guard_1 = __webpack_require__(381);
var ng2_charts_1 = __webpack_require__(603);
var sidebar_directive_1 = __webpack_require__(739);
var aside_directive_1 = __webpack_require__(736);
var breadcrumb_component_1 = __webpack_require__(737);
var ng2_bootstrap_1 = __webpack_require__(599);
// Routing Module
var app_routing_1 = __webpack_require__(733);
var http_1 = __webpack_require__(121);
// Layouts
var full_layout_component_1 = __webpack_require__(382);
var simple_layout_component_1 = __webpack_require__(383);
var login_component_1 = __webpack_require__(384);
var register_component_1 = __webpack_require__(385);
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
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/app.module.js.map

/***/ }),

/***/ 733:
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
var http_1 = __webpack_require__(121);
// Layouts
var full_layout_component_1 = __webpack_require__(382);
var simple_layout_component_1 = __webpack_require__(383);
var login_component_1 = __webpack_require__(384);
var register_component_1 = __webpack_require__(385);
var activate_route_guard_1 = __webpack_require__(380);
var deactivate_route_guard_1 = __webpack_require__(381);
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
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/app.routing.js.map

/***/ }),

/***/ 734:
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
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/login.service.js.map

/***/ }),

/***/ 735:
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
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/register.service.js.map

/***/ }),

/***/ 736:
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
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/aside.directive.js.map

/***/ }),

/***/ 737:
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
__webpack_require__(287);
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
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/breadcrumb.component.js.map

/***/ }),

/***/ 738:
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
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/nav-dropdown.directive.js.map

/***/ }),

/***/ 739:
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
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/sidebar.directive.js.map

/***/ }),

/***/ 740:
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
//# sourceMappingURL=/home/gurjeets/workingProjects/projects/efarm/code/efarm_admin/src/environment.js.map

/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(123)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(123)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 424,
	"./af.js": 424,
	"./ar": 430,
	"./ar-dz": 425,
	"./ar-dz.js": 425,
	"./ar-ly": 426,
	"./ar-ly.js": 426,
	"./ar-ma": 427,
	"./ar-ma.js": 427,
	"./ar-sa": 428,
	"./ar-sa.js": 428,
	"./ar-tn": 429,
	"./ar-tn.js": 429,
	"./ar.js": 430,
	"./az": 431,
	"./az.js": 431,
	"./be": 432,
	"./be.js": 432,
	"./bg": 433,
	"./bg.js": 433,
	"./bn": 434,
	"./bn.js": 434,
	"./bo": 435,
	"./bo.js": 435,
	"./br": 436,
	"./br.js": 436,
	"./bs": 437,
	"./bs.js": 437,
	"./ca": 438,
	"./ca.js": 438,
	"./cs": 439,
	"./cs.js": 439,
	"./cv": 440,
	"./cv.js": 440,
	"./cy": 441,
	"./cy.js": 441,
	"./da": 442,
	"./da.js": 442,
	"./de": 444,
	"./de-at": 443,
	"./de-at.js": 443,
	"./de.js": 444,
	"./dv": 445,
	"./dv.js": 445,
	"./el": 446,
	"./el.js": 446,
	"./en-au": 447,
	"./en-au.js": 447,
	"./en-ca": 448,
	"./en-ca.js": 448,
	"./en-gb": 449,
	"./en-gb.js": 449,
	"./en-ie": 450,
	"./en-ie.js": 450,
	"./en-nz": 451,
	"./en-nz.js": 451,
	"./eo": 452,
	"./eo.js": 452,
	"./es": 454,
	"./es-do": 453,
	"./es-do.js": 453,
	"./es.js": 454,
	"./et": 455,
	"./et.js": 455,
	"./eu": 456,
	"./eu.js": 456,
	"./fa": 457,
	"./fa.js": 457,
	"./fi": 458,
	"./fi.js": 458,
	"./fo": 459,
	"./fo.js": 459,
	"./fr": 462,
	"./fr-ca": 460,
	"./fr-ca.js": 460,
	"./fr-ch": 461,
	"./fr-ch.js": 461,
	"./fr.js": 462,
	"./fy": 463,
	"./fy.js": 463,
	"./gd": 464,
	"./gd.js": 464,
	"./gl": 465,
	"./gl.js": 465,
	"./he": 466,
	"./he.js": 466,
	"./hi": 467,
	"./hi.js": 467,
	"./hr": 468,
	"./hr.js": 468,
	"./hu": 469,
	"./hu.js": 469,
	"./hy-am": 470,
	"./hy-am.js": 470,
	"./id": 471,
	"./id.js": 471,
	"./is": 472,
	"./is.js": 472,
	"./it": 473,
	"./it.js": 473,
	"./ja": 474,
	"./ja.js": 474,
	"./jv": 475,
	"./jv.js": 475,
	"./ka": 476,
	"./ka.js": 476,
	"./kk": 477,
	"./kk.js": 477,
	"./km": 478,
	"./km.js": 478,
	"./ko": 479,
	"./ko.js": 479,
	"./ky": 480,
	"./ky.js": 480,
	"./lb": 481,
	"./lb.js": 481,
	"./lo": 482,
	"./lo.js": 482,
	"./lt": 483,
	"./lt.js": 483,
	"./lv": 484,
	"./lv.js": 484,
	"./me": 485,
	"./me.js": 485,
	"./mi": 486,
	"./mi.js": 486,
	"./mk": 487,
	"./mk.js": 487,
	"./ml": 488,
	"./ml.js": 488,
	"./mr": 489,
	"./mr.js": 489,
	"./ms": 491,
	"./ms-my": 490,
	"./ms-my.js": 490,
	"./ms.js": 491,
	"./my": 492,
	"./my.js": 492,
	"./nb": 493,
	"./nb.js": 493,
	"./ne": 494,
	"./ne.js": 494,
	"./nl": 496,
	"./nl-be": 495,
	"./nl-be.js": 495,
	"./nl.js": 496,
	"./nn": 497,
	"./nn.js": 497,
	"./pa-in": 498,
	"./pa-in.js": 498,
	"./pl": 499,
	"./pl.js": 499,
	"./pt": 501,
	"./pt-br": 500,
	"./pt-br.js": 500,
	"./pt.js": 501,
	"./ro": 502,
	"./ro.js": 502,
	"./ru": 503,
	"./ru.js": 503,
	"./se": 504,
	"./se.js": 504,
	"./si": 505,
	"./si.js": 505,
	"./sk": 506,
	"./sk.js": 506,
	"./sl": 507,
	"./sl.js": 507,
	"./sq": 508,
	"./sq.js": 508,
	"./sr": 510,
	"./sr-cyrl": 509,
	"./sr-cyrl.js": 509,
	"./sr.js": 510,
	"./ss": 511,
	"./ss.js": 511,
	"./sv": 512,
	"./sv.js": 512,
	"./sw": 513,
	"./sw.js": 513,
	"./ta": 514,
	"./ta.js": 514,
	"./te": 515,
	"./te.js": 515,
	"./tet": 516,
	"./tet.js": 516,
	"./th": 517,
	"./th.js": 517,
	"./tl-ph": 518,
	"./tl-ph.js": 518,
	"./tlh": 519,
	"./tlh.js": 519,
	"./tr": 520,
	"./tr.js": 520,
	"./tzl": 521,
	"./tzl.js": 521,
	"./tzm": 523,
	"./tzm-latn": 522,
	"./tzm-latn.js": 522,
	"./tzm.js": 523,
	"./uk": 524,
	"./uk.js": 524,
	"./uz": 525,
	"./uz.js": 525,
	"./vi": 526,
	"./vi.js": 526,
	"./x-pseudo": 527,
	"./x-pseudo.js": 527,
	"./yo": 528,
	"./yo.js": 528,
	"./zh-cn": 529,
	"./zh-cn.js": 529,
	"./zh-hk": 530,
	"./zh-hk.js": 530,
	"./zh-tw": 531,
	"./zh-tw.js": 531
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
webpackContext.id = 893;


/***/ }),

/***/ 917:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\r\n  <button class=\"navbar-toggler mobile-sidebar-toggler hidden-lg-up\" type=\"button\">&#9776;</button>\r\n  <a class=\"navbar-brand hidden-md-down\" href=\"#\"></a>\r\n \r\n  <ul class=\"nav navbar-nav hidden-md-down width\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link navbar-toggler sidebar-toggler\" href=\"#\">&#9776;</a>\r\n    </li>\r\n\t  <li class=\"search\">\r\n\t  \t\r\n\t  \t<form action=\"#\" method=\"get\" class=\"topsearch-form pull-left\">\r\n        <div class=\"input-group\">\r\n          <input name=\"q\" class=\"form-control\" placeholder=\"Search here\" type=\"text\">\r\n          <span class=\"input-group-btn\">\r\n          <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i> </button>\r\n          </span> </div>\r\n      </form>\r\n      \r\n\t  </li>\r\n  </ul>\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n   \r\n\t <li class=\"nav-item dropdown\" dropdown (onToggle)=\"toggled($event)\">\r\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>\r\n          All Market\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\" id=\"navbarDropdownMenuLink\">\r\n          <a class=\"dropdown-item\" href=\"JavaScript:Void(0);\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"JavaScript:Void(0);\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"JavaScript:Void(0);\">Something else here</a>\r\n        </div>\r\n      </li>\r\n   \r\n   \r\n   \r\n   \r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"JavaScript:Void(0);\"><i class=\"fa fa-bell\"></i>\r\n      <span class=\"badge badge-pill badge-danger\"><!-- 5 --></span></a>\r\n    </li>\r\n   \r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"JavaScript:Void(0);\"><i class=\"fa fa-envelope\"></i>\r\n\t\t  <span class=\"badge badge-pill badge-danger\"><!-- 11 --></span>\r\n       </a>\r\n    </li>\r\n    <li class=\"nav-item dropdown removedropdwn\" dropdown (onToggle)=\"toggled($event)\">\r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>\r\n          <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n\t\t  <i class=\"fa fa-ellipsis-v\"></i> \r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\">\r\n        <a class=\"dropdown-item\" href=\"JavaScript:Void(0);\"><i class=\"fa fa-user\"></i> Profile</a>\r\n        <a class=\"dropdown-item\" href=\"JavaScript:Void(0);\"><i class=\"fa fa-wrench\"></i> Setting</a>\r\n        <div class=\"divider\"></div>\r\n        <a class=\"dropdown-item\" (click)=\"logout()\" href=\"#\"><i class=\"fa fa-lock\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</header>\r\n\r\n<div class=\"app-body\">\r\n  <div class=\"sidebar\">\r\n    <nav class=\"sidebar-nav\">\r\n      <ul class=\"nav panel-body\">\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" title=\"Dashboard\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-dashboard\"></i><span> Dashboard</span></a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"listing.html\" title=\"Logistic Partners\"> <i class=\"icon-logistic-partner\"></i> <span>Logistic Partners</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"pages/widgets.html\" title=\"Channel Partners\"> <i class=\"icon-channel-partner\"></i> <span>Channel Partners</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#\" title=\"Orders\"> <i class=\"icon-order\"></i> <span>Orders</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#\" title=\"Settings\"> <i class=\"icon-settings\"></i> <span>Settings</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#\" title=\"Wiislist\"> <i class=\"fa fa-heart-o\"></i> <span>Wishlist</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#\" title=\"SMS\"> <i class=\"icon-sms\"></i> <span>SMS</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"pages/calendar.html\" title=\"Email\"> <i class=\"fa fa-envelope-o\"></i> <span>Email</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"pages/mailbox/mailbox.html\" title=\"Cart\"> <i class=\"icon-cart\"></i> <span>Cart</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"pages/mailbox/mailbox.html\" title=\"Admin Roles\"> <i class=\"icon-user\"></i> <span>Admin Roles</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#\" title=\"Blog\"> <i class=\"icon-post\"></i> <span>Blog</span> </a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"documentation/index.html\" title=\"Reports\"> <i class=\"icon-Shape-1194\"></i> <span>Reports</span></a> </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n\r\n    <!-- Breadcrumb -->\r\n   <!-- <ol class=\"breadcrumb\">\r\n      <breadcrumbs></breadcrumbs>\r\n      \r\n      <!-- Breadcrumb Menu\r\n      <li class=\"breadcrumb-menu hidden-md-down\">\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n          <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\r\n          <a class=\"btn btn-secondary\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\r\n          <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\r\n        </div>\r\n      </li>\r\n      \r\n    </ol>-->\r\n\r\n    <div class=\"mainarea\">\r\n        <!-- top header -->\r\n        <div class=\"top-nav-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-2 col-6\"> \r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-green\" [routerLink]=\"['/crop/list']\">\r\n                        <div class=\"icon\">                           \r\n                            <i class=\"icon-Shape-13\"></i>\r\n                        </div>\r\n                        <div class=\"inner\" title=\"Crops\">\r\n                          <p>Crops</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col -->\r\n                <div class=\"col-lg-2 col-6\"> \r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-aqua\" [routerLink]=\"['/input/list']\">\r\n                        <div class=\"inner\" title=\"Inputs\">\r\n                            <p>Inputs</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"icon-Shape-18\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col -->\r\n                <div class=\"col-lg-2 col-6\"> \r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-red\" [routerLink]=\"['/equipment/list']\">\r\n                        <div class=\"inner\" title=\"Equipments\">\r\n                            <p>Equipments</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"icon-Shape-19\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col -->\r\n                <div class=\"col-lg-2 col-6\"> \r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-yellow\" [routerLink]=\"['/land/list']\">\r\n                        <div class=\"inner\" title=\"Lands\">\r\n                          <p>Lands</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"icon-Shape-21\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col --> \r\n\r\n                <!-- col -->\r\n                <div class=\"col-lg-2 col-6\"> \r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-purple\">\r\n                        <div class=\"inner\" title=\"Services\">\r\n                          <p>Services</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"icon-Shape-22\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col --> \r\n\r\n                <!-- col -->\r\n                <div class=\"col-lg-2 col-6\">\r\n                    <div class=\"small-box bg-teal\" [routerLink]=\"['/user/list']\">\r\n                        <div class=\"inner\" title=\"Users\">\r\n                            <p>Users</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"fa fa-user\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- col --> \r\n            </div>\r\n        </div>\r\n        <div class=\"main-content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div><!-- /.conainer-fluid -->\r\n  </main>\r\n\r\n  <aside class=\"aside-menu\">\r\n    <tabset>\r\n      <tab>\r\n        <template tabHeading><i class=\"icon-list\"></i></template>\r\n        <div class=\"callout m-0 py-h text-muted text-center bg-faded text-uppercase\">\r\n          <small><b>Today</b></small>\r\n        </div>\r\n        <hr class=\"transparent mx-1 my-0\">\r\n        <div class=\"callout callout-warning m-0 py-1\">\r\n          <div class=\"avatar float-right\">\r\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div>Meeting with <strong>Lucas</strong></div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\r\n        </div>\r\n        <hr class=\"mx-1 my-0\">\r\n        <div class=\"callout callout-info m-0 py-1\">\r\n          <div class=\"avatar float-right\">\r\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div>Skype with <strong>Megan</strong></div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line </small>\r\n        </div>\r\n        <hr class=\"transparent mx-1 my-0\">\r\n        <div class=\"callout m-0 py-h text-muted text-center bg-faded text-uppercase\">\r\n          <small><b>Tomorrow</b></small>\r\n        </div>\r\n        <hr class=\"transparent mx-1 my-0\">\r\n        <div class=\"callout callout-danger m-0 py-1\">\r\n          <div>New UI Project - <strong>deadline</strong></div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\r\n          <div class=\"avatars-stack mt-h\">\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mx-1 my-0\">\r\n        <div class=\"callout callout-success m-0 py-1\">\r\n          <div><strong>#10 Startups.Garden</strong> Meetup</div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\r\n        </div>\r\n        <hr class=\"mx-1 my-0\">\r\n        <div class=\"callout callout-primary m-0 py-1\">\r\n          <div><strong>Team meeting</strong></div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\r\n          <div class=\"avatars-stack mt-h\">\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mx-1 my-0\">\r\n      </tab>\r\n      <tab>\r\n        <template tabHeading><i class=\"icon-speech\"></i></template>\r\n        <div class=\"p-1\">\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n      <tab>\r\n        <template tabHeading><i class=\"icon-settings\"></i></template>\r\n        <div class=\"p-1\">\r\n          <h6>Settings</h6>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-2\">\r\n              <small><b>Option 1</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-1\">\r\n              <small><b>Option 2</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\">\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-1\">\r\n              <small><b>Option 3</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\">\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-1\">\r\n              <small><b>Option 4</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <hr>\r\n          <h6>System Utilization</h6>\r\n\r\n          <div class=\"text-uppercase mb-q mt-2\"><small><b>CPU Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\r\n\r\n          <div class=\"text-uppercase mb-q mt-h\"><small><b>Memory Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">11444GB/16384MB</small>\r\n\r\n          <div class=\"text-uppercase mb-q mt-h\"><small><b>SSD 1 Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">243GB/256GB</small>\r\n\r\n          <div class=\"text-uppercase mb-q mt-h\"><small><b>SSD 2 Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">25GB/256GB</small>\r\n        </div>\r\n      </tab>\r\n    </tabset>\r\n  </aside>\r\n</div>\r\n\r\n<!-- <footer class=\"app-footer\">\r\n</footer> -->\r\n"

/***/ }),

/***/ 918:
/***/ (function(module, exports) {

module.exports = "<!-- Loader div -->\n<div *ngIf=\"isPageLoading\" class=\"overlayloader\">\n    <div class=\"loader\"></div>\n</div>\n<section class=\"login-page\"></section>\n<div class=\"login-box\">\n    <!-- /.login-logo -->\n    <div class=\"login-box-body\">\n        <div class=\"login-logo\">\n            <img src=\"assets/img/logo.png\" alt=\"logo\">\n        </div>\n        <form role=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n            <div class=\"text-center\" *ngIf=\"err_message\">\n                <span class=\"text-danger\">\n                    {{err_message}}\n                </span>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <label>Email</label>\n                <input type=\"text\" name=\"username\" class=\"form-control\" [(ngModel)]=\"user.username\" (ngModelChange)=\"checkemail(user.username);err_message=''\" #username=\"ngModel\" autofocus required>\n                <li *ngIf=\"username.errors && username.touched\">\n                    <span class=\"text-danger\" [hidden]=\"!username.errors.required\">Email is required</span>\n                </li>\n                <li *ngIf=\"!username.errors && !valid_email\">\n                    <span class=\"text-danger\">Email id is not valid</span>\n                </li>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <label>Password</label>\n                <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" #password=\"ngModel\" (ngModelChange)=\"err_message=''\" required>\n                <li *ngIf=\"password.errors && password.touched\">\n                    <span class=\"text-danger\" [hidden]=\"!password.errors.required\">Password is required</span>\n                </li>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-12\">\n                    <button type=\"submit\" class=\"btn btn-success btn-block btn-flat\" [disabled]=\"!loginForm.valid || !valid_email\">Login</button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6 col-6\">\n                    <div class=\"custome-check loginpage\">\n                        <input id=\"option5\" name=\"status\" type=\"checkbox\">\n                        <label for=\"option5\">Remember me</label>\n                    </div>\n                </div>\n                <!--  <div class=\"col-sm-6 col-6\">\n                    <a class=\"forgotlink\" href=\"#\">Forgot password</a>\n                </div>\n              <div class=\"col-sm-12 col-12 text-center\">\n                    Don't have an account. <a class=\"\" routerLinkActive=\"active\" [routerLink]=\"['/register']\">Click here</a>\n                </div> -->\n            </div> \n        </form>\n    </div>\n    <!-- /.login-box-body -->\n</div>\n"

/***/ }),

/***/ 919:
/***/ (function(module, exports) {

module.exports = "<section class=\"login-page overlay\"></section>\n<div class=\"register-box\">\n    <!-- /.login-logo -->\n    <div class=\"login-box-body\">\n        <div class=\"login-logo\">\n            <img src=\"assets/img/logo.png\" alt=\"logo\">\n        </div>\n        <form role=\"form\" (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\">\n            <div class=\"form-group has-feedback\">\n                <label>Full name</label>\n                <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"user.name\" #name=\"ngModel\" required>\n                <li *ngIf=\"name.errors && name.touched\">\n                    <span class=\"text-danger\" [hidden]=\"!name.errors.required\">Full Name is required</span>\n                </li>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <label>Email</label>\n                <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n                <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" (ngModelChange)=\"checkemail(user.email)\" #email=\"ngModel\" required>\n                <li *ngIf=\"email.errors && email.touched && valid_email\">\n                    <span class=\"text-danger\" [hidden]=\"!email.errors.required\">Email is required</span>\n                </li>\n                <li *ngIf=\"!valid_email\">\n                    <span class=\"text-danger\">Email id is not valid</span>\n                </li>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <label>Password</label>\n                <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" #password=\"ngModel\" minlength=\"8\" required>\n                <li *ngIf=\"password.errors && password.touched\">\n                    <span class=\"text-danger\" [hidden]=\"!password.errors.required\">Password is required</span>\n                    <span class=\"text-danger\" [hidden]=\"!password.errors.minlength\">Minimum 8 character is Required</span>\n                </li>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <label>Confirm Password</label>\n                <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                <input type=\"password\" name=\"confirmPassword\" class=\"form-control\" [(ngModel)]=\"user.confirmPassword\" minlength=\"8\" #confirmPassword=\"ngModel\" required>\n                <li *ngIf=\"confirmPassword.errors && confirmPassword.touched\">\n                    <span class=\"text-danger\" [hidden]=\"!confirmPassword.errors.required\">Confirm Password is required</span>\n                    <span class=\"text-danger\" [hidden]=\"!confirmPassword.errors.minlength\">Minimum 8 character Required</span>\n                </li>\n                <li *ngIf=\"confirmPassword.touched && user.confirmPassword != user.password\" [hidden]=\"confirmPassword.errors && confirmPassword.errors.required\">\n                    <span class=\"text-danger\">Password and confirm password not matched..</span>\n                </li>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <button type=\"submit\" class=\"btn btn-success btn-block btn-flat\" [disabled]=\"!registerForm.valid || (user.confirmPassword != user.password)\">Register</button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-6 col-sm-6\">\n                    <div class=\"custome-check loginpage\">\n                        <input id=\"option5\" name=\"terms\" type=\"checkbox\" #terms=\"ngModel\" [(ngModel)]=\"term\" required>\n                        <label for=\"option5\">I agree to the terms.</label>\n                        <li *ngIf=\"term.errors && term.touched\">\n                            <span class=\"text-danger\" [hidden]=\"!term.errors.required\">Plese Select term and conditions</span>\n                        </li>\n                    </div>\n                </div>\n                <!-- /.col -->\n                <div class=\"col-6 col-sm-6 text-right\">\n                    <a class=\"forgotlink\" routerLinkActive=\"active\" [routerLink]=\"['/login']\">I already have membership.</a>\n                </div>\n                <!-- /.col -->\n            </div>\n        </form>\n    </div>\n    <!-- /.login-box-body -->\n</div>\n\n\n<!-- <div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"card mx-2\">\n          <div class=\"card-block p-2\">\n            <h1>Register</h1>\n            <p class=\"text-muted\">Create your account</p>\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n            </div>\n\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\">@</span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n            </div>\n\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n            </div>\n\n            <div class=\"input-group mb-2\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\">\n            </div>\n\n            <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\n          </div>\n          <div class=\"card-footer p-2\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\n              </div>\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n -->\n"

/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(591);


/***/ })

},[931]);
//# sourceMappingURL=main.bundle.js.map
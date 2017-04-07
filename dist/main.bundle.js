webpackJsonp([8,12],{

/***/ 366:
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
var FullLayoutComponent = (function () {
    function FullLayoutComponent() {
        this.disabled = false;
        this.status = { isopen: false };
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
    return FullLayoutComponent;
}());
FullLayoutComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        template: __webpack_require__(896)
    })
], FullLayoutComponent);
exports.FullLayoutComponent = FullLayoutComponent;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/full-layout.component.js.map

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
var login_service_1 = __webpack_require__(713);
var router_1 = __webpack_require__(119);
var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.user = {};
        this.errMessage = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log("login", this.user);
        this.errMessage = {};
        this.loginService.login(this.user)
            .subscribe(function (res) {
            console.log("response", res);
            localStorage.setItem("user", JSON.stringify(res));
            // this.router.navigate(['/dashboard']);
        }, function (err) {
            console.log("error", err);
            // this.errMessage = JSON.parse(err._body);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        template: __webpack_require__(897),
        styles: [__webpack_require__(870)],
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _b || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/login.component.js.map

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
var register_service_1 = __webpack_require__(714);
var router_1 = __webpack_require__(119);
var RegisterComponent = (function () {
    function RegisterComponent(router, _registerService) {
        this.router = router;
        this._registerService = _registerService;
        this.user = {};
        this.errMessage = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("register", this.user);
        this.errMessage = {};
        this.user["username"] = this.user["email"];
        if (this.user["password"] !== this.user["confirmPassword"]) {
            console.log("not matched");
            this.errMessage["err"] = "Password and confirm Pasword not matched";
        }
        else {
            console.log("send call");
            this._registerService.register(this.user)
                .subscribe(function (res) {
                console.log("response", res);
                localStorage.setItem("user", JSON.stringify(res));
                _this.router.navigate(['/dashboard']);
            }, function (err) {
                console.log("error", err);
                // this.errMessage = JSON.parse(err._body);
            });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        template: __webpack_require__(898),
        styles: [__webpack_require__(871)],
        providers: [register_service_1.RegisterService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof register_service_1.RegisterService !== "undefined" && register_service_1.RegisterService) === "function" && _b || Object])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
var _a, _b;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/register.component.js.map

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./chartjs/chartjs.module": [
		933,
		6
	],
	"./components/components.module": [
		934,
		0
	],
	"./crop-management/crop-management.module": [
		935,
		1
	],
	"./dashboard/dashboard.module": [
		936,
		5
	],
	"./icons/icons.module": [
		937,
		3
	],
	"./pages/pages.module": [
		938,
		2
	],
	"./widgets/widgets.module": [
		939,
		4
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
webpackAsyncContext.id = 588;


/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_dynamic_1 = __webpack_require__(680);
var app_module_1 = __webpack_require__(711);
var environment_1 = __webpack_require__(719);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/main.js.map

/***/ }),

/***/ 710:
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

/***/ 711:
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
var app_component_1 = __webpack_require__(710);
var dropdown_1 = __webpack_require__(279);
var tabs_1 = __webpack_require__(280);
var nav_dropdown_directive_1 = __webpack_require__(717);
var ng2_charts_1 = __webpack_require__(594);
var sidebar_directive_1 = __webpack_require__(718);
var aside_directive_1 = __webpack_require__(715);
var breadcrumb_component_1 = __webpack_require__(716);
var ng2_bootstrap_1 = __webpack_require__(595);
// Routing Module
var app_routing_1 = __webpack_require__(712);
var http_1 = __webpack_require__(120);
// Layouts
var full_layout_component_1 = __webpack_require__(366);
var simple_layout_component_1 = __webpack_require__(367);
var login_component_1 = __webpack_require__(368);
var register_component_1 = __webpack_require__(369);
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
        providers: [{
                provide: common_1.LocationStrategy,
                useClass: common_1.HashLocationStrategy
            }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=/home/manpreets/Documents/office/efarm/efarm_admin/src/app.module.js.map

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
var router_1 = __webpack_require__(119);
var http_1 = __webpack_require__(120);
// Layouts
var full_layout_component_1 = __webpack_require__(366);
var simple_layout_component_1 = __webpack_require__(367);
var login_component_1 = __webpack_require__(368);
var register_component_1 = __webpack_require__(369);
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
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
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

/***/ 713:
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
        this.host = "https://efarmxapi.herokuapp.com";
        this.port = 3000;
    }
    LoginService.prototype.login = function (user) {
        console.log("inside login service", user);
        return this.http.post("https://efarmxapi.herokuapp.com/api/oauth2/token", user)
            .map(function (res) { return res.json(); });
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

/***/ 714:
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
        this.host = "https://efarmapi.herokuapp.com";
        this.port = '';
    }
    RegisterService.prototype.register = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        console.log("body---------user--", user);
        console.log("body---------user--", user.email);
        // headers.append('origin', this.host);
        // headers.append('refer', this.host);
        var username = user.username;
        var password = user.password;
        var email = user.email;
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        urlSearchParams.append('email', email);
        var body = urlSearchParams.toString();
        console.log("body---------body--", typeof body);
        console.log("body---------body--", body);
        // this.user1 = {username: "test-aa", password: "test-aa", email: "test-aa@gmial.oxm"}
        console.log('working...');
        return this.http.post(this.host + ':' + this.port + '/users/register', body, { headers: headers }).map(function (res) { return res.json(); });
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
var router_1 = __webpack_require__(119);
__webpack_require__(569);
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

/***/ 719:
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

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(122)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(122)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 408,
	"./af.js": 408,
	"./ar": 414,
	"./ar-dz": 409,
	"./ar-dz.js": 409,
	"./ar-ly": 410,
	"./ar-ly.js": 410,
	"./ar-ma": 411,
	"./ar-ma.js": 411,
	"./ar-sa": 412,
	"./ar-sa.js": 412,
	"./ar-tn": 413,
	"./ar-tn.js": 413,
	"./ar.js": 414,
	"./az": 415,
	"./az.js": 415,
	"./be": 416,
	"./be.js": 416,
	"./bg": 417,
	"./bg.js": 417,
	"./bn": 418,
	"./bn.js": 418,
	"./bo": 419,
	"./bo.js": 419,
	"./br": 420,
	"./br.js": 420,
	"./bs": 421,
	"./bs.js": 421,
	"./ca": 422,
	"./ca.js": 422,
	"./cs": 423,
	"./cs.js": 423,
	"./cv": 424,
	"./cv.js": 424,
	"./cy": 425,
	"./cy.js": 425,
	"./da": 426,
	"./da.js": 426,
	"./de": 428,
	"./de-at": 427,
	"./de-at.js": 427,
	"./de.js": 428,
	"./dv": 429,
	"./dv.js": 429,
	"./el": 430,
	"./el.js": 430,
	"./en-au": 431,
	"./en-au.js": 431,
	"./en-ca": 432,
	"./en-ca.js": 432,
	"./en-gb": 433,
	"./en-gb.js": 433,
	"./en-ie": 434,
	"./en-ie.js": 434,
	"./en-nz": 435,
	"./en-nz.js": 435,
	"./eo": 436,
	"./eo.js": 436,
	"./es": 438,
	"./es-do": 437,
	"./es-do.js": 437,
	"./es.js": 438,
	"./et": 439,
	"./et.js": 439,
	"./eu": 440,
	"./eu.js": 440,
	"./fa": 441,
	"./fa.js": 441,
	"./fi": 442,
	"./fi.js": 442,
	"./fo": 443,
	"./fo.js": 443,
	"./fr": 446,
	"./fr-ca": 444,
	"./fr-ca.js": 444,
	"./fr-ch": 445,
	"./fr-ch.js": 445,
	"./fr.js": 446,
	"./fy": 447,
	"./fy.js": 447,
	"./gd": 448,
	"./gd.js": 448,
	"./gl": 449,
	"./gl.js": 449,
	"./he": 450,
	"./he.js": 450,
	"./hi": 451,
	"./hi.js": 451,
	"./hr": 452,
	"./hr.js": 452,
	"./hu": 453,
	"./hu.js": 453,
	"./hy-am": 454,
	"./hy-am.js": 454,
	"./id": 455,
	"./id.js": 455,
	"./is": 456,
	"./is.js": 456,
	"./it": 457,
	"./it.js": 457,
	"./ja": 458,
	"./ja.js": 458,
	"./jv": 459,
	"./jv.js": 459,
	"./ka": 460,
	"./ka.js": 460,
	"./kk": 461,
	"./kk.js": 461,
	"./km": 462,
	"./km.js": 462,
	"./ko": 463,
	"./ko.js": 463,
	"./ky": 464,
	"./ky.js": 464,
	"./lb": 465,
	"./lb.js": 465,
	"./lo": 466,
	"./lo.js": 466,
	"./lt": 467,
	"./lt.js": 467,
	"./lv": 468,
	"./lv.js": 468,
	"./me": 469,
	"./me.js": 469,
	"./mi": 470,
	"./mi.js": 470,
	"./mk": 471,
	"./mk.js": 471,
	"./ml": 472,
	"./ml.js": 472,
	"./mr": 473,
	"./mr.js": 473,
	"./ms": 475,
	"./ms-my": 474,
	"./ms-my.js": 474,
	"./ms.js": 475,
	"./my": 476,
	"./my.js": 476,
	"./nb": 477,
	"./nb.js": 477,
	"./ne": 478,
	"./ne.js": 478,
	"./nl": 480,
	"./nl-be": 479,
	"./nl-be.js": 479,
	"./nl.js": 480,
	"./nn": 481,
	"./nn.js": 481,
	"./pa-in": 482,
	"./pa-in.js": 482,
	"./pl": 483,
	"./pl.js": 483,
	"./pt": 485,
	"./pt-br": 484,
	"./pt-br.js": 484,
	"./pt.js": 485,
	"./ro": 486,
	"./ro.js": 486,
	"./ru": 487,
	"./ru.js": 487,
	"./se": 488,
	"./se.js": 488,
	"./si": 489,
	"./si.js": 489,
	"./sk": 490,
	"./sk.js": 490,
	"./sl": 491,
	"./sl.js": 491,
	"./sq": 492,
	"./sq.js": 492,
	"./sr": 494,
	"./sr-cyrl": 493,
	"./sr-cyrl.js": 493,
	"./sr.js": 494,
	"./ss": 495,
	"./ss.js": 495,
	"./sv": 496,
	"./sv.js": 496,
	"./sw": 497,
	"./sw.js": 497,
	"./ta": 498,
	"./ta.js": 498,
	"./te": 499,
	"./te.js": 499,
	"./tet": 500,
	"./tet.js": 500,
	"./th": 501,
	"./th.js": 501,
	"./tl-ph": 502,
	"./tl-ph.js": 502,
	"./tlh": 503,
	"./tlh.js": 503,
	"./tr": 504,
	"./tr.js": 504,
	"./tzl": 505,
	"./tzl.js": 505,
	"./tzm": 507,
	"./tzm-latn": 506,
	"./tzm-latn.js": 506,
	"./tzm.js": 507,
	"./uk": 508,
	"./uk.js": 508,
	"./uz": 509,
	"./uz.js": 509,
	"./vi": 510,
	"./vi.js": 510,
	"./x-pseudo": 511,
	"./x-pseudo.js": 511,
	"./yo": 512,
	"./yo.js": 512,
	"./zh-cn": 513,
	"./zh-cn.js": 513,
	"./zh-hk": 514,
	"./zh-hk.js": 514,
	"./zh-tw": 515,
	"./zh-tw.js": 515
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
webpackContext.id = 872;


/***/ }),

/***/ 896:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\r\n  <button class=\"navbar-toggler mobile-sidebar-toggler hidden-lg-up\" type=\"button\">&#9776;</button>\r\n  <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\" ></a>\r\n \r\n  <ul class=\"nav navbar-nav hidden-md-down\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link navbar-toggler sidebar-toggler\" href=\"#\">&#9776;</a>\r\n    </li>\r\n    <li class=\"nav-item px-1\">\r\n      <a class=\"nav-link\" href=\"#\">Dashboard</a>\r\n    </li>\r\n    <li class=\"nav-item px-1\">\r\n      <a class=\"nav-link\" href=\"#\">Users</a>\r\n    </li>\r\n    <li class=\"nav-item px-1\">\r\n      <a class=\"nav-link\" href=\"#\">Settings</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n    <li class=\"nav-item hidden-md-down\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bell\"></i>\r\n      <span class=\"badge badge-pill badge-danger\"><!-- 5 --></span></a>\r\n    </li>\r\n   \r\n    <li class=\"nav-item hidden-md-down\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-envelope\"></i>\r\n\t\t  <span class=\"badge badge-pill badge-danger\"><!-- 11 --></span>\r\n       </a>\r\n    </li>\r\n    <li class=\"nav-item dropdown\" dropdown (onToggle)=\"toggled($event)\">\r\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>\r\n        <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n        <span class=\"hidden-md-down\"></span>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n\r\n        <div class=\"dropdown-header text-center\"><strong>Account</strong></div>\r\n\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"badge badge-info\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"badge badge-warning\">42</span></a>\r\n\r\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\r\n\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-default\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a>\r\n        <div class=\"divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-lock\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n   <!-- <li class=\"nav-item hidden-md-down\">\r\n      <a class=\"nav-link navbar-toggler aside-menu-toggler\" href=\"#\">&#9776;</a>\r\n    </li>-->\r\n  </ul>\r\n</header>\r\n\r\n<div class=\"app-body\">\r\n  <div class=\"sidebar\">\r\n    <nav class=\"sidebar-nav\">\r\n      <ul class=\"nav\">\r\n        <li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-dashboard\"></i><span> Dashboard</span></a>\r\n        </li>\r\n        \r\n       \r\n        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\r\n\t\t\t<a class=\"nav-link nav-dropdown-toggle\" href=\"#\" ><i class=\"icon-Shape-13\"></i><span>Crop</span></a>\r\n          <ul class=\"nav-dropdown-items\">\r\n            <li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/crop/list']\"><i class=\"fa fa-th-list\"></i><span> Crop Listing</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/crop/add']\"><i class=\"fa fa-plus\"></i> <span>Add Crop</span></a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n       <!--  <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\r\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-puzzle\"></i> Components</a>\r\n          <ul class=\"nav-dropdown-items\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/buttons']\"><i class=\"icon-puzzle\"></i> Buttons</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/social-buttons']\"><i class=\"icon-puzzle\"></i> Social Buttons</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/cards']\"><i class=\"icon-puzzle\"></i> Cards</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/forms']\"><i class=\"icon-puzzle\"></i> Forms</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/modals']\"><i class=\"icon-puzzle\"></i> Modals</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/switches']\"><i class=\"icon-puzzle\"></i> Switches</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tables']\"><i class=\"icon-puzzle\"></i> Tables</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tabs']\"><i class=\"icon-puzzle\"></i> Tabs</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\r\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-star\"></i> Icons</a>\r\n          <ul class=\"nav-dropdown-items\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/font-awesome']\"><i class=\"icon-star\"></i> Font Awesome</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/simple-line-icons']\"><i class=\"icon-star\"></i> Simple Line Icons</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/widgets']\"><i class=\"icon-calculator\"></i> Widgets <span class=\"badge badge-info\">NEW</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/charts']\"><i class=\"icon-pie-chart\"></i> Charts</a>\r\n        </li>\r\n        <li class=\"divider\"></li>\r\n        <li class=\"nav-title\">\r\n          Extras\r\n        </li>\r\n        <li class=\"nav-item nav-dropdown\">\r\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-star\"></i> Pages</a>\r\n          <ul class=\"nav-dropdown-items\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"><i class=\"icon-star\"></i> Login</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\"><i class=\"icon-star\"></i> Register</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/404']\"><i class=\"icon-star\"></i> Error 404</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/500']\"><i class=\"icon-star\"></i> Error 500</a>\r\n            </li>\r\n          </ul>\r\n        </li> -->\r\n        \r\n      </ul>\r\n    </nav>\r\n  </div>\r\n\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n\r\n    <!-- Breadcrumb -->\r\n   <!-- <ol class=\"breadcrumb\">\r\n      <breadcrumbs></breadcrumbs>\r\n      \r\n      <!-- Breadcrumb Menu\r\n      <li class=\"breadcrumb-menu hidden-md-down\">\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n          <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\r\n          <a class=\"btn btn-secondary\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\r\n          <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\r\n        </div>\r\n      </li>\r\n      \r\n    </ol>-->\r\n\r\n    <div class=\"mainarea\">\r\n      <router-outlet></router-outlet>\r\n    </div><!-- /.conainer-fluid -->\r\n  </main>\r\n\r\n  <aside class=\"aside-menu\">\r\n    <tabset>\r\n      <tab>\r\n        <template tabHeading><i class=\"icon-list\"></i></template>\r\n        <div class=\"callout m-0 py-h text-muted text-center bg-faded text-uppercase\">\r\n          <small><b>Today</b></small>\r\n        </div>\r\n        <hr class=\"transparent mx-1 my-0\">\r\n        <div class=\"callout callout-warning m-0 py-1\">\r\n          <div class=\"avatar float-right\">\r\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div>Meeting with <strong>Lucas</strong></div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\r\n        </div>\r\n        <hr class=\"mx-1 my-0\">\r\n        <div class=\"callout callout-info m-0 py-1\">\r\n          <div class=\"avatar float-right\">\r\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div>Skype with <strong>Megan</strong></div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line </small>\r\n        </div>\r\n        <hr class=\"transparent mx-1 my-0\">\r\n        <div class=\"callout m-0 py-h text-muted text-center bg-faded text-uppercase\">\r\n          <small><b>Tomorrow</b></small>\r\n        </div>\r\n        <hr class=\"transparent mx-1 my-0\">\r\n        <div class=\"callout callout-danger m-0 py-1\">\r\n          <div>New UI Project - <strong>deadline</strong></div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\r\n          <div class=\"avatars-stack mt-h\">\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mx-1 my-0\">\r\n        <div class=\"callout callout-success m-0 py-1\">\r\n          <div><strong>#10 Startups.Garden</strong> Meetup</div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\r\n        </div>\r\n        <hr class=\"mx-1 my-0\">\r\n        <div class=\"callout callout-primary m-0 py-1\">\r\n          <div><strong>Team meeting</strong></div>\r\n          <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\r\n          <div class=\"avatars-stack mt-h\">\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mx-1 my-0\">\r\n      </tab>\r\n      <tab>\r\n        <template tabHeading><i class=\"icon-speech\"></i></template>\r\n        <div class=\"p-1\">\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-1 pb-3 mr-1 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-q\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n      <tab>\r\n        <template tabHeading><i class=\"icon-settings\"></i></template>\r\n        <div class=\"p-1\">\r\n          <h6>Settings</h6>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-2\">\r\n              <small><b>Option 1</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-1\">\r\n              <small><b>Option 2</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\">\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-1\">\r\n              <small><b>Option 3</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\">\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-1\">\r\n              <small><b>Option 4</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <hr>\r\n          <h6>System Utilization</h6>\r\n\r\n          <div class=\"text-uppercase mb-q mt-2\"><small><b>CPU Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\r\n\r\n          <div class=\"text-uppercase mb-q mt-h\"><small><b>Memory Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">11444GB/16384MB</small>\r\n\r\n          <div class=\"text-uppercase mb-q mt-h\"><small><b>SSD 1 Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">243GB/256GB</small>\r\n\r\n          <div class=\"text-uppercase mb-q mt-h\"><small><b>SSD 2 Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">25GB/256GB</small>\r\n        </div>\r\n      </tab>\r\n    </tabset>\r\n  </aside>\r\n</div>\r\n\r\n<footer class=\"app-footer\">\r\n  <a href=\"http://www.smartdatainc.com\">eFarm</a> &copy; 2017 smartData.\r\n  <span class=\"float-right\">Powered by <a href=\"http://www.smartdatainc.com\">smartData</a></span>\r\n</footer>\r\n"

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

module.exports = "<section class=\"login-page overlay\"></section>\n    <div class=\"login-box\">\n        <!-- /.login-logo -->\n        <div class=\"login-box-body\">\n            <div class=\"login-logo\">\n                <img src=\"assets/img/logo.png\" alt=\"logo\">\n            </div>\n             <form role=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"login()\"> \n                <div class=\"form-group has-feedback\">\n                    <label>Username</label>\n                    <!-- <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>-->\n                    <input type=\"text\" name=\"username\" class=\"form-control\" [(ngModel)]=\"user.username\" required>\n                </div>\n                <div class=\"form-group has-feedback\">\n                    <label>Password</label>\n                    <!--<span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>-->\n                    <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" required>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-12\">\n                        <button type=\"submit\" class=\"btn btn-success btn-block btn-flat\" [disabled]=\"!loginForm.valid\">Sign In</button>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6 col-6\">\n                        <div class=\"checkbox icheck\">\n                            <label>\n                                <input type=\"checkbox\"> Remember Me\n                            </label>\n                        </div>\n                    </div>\n                    <!-- /.col -->\n                    <div class=\"col-sm-6 col-6\">\n                        <a class=\"forgotlink\" href=\"#\">Forgot password</a>\n                    </div>\n                    <!-- /.col -->\n                </div>\n            </form>\n        </div>\n        <!-- /.login-box-body -->\n    </div>\n\n"

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

module.exports = "<section class=\"login-page overlay\"></section>\n<div class=\"register-box\">\n    <!-- /.login-logo -->\n    <div class=\"login-box-body\">\n        <div class=\"login-logo\">\n            <img src=\"assets/img/logo.png\" alt=\"logo\">\n        </div>\n        <form role=\"form\" (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\">\n            <div class=\"form-group has-feedback\">\n                <label>Full name</label>\n                <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"user.name\" required>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <label>Email</label>\n                 <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n                <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" required>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <label>Password</label>\n                <!--<span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>-->\n                <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" required>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <label>Retype Password</label>\n                <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                <input type=\"password\" name=\"confirmPassword\" class=\"form-control\" [(ngModel)]=\"user.confirmPassword\" required>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <div class=\"text-danger\">\n                  {{errMessage.err}}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <button type=\"submit\" class=\"btn btn-success btn-block btn-flat\" [disabled]=\"!registerForm.valid\">Register</button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-6 col-sm-6\">\n                    <div class=\"checkbox icheck\">\n                        <label>\n                            <input type=\"checkbox\"> I agree to the terms\n                        </label>\n                    </div>\n                </div>\n                <!-- /.col -->\n                <div class=\"col-6 col-sm-6 text-right\">\n                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/login']\">I already have membership.</a>\n                </div>\n                <!-- /.col -->\n            </div>\n        </form>\n    </div>\n    <!-- /.login-box-body -->\n</div>\n<!-- <div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"card mx-2\">\n          <div class=\"card-block p-2\">\n            <h1>Register</h1>\n            <p class=\"text-muted\">Create your account</p>\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n            </div>\n\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\">@</span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n            </div>\n\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n            </div>\n\n            <div class=\"input-group mb-2\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\">\n            </div>\n\n            <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\n          </div>\n          <div class=\"card-footer p-2\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\n              </div>\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n -->\n"

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(589);


/***/ })

},[929]);
//# sourceMappingURL=main.bundle.js.map
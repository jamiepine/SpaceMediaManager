var ac_main =
webpackJsonpac__name_([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(20);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(36);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(73);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(141);

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
// Angular 2


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
if (false) {
    enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(54);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(391);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(388);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(366);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(42);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });



/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SetValue; });
var SET_VALUE = '[Home] Set Value';
var SetValue = /** @class */ (function () {
    function SetValue(payload) {
        this.payload = payload;
        this.type = SET_VALUE;
    }
    return SetValue;
}());



/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_component__ = __webpack_require__(48);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__about_component__["a"]; });



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_component__ = __webpack_require__(49);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__media_component__["a"]; });



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__no_content_component__ = __webpack_require__(53);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__no_content_component__["a"]; });



/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_main_process_environment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(37);
/*
 * Angular bootstraping
 */
/// <reference path="./custom-typings.d.ts" />



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (true) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_main_process_environment__["b" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
Object(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(389);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_process_app_module__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__main_process_app_module__["a"]; });
// App



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_router_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store_devtools__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reducers__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_resolver__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__no_content__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_x_large__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__about__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__media__ = __webpack_require__(17);











/*
 * Platform and Environment providers/directives/pipes
 */



// App is our top level component



/*
* IMPORT COMPONENTS
*/





// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_15__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    { provide: __WEBPACK_IMPORTED_MODULE_14__angular_common__["APP_BASE_HREF"], useValue: '/' },
    { provide: __WEBPACK_IMPORTED_MODULE_7__ngrx_router_store__["RouterStateSerializer"], useClass: __WEBPACK_IMPORTED_MODULE_12__reducers__["a" /* CustomSerializer */] }
]);
var CONDITIONAL_IMPORTS = [];
if (true) {
    console.log('loading devtools');
    // AoT won't allow metaReducers, so we need to add them conditionally
    // this should override the previous StoreModule declaration
    CONDITIONAL_IMPORTS.push(__WEBPACK_IMPORTED_MODULE_8__ngrx_store__["StoreModule"].forRoot(__WEBPACK_IMPORTED_MODULE_12__reducers__["c" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_12__reducers__["b" /* metaReducers */] }));
    // Now connecting to DevModule.
    CONDITIONAL_IMPORTS.push(__WEBPACK_IMPORTED_MODULE_9__ngrx_store_devtools__["StoreDevtoolsModule"].instrument());
}
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = /** @class */ (function () {
    function AppModule(appRef, _store) {
        this.appRef = appRef;
        this._store = _store;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.rootState) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        if (store.rootState) {
            this._store.dispatch({
                type: 'SET_ROOT_STATE',
                payload: store.rootState
            });
        }
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        Object.keys(store).forEach(function (prop) { return delete store[prop]; });
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        this._store.take(1).subscribe(function (s) { return store.rootState = s; });
        // recreate root elements
        store.disposeOldHosts = Object(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["createNewHosts"])(cmpLocation);
        // save input values
        store.restoreInputValues = Object(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["createInputTransfer"])();
        // remove styles
        Object(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["removeNgStyles"])();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_16__no_content__["a" /* NoContentComponent */],
                __WEBPACK_IMPORTED_MODULE_17__home_x_large__["a" /* XLargeDirective */],
                __WEBPACK_IMPORTED_MODULE_19__about__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__home__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__media__["a" /* MediaComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["StoreModule"].forRoot(__WEBPACK_IMPORTED_MODULE_12__reducers__["c" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_router_store__["StoreRouterConnectingModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_6__angular_router__["PreloadAllModules"] })
            ].concat(CONDITIONAL_IMPORTS),
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__environment__["a" /* ENV_PROVIDERS */],
                APP_PROVIDERS
            ]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_core__["ApplicationRef"],
            __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["Store"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(386);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(379);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__no_content__ = __webpack_require__(18);




var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about__["a" /* AboutComponent */] },
    { path: 'media', component: __WEBPACK_IMPORTED_MODULE_2__media__["a" /* MediaComponent */] },
    // { path: 'detail', loadChildren: './+detail#DetailModule'},
    // { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__no_content__["a" /* NoContentComponent */] },
];


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_electron__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_actions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__title__ = __webpack_require__(43);






var fs = __webpack_require__(15);
var HomeComponent = /** @class */ (function () {
    // TypeScript public modifiers
    function HomeComponent(store, title) {
        this.store = store;
        this.title = title;
        // Set our default values
        this.localState = { value: '' };
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('hello `Home` component');
        // this.title.getData().subscribe(data => this.data = data);
    };
    HomeComponent.prototype.submitState = function (value) {
        console.log('submitState', value);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__home_actions__["b" /* SetValue */](value));
        this.localState.value = '';
    };
    HomeComponent.prototype.showDialog = function () {
        __WEBPACK_IMPORTED_MODULE_2_electron__["ipcRenderer"].send('show-dialog');
    };
    HomeComponent.prototype.selectFile = function () {
        document.getElementById('selectFile').click();
    };
    HomeComponent.prototype.directoryLoaded = function () {
        var path = document.getElementById("selectFile").files[0].path;
        console.log('LOADED');
        document.getElementById('display-files').innerHTML += "\n            <div>Selected Directory: " + path + "</div>\n    ";
    };
    HomeComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            // The selector is what angular internally uses
            // for `document.querySelectorAll(selector)` in our index.html
            // where, in this case, selector is the string 'home'
            selector: 'home',
            // We need to tell Angular's Dependency Injection which providers are in our app.
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__title__["a" /* Title */]
            ],
            // Our list of styles in our component. We may add more to compose many styles together
            styles: [__webpack_require__(45)],
            // Every Angular template is first compiled by the browser before Angular runs it's compiler
            template: __webpack_require__(47)
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["Store"],
            __WEBPACK_IMPORTED_MODULE_5__title__["a" /* Title */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__title_service__ = __webpack_require__(44);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__title_service__["a"]; });



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Title; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);



var Title = /** @class */ (function () {
    function Title(http) {
        this.http = http;
        this.value = 'Angular 2';
    }
    Title.prototype.getData = function () {
        console.log('Title#getData(): Get Data');
        // return this.http.get('/assets/data.json')
        // .map(res => res.json());
        return {
            value: 'AngularClass'
        };
    };
    Title = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], Title);
    return Title;
}());



/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(46);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/*styles for home content only*/", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- <h1 x-large class=\"sample-content\">My name jeff</h1> -->\n\n\n\n  <div class=\"content\">\n\n<br/>\n\n      <div class=\"form-group\">\n        <input [value]=\"localState.value\" (input)=\"localState.value = $event.target.value\" autofocus type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Search\">\n      </div>\n\n    \n    <button (click)=\"selectFile()\" id=\"selectFileButton\" type=\"button\" class=\"btn btn-light\">Select Folder</button>\n    <input onchange=\"console.log('jeff')\" id=\"selectFile\" type=\"file\" style=\"display: none\" webkitdirectory />\n    <button (click)=\"listDir()\" type=\"button\" class=\"btn btn-light\">Render Images</button>\n    <button (click)=\"showDialog()\" type=\"button\" class=\"btn btn-light\">Show Dialog</button>\n    \n    <p></p>\n\n\n\n    \n<!--         <input type=\"text\" [value]=\"localState.value\" (input)=\"localState.value = $event.target.value\" autofocus>\n        Rather than wiring up two-way data-binding ourselves with [value] and (input)\n        we can use Angular's [(ngModel)] syntax\n        <input type=\"text\" name=\"textInput\" [(ngModel)]=\"localState.value\" autofocus> -->\n      \n\n    <!-- <pre>this.localState = {{ localState | json }}</pre> -->\n\n  </div><!-- Content -->\n\n</div>\n"

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);



var AboutComponent = /** @class */ (function () {
    function AboutComponent(route) {
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .data
            .subscribe(function (data) {
            // your resolved data from route
            _this.localState = data.yourData;
        });
        console.log('hello `About` component');
        // static data that is bundled
        // var mockData = require('assets/mock-data/mock-data.json');
        // console.log('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        this.asyncDataWithWebpack();
    };
    AboutComponent.prototype.asyncDataWithWebpack = function () {
        var _this = this;
        // you can also async load mock data with 'es6-promise-loader'
        // you would do this if you don't want the mock-data bundled
        // remember that 'es6-promise-loader' is a promise
        setTimeout(function () {
            __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, 20))
                .then(function (json) {
                console.log('async mockData', json);
                _this.localState = json;
            });
        });
    };
    AboutComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'about',
            styles: ["\n  "],
            template: "\n    <h1>About</h1>\n    <div>\n      For hot module reloading run\n      <pre>npm run start:hmr</pre>\n    </div>\n    <div>\n      <h3>\n        shhhhhh\n      </h3>\n    </div>\n    <pre>this.localState = {{ localState | json }}</pre>\n  "
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);



var fs = __webpack_require__(15);
var MediaComponent = /** @class */ (function () {
    function MediaComponent(route) {
        this.route = route;
    }
    MediaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .data
            .subscribe(function (data) {
            // your resolved data from route
            _this.localState = data.yourData;
        });
        console.log('hello `Media` component');
        // static data that is bundled
        // var mockData = require('assets/mock-data/mock-data.json');
        // console.log('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        this.asyncDataWithWebpack();
    };
    MediaComponent.prototype.asyncDataWithWebpack = function () {
        var _this = this;
        // you can also async load mock data with 'es6-promise-loader'
        // you would do this if you don't want the mock-data bundled
        // remember that 'es6-promise-loader' is a promise
        setTimeout(function () {
            __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 20))
                .then(function (json) {
                console.log('async mockData', json);
                _this.localState = json;
            });
        });
    };
    MediaComponent.prototype.selectFile = function () {
        document.getElementById('selectFile').click();
    };
    MediaComponent.prototype.directoryLoaded = function () {
        var path = document.getElementById("selectFile").files[0].path;
        console.log('LOADED');
        document.getElementById('display-files').innerHTML += "\n            <div>Selected Directory: " + path + "</div>\n    ";
    };
    MediaComponent.prototype.listDir = function () {
        // FILESYSTEM
        console.log("Searching...");
        // var path = document.getElementById("selectFile").files[0].path;
        // var name = document.getElementById("selectFile").files[0].name;
        // var count = document.getElementById("selectFile").files.length;
        var path = "/Users/jamiepine/Movies/SpaceDummyImages";
        fs.readdir(path, function (err, files) {
            'use strict';
            if (err)
                throw err;
            console.log("Found ${count} files");
            //the files parameter is an array of the files and folders in the path we passed. So we loop through the array, printing each file and folder
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                //the += after innerHTML means we are appending to the existing content
                var absoluteFileLink = path + "/" + file;
                var stats = fs.statSync(absoluteFileLink);
                var fileSizeInBytes = stats.size;
                var fileSizeInMegabytes = fileSizeInBytes / 1000000.0;
                var fileSizeInBytes = stats.size;
                var type = stats.ctime;
                document.getElementById('display-files').innerHTML += "\n            <div class=\"image_thumb\"><img height=\"80px\" src=\"" + absoluteFileLink + "\"></div>\n            ";
                console.log("TYPE: " + type + " SIZE: " + fileSizeInMegabytes + " PATH:" + absoluteFileLink);
            }
        });
    };
    MediaComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'media',
            styles: [__webpack_require__(50)],
            template: __webpack_require__(52)
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], MediaComponent);
    return MediaComponent;
}());



/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(51);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/*styles for home content only*/", ""]);

// exports


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "  <div class=\"content\">\n\n\n<div class=\"media_nav\">\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n      <button (click)=\"listDir()\" type=\"button\" class=\"btn btn-secondary\"><i class=\"fas fa-image\"></i></button>\n      <button (click)=\"selectFile()\" type=\"button\" class=\"btn btn-secondary\"><i class=\"fas fa-th-large\"></i></button>\n      <button (click)=\"showDialog()\" type=\"button\" class=\"btn btn-secondary\"><i class=\"fas fa-align-justify\"></i></button>\n    </div>\n    <input onchange=\"console.log('jeff')\" id=\"selectFile\" type=\"file\" style=\"display: none\" webkitdirectory />\n    <p></p>\n</div>\n\n\n    <div id=\"display-files\"></div>\n\n  </div><!-- Content -->"

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);


var NoContentComponent = /** @class */ (function () {
    function NoContentComponent() {
    }
    NoContentComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'no-content',
            template: "\n    <div>\n      <h1>Error, can't find what you requested!</h1>\n    </div>\n  "
        })
    ], NoContentComponent);
    return NoContentComponent;
}());



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomSerializer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_store_freeze__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngrx_store_logger__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngrx_store_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngrx_store_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__root__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__root__["a"]; });
// storeFreeze is currently conflicting with @ngrx/router-store



// Generate a reducer to set the root state in dev mode for HMR
function stateSetter(reducer) {
    return function (state, action) {
        if (action.type === 'SET_ROOT_STATE') {
            return action.payload;
        }
        return reducer(state, action);
    };
}
function logger(reducer) {
    return Object(__WEBPACK_IMPORTED_MODULE_1_ngrx_store_logger__["storeLogger"])()(reducer);
}
var metaReducers =  true
    ? [stateSetter, logger, __WEBPACK_IMPORTED_MODULE_0_ngrx_store_freeze__["storeFreeze"]]
    : [];
// The CustomSerializer improves @ngrx performance and allows storeFreeze
// to co-exist with the router-store.
// See: https://github.com/ngrx/platform/blob/master/docs/router-store/api.md
var CustomSerializer = /** @class */ (function () {
    function CustomSerializer() {
    }
    CustomSerializer.prototype.serialize = function (routerState) {
        var url = routerState.url;
        var queryParams = routerState.root.queryParams;
        // Only return an object including the URL and query params
        // instead of the entire snapshot
        return { url: url, queryParams: queryParams };
    };
    return CustomSerializer;
}());



/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_router_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_reducer__ = __webpack_require__(60);


var reducers = {
    router: __WEBPACK_IMPORTED_MODULE_0__ngrx_router_store__["routerReducer"],
    home: __WEBPACK_IMPORTED_MODULE_1__home_home_reducer__["a" /* homeReducer */]
};


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = homeReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_actions__ = __webpack_require__(14);

var initialState = {};
function homeReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__home_actions__["a" /* SET_VALUE */]: {
            return Object.assign({}, state, {
                value: action.payload
            });
        }
        default: {
            return state;
        }
    }
}


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_electron__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(4);

/*
 * Angular 2 decorators and services
 */




/*
 * App Component
 * Top Level Component
 */
var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.angularclassLogo = 'assets/img/angular-electron.svg';
        this.name = 'Space App';
        this.url = 'https://github.com/colinskow/angular-electron-dream-starter';
        this.state$ = this.store.select(function (state) { return state.home; });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.state$.take(1)
            .subscribe(function (state) {
            console.log('Initial App State', state);
        });
    };
    AppComponent.prototype.openURL = function (url) {
        __WEBPACK_IMPORTED_MODULE_3_electron__["shell"].openExternal(url);
    };
    AppComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app',
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
            styles: [
                __webpack_require__(63)
            ],
            template: __webpack_require__(65)
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ngrx_store__["Store"]])
    ], AppComponent);
    return AppComponent;
}());

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/take");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(64);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "html, body{\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif\n}\n\na.active {\n  background-color: gray;\n}\n", ""]);

// exports


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "<div id=\"chromebar\"> \n\n  <div class=\"chromebar_version\">ALPHA 0.3.2</div>\n</div>  \n\n<div id=\"sidebar\">\n  \n  <ul class=\"sidebar_menu mainnav\">\n\n    <a [routerLink]=\" ['./home'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n    <li class=\"sidebar_menu_item\"><i class=\"fas fa-home\"></i></li>\n    </a>\n\n    <li class=\"sidebar_menu_item\"><i class=\"fas fa-rocket\"></i></li>\n    <li class=\"sidebar_menu_item\"><i class=\"fas fa-newspaper\"></i></li>\n\n    <a [routerLink]=\" ['./media'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n    <li class=\"sidebar_menu_item selected\"><i class=\"fas fa-images\"></i></li>\n    </a>\n\n    <li class=\"sidebar_menu_item\"><i class=\"fas fa-envelope\"></i></li>\n  </ul>\n\n\n</div>\n\n\n<!--   <nav>\n      <a [routerLink]=\" ['./'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n        Index\n      </a>\n      <a [routerLink]=\" ['./home'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n        Home\n      </a>\n      <a [routerLink]=\" ['./detail'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n        Detail\n      </a>\n      <a [routerLink]=\" ['./barrel'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n        Barrel\n      </a>\n      <a [routerLink]=\" ['./about'] \"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">\n        About\n      </a>\n    </nav> -->\n\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n\n  <!--   <pre class=\"app-state\">this.state$ = {{ state$ | async | json }}</pre> -->\n\n    <footer>\n  \n\n    </footer>"

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(72);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);




var DataResolver = /** @class */ (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    DataResolver = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], DataResolver);
    return DataResolver;
}());

// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("rxjs/Observable");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/observable/of");

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__x_large_directive__ = __webpack_require__(71);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__x_large_directive__["a"]; });



/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XLargeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);


/*
 * Directive
 * XLarge is a simple directive to show how one is made
 */
var XLargeDirective = /** @class */ (function () {
    function XLargeDirective(element, renderer) {
        // simple DOM manipulation to set font size to x-large
        // `nativeElement` is the direct reference to the DOM element
        // element.nativeElement.style.fontSize = 'x-large';
        this.element = element;
        this.renderer = renderer;
        // for server/webworker support use the renderer
        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    }
    XLargeDirective = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
            selector: '[x-large]' // using [ ] means selecting attributes
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"]])
    ], XLargeDirective);
    return XLargeDirective;
}());



/***/ })
],[35]);
//# sourceMappingURL=main.bundle.js.map
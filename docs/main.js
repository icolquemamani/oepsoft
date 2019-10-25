(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-3\">\n        <div class=\"form-group\">\n            <label for=\"search\">Desde</label>\n            <input [(ngModel)]=\"minMesa\" type=\"number\" class=\"form-control\" id=\"search\" placeholder=\"mesa\" min=\"1001\">\n        </div>\n    </div>\n    <div class=\"col-3\">\n        <div class=\"form-group\">\n            <label for=\"search\">Hasta</label>\n            <input [(ngModel)]=\"maxMesa\" type=\"number\" class=\"form-control\" id=\"search\" placeholder=\"mesa\" min=\"1001\">\n        </div>\n    </div>\n    \n    <div class=\"col-2\">\n        <button type=\"button\" class=\"btn btn-primary my-4\" (click)=\"search()\">Buscar</button>\n    </div>\n\n    <div class=\"col-4\">\n        <div class=\"input-group mb-3 my-4\">\n          <label for=\"search\">CI del elector</label>\n          <input [(ngModel)]=\"ci\" type=\"number\" class=\"form-control\" id=\"search\" placeholder=\"mesa\" min=\"1\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-primary\" type=\"button\" (click)=\"searchByCI()\">Buscar por CI</button>\n            </div>\n          </div>\n    </div>\n    \n  </div>\n  <div class=\"row text-center bg-dark text-light\">\n      <div class=\"col-6\">\n          <h1> TREP</h1>\n      </div>\n      <div class=\"col-6\">\n          <h1> COMPUTO</h1>\n      </div>\n  </div>\n  <div *ngIf=\"items\">\n    <div class=\"row p-2\" *ngFor=\"let item of items\">\n      <div class=\"col-2\">\n        <h3> MESA: {{ item }}</h3>\n        <diV >\n          <table class=\"table table-light table-sm table-bordered\" *ngIf=\"data[item ] | async as item\">         \n              <tbody>\n                <tr *ngFor=\"let votos of item.resulActa.resul\" class=\"p-0\">\n                  <th scope=\"row\">{{ votos.sigla }}</th>\n                  <td>{{ votos.votos }}</td>\n                </tr>\n              </tbody>\n            </table>\n        </diV>\n      </div>\n      <div class=\"col-4 p-2 bg-info\">\n        <img src=\"https://trep.oep.org.bo/resul/imgActa/{{ item }}1.jpg\" width=\"100%\"/>\n      </div>\n      <div class=\"col-4 p-2 bg-danger\">\n        <img src=\"https://computo.oep.org.bo/resul/imgActa/{{ item }}1.jpg\" width=\"100%\"/>\n      </div>\n      <div class=\"col-2\">\n          <h3> MESA: {{ item }}</h3>\n          <diV >\n            <table class=\"table table-light table-sm table-bordered\" *ngIf=\"dataComp[item ] | async as item\">         \n                <tbody>\n                  <tr *ngFor=\"let votos of item.resulActa.resul\" class=\"p-0\">\n                    <th scope=\"row\">{{ votos.sigla }}</th>\n                    <td>{{ votos.votos }}</td>\n                  </tr>\n                </tbody>\n              </table>\n          </diV>\n        </div>\n    </div>\n  </div>  \n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_trep_computo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/trep-computo.service */ "./src/app/services/trep-computo.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(compService) {
        this.compService = compService;
        this.title = 'fraudefront';
        this.items = Array.from(Array(10).keys()).map(function (x) { return x + 1001; });
        this.data = [];
        this.dataComp = [];
        this.minMesa = 1001;
        this.maxMesa = 1050;
        this.ci = 0;
        this.generate(this.minMesa, this.maxMesa);
    }
    AppComponent.prototype.search = function () {
        console.log(this.maxMesa, this.minMesa);
        this.generate(this.minMesa, this.maxMesa);
    };
    AppComponent.prototype.generate = function (min, max) {
        this.items = [];
        this.data = [];
        this.dataComp = [];
        for (var i = min; i <= max; i++) {
            console.log(i);
            this.items.push(i);
            this.data[i] = this.compService.getDataTableTrep(i);
            this.dataComp[i] = this.compService.getDataTableComp(i);
        }
    };
    AppComponent.prototype.searchByCI = function () {
        var _this = this;
        this.items = [];
        this.data = [];
        this.dataComp = [];
        this.compService.getMesaElector(this.ci).subscribe(function (i) {
            console.log(i);
            _this.items.push(i);
            _this.data[i] = _this.compService.getDataTableTrep(i);
            _this.dataComp[i] = _this.compService.getDataTableComp(i);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_trep_computo_service__WEBPACK_IMPORTED_MODULE_2__["TrepComputoService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/trep-computo.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/trep-computo.service.ts ***!
  \**************************************************/
/*! exports provided: TrepComputoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrepComputoService", function() { return TrepComputoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TrepComputoService = /** @class */ (function () {
    function TrepComputoService(http) {
        this.http = http;
    }
    TrepComputoService.prototype.getDataTableTrep = function (code) {
        return this.http.get('https://cors-anywhere.herokuapp.com/https://trep.oep.org.bo/resul/resulActa/' + code + '/1', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                'X-Random-Shit': '123123123'
            }
        });
    };
    TrepComputoService.prototype.getDataTableComp = function (code) {
        return this.http.get('https://cors-anywhere.herokuapp.com/https://computo.oep.org.bo/resul/resulActa/' + code + '/1', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                'X-Random-Shit': '123123123'
            }
        });
    };
    TrepComputoService.prototype.getMesaElector = function (CI) {
        return this.http.get('https://cors-anywhere.herokuapp.com/https://trep.oep.org.bo/resul/mesaElector/' + CI, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                'X-Random-Shit': '123123123'
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            console.log(data);
            return data.listaMesa[0] ? data.listaMesa[0].mesa.numMesa : 0;
        }));
    };
    TrepComputoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TrepComputoService);
    return TrepComputoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\fraudefront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
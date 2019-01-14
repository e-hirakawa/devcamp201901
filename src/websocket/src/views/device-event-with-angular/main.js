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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-orientation></app-orientation>\r\n<app-motion></app-motion>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _orientation_orientation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orientation/orientation.component */ "./src/app/orientation/orientation.component.ts");
/* harmony import */ var _motion_motion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./motion/motion.component */ "./src/app/motion/motion.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _orientation_orientation_component__WEBPACK_IMPORTED_MODULE_4__["OrientationComponent"],
                _motion_motion_component__WEBPACK_IMPORTED_MODULE_5__["MotionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/motion/motion.component.css":
/*!*********************************************!*\
  !*** ./src/app/motion/motion.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdGlvbi9tb3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/motion/motion.component.html":
/*!**********************************************!*\
  !*** ./src/app/motion/motion.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"motionLog\">\n    <p id=\"motionTimeStamp\">motion TimeStamp: {{motionTimeStamp}}</p>\n    <p id=\"motionParamX\">motion X: {{motionParamAlpha}}</p>\n    <p id=\"motionParamY\">motion Y: {{motionParamBeta}}</p>\n    <p id=\"motionParamZ\">motion Z: {{motionParamGamma}}</p>\n\n    <p>motion X MAX: {{maxAlpha}}</p>\n    <p>motion Y MAX: {{maxBeta}}</p>\n    <p>motion Z MAX: {{maxGamma}}</p>\n\n    <p>motion X min: {{minAlpha}}</p>\n    <p>motion Y min: {{minBeta}}</p>\n    <p>motion Z min: {{minGamma}}</p>\n</div>"

/***/ }),

/***/ "./src/app/motion/motion.component.ts":
/*!********************************************!*\
  !*** ./src/app/motion/motion.component.ts ***!
  \********************************************/
/*! exports provided: MotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionComponent", function() { return MotionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_sensor_param_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sensor-param.model */ "./src/app/shared/sensor-param.model.ts");



var MotionComponent = /** @class */ (function () {
    function MotionComponent() {
        var _this = this;
        // 画面に表示する加速度の値を持つ
        this.motionTimeStamp = 0;
        this.motionParamAlpha = 0;
        this.motionParamBeta = 0;
        this.motionParamGamma = 0;
        // 最大値
        this.maxAlpha = 0;
        this.maxBeta = 0;
        this.maxGamma = 0;
        // 最小値
        this.minAlpha = 0;
        this.minBeta = 0;
        this.minGamma = 0;
        // 取得した加速度のログを持つ
        this.motionLog = new Array();
        this.updateMotionInfo = function (event) {
            // 以下のように書けば加速度センサから情報を取得できる
            var timeStamp = event.timeStamp;
            var accelX = event.acceleration.x;
            var accelY = event.acceleration.y;
            var accelZ = event.acceleration.z;
            // 表示している情報を新しい情報で上書きする
            _this.motionTimeStamp = timeStamp;
            _this.motionParamAlpha = accelX;
            _this.motionParamBeta = accelY;
            _this.motionParamGamma = accelZ;
            // 上書きした情報をログに格納
            _this.motionLog.push(new _shared_sensor_param_model__WEBPACK_IMPORTED_MODULE_2__["SensorParam"](timeStamp, accelX, accelY, accelZ));
            // 最大値と最小値を更新
            if (_this.maxAlpha < accelX) {
                _this.maxAlpha = accelX;
            }
            if (_this.maxBeta < accelY) {
                _this.maxBeta = accelY;
            }
            if (_this.maxGamma < accelZ) {
                _this.maxGamma = accelZ;
            }
            if (_this.minAlpha > accelX) {
                _this.minAlpha = accelX;
            }
            if (_this.minBeta > accelY) {
                _this.minBeta = accelY;
            }
            if (_this.minGamma > accelZ) {
                _this.minGamma = accelZ;
            }
        };
    }
    MotionComponent.prototype.ngOnInit = function () {
        // 加速度センサが変更を検知したら, このクラスが持つ情報を更新するよう設定
        window.addEventListener('devicemotion', this.updateMotionInfo);
    };
    MotionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-motion',
            template: __webpack_require__(/*! ./motion.component.html */ "./src/app/motion/motion.component.html"),
            styles: [__webpack_require__(/*! ./motion.component.css */ "./src/app/motion/motion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MotionComponent);
    return MotionComponent;
}());



/***/ }),

/***/ "./src/app/orientation/orientation.component.css":
/*!*******************************************************!*\
  !*** ./src/app/orientation/orientation.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yaWVudGF0aW9uL29yaWVudGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/orientation/orientation.component.html":
/*!********************************************************!*\
  !*** ./src/app/orientation/orientation.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"orientationLog\">\n    <p id=\"orientationTimeStamp\">orientation TimeStamp: {{orientationTimeStamp}}</p>\n    <p id=\"orientationParamX\">orientation X: {{orientationParamX}}</p>\n    <p id=\"orientationParamY\">orientation Y: {{orientationParamY}}</p>\n    <p id=\"orientationParamZ\">orientation Z: {{orientationParamZ}}</p>\n</div>"

/***/ }),

/***/ "./src/app/orientation/orientation.component.ts":
/*!******************************************************!*\
  !*** ./src/app/orientation/orientation.component.ts ***!
  \******************************************************/
/*! exports provided: OrientationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrientationComponent", function() { return OrientationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_sensor_param_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sensor-param.model */ "./src/app/shared/sensor-param.model.ts");



var OrientationComponent = /** @class */ (function () {
    function OrientationComponent() {
        var _this = this;
        this.orientationTimeStamp = 0;
        this.orientationParamX = 0;
        this.orientationParamY = 0;
        this.orientationParamZ = 0;
        this.orientationLog = new Array();
        this.updateOrientationInfo = function (event) {
            var timeStamp = event.timeStamp;
            var alpha = event.alpha;
            var beta = event.beta;
            var gamma = event.gamma;
            _this.orientationTimeStamp = timeStamp;
            _this.orientationParamX = alpha;
            _this.orientationParamY = beta;
            _this.orientationParamZ = gamma;
            _this.orientationLog.push(new _shared_sensor_param_model__WEBPACK_IMPORTED_MODULE_2__["SensorParam"](timeStamp, alpha, beta, gamma));
        };
    }
    OrientationComponent.prototype.ngOnInit = function () {
        window.addEventListener('deviceorientation', this.updateOrientationInfo);
    };
    OrientationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orientation',
            template: __webpack_require__(/*! ./orientation.component.html */ "./src/app/orientation/orientation.component.html"),
            styles: [__webpack_require__(/*! ./orientation.component.css */ "./src/app/orientation/orientation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrientationComponent);
    return OrientationComponent;
}());



/***/ }),

/***/ "./src/app/shared/sensor-param.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/sensor-param.model.ts ***!
  \**********************************************/
/*! exports provided: SensorParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorParam", function() { return SensorParam; });
var SensorParam = /** @class */ (function () {
    function SensorParam(timeStamp, x, y, z) {
        this.timeStamp = timeStamp;
        this.paramX = x;
        this.paramY = y;
        this.paramZ = z;
    }
    return SensorParam;
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

module.exports = __webpack_require__(/*! /Users/eiji-hirakawa/workspace/devcamp/template/devcamp201901/src/device-event-with-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
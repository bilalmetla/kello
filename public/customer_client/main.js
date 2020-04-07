(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  \n  <ng-http-loader></ng-http-loader>\n\n  <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\n    <sidebar-cmp></sidebar-cmp>\n  </div>\n  <div class=\"main-panel\">\n    <navbar-cmp></navbar-cmp>\n    <div class=\"content\">\n\n      <router-outlet></router-outlet>\n\n      <router-outlet name=\"aux\"></router-outlet>\n\n    </div>\n\n\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default \">\n  <div class=\"container-fluid \">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar bar1\"></span>\n        <span class=\"icon-bar bar2\"></span>\n        <span class=\"icon-bar bar3\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Kello</a>\n    </div>\n    <div class=\"collapse navbar-collapse \">\n      <ul class=\"nav navbar-nav navbar-right \">\n        <!-- <li>\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"ti-panel\"></i>\n            <p>Stats</p>\n          </a>\n        </li> -->\n        <li class=\"\">\n          <a href=\"javascript:void(0)\" >\n            <i class=\"ti-bell\"></i>\n            <p class=\"notification\">5</p>\n            <p>Notifications</p>\n            <!-- <b class=\"caret\"></b> -->\n          </a>\n          \n        </li>\n        <li>\n          <a href=\"javascript:void(0)\" >\n            <i class=\"ti-user\"></i>\n            <!-- <p>Profile</p> -->\n            <select class=\"selectBox\" (change)=\"ProfileDropDownHandler($event.target.value)\" >\n              <option >Profile</option>\n              <option disabled>_________</option>\n              <option >Settings</option>\n              <option disabled>_________</option>\n              <option>Logout</option>\n            </select>\n          </a>\n        </li>\n\n         <!-- Dropdown -->\n         <!-- <li class=\"nav-item dropdown\" dropdown>\n          <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n          Basic dropdown<span class=\"caret\"></span></a>\n          <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\n              <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Action</a>\n              <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Another action</a>\n              <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Something else here</a>\n              <div class=\"divider dropdown-divider\"></div>\n              <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Separated link</a>\n          </div>\n      </li> -->\n      \n      \n      </ul>\n\n    </div>\n\n   \n\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/shopping.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/shopping.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Products</li>\n  </ol> -->\n  <div class=\"card\" *ngIf=\"isOrderConfirmed === false\" >\n    <div class=\"header\" style=\"height: 156px;\">\n      <!-- <h2 class=\"title\"> Fruits</h2> -->\n      <div *ngIf=\"cartFilled === false\" style=\"width:50%; float: left;\">\n          <input type=\"radio\" (click)=\"getProductByType(2)\" checked=\"true\" id=\"fruits\" name=\"productType\" value=\"2\">\n          <label style=\"margin: 10px;\" for=\"fruits\" class=\"title\">Fruits</label><br />\n          <input type=\"radio\" (click)=\"getProductByType(1)\" id=\"vegetables\" name=\"productType\" value=\"1\">\n          <label style=\"margin: 10px;\" for=\"vegetables\" class=\"title\">Vegetables</label>\n      </div>\n      <div *ngIf=\"cartFilled === true\" style=\"width:50%; float: left;\">\n      <span style=\"font-size: 30px; font-weight: 400;\">Review Order</span>\n      </div>\n      <div style=\"margin-left:50%;\">\n        <span>Total Bill: <strong>{{totalGui}}</strong></span>\n        <button *ngIf=\"cartFilled === false && totalGui > 0\" class=\"button-place-order\" (click)=\"checkOutCart()\"> Order</button>\n        <!-- <span *ngIf=\"cartFilled === false\" style=\"font-size: 40px;color: green;\" (click)=\"checkOutCart()\">\n\n          <i class=\"ti-shopping-cart\"></i>\n        </span> -->\n\n        <div >\n          <button class=\"btn btn-success w-md\" *ngIf=\"cartFilled === true\" (click)=\"confirmOrder()\">Confirm Order</button>\n          <button class=\"btn btn-primary w-md\" *ngIf=\"cartFilled === true\" (click)=\"backToProducts()\">Go Back</button>\n          <button class=\"btn btn-danger w-md\" *ngIf=\"cartFilled === true\" (click)=\"clearCart()\">Clear Cart</button>\n        \n        </div>\n\n    </div>\n\n    </div>\n    <!-- <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n        <div class=\"form-group\">\n          <label for=\"eng_title\">Eng Title:</label>\n          <input [(ngModel)]=\"filter.eng_title\" id=\"eng_title\" name=\"eng_title\" class=\"form-control\">\n        </div>\n        \n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n        <a [routerLink]=\"['../product', 'new' ]\" class=\"btn btn-default\">New</a>\n      </form>\n    </div> -->\n  </div>\n  \n  <div class=\"card\" *ngIf=\" productList != undefined && productList.length > 0 && isOrderConfirmed === false\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\" scope=\"col\">Product</th>\n            <!-- <th class=\"border-top-0\" scope=\"col\">Name</th> -->\n            <th class=\"border-top-0\" scope=\"col\">Price</th> \n            <th class=\"border-top-0\" scope=\"col\">Quantity</th> \n                                          \n            <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of productList | paginate: { itemsPerPage: 10, currentPage: p, totalItems: productList.length } \" [class.active]=\"item === selectedProduct\">\n          \n            <td >\n              \n              <img src=\"{{item.imageUrl}}\" required style=\"width:50px; height:50px\"/>\n              <span style=\"font-size: 10px; font-weight: 700;\"> {{item.displayName}}  </span>\n            \n          </td>\n           <!-- <td>{{item.displayName}}</td>   -->                     \n            <td > \n              <span style=\"font-size: 10px; font-weight: 700;\">{{item.retailPrice}} / {{unitsId_list[item.retailPiceUnitsId]}} </span>\n\n              </td> \n                                   \n            <td >\n              \n              <button class=\"btn btn-success btn-xs plus\" (click)=\"add(item.id)\"><i class=\"glyphicon glyphicon-plus\"></i>+</button>\n              <p *ngIf=\"selectedProduct[item.id]\" >\n                <strong>{{ selectedProduct[item.id].product_quality}}</strong>\n\n                </p>\n              <p *ngIf=\"!selectedProduct[item.id]\">\n                <strong>{{0}} </strong>\n              </p>\n              <button class=\"btn btn-danger btn-xs minus\" (click)=\"del(item.id)\"><i class=\"glyphicon glyphicon-minus\"></i>-</button>\n            </td>\n\n            <!-- <td style=\"white-space: nowrap\">\n              <a [routerLink]=\"['../product', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n              <button (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button>\n            </td> -->\n          </tr>\n        </tbody>\n      </table>\n\n      <pagination-controls class=\"pagination-controls\" (pageChange)=\"p = $event\"></pagination-controls>  \n\n    </div>\n  </div>\n  \n\n  <!-- starting form of customer info -->\n  <div  class=\"card col-xl-12\" style=\"margin-left: 10px;\" *ngIf=\"isOrderConfirmed === true\" >\n  <!-- Page title box -->\n<div class=\"page-title-alt-bg\"></div>\n<div class=\"header\" >\n   \n   <span style=\"font-size: 30px; font-weight: 200;\">Customer Info</span>\n</div>\n<!-- End page title box -->\n<div  class=\" row col-sm-12\" style=\"margin-left: 10px;\">\n   <div class=\" col-sm-8\">\n      <div class=\"card-box\">\n         <p *ngIf=\"errors\">{{ errors }}</p>\n         <form #productForm=\"ngForm\" *ngIf=\"customer\" class=\"form-horizontal\">\n            \n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"name\">\n               Full Name <span style=\"color:red\">*</span>\n               </label>\n               <div class=\"col-sm-8\">\n                  <input type=\"text\" required [(ngModel)]=\"customer.name\" name=\"name\" #name=\"ngModel\" class=\"form-control\">                                                                                                            \n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"phone\">\n                Phone <span style=\"color:red\">*</span>\n               </label>\n               <div class=\"col-sm-8\">\n                  <input type=\"number\" required [(ngModel)]=\"customer.phone\" name=\"phone\" #phone=\"ngModel\" class=\"form-control\">                                                                                                            \n               </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2 col-form-label\" for=\"street\">\n                Street No <span style=\"color:red\">*</span>\n              </label>\n              <div class=\"col-sm-8\">\n                 <input type=\"number\" required [(ngModel)]=\"customer.street\" name=\"street\" #street=\"ngModel\" class=\"form-control\">                                                                                                            \n              </div>\n           </div>\n\n           \n            <div class=\"form-group row\">\n              <label class=\"col-sm-2 col-form-label\" for=\"house\">  House No<span style=\"color:red\">*</span>  </label>\n              <div class=\"col-sm-8\">\n                 <input type=\"number\" required [(ngModel)]=\"order.house\" name=\"house\" #house=\"ngModel\" class=\"form-control\">                            \n              </div>\n           </div>\n\n           <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\" for=\"address\"> Address <span style=\"color:red\">*</span>  </label>\n            <div class=\"col-sm-8\">\n               <input type=\"text\" required [(ngModel)]=\"order.address\" name=\"address\" #address=\"ngModel\" class=\"form-control\">                            \n            </div>\n         </div>\n            <div class=\"row\">\n               <div class=\"col-sm-6 text-center \" style=\"margin-left: 2%;\" >\n                  <button type=\"button\" class=\"btn btn-success\"  (click)=\"save()\" [disabled]=\"productForm.invalid\">Place Order</button>\n                  <!-- <button type=\"button\" class=\"btn btn-danger\"  (click)=\"backToOrderReviewPage()\" >Cancel</button> -->\n               </div>\n               <!-- <div class=\"col-sm-6 text-right\">\n                  <button type=\"button\" class=\"btn btn-secondary w-md\"  (click)=\"cancel()\">Cancel</button>\n               </div> -->\n            </div>\n         </form>\n      </div>\n      <!-- end card-->\n   </div>\n   <!-- end col -->\n</div>\n<!-- end row -->\n  </div> \n  <!-- end of second cart div -->\n\n<!-- end of customer form info -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"sidebar-wrapper\">\n      \n    <div class=\"logo\">\n            \n        <a class=\"simple-text\">\n                  \n            <div class=\"logo-img\" >\n                        <img src=\"../../assets/img/Kello_title_logo.png\" alt=\"\">      \n            </div>\n                  Kello    \n        </a>\n          \n    </div>\n      \n    <ul class=\"nav\">\n            \n        <li>\n                  \n            <a routerLink=\"dashboard\">\n                        <i class=\"ti-home\"></i>\n                        <p>Dashboard</p>\n                      \n            </a>\n                \n        </li>\n            \n        <!-- <li>      <a routerLink=\"flight\">        <i class=\"ti-arrow-top-right\"></i>        <p>Flights</p>      </a>    </li> -->\n        \n        <li>\n              \n          <a routerLink=\"activation\">\n                  <i class=\"ti-lock\"></i>\n                  <p>Activations</p>\n                \n          </a>\n          \n      </li>\n\n        <li>\n              \n            <a routerLink=\"customer\">\n                    <i class=\"ti-user\"></i>\n                    <p>Customers</p>\n                  \n            </a>\n            \n        </li>\n        \n        <li>\n              \n            <a routerLink=\"partner\">\n                    <i class=\"ti-wheelchair\"></i>\n                    <p>Partners</p>\n                  \n            </a>\n            \n        </li>\n\n        <li>\n              \n          <a routerLink=\"orderses\">\n                  <i class=\"ti-receipt\"></i>\n                  <p>Orders</p>\n                \n          </a>\n          \n      </li>\n        \n        <li>\n              \n            <a routerLink=\"product\">\n                    <i class=\"ti-apple\"></i>\n                    <p>Products</p>\n                  \n            </a>\n            \n        </li>\n\n        <li>\n            <a routerLink=\"priceplans\">\n                    <i class=\"ti-gift\"></i>\n                    <p>Price Plan</p>      \n            </a>\n        </li>\n\n                        \n        <!-- <li>\n              \n            <a routerLink=\"offer\">\n                    <i class=\"ti-panel\"></i>\n                    <p>Offers</p>\n                  \n            </a>\n            \n        </li> -->\n        \n        <li>\n            <a routerLink=\"supply\">\n                    <i class=\"ti-truck\"></i>\n                    <p>Supplies</p>      \n            </a>\n        </li>\n\n        <li>\n            <a routerLink=\"customerfeedbacks\">\n                    <i class=\"ti-comments\"></i>\n                    <p>FeedBack</p>  \n            </a>\n        </li>\n\n        <li>\n            <a routerLink=\"orderratings\">\n                    <i class=\"ti-bar-chart\"></i>\n                    <p>Order Ratings</p>      \n            </a>\n        </li>\n\n        <li>\n            <a routerLink=\"promotions\">\n                    <i class=\"ti-alarm-clock\"></i>\n                    <p>Offers/Promotions</p>      \n            </a>\n        </li>\n\n        <li>\n            <a routerLink=\"configurations\">\n                    <i class=\"ti-settings\"></i>\n                    <p>Configurations</p>      \n            </a>\n        </li>\n\n        <!-- <li>\n              \n          <a routerLink=\"rateplan\">\n                  <i class=\"ti-money\"></i>\n                  <p>Rate plans</p>  \n          </a>\n      </li> -->\n            \n        <!--    <li>        <a routerLink=\"passenger-search\">            <i class=\"ti-user\"></i>            <p>Passengers</p>        </a>    </li>-->\n            \n        <!--        <li routerLinkActive=\"active\">        <a>            <i class=\"ti-close\"></i>            <p>Hide Basket</p>        </a>        </li>    -->\n          \n    </ul>\n    \n</div>\n\n");

/***/ }),

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

/***/ "./src/app/AuthInterceptor/AuthInterceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/AuthInterceptor/AuthInterceptor.ts ***!
  \****************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * Add AuthInterceptor that will intercept all your http requests and add the token to its headers:
 *
 */




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        //  const token = localStorage.token; // you probably want to store it in localStorage or something
        //const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var _this = this;
        // if (!currentUser || !currentUser.access_token) {
        //   return next.handle(req)
        //   .pipe(
        //     tap(event => this.checkAnyError(event)),
        //     catchError((err: HttpErrorResponse) => {
        //       this.showErrorDialog(err)
        //       this.handleError(err)
        //       return throwError (err)
        //     })
        //     )
        // }
        // const req1 = req.clone({
        //   headers: req.headers.set('Authorization', `Bearer ${currentUser.access_token}`),
        // });
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) { return _this.checkAnyError(event); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            _this.showErrorDialog(err);
            _this.handleError(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err.message + " [" + err.name + "]");
        }));
    };
    AuthInterceptor.prototype.checkAnyError = function (event) {
        //console.log('checkAnyError', event);
        if (event.body && event.body.error) {
            var error = event.body.error;
            //throwError (`${error.message} [${error.name}]`);
            this.showErrorDialog({ error: error });
        }
    };
    AuthInterceptor.prototype.handleError = function (err) {
        if (err.status == 401) {
            console.log(err.statusText);
            localStorage.removeItem('currentUser');
            this.router.navigate(['/login']);
        }
        return err;
    };
    AuthInterceptor.prototype.showErrorDialog = function (err) {
        console.error(err);
        var error = err;
        if (err && err.error && err.error.error) {
            error = err.error.error;
        }
        else if (err.error) {
            error = err.error;
        }
        return alert("Please Check Your Internet Conection!");
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading-indicator {\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.3;\n}\n\n.spinner {\n  width: 40px;\n  height: 40px;\n\n  position: relative;\n  margin: 100px auto;\n}\n\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #FFF;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out;\n}\n\n.double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0.0)\n  }\n  50% {\n    -webkit-transform: scale(1.0)\n  }\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  }\n  50% {\n    transform: scale(1.0);\n    -webkit-transform: scale(1.0);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87O0VBRVAsc0RBQXNEO0VBQ3RELDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFO0VBQ0Y7RUFDQTtJQUNFO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLDZCQUE2QjtFQUMvQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5zcGlubmVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTAwcHggYXV0bztcbn1cblxuLmRvdWJsZS1ib3VuY2UxLCAuZG91YmxlLWJvdW5jZTIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4uZG91YmxlLWJvdW5jZTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMClcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApXG4gIH1cbn1cblxuQGtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICB9XG59XG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flight-app',
            //templateUrl: './app.component.html',
            template: "\n  <router-outlet></router-outlet>\n",
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _AuthInterceptor_AuthInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthInterceptor/AuthInterceptor */ "./src/app/AuthInterceptor/AuthInterceptor.ts");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
/* harmony import */ var _layouts_login_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/login-layout.component */ "./src/app/layouts/login-layout.component.ts");
/* harmony import */ var _layouts_shopping_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/shopping-layout.component */ "./src/app/layouts/shopping-layout.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shopping/shopping.module */ "./src/app/shopping/shopping.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                ng_http_loader__WEBPACK_IMPORTED_MODULE_2__["NgHttpLoaderModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_7__["APP_ROUTES"].slice(), __assign({}, _app_routes__WEBPACK_IMPORTED_MODULE_7__["APP_EXTRA_OPTIONS"])),
                _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_13__["ShoppingModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _layouts_login_layout_component__WEBPACK_IMPORTED_MODULE_9__["LoginLayoutComponent"],
                _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_8__["HomeLayoutComponent"],
                _layouts_shopping_layout_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingLayoutComponent"],
            ],
            entryComponents: [
            //ConfirmDialogComponent,
            //InputDialogComponent,
            //MessageDialogComponent,
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _AuthInterceptor_AuthInterceptor__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptor"], multi: true },
            ],
            //entryComponents: [AlertDialogComponent],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES, APP_EXTRA_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_EXTRA_OPTIONS", function() { return APP_EXTRA_OPTIONS; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_shopping_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/shopping-layout.component */ "./src/app/layouts/shopping-layout.component.ts");
/* harmony import */ var _shopping_shopping_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping/shopping.component */ "./src/app/shopping/shopping.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



//import {DashboardListComponent} from './dashboard/dashboard-list/dashboard-list.component';
var APP_ROUTES = [
    // {
    //   path: '',
    //   redirectTo: 'login',
    //   pathMatch: 'full'
    // },
    // {
    //   path: 'home',
    //   component: HomeLayoutComponent,
    //   children: [
    //     {
    //       path: 'dashboard',
    //       component: DashboardListComponent
    //     }
    //   ]
    // },
    // {
    //   path: 'login',
    //   component: LoginLayoutComponent,
    //   //component: LoginComponent,
    //   children: [
    //     {
    //       path: 'login',
    //       component: LoginComponent
    //     }
    //   ]
    // },
    {
        path: 'shopping',
        component: _layouts_shopping_layout_component__WEBPACK_IMPORTED_MODULE_1__["ShoppingLayoutComponent"],
        children: [
            {
                path: 'shopping',
                component: _shopping_shopping_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingComponent"]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'shopping'
    }
];
var APP_EXTRA_OPTIONS = {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
};


/***/ }),

/***/ "./src/app/layouts/home-layout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/home-layout.component.ts ***!
  \**************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HomeLayoutComponent = /** @class */ (function () {
    function HomeLayoutComponent(route, router) {
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // if(!this.currentUser || !this.currentUser.id || !this.currentUser.access_token){
        //   this.router.navigate(['/login']);
        // }
        this.route = route;
        this.router = router;
        //  this.router.navigate([this.loginService.getCurrentUser() || '/home'])
        //let url = this.loginService.getCurrentUser();
        // console.log('HomeLayoutComponent url', url);
        // console.log('HomeLayoutComponent router url', this.router.url);
        // if(this.router.url === 'shopping' || this.router.url === '/shopping'){
        //   this.router.navigate(['/shopping'])
        //   return;
        // }
        //   if(url === '/login'){
        //    this.router.navigate(['/login'])
        //    return;
        //  }
        //  else if(this.router.url === 'home' || this.router.url === '/home' ){
        //     this.router.navigate(['/home/dashboard'])  
        //     return;
        //   }
    }
    HomeLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    HomeLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-layout',
            // template: `
            //   <app-header></app-header>
            //   <router-outlet></router-outlet>
            // `,
            template: __importDefault(__webpack_require__(/*! raw-loader!../app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeLayoutComponent);
    return HomeLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/login-layout.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layouts/login-layout.component.ts ***!
  \***************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LoginLayoutComponent = /** @class */ (function () {
    function LoginLayoutComponent() {
    }
    LoginLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-layout',
            template: "\n    <router-outlet></router-outlet>\n  "
        })
    ], LoginLayoutComponent);
    return LoginLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/shopping-layout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/shopping-layout.component.ts ***!
  \******************************************************/
/*! exports provided: ShoppingLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingLayoutComponent", function() { return ShoppingLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ShoppingLayoutComponent = /** @class */ (function () {
    function ShoppingLayoutComponent() {
    }
    ShoppingLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-layout',
            template: "\n    <router-outlet></router-outlet>\n  "
        })
    ], ShoppingLayoutComponent);
    return ShoppingLayoutComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  .selectBox {\n    width: 14px;\n    height: 17px;\n    background-color: whitesmoke;\n    color: #777777;\n    border: 0px;\n    padding-bottom: 20px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsb0JBQW9CO0VBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5zZWxlY3RCb3gge1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMTdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGNvbG9yOiAjNzc3Nzc3O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.sidebarToggle = function () {
        var body = document.getElementsByTagName('body')[0];
        console.log(body);
        console.log('nav bar', this.sidebarVisible);
        if (this.sidebarVisible == false) {
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    NavbarComponent.prototype.ProfileDropDownHandler = function (value) {
        console.log(value);
        if (value === 'Logout') {
            this.logOutHandler();
        }
    };
    NavbarComponent.prototype.logOutHandler = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shopping/shopping.component.css":
/*!*************************************************!*\
  !*** ./src/app/shopping/shopping.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.form-control{\n    background-color: rgb(232,240,254);\n    border: medium none;\n    border-radius: 4px;\n    color: rgb(14, 13, 13);\n    font-size: 21px;\n    -webkit-transition: background-color 0.3s ease 0s;\n    transition: background-color 0.3s ease 0s;\n    padding: 7px 10px;\n    height: 53px;\n    box-shadow: none;\n  }\n\n.large-button{\n  display: block;\n  width: 100%;\n \n  text-decoration: none;\n \n  padding: 14px 28px;\n  font-size: 25px;\n  cursor: pointer;\n  text-align: center;\n  \n}\n\n.large-button:hover{\n  background: rgba(3, 104, 8, 0.884);\n}\n\n.button-place-order {\n  display: inline-block;\n  padding: 10px 30px;\n  font-size: 24px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #4CAF50;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 9px #999;\n  margin-left: 4px;\n}\n\n.button-place-order:hover {background-color: #3e8e41}\n\n.button-place-order:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmcvc2hvcHBpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlEQUF5QztJQUF6Qyx5Q0FBeUM7SUFDekMsaUJBQWlCO0lBQ2pCLFlBQVk7SUFFWixnQkFBZ0I7RUFDbEI7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsV0FBVzs7RUFFWCxxQkFBcUI7O0VBRXJCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUEsMkJBQTJCLHlCQUF5Qjs7QUFFcEQ7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9zaG9wcGluZy9zaG9wcGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZm9ybS1jb250cm9se1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsMjQwLDI1NCk7XG4gICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6IHJnYigxNCwgMTMsIDEzKTtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UgMHM7XG4gICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgaGVpZ2h0OiA1M3B4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbi5sYXJnZS1idXR0b257XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiBcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuIFxuICBwYWRkaW5nOiAxNHB4IDI4cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxufVxuXG4ubGFyZ2UtYnV0dG9uOmhvdmVye1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDEwNCwgOCwgMC44ODQpO1xufVxuXG4uYnV0dG9uLXBsYWNlLW9yZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMCA5cHggIzk5OTtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmJ1dHRvbi1wbGFjZS1vcmRlcjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MX1cblxuLmJ1dHRvbi1wbGFjZS1vcmRlcjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xuICBib3gtc2hhZG93OiAwIDVweCAjNjY2O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/shopping/shopping.component.ts":
/*!************************************************!*\
  !*** ./src/app/shopping/shopping.component.ts ***!
  \************************************************/
/*! exports provided: ShoppingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingComponent", function() { return ShoppingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping.service */ "./src/app/shopping/shopping.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


//import { Shopping } from '../or';

var ShoppingComponent = /** @class */ (function () {
    function ShoppingComponent(route, router, shoppingService) {
        this.route = route;
        this.router = router;
        this.shoppingService = shoppingService;
        this.loading = false;
        this.submitted = false;
        this.feedback = {};
        this.selectedProduct = {};
        this.total = 0;
        this.totalGui = 0;
        this.delit = 0;
        this.order = {};
        this.cartFilled = false;
        this.customer = {};
        this.isOrderConfirmed = false;
    }
    ShoppingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.total = 0;
        this.producttypesId_list = [{ id: 1, typeName: "Vegitables" }, { id: 2, typeName: "Fruites" }];
        this.unitsId_list = { 1: "kg", 2: "dozen", 3: "250 GM", 4: "Bundle" };
        this.shoppingService.productsByType('2').subscribe(function (products) {
            _this.productList = products;
        });
    };
    ShoppingComponent.prototype.getProductByType = function (type) {
        var _this = this;
        this.shoppingService.productsByType(type).subscribe(function (products) {
            _this.p = 1;
            _this.productList = products;
        });
    };
    ShoppingComponent.prototype.totalPrice = function () {
        this.total = 0;
        this.totalGui = 0;
        var keys = Object.keys(this.selectedProduct);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var i = keys_1[_i];
            this.total += (this.selectedProduct[i].retailPrice * this.selectedProduct[i].product_quality);
            this.totalGui = +this.total;
        }
        //  console.log('this.cartFilled', this.cartFilled)
        //  console.log('this.total', this.total)
        if (this.cartFilled == true && this.total == 0) {
            this.cartFilled = false;
            this.selectedProduct = [];
            this.getProductByType(2);
        }
        else if (this.total == 0) {
            this.cartFilled = false;
            this.selectedProduct = [];
        }
    };
    ShoppingComponent.prototype.add = function (pid) {
        //    console.log(pid);
        for (var i = 0; i < this.productList.length; i++) {
            if (this.productList[i].id === pid) {
                this.selectedProduct[pid] = this.productList[i];
                this.selectedProduct[pid].product_quality ? this.selectedProduct[pid].product_quality += 1 : this.selectedProduct[pid].product_quality = 1;
            }
        }
        this.totalPrice();
        //      console.log(this.selectedProduct);
    };
    ShoppingComponent.prototype.del = function (pid) {
        if (this.selectedProduct[pid]) {
            if (this.selectedProduct[pid].product_quality == 0) {
                this.selectedProduct[pid].product_quality = 0;
                return;
            }
            this.selectedProduct[pid].product_quality -= 1;
        }
        this.totalPrice();
        // console.log(this.selectedProduct);
    };
    ShoppingComponent.prototype.checkOutCart = function () {
        //  console.log('checkout');
        if (Object.entries(this.selectedProduct).length <= 0) {
            return alert("Please Fill The Cart!");
        }
        this.cartFilled = true;
        this.productList = Object.values(this.selectedProduct);
    };
    ShoppingComponent.prototype.backToProducts = function () {
        this.cartFilled = false;
        this.getProductByType(2);
    };
    ShoppingComponent.prototype.clearCart = function () {
        this.selectedProduct = [];
        this.order = [];
        this.totalPrice();
        this.cartFilled = false;
    };
    ShoppingComponent.prototype.confirmOrder = function () {
        this.isOrderConfirmed = true;
        this.order.totalBillAmount = this.total;
        this.order.items = [];
        var keys = Object.keys(this.selectedProduct);
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var pid = keys_2[_i];
            //   console.log('pid', pid);
            this.order.items.push({
                productId: this.selectedProduct[pid].id,
                productTitle: this.selectedProduct[pid].displayName,
                quantity: this.selectedProduct[pid].product_quality,
                quentityUnit: this.selectedProduct[pid].retailPiceUnitsId,
            });
        }
        // console.log('confirmOrder', this.order);
    };
    ShoppingComponent.prototype.save = function () {
        var _this = this;
        this.order.web_customer = JSON.parse(JSON.stringify(this.customer));
        this.customer = {};
        this.shoppingService.save(this.order).subscribe(function (order) {
            alert('Thank you!\nTrace your order at kellostore app.');
            _this.customer = {};
            _this.order = {};
            _this.cartFilled = false;
            _this.isOrderConfirmed = false;
            _this.selectedProduct = [];
            _this.totalPrice();
            _this.getProductByType(2);
        }, function (err) {
        });
    };
    ShoppingComponent.prototype.backToOrderReviewPage = function () {
        this.isOrderConfirmed = false;
    };
    ShoppingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shopping_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingService"] }
    ]; };
    ShoppingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __importDefault(__webpack_require__(/*! raw-loader!./shopping.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/shopping.component.html")).default, styles: [__importDefault(__webpack_require__(/*! ./shopping.component.css */ "./src/app/shopping/shopping.component.css")).default] }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shopping_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingService"]])
    ], ShoppingComponent);
    return ShoppingComponent;
}());



/***/ }),

/***/ "./src/app/shopping/shopping.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shopping/shopping.module.ts ***!
  \*********************************************/
/*! exports provided: ShoppingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingModule", function() { return ShoppingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shopping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping.component */ "./src/app/shopping/shopping.component.ts");
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping.service */ "./src/app/shopping/shopping.service.ts");
/* harmony import */ var _shopping_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping.routes */ "./src/app/shopping/shopping.routes.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var ShoppingModule = /** @class */ (function () {
    function ShoppingModule() {
    }
    ShoppingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_shopping_routes__WEBPACK_IMPORTED_MODULE_6__["Shopping_ROUTES"]),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"]
            ],
            declarations: [
                _shopping_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingComponent"]
            ],
            providers: [_shopping_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingService"]],
            exports: []
        })
    ], ShoppingModule);
    return ShoppingModule;
}());



/***/ }),

/***/ "./src/app/shopping/shopping.routes.ts":
/*!*********************************************!*\
  !*** ./src/app/shopping/shopping.routes.ts ***!
  \*********************************************/
/*! exports provided: Shopping_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shopping_ROUTES", function() { return Shopping_ROUTES; });
/* harmony import */ var _shopping_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping.component */ "./src/app/shopping/shopping.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var Shopping_ROUTES = [
    {
        path: 'shopping',
        component: _shopping_component__WEBPACK_IMPORTED_MODULE_0__["ShoppingComponent"]
    }
];


/***/ }),

/***/ "./src/app/shopping/shopping.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shopping/shopping.service.ts ***!
  \**********************************************/
/*! exports provided: ShoppingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingService", function() { return ShoppingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json');
var ShoppingService = /** @class */ (function () {
    function ShoppingService(http) {
        this.http = http;
        this.productList = [];
        this.api = 'http:///shopping';
    }
    ShoppingService.prototype.productsByType = function (productType) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        url = this.api + "/protucts/type/" + productType;
        return this.http.get(url, { params: params, headers: headers });
    };
    ShoppingService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = "";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        url = this.api + "/order";
        return this.http.post(url, entity, { headers: headers, params: params });
    };
    ShoppingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ShoppingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ShoppingService);
    return ShoppingService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidebar-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/customer_client/main.ts":
/*!*************************************!*\
  !*** ./src/customer_client/main.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./src/customer_client/main.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bilalmetla/work/gitlab/code/kilo/dev_customer_portal/src/customer_client/main.ts */"./src/customer_client/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/activation/activation-edit/activation-edit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/activation/activation-edit/activation-edit.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- Page title box -->\n<div class=\"page-title-alt-bg\"></div>\n\n<div class=\"page-title-box\">\n        \n    <ol class=\"breadcrumb float-right\">\n                \n        <li class=\"breadcrumb-item\">\n            <a href=\"javascript:void(0);\">Project</a>\n        </li>\n                <li class=\"breadcrumb-item active\">Activations</li>\n            \n    </ol>\n        <h4 class=\"page-title\">Activations Detail</h4>\n    \n</div>\n<!-- End page title box -->\n\n<div class=\"row\">\n        \n    <div class=\"col-xl-12\">\n                \n        <div class=\"card-box\">\n                        <p *ngIf=\"errors\">{{ errors }}</p>\n                        \n            <form #activationForm=\"ngForm\" *ngIf=\"activation\" class=\"form-horizontal\">\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"id\">                                    Id                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{activation.id || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"phone\">                                    Phone                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{activation.phone || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"smsCode\">                                    Sms Code                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{activation.smsCode || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"emailCode\">                                    Email Code                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{activation.emailCode || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"expiry\">                                    Expiry                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{activation.expiry || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                \n                <div class=\"row\">\n                                        \n                    <div class=\"col-sm-6 text-left\">\n                        <button type=\"button\" class=\"btn btn-success w-md\"  (click)=\"save()\" [disabled]=\"activationForm.invalid\">Save</button>\n                    </div>\n                                        \n                    <div class=\"col-sm-6 text-right\">\n                        <button type=\"button\" class=\"btn btn-secondary w-md\"  (click)=\"cancel()\">Cancel</button>\n                    </div>\n                                    \n                </div>\n                            \n            </form>\n                    \n        </div>\n        <!-- end card-->\n            \n    </div>\n    <!-- end col -->\n    \n</div>\n<!-- end row -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/activation/activation-list/activation-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/activation/activation-list/activation-list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Activations</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Activations List</h2>\n    </div>\n    <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n        <div class=\"form-group\">\n          <label for=\"phone\">Phone:</label>\n          <input [(ngModel)]=\"filter.phone\" id=\"phone\" name=\"phone\" class=\"form-control\">\n        </div>\n        \n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n        <a [routerLink]=\"['../activation', 'new' ]\" class=\"btn btn-default\">New</a>\n      </form>\n    </div>\n  </div>\n  \n  <div class=\"card\" *ngIf=\"activationList.length > 0\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\" scope=\"col\">Id</th>\n            <th class=\"border-top-0\" scope=\"col\">Phone</th>\n            <th class=\"border-top-0\" scope=\"col\">Sms Code</th>\n            <th class=\"border-top-0\" scope=\"col\">Email Code</th>\n            <th class=\"border-top-0\" scope=\"col\">Expiry</th>\n            <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of activationList\" [class.active]=\"item === selectedActivation\">\n          \n            <td>{{item.id}}</td>\n            <td>{{item.phone}}</td>\n            <td>{{item.smsCode}}</td>\n            <td>{{item.emailCode}}</td>\n            <td>{{item.expiry}}</td>\n            \n            <td style=\"white-space: nowrap\">\n              <a [routerLink]=\"['../activation', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n              <button (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\n    <sidebar-cmp></sidebar-cmp>\n  </div>\n  <div class=\"main-panel\">\n    <navbar-cmp></navbar-cmp>\n    <div class=\"content\">\n\n      <router-outlet></router-outlet>\n\n      <router-outlet name=\"aux\"></router-outlet>\n\n    </div>\n\n\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-edit/customer-edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-edit/customer-edit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- Page title box -->\n<div class=\"page-title-alt-bg\"></div>\n\n<div class=\"page-title-box\">\n        \n    <ol class=\"breadcrumb float-right\">\n                \n        <li class=\"breadcrumb-item\">\n            <a href=\"javascript:void(0);\">Project</a>\n        </li>\n                <li class=\"breadcrumb-item active\">Customers</li>\n            \n    </ol>\n        <h4 class=\"page-title\">Customers Detail</h4>\n    \n</div>\n<!-- End page title box -->\n\n<div class=\"row\">\n        \n    <div class=\"col-xl-12\">\n                \n        <div class=\"card-box\">\n                        <p *ngIf=\"errors\">{{ errors }}</p>\n                        \n            <form #customerForm=\"ngForm\" *ngIf=\"customer\" class=\"form-horizontal\">\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"id\">                                    Id                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{customer.id || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"name\">\n                                                    Name <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"string\" required [(ngModel)]=\"customer.name\" name=\"name\" #name=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"phone\">\n                                                    Phone <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"tel\" required [(ngModel)]=\"customer.phone\" name=\"phone\" #phone=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"accessToken\">                                    AccessToken                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{customer.accessToken || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"isActivated\">                                    Is Activated                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{customer.isActivated || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                \n                <div class=\"row\">\n                                        \n                    <div class=\"col-sm-6 text-left\">\n                        <button type=\"button\" class=\"btn btn-success w-md\"  (click)=\"save()\" [disabled]=\"customerForm.invalid\">Save</button>\n                    </div>\n                                        \n                    <div class=\"col-sm-6 text-right\">\n                        <button type=\"button\" class=\"btn btn-secondary w-md\"  (click)=\"cancel()\">Cancel</button>\n                    </div>\n                                    \n                </div>\n                            \n            </form>\n                    \n        </div>\n        <!-- end card-->\n            \n    </div>\n    <!-- end col -->\n    \n</div>\n<!-- end row -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-list/customer-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-list/customer-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Customers</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Customers List</h2>\n    </div>\n    <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n        <!-- <div class=\"form-group\">\n          <label for=\"phone\">Phone:</label>\n          <input [(ngModel)]=\"filter.phone\" id=\"phone\" name=\"phone\" class=\"form-control\">\n        </div> -->\n        \n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n        <a [routerLink]=\"['../customer', 'new' ]\" class=\"btn btn-default\">New</a>\n      </form>\n    </div>\n  </div>\n  \n  <div class=\"card\" *ngIf=\"customerList.length > 0\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\" scope=\"col\">Id</th>\n            <th class=\"border-top-0\" scope=\"col\">Name</th>\n            <th class=\"border-top-0\" scope=\"col\">Phone</th>\n            <th class=\"border-top-0\" scope=\"col\">AccessToken</th>\n            <th class=\"border-top-0\" scope=\"col\">Is Activated</th>\n            <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of customerList\" [class.active]=\"item === selectedCustomer\">\n          \n            <td>{{item.id}}</td>\n                                    <td>{{item.name}}</td>\n                                    <td>{{item.phone}}</td>\n                                    <td>{{item.accessToken}}</td>\n                                    <td>{{item.isActivated}}</td>\n            \n            <td style=\"white-space: nowrap\">\n              <a [routerLink]=\"['../customer', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n              <button (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/flight/flight-edit/flight-edit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/flight/flight-edit/flight-edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Flight</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Flight Detail</h2>\n  </div>\n  <div class=\"content\">\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n    <form *ngIf=\"flight\" #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n    \n      <div class=\"form-group\">\n        <label for=\"id\">Id</label>\n        <input type=\"number\" [(ngModel)]=\"flight.id\" id=\"id\" name=\"id\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"from\">From</label>\n        <input [(ngModel)]=\"flight.from\" id=\"from\" name=\"from\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"to\">To</label>\n        <input [(ngModel)]=\"flight.to\" id=\"to\" name=\"to\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"date\">Date</label>\n        <input type=\"date\" [(ngModel)]=\"flight.date\" id=\"date\" name=\"date\" class=\"form-control\">\n      </div>\n    \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Save</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/flight/flight-list/flight-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/flight/flight-list/flight-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Flight</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Flight List</h2>\n  </div>\n  <div class=\"content\">\n    <form #f=\"ngForm\">\n      \n      <div class=\"form-group\">\n        <label for=\"from\">From:</label>\n        <input [(ngModel)]=\"filter.from\" id=\"from\" name=\"from\" class=\"form-control\">\n      </div>\n      \n      <div class=\"form-group\">\n        <label for=\"to\">To:</label>\n        <input [(ngModel)]=\"filter.to\" id=\"to\" name=\"to\" class=\"form-control\">\n      </div>\n      \n      <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n      <a [routerLink]=\"['../flights', 'new' ]\" class=\"btn btn-default\">New</a>\n    </form>\n  </div>\n</div>\n<div class=\"card\" *ngIf=\"flightList.length > 0\">\n  <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n      <thead>\n        <tr>\n          <th class=\"border-top-0\" scope=\"col\">Id</th>\n          <th class=\"border-top-0\" scope=\"col\">From</th>\n          <th class=\"border-top-0\" scope=\"col\">To</th>\n          <th class=\"border-top-0\" scope=\"col\">Date</th>\n          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of flightList\" [class.active]=\"item === selectedFlight\">\n        \n          <td>{{item.id}}</td>\n          <td>{{item.from}}</td>\n          <td>{{item.to}}</td>\n          <td>{{item.date | date}}</td>\n          <td style=\"white-space: nowrap\">\n            <a [routerLink]=\"['../flights', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n            <button (click)=\"delete(item)\" class=\"btn btn-danger\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"header\">\n    <h1 class=\"title\">Welcome {{userName}}</h1>\n  </div>\n  <div class=\"content\">\n\n    <div *ngIf=\"needsLogin\" class=\"alert alert-warning\">\n      You have been redirected to this page because you don't have the necessary\n      rights for the reqeusted action. Login with a respective user account!\n    </div>\n\n    <button (click)=\"login()\" class=\"btn btn-default\">Login</button>\n    <button (click)=\"logout()\" class=\"btn btn-default\">Logout</button>\n\n    <!--\n    <tabbed-pane [activeId]=\"0\">\n        <tab title=\"Booked\" [id]=\"0\">\n            This page could display all booked passengers ...\n        </tab>\n        <tab title=\"Checked in\" [id]=\"1\">\n            This page could display all checked in passengers ...\n        </tab>\n\n        <tab title=\"Boarded\" [id]=\"2\">\n            This page could display all boarded passengers ...\n        </tab>\n    </tabbed-pane>\n    -->\n  </div>\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hotel/hotel-edit/hotel-edit.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hotel/hotel-edit/hotel-edit.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Hotel</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Hotel Detail</h2>\n  </div>\n  <div class=\"content\">\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n    <form *ngIf=\"hotel\" #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n    \n      <div class=\"form-group\">\n        <label>Id</label>\n        {{hotel.id || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input [(ngModel)]=\"hotel.name\" id=\"name\" name=\"name\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"city\">City</label>\n        <input [(ngModel)]=\"hotel.city\" id=\"city\" name=\"city\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"stars\">Stars</label>\n        <input [(ngModel)]=\"hotel.stars\" id=\"stars\" name=\"stars\" class=\"form-control\">\n      </div>\n    \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Save</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hotel/hotel-list/hotel-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hotel/hotel-list/hotel-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Hotel</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Hotel List</h2>\n  </div>\n  <div class=\"content\">\n    <form #f=\"ngForm\">\n      \n      <div class=\"form-group\">\n        <label for=\"city\">City:</label>\n        <input [(ngModel)]=\"filter.city\" id=\"city\" name=\"city\" class=\"form-control\">\n      </div>\n      \n      <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n      <a [routerLink]=\"['../hotels', 'new' ]\" class=\"btn btn-default\">New</a>\n    </form>\n  </div>\n</div>\n<div class=\"card\" *ngIf=\"hotelList.length > 0\">\n  <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n      <thead>\n        <tr>\n          <th class=\"border-top-0\" scope=\"col\">Id</th>\n          <th class=\"border-top-0\" scope=\"col\">Name</th>\n          <th class=\"border-top-0\" scope=\"col\">City</th>\n          <th class=\"border-top-0\" scope=\"col\">Stars</th>\n          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of hotelList\" [class.active]=\"item === selectedHotel\">\n        \n          <td>{{item.id}}</td>\n          <td>{{item.name}}</td>\n          <td>{{item.city}}</td>\n          <td>{{item.stars}}</td>\n          <td style=\"white-space: nowrap\">\n            <a [routerLink]=\"['../hotels', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n            <button (click)=\"delete(item)\" class=\"btn btn-danger\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar bar1\"></span>\n        <span class=\"icon-bar bar2\"></span>\n        <span class=\"icon-bar bar3\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Kello</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"ti-panel\"></i>\n            <p>Stats</p>\n          </a>\n        </li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"ti-bell\"></i>\n            <p class=\"notification\">5</p>\n            <p>Notifications</p>\n            <b class=\"caret\"></b>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Notification 1</a></li>\n            <li><a href=\"#\">Notification 2</a></li>\n            <li><a href=\"#\">Notification 3</a></li>\n            <li><a href=\"#\">Notification 4</a></li>\n            <li><a href=\"#\">Another notification</a></li>\n          </ul>\n        </li>\n        <li>\n          <a href=\"#\">\n            <i class=\"ti-settings\"></i>\n            <p>Settings</p>\n          </a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders-edit/orders-edit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders-edit/orders-edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Orders</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Orders Detail</h2>\n  </div>\n  <div class=\"content\">\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n    <form *ngIf=\"orders\" #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n    \n      <div class=\"form-group\">\n        <label>Id</label>\n        {{orders.id || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Order Time</label>\n        {{orders.orderTime || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Order Status</label>\n        {{orders.orderStatus || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Total Bill Amount</label>\n        {{orders.totalBillAmount || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Is Delivered</label>\n        {{orders.isDelivered || false}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Ordered By</label>\n        {{orders.orderCategory || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Customer Id</label>\n        {{orders.customersId || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Partner Id</label>\n        {{orders.partnersId || 'n/a'}} \n      </div>\n    \n      <div class=\"table-responsive\">\n        <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n          <thead>\n            <tr>\n              \n              <th class=\"border-top-0\" scope=\"col\">Product Title</th>\n              <th class=\"border-top-0\" scope=\"col\">Quentity</th>\n              <th class=\"border-top-0\" scope=\"col\">QuentityUnit</th>\n              \n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let product of orders.items\" [class.active]=\"product === selectedOrders\">\n            \n              <td>{{product.productTitle}}</td>\n              <td>{{product.quantity}}</td>\n              <td>{{product.quentityUnit}}</td>\n              \n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <!-- <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Save</button> -->\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders-list/orders-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders-list/orders-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Orders</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Orders List</h2>\n  </div>\n  <div class=\"content\">\n    <form #f=\"ngForm\">\n      \n      <div class=\"form-group\">\n        <label for=\"orderStatus\">Order Status:</label>\n        <input [(ngModel)]=\"filter.orderStatus\" id=\"orderStatus\" name=\"orderStatus\" class=\"form-control\">\n      </div>\n      \n      <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n      <!-- <a [routerLink]=\"['../orderses', 'new' ]\" class=\"btn btn-default\">New</a> -->\n    </form>\n  </div>\n</div>\n\n<div class=\"card\" *ngIf=\"ordersList.length > 0\">\n  <p *ngIf=\"errors\">{{ errors }}</p>\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n      <thead>\n        <tr>\n          <th class=\"border-top-0\" scope=\"col\">Id</th>\n          <th class=\"border-top-0\" scope=\"col\">Order Time</th>\n          <th class=\"border-top-0\" scope=\"col\">Order Status</th>\n          <th class=\"border-top-0\" scope=\"col\">Is Delivered</th>\n          <th class=\"border-top-0\" scope=\"col\">Total Bill Amount</th>\n          <th class=\"border-top-0\" scope=\"col\">Ordered By</th>\n          \n          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of ordersList\" [class.active]=\"item === selectedOrders\">\n        \n          <td>{{item.id}}</td>\n          <td>{{item.orderTime}}</td>\n          <td>{{item.orderStatus}}</td>\n          <td>{{item.isDelivered}}</td>\n          <td>{{item.totalBillAmount}}</td>\n          <td>{{item.orderCategory}}</td>\n          \n          <td style=\"white-space: nowrap\">\n            <a [routerLink]=\"['../orderses', item.id ]\" class=\"btn btn-secondary\">View</a>&nbsp;\n            <!-- <button (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button> -->\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partner/partner-edit/partner-edit.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partner/partner-edit/partner-edit.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- Page title box -->\n<div class=\"page-title-alt-bg\"></div>\n\n<div class=\"page-title-box\">\n        \n    <ol class=\"breadcrumb float-right\">\n                \n        <li class=\"breadcrumb-item\">\n            <a href=\"javascript:void(0);\">Project</a>\n        </li>\n                <li class=\"breadcrumb-item active\">Partners</li>\n            \n    </ol>\n        <h4 class=\"page-title\">Partners Detail</h4>\n    \n</div>\n<!-- End page title box -->\n\n<div class=\"row\">\n        \n    <div class=\"col-xl-12\">\n                \n        <div class=\"card-box\">\n                        <p *ngIf=\"errors\">{{ errors }}</p>\n                        \n            <form #partnerForm=\"ngForm\" *ngIf=\"partner\" class=\"form-horizontal\">\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"id\">                                    Id                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{partner.id || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"name\">\n                                                    Name <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"string\" required [(ngModel)]=\"partner.name\" name=\"name\" #name=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"phone\">\n                                                    Phone <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"tel\" required [(ngModel)]=\"partner.phone\" name=\"phone\" #phone=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"accessToken\">                                    AccessToken                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{partner.accessToken || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"isActivated\">                                    Is Activated                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{partner.isActivated || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"pin\">                                    Pin                                </label>\n                                                                                                                           \n                    <div class=\"col-sm-10\">\n                                                                                            <input type=\"number\" [(ngModel)]=\"partner.pin\" name=\"pin\" class=\"form-control\">                                                                                                                \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"lastActive\">                                    Last Active                                </label>\n                                                                                                                           \n                    <div class=\"col-sm-10\">\n                                                                                            <input type=\"Date\" [(ngModel)]=\"partner.lastActive\" name=\"lastActive\" class=\"form-control\">                                                                                                                \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"creationDate\">                                    CreationDate                                </label>\n                                                                                                                           \n                    <div class=\"col-sm-10\">\n                                                                                            <input type=\"Date\" [(ngModel)]=\"partner.creationDate\" name=\"creationDate\" class=\"form-control\">                                                                                                                \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"partnertypesId\">\n                                                    Partner Type <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                    \n                        <select required [(ngModel)]=\"partner.partnertypesId\" name=\"partnertypesId\" class=\"form-control\">\n                                                                    <option *ngFor=\"let c of partnertypesId_list\" value=\"{{ c.id }}\">{{ c.typeName }}</option>\n                                                                 \n                        </select>\n                                                                                                                                                                                             \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"offersId\">                                    Offer                                </label>\n                                                                                                                           \n                    <div class=\"col-sm-10\">\n                                                                                            \n                        <select [(ngModel)]=\"partner.offersId\" name=\"offersId\" class=\"form-control\">\n                                                                            <option *ngFor=\"let c of offersId_list\" value=\"{{ c.id }} \">{{ c.offerName }}</option>\n                                                                         \n                        </select>\n                                                                                                                                \n                    </div>\n                                        \n                </div>\n                                                \n                <div class=\"row\">\n                                        \n                    <div class=\"col-sm-6 text-left\">\n                        <button type=\"button\" class=\"btn btn-success w-md\"  (click)=\"save()\" [disabled]=\"partnerForm.invalid\">Save</button>\n                    </div>\n                                        \n                    <div class=\"col-sm-6 text-right\">\n                        <button type=\"button\" class=\"btn btn-secondary w-md\"  (click)=\"cancel()\">Cancel</button>\n                    </div>\n                                    \n                </div>\n                            \n            </form>\n                    \n        </div>\n        <!-- end card-->\n            \n    </div>\n    <!-- end col -->\n    \n</div>\n<!-- end row -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partner/partner-list/partner-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partner/partner-list/partner-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Partners</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Partners List</h2>\n    </div>\n    <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n        <div class=\"form-group\">\n          <label for=\"phone\">Phone:</label>\n          <input [(ngModel)]=\"filter.phone\" id=\"phone\" name=\"phone\" class=\"form-control\">\n        </div>\n        \n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n        <a [routerLink]=\"['../partner', 'new' ]\" class=\"btn btn-default\">New</a>\n      </form>\n    </div>\n  </div>\n  \n  <div class=\"card\" *ngIf=\"partnerList.length > 0\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\" scope=\"col\">Id</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Name</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Phone</th>\n                                          <th class=\"border-top-0\" scope=\"col\">AccessToken</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Is Activated</th>\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Pin</th> -->\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Last Active</th> -->\n                                          <th class=\"border-top-0\" scope=\"col\">CreationDate</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Partner Type</th>\n                                          \n                                          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of partnerList\" [class.active]=\"item === selectedPartner\">\n          \n            <td>{{item.id}}</td>\n                                    <td>{{item.name}}</td>\n                                    <td>{{item.phone}}</td>\n                                    <td>{{item.accessToken}}</td>\n                                    <td>{{item.isActivated}}</td>\n                                    <!-- <td>{{item.pin}}</td>\n                                    <td>{{item.lastActive}}</td> -->\n                                    <td>{{item.creationDate}}</td>\n                                    <td>{{item.partnertypesId}}</td>\n                                    \n            \n            <td style=\"white-space: nowrap\">\n              <a [routerLink]=\"['../partner', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n              <button (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-edit/product-edit.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-edit/product-edit.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- Page title box -->\n<div class=\"page-title-alt-bg\"></div>\n\n<div class=\"page-title-box\">\n        \n    <ol class=\"breadcrumb float-right\">\n                \n        <li class=\"breadcrumb-item\">\n            <a href=\"javascript:void(0);\">Project</a>\n        </li>\n                <li class=\"breadcrumb-item active\">Products</li>\n            \n    </ol>\n        <h4 class=\"page-title\">Products Detail</h4>\n    \n</div>\n<!-- End page title box -->\n\n<div class=\"row\">\n        \n    <div class=\"col-xl-12\">\n                \n        <div class=\"card-box\">\n                        <p *ngIf=\"errors\">{{ errors }}</p>\n                        \n            <form #productForm=\"ngForm\" *ngIf=\"product\" class=\"form-horizontal\">\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"id\">                                    Id                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{product.id || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"eng_title\">\n                                                    Eng Title <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"string\" required [(ngModel)]=\"product.eng_title\" name=\"eng_title\" #eng_title=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"urdu_title\">\n                                                    Urdu Title <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                            \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"string\" required [(ngModel)]=\"product.urdu_title\" name=\"urdu_title\" #urdu_title=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                        \n                <div class=\"form-group row\">\n                                                                        <label class=\"col-sm-2 col-form-label\" for=\"quentityOnHand\">                            Quentity On Hand                         </label>\n                                            \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"number\" readonly [(ngModel)]=\"product.quentityOnHand\" name=\"quentityOnHand\" #quentityOnHand=\"ngModel\" class=\"form-control\">                            \n                    </div>\n                                        \n                </div>\n                                                        \n                <div class=\"form-group row\">\n                                                                        <label class=\"col-sm-2 col-form-label\" for=\"unitsId\">                            Buying Price Unit                         </label>\n                                                \n                    <div class=\"col-sm-10\">\n                                                                                    \n                        <select [(ngModel)]=\"product.buyingPriceUnitsId\" name=\"buyingPriceUnitsId\" class=\"form-control\">\n                                                                    <option *ngFor=\"let c of unitsId_list\" value=\"{{ c.id }}\">{{ c.unitDisplayName }}</option>\n                                                                 \n                        </select>\n                                                                                                \n                    </div>\n                                        \n                </div>\n                                    \n                <div class=\"form-group row\">\n                                                                        <label class=\"col-sm-2 col-form-label\" for=\"buyingPrice\">                            Buying Price                         </label>\n                                            \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"number\" [(ngModel)]=\"product.buyingPrice\" name=\"buyingPrice\" #buyingPrice=\"ngModel\" class=\"form-control\">                                                                                        \n                    </div>\n                                        \n                </div>\n                                                        \n                <div class=\"form-group row\">\n                                                                        <label class=\"col-sm-2 col-form-label\" for=\"unitsId\">                            Sale Price Unit                         </label>\n                                                \n                    <div class=\"col-sm-10\">\n                                                                                    \n                        <select [(ngModel)]=\"product.salePriceUnitsId\" name=\"salePriceUnitsId\" class=\"form-control\">\n                                                                    <option *ngFor=\"let c of unitsId_list\" value=\"{{ c.id }}\">{{ c.unitDisplayName }}</option>\n                                                                 \n                        </select>\n                                                                                                \n                    </div>\n                                        \n                </div>\n                                                        \n                <div class=\"form-group row\">\n                                                                        <label class=\"col-sm-2 col-form-label\" for=\"salePrice\">                            Sale Price                         </label>\n                                            \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"number\" [(ngModel)]=\"product.salePrice\" name=\"buyingPrice\" #salePrice=\"ngModel\" class=\"form-control\">                                                                                        \n                    </div>\n                                        \n                </div>\n                                                        \n                <div class=\"form-group row\">\n                                                                        <label class=\"col-sm-2 col-form-label\" for=\"unitsId\">                            Retail Price Unit                         </label>\n                                                \n                    <div class=\"col-sm-10\">\n                                                                                    \n                        <select [(ngModel)]=\"product.retailPiceUnitsId\" name=\"retailPiceUnitsId\" class=\"form-control\">\n                                                                    <option *ngFor=\"let c of unitsId_list\" value=\"{{ c.id }}\">{{ c.unitDisplayName }}</option>\n                                                                 \n                        </select>\n                                                                                                \n                    </div>\n                                        \n                </div>\n                                    \n                <div class=\"form-group row\">\n                                                                        <label class=\"col-sm-2 col-form-label\" for=\"retailPrice\">                            Retail Price                         </label>\n                                            \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"number\" [(ngModel)]=\"product.retailPrice\" name=\"buyingPrice\" #retailPrice=\"ngModel\" class=\"form-control\">                                                                                        \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"producttypesId\">\n                                                    Product Type <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                            \n                    <div class=\"col-sm-10\">\n                                                                                    \n                        <select required [(ngModel)]=\"product.producttypesId\" name=\"producttypesId\" class=\"form-control\">\n                                                                    <option *ngFor=\"let c of producttypesId_list\" value=\"{{ c.id }}\">{{ c.typeName }}</option>\n                                                                 \n                        </select>\n                                                    \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"unitsId\">\n                                                    Image <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                    \n                    <div class=\"col-sm-10\">\n                                                                                <input type=\"file\" required accept=\"image/*\" (change)=\"changeImageListener($event)\">\n                                                                                      <img [src]=\"product.image\" style=\"width:100px; height:100px\"/>                                                                        \n                    </div>\n                                        \n                </div>\n                                                \n                <div class=\"row\">\n                                        \n                    <div class=\"col-sm-6 text-left\">\n                        <button type=\"button\" class=\"btn btn-success w-md\"  (click)=\"save()\" [disabled]=\"productForm.invalid\">Save</button>\n                    </div>\n                                        \n                    <div class=\"col-sm-6 text-right\">\n                        <button type=\"button\" class=\"btn btn-secondary w-md\"  (click)=\"cancel()\">Cancel</button>\n                    </div>\n                                    \n                </div>\n                            \n            </form>\n                    \n        </div>\n        <!-- end card-->\n            \n    </div>\n    <!-- end col -->\n    \n</div>\n<!-- end row -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-list/product-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-list/product-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Products</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Products List</h2>\n    </div>\n    <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n        <div class=\"form-group\">\n          <label for=\"eng_title\">Eng Title:</label>\n          <input [(ngModel)]=\"filter.eng_title\" id=\"eng_title\" name=\"eng_title\" class=\"form-control\">\n        </div>\n        \n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n        <a [routerLink]=\"['../product', 'new' ]\" class=\"btn btn-default\">New</a>\n      </form>\n    </div>\n  </div>\n  \n  <div class=\"card\" *ngIf=\"productList.length > 0\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\" scope=\"col\">Id</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Eng Title</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Urdu Title</th>\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Product Type</th> -->\n                                          <th class=\"border-top-0\" scope=\"col\">Quentity On Hand</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Buying Price</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Sale Price</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Retail Price</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Image</th>\n                                          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of productList\" [class.active]=\"item === selectedProduct\">\n          \n            <td>{{item.id}}</td>\n                                    <td>{{item.eng_title}}</td>\n                                    <td>{{item.urdu_title}}</td>\n                                    <!-- <td>{{item.producttypesId}}</td> -->\n                                    <td>{{item.quentityOnHand}}</td>\n                                    <td>{{item.buyingPrice}}</td>\n                                    <td>{{item.salePrice}}</td>\n                                    <td>{{item.retailPrice}}</td>\n                                    <td>\n                                        <img [src]=\"item.image\" required style=\"width:50px; height:50px\"/>\n                                    </td>\n            \n            <td style=\"white-space: nowrap\">\n              <a [routerLink]=\"['../product', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n              <button (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rateplan/rateplan-edit/rateplan-edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rateplan/rateplan-edit/rateplan-edit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- Page title box -->\n<div class=\"page-title-alt-bg\"></div>\n\n<div class=\"page-title-box\">\n        \n    <ol class=\"breadcrumb float-right\">\n                \n        <li class=\"breadcrumb-item\">\n            <a href=\"javascript:void(0);\">Project</a>\n        </li>\n                <li class=\"breadcrumb-item active\">Rateplans</li>\n            \n    </ol>\n        <h4 class=\"page-title\">Rateplans Detail</h4>\n    \n</div>\n<!-- End page title box -->\n\n<div class=\"row\">\n        \n    <div class=\"col-xl-12\">\n                \n        <div class=\"card-box\">\n                        <p *ngIf=\"errors\">{{ errors }}</p>\n                        \n            <form #rateplanForm=\"ngForm\" *ngIf=\"rateplan\" class=\"form-horizontal\">\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"id\">                                    Id                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{rateplan.id || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"ratePlanTitle\">\n                                                    Rate Plan Title <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                            \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"string\" required [(ngModel)]=\"rateplan.ratePlanTitle\" name=\"ratePlanTitle\" #ratePlanTitle=\"ngModel\" class=\"form-control\">                            \n                    </div>\n                                        \n                </div>\n                                    \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"saleMarkup\">\n                                                    Sale Markup <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                            \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"number\" required [(ngModel)]=\"rateplan.saleMarkup\" name=\"saleMarkup\" #saleMarkup=\"ngModel\" class=\"form-control\">                            \n                    </div>\n                                        \n                </div>\n                                    \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"retailMarkup\">\n                                                    Retail Markup <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                            \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"number\" required [(ngModel)]=\"rateplan.retailMarkup\" name=\"retailMarkup\" #retailMarkup=\"ngModel\" class=\"form-control\">                            \n                    </div>\n                                        \n                </div>\n                                                        \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"createdDate\">                                    Created Date                                </label>\n                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                <input type=\"date\" [(ngModel)]=\"rateplan.createdDate\" name=\"createdDate\" class=\"form-control\">                            \n                    </div>\n                                        \n                </div>\n                                                \n                <div class=\"row\">\n                                        \n                    <div class=\"col-sm-6 text-left\">\n                        <button type=\"button\" class=\"btn btn-success w-md\"  (click)=\"save()\" [disabled]=\"rateplanForm.invalid\">Save</button>\n                    </div>\n                                        \n                    <div class=\"col-sm-6 text-right\">\n                        <button type=\"button\" class=\"btn btn-secondary w-md\"  (click)=\"cancel()\">Cancel</button>\n                    </div>\n                                    \n                </div>\n                            \n            </form>\n                    \n        </div>\n        <!-- end card-->\n            \n    </div>\n    <!-- end col -->\n    \n</div>\n<!-- end row -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rateplan/rateplan-list/rateplan-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rateplan/rateplan-list/rateplan-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Rateplans</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Rateplans List</h2>\n    </div>\n    <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n        <div class=\"form-group\">\n          <label for=\"ratePlanTitle\">Rate Plan Title:</label>\n          <input [(ngModel)]=\"filter.ratePlanTitle\" id=\"ratePlanTitle\" name=\"ratePlanTitle\" class=\"form-control\">\n        </div>\n        \n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n        <a [routerLink]=\"['../rateplan', 'new' ]\" class=\"btn btn-default\">New</a>\n      </form>\n    </div>\n  </div>\n  \n  <div class=\"card\" *ngIf=\"rateplanList.length > 0\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\" scope=\"col\">Id</th>\n            <th class=\"border-top-0\" scope=\"col\">Rate Plan Title</th>\n            <th class=\"border-top-0\" scope=\"col\">Created Date</th>\n            <th class=\"border-top-0\" scope=\"col\">Sale Markup</th>\n            <th class=\"border-top-0\" scope=\"col\">Retail Markup</th>\n            <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of rateplanList\" [class.active]=\"item === selectedRateplan\">\n          \n            <td>{{item.id}}</td>\n            <td>{{item.ratePlanTitle}}</td>\n            <td>{{item.createdDate | date}}</td>\n            <td>{{item.saleMarkup}}</td>\n            <td>{{item.retailMarkup}}</td>\n            \n            <td style=\"white-space: nowrap\">\n              <a [routerLink]=\"['../rateplan', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n              <button (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"sidebar-wrapper\">\n      \n    <div class=\"logo\">\n            \n        <a class=\"simple-text\">\n                  \n            <div class=\"logo-img\">\n                        <img src=\"../../assets/img/Kello_title_logo.png\" alt=\"\">      \n            </div>\n                  Kello    \n        </a>\n          \n    </div>\n      \n    <ul class=\"nav\">\n            \n        <li>\n                  \n            <a routerLink=\"home\">\n                        <i class=\"ti-home\"></i>\n                        <p>Dashboard</p>\n                      \n            </a>\n                \n        </li>\n            \n        <!-- <li>      <a routerLink=\"flight\">        <i class=\"ti-arrow-top-right\"></i>        <p>Flights</p>      </a>    </li> -->\n        \n        <li>\n              \n          <a routerLink=\"activation\">\n                  <i class=\"ti-lock\"></i>\n                  <p>Activations</p>\n                \n          </a>\n          \n      </li>\n\n        <li>\n              \n            <a routerLink=\"customer\">\n                    <i class=\"ti-user\"></i>\n                    <p>Customers</p>\n                  \n            </a>\n            \n        </li>\n        \n        <li>\n              \n            <a routerLink=\"partner\">\n                    <i class=\"ti-wheelchair\"></i>\n                    <p>Partners</p>\n                  \n            </a>\n            \n        </li>\n\n        <li>\n              \n          <a routerLink=\"orderses\">\n                  <i class=\"ti-receipt\"></i>\n                  <p>Orders</p>\n                \n          </a>\n          \n      </li>\n        \n        <li>\n              \n            <a routerLink=\"product\">\n                    <i class=\"ti-apple\"></i>\n                    <p>Products</p>\n                  \n            </a>\n            \n        </li>\n                        \n        <!-- <li>\n              \n            <a routerLink=\"offer\">\n                    <i class=\"ti-panel\"></i>\n                    <p>Offers</p>\n                  \n            </a>\n            \n        </li> -->\n        \n        <li>\n              \n            <a routerLink=\"supply\">\n                    <i class=\"ti-car\"></i>\n                    <p>Supplies</p>\n                  \n            </a>\n            \n        </li>\n\n        <!-- <li>\n              \n          <a routerLink=\"rateplan\">\n                  <i class=\"ti-money\"></i>\n                  <p>Rate plans</p>  \n          </a>\n      </li> -->\n            \n        <!--    <li>        <a routerLink=\"passenger-search\">            <i class=\"ti-user\"></i>            <p>Passengers</p>        </a>    </li>-->\n            \n        <!--        <li routerLinkActive=\"active\">        <a>            <i class=\"ti-close\"></i>            <p>Hide Basket</p>        </a>        </li>    -->\n          \n    </ul>\n    \n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/supply/supply-edit/supply-edit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supply/supply-edit/supply-edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- Page title box -->\n<div class=\"page-title-alt-bg\"></div>\n\n<div class=\"page-title-box\">\n        \n    <ol class=\"breadcrumb float-right\">\n                \n        <li class=\"breadcrumb-item\">\n            <a href=\"javascript:void(0);\">Project</a>\n        </li>\n                <li class=\"breadcrumb-item active\">Supplies</li>\n            \n    </ol>\n        <h4 class=\"page-title\">Supplies Detail</h4>\n    \n</div>\n<!-- End page title box -->\n\n<div class=\"row\">\n        \n    <div class=\"col-xl-12\">\n                \n        <div class=\"card-box\">\n                        <p *ngIf=\"errors\">{{ errors }}</p>\n                                    <a *ngIf=\"supply.id && supply.isArrived == false \" href=\"javascript:;\" (click)=\"supplyArrived(supply.id)\" class=\"btn btn-default\" style=\"float:right;\">                Supply Arrived            </a>\n                        \n            <form #supplyForm=\"ngForm\" *ngIf=\"supply\" class=\"form-horizontal\">\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"id\">                                    Id                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{supply.id || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"supplierId\">\n                                                    Supplier <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                    \n                    <div class=\"col-sm-10\">\n                                                                                    \n                        <select required [(ngModel)]=\"supply.supplierId\" name=\"supplierId\" (change)=\"selectedSupplier($event)\" class=\"form-control\">\n                                                                    <option *ngFor=\"let c of supplierId_list\" value=\"{{ c.id }}\">{{ c.name }}</option>\n                                                                 \n                        </select>\n                                                    \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"productsId\">\n                                                    Product <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                    \n                        <select required [(ngModel)]=\"supply.productsId\" name=\"productsId\" (change)=\"selectedProduct($event)\" class=\"form-control\">\n                                                                    <option *ngFor=\"let c of productsId_list\" value=\"{{ c.id }}\">{{ c.displayName }}</option>\n                                                                 \n                        </select>\n                                                                                                                                                                                             \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"referenceNo\">\n                                                    Reference No <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"string\" required [(ngModel)]=\"supply.referenceNo\" name=\"referenceNo\" #referenceNo=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"quentity\">\n                                                    Quentity <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                    \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"number\" required [(ngModel)]=\"supply.quentity\" name=\"quentity\" #quentity=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                    \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"quentityUnitsId\">\n                                                    Quentity Unit <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                    \n                    <div class=\"col-sm-10\">\n                                                                                    \n                        <select required [(ngModel)]=\"supply.quentityUnitsId\" name=\"quentityUnitsId\" class=\"form-control\">\n                                                                    <option *ngFor=\"let c of quentityUnitsId_list\" value=\"{{ c.id }}\">{{ c.unitDisplayName }}</option>\n                                                                 \n                        </select>\n                                                                                      \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"supplyDate\">                                    Supply Date                                </label>\n                                                                                                                           \n                    <div class=\"col-sm-10\">\n                                                                                            <input type=\"date\" [(ngModel)]=\"supply.supplyDate\" name=\"supplyDate\" class=\"form-control\">                                                                                                                \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"arrivedAt\">                                    Arrived At                                </label>\n                                                                                                                           \n                    <div class=\"col-sm-10\">\n                                                                                            <input type=\"date\" [(ngModel)]=\"supply.arrivedAt\" name=\"arrivedAt\" class=\"form-control\">                                                                                                                \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"isArrived\">                                    Is Arrived                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{supply.isArrived || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"purchasingCost\">\n                                                    Purchasing Cost <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"number\" required [(ngModel)]=\"supply.purchasingCost\" name=\"purchasingCost\" #purchasingCost=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"buyingPriceUnitId\">\n                                                    Purchasing Price Unit <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                    \n                    <div class=\"col-sm-10\">\n                                                                                    \n                        <select required [(ngModel)]=\"supply.buyingPriceUnitId\" name=\"buyingPriceUnitId\" class=\"form-control\">\n                                                                    <option *ngFor=\"let c of buyingPriceUnitId_list\" value=\"{{ c.id }}\">{{ c.unitDisplayName }}</option>\n                                                                 \n                        </select>\n                                                                                      \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"travlingCost\">\n                                                    Travling Cost <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"number\" required [(ngModel)]=\"supply.travlingCost\" name=\"travlingCost\" #travlingCost=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"labourCost\">\n                                                    Labour Cost <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"number\" required [(ngModel)]=\"supply.labourCost\" name=\"labourCost\" #labourCost=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"otherCost\">\n                                                    Other Cost <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"number\" required [(ngModel)]=\"supply.otherCost\" name=\"otherCost\" #otherCost=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                \n                <div class=\"row\">\n                                        \n                    <div class=\"col-sm-6 text-left\">\n                        <button type=\"button\" class=\"btn btn-success w-md\"  (click)=\"save()\" [disabled]=\"supplyForm.invalid\">Save</button>\n                    </div>\n                                        \n                    <div class=\"col-sm-6 text-right\">\n                        <button type=\"button\" class=\"btn btn-secondary w-md\"  (click)=\"cancel()\">Cancel</button>\n                    </div>\n                                    \n                </div>\n                            \n            </form>\n                    \n        </div>\n        <!-- end card-->\n            \n    </div>\n    <!-- end col -->\n    \n</div>\n<!-- end row -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/supply/supply-list/supply-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supply/supply-list/supply-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Supplies</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Supplies List</h2>\n    </div>\n    <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n        <div class=\"form-group\">\n          <label for=\"referenceNo\">Reference No:</label>\n          <input [(ngModel)]=\"filter.referenceNo\" id=\"referenceNo\" name=\"referenceNo\" class=\"form-control\">\n        </div>\n        \n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n        <a [routerLink]=\"['../supply', 'new' ]\" class=\"btn btn-default\">New</a>\n      </form>\n    </div>\n  </div>\n  \n  <div class=\"card\" *ngIf=\"supplyList.length > 0\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n        <thead>\n          <tr>\n            <!-- <th class=\"border-top-0\" scope=\"col\">Id</th> -->\n                                          <th class=\"border-top-0\" scope=\"col\">Supplier</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Product</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Reference No</th>\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Quentity Unit</th> -->\n                                          <th class=\"border-top-0\" scope=\"col\">Quentity</th>\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Quentity On Hand</th> -->\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Supply Date</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Arrived At</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Is Arrived</th> -->\n                                          <th class=\"border-top-0\" scope=\"col\">Purchasing Cost</th>\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Purchasing Price Unit</th> -->\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Travling Cost</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Labour Cost</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Other Cost</th> -->\n                                          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of supplyList\" [class.active]=\"item === selectedSupply\">\n          \n            <!-- <td>{{item.id}}</td> -->\n                                    <td>{{item.supplierName}}</td>\n                                    <td>{{item.productTitle}}</td>\n                                    <td>{{item.referenceNo}}</td>\n                                    <!-- <td>{{item.quentityUnitsId}}</td> -->\n                                    <td>{{item.quentity}}</td>\n                                    <!-- <td>{{item.quentityOnHand}}</td>\n                                    <td>{{item.supplyDate | date}}</td>\n                                    <td>{{item.arrivedAt | date}}</td>\n                                    <td>{{item.isArrived}}</td> -->\n                                    <td>{{item.purchasingCost}}</td>\n                                    <!-- <td>{{item.buyingPriceUnitId}}</td> -->\n                                    <!-- <td>{{item.travlingCost}}</td>\n                                    <td>{{item.labourCost}}</td>\n                                    <td>{{item.otherCost}}</td> -->\n            \n            <td style=\"white-space: nowrap\">\n              <a [routerLink]=\"['../supply', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n              <button (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  ");

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

/***/ "./src/app/activation/activation-edit/activation-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/activation/activation-edit/activation-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: ActivationEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationEditComponent", function() { return ActivationEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _activation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../activation.service */ "./src/app/activation/activation.service.ts");
/* harmony import */ var _activation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../activation */ "./src/app/activation/activation.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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







var ActivationEditComponent = /** @class */ (function () {
    function ActivationEditComponent(route, router, activationService) {
        this.route = route;
        this.router = router;
        this.activationService = activationService;
    }
    ActivationEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p['id']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new')
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _activation__WEBPACK_IMPORTED_MODULE_3__["Activation"]());
            return _this.activationService.findById(id);
        }))
            .subscribe(function (activation) {
            _this.activation = activation;
            _this.errors = '';
        }, function (err) {
            _this.errors = err;
        });
    };
    ActivationEditComponent.prototype.save = function () {
        var _this = this;
        this.activationService.save(this.activation).subscribe(function (activation) {
            _this.activation = activation;
            _this.errors = 'Save was successful!';
            setTimeout(function () {
                _this.router.navigate(['/activation']);
            }, 1000);
        }, function (err) {
            _this.errors = err;
        });
    };
    ActivationEditComponent.prototype.cancel = function () {
        this.router.navigate(['/activation']);
    };
    ActivationEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _activation_service__WEBPACK_IMPORTED_MODULE_2__["ActivationService"] }
    ]; };
    ActivationEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'activation-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./activation-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/activation/activation-edit/activation-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _activation_service__WEBPACK_IMPORTED_MODULE_2__["ActivationService"]])
    ], ActivationEditComponent);
    return ActivationEditComponent;
}());



/***/ }),

/***/ "./src/app/activation/activation-filter.ts":
/*!*************************************************!*\
  !*** ./src/app/activation/activation-filter.ts ***!
  \*************************************************/
/*! exports provided: ActivationFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationFilter", function() { return ActivationFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ActivationFilter = /** @class */ (function () {
    function ActivationFilter() {
        this.phone = '';
    }
    return ActivationFilter;
}());



/***/ }),

/***/ "./src/app/activation/activation-list/activation-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/activation/activation-list/activation-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: ActivationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationListComponent", function() { return ActivationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _activation_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../activation-filter */ "./src/app/activation/activation-filter.ts");
/* harmony import */ var _activation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../activation.service */ "./src/app/activation/activation.service.ts");
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



var ActivationListComponent = /** @class */ (function () {
    function ActivationListComponent(activationService) {
        this.activationService = activationService;
        this.filter = new _activation_filter__WEBPACK_IMPORTED_MODULE_1__["ActivationFilter"]();
        this.errors = '';
    }
    Object.defineProperty(ActivationListComponent.prototype, "activationList", {
        get: function () {
            return this.activationService.activationList;
        },
        enumerable: true,
        configurable: true
    });
    ActivationListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    ActivationListComponent.prototype.search = function () {
        this.activationService.load(this.filter);
    };
    ActivationListComponent.prototype.select = function (selected) {
        this.selectedActivation = selected;
    };
    ActivationListComponent.prototype.delete = function (activation) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.activationService.delete(activation).subscribe(function (activation) {
                _this.errors = 'Delete was successful!';
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.errors = err;
            });
        }
    };
    ActivationListComponent.ctorParameters = function () { return [
        { type: _activation_service__WEBPACK_IMPORTED_MODULE_2__["ActivationService"] }
    ]; };
    ActivationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'activation',
            template: __importDefault(__webpack_require__(/*! raw-loader!./activation-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/activation/activation-list/activation-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_activation_service__WEBPACK_IMPORTED_MODULE_2__["ActivationService"]])
    ], ActivationListComponent);
    return ActivationListComponent;
}());



/***/ }),

/***/ "./src/app/activation/activation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/activation/activation.module.ts ***!
  \*************************************************/
/*! exports provided: ActivationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationModule", function() { return ActivationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _activation_list_activation_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activation-list/activation-list.component */ "./src/app/activation/activation-list/activation-list.component.ts");
/* harmony import */ var _activation_edit_activation_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activation-edit/activation-edit.component */ "./src/app/activation/activation-edit/activation-edit.component.ts");
/* harmony import */ var _activation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activation.service */ "./src/app/activation/activation.service.ts");
/* harmony import */ var _activation_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activation.routes */ "./src/app/activation/activation.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var ActivationModule = /** @class */ (function () {
    function ActivationModule() {
    }
    ActivationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_activation_routes__WEBPACK_IMPORTED_MODULE_7__["ACTIVATION_ROUTES"])
            ],
            declarations: [
                _activation_list_activation_list_component__WEBPACK_IMPORTED_MODULE_4__["ActivationListComponent"],
                _activation_edit_activation_edit_component__WEBPACK_IMPORTED_MODULE_5__["ActivationEditComponent"]
            ],
            providers: [
                _activation_service__WEBPACK_IMPORTED_MODULE_6__["ActivationService"]
            ],
            exports: []
        })
    ], ActivationModule);
    return ActivationModule;
}());



/***/ }),

/***/ "./src/app/activation/activation.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/activation/activation.routes.ts ***!
  \*************************************************/
/*! exports provided: ACTIVATION_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVATION_ROUTES", function() { return ACTIVATION_ROUTES; });
/* harmony import */ var _activation_list_activation_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activation-list/activation-list.component */ "./src/app/activation/activation-list/activation-list.component.ts");
/* harmony import */ var _activation_edit_activation_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activation-edit/activation-edit.component */ "./src/app/activation/activation-edit/activation-edit.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ACTIVATION_ROUTES = [
    {
        path: 'activation',
        component: _activation_list_activation_list_component__WEBPACK_IMPORTED_MODULE_0__["ActivationListComponent"]
    },
    {
        path: 'activation/:id',
        component: _activation_edit_activation_edit_component__WEBPACK_IMPORTED_MODULE_1__["ActivationEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/activation/activation.service.ts":
/*!**************************************************!*\
  !*** ./src/app/activation/activation.service.ts ***!
  \**************************************************/
/*! exports provided: ActivationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationService", function() { return ActivationService; });
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


var ActivationService = /** @class */ (function () {
    function ActivationService(http) {
        this.http = http;
        this.baseUrl = "http://kello-dev.herokuapp.com/activations";
        this.activationList = [];
    }
    ActivationService.prototype.findById = function (id) {
        var url = this.baseUrl + "/" + id;
        var params = { "id": id };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Accept', 'application/json');
        return this.http.get(url, { params: params, headers: headers });
    };
    ActivationService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.activationList = result;
        }, function (err) {
            console.error('error loading', err);
        });
    };
    ActivationService.prototype.find = function (filter) {
        var url = "" + this.baseUrl;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Accept', 'application/json');
        var params = {
            "phone": filter.phone,
        };
        return this.http.get(url, { params: params, headers: headers });
    };
    ActivationService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = "";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = this.baseUrl + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.baseUrl;
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    ActivationService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = "";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = this.baseUrl + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    ActivationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ActivationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ActivationService);
    return ActivationService;
}());



/***/ }),

/***/ "./src/app/activation/activation.ts":
/*!******************************************!*\
  !*** ./src/app/activation/activation.ts ***!
  \******************************************/
/*! exports provided: Activation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activation", function() { return Activation; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Activation = /** @class */ (function () {
    function Activation() {
    }
    return Activation;
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
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
/* harmony import */ var _flight_flight_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flight/flight.module */ "./src/app/flight/flight.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _orders_orders_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./orders/orders.module */ "./src/app/orders/orders.module.ts");
/* harmony import */ var _hotel_hotel_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hotel/hotel.module */ "./src/app/hotel/hotel.module.ts");
/* harmony import */ var _activation_activation_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./activation/activation.module */ "./src/app/activation/activation.module.ts");
/* harmony import */ var _customer_customer_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer/customer.module */ "./src/app/customer/customer.module.ts");
/* harmony import */ var _partner_partner_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./partner/partner.module */ "./src/app/partner/partner.module.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _rateplan_rateplan_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rateplan/rateplan.module */ "./src/app/rateplan/rateplan.module.ts");
/* harmony import */ var _supply_supply_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./supply/supply.module */ "./src/app/supply/supply.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _flight_flight_module__WEBPACK_IMPORTED_MODULE_0__["FlightModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTES"].slice(), __assign({}, _app_routes__WEBPACK_IMPORTED_MODULE_6__["APP_EXTRA_OPTIONS"])),
                _orders_orders_module__WEBPACK_IMPORTED_MODULE_10__["OrdersModule"],
                _hotel_hotel_module__WEBPACK_IMPORTED_MODULE_11__["HotelModule"],
                _activation_activation_module__WEBPACK_IMPORTED_MODULE_12__["ActivationModule"],
                _customer_customer_module__WEBPACK_IMPORTED_MODULE_13__["CustomerModule"],
                _partner_partner_module__WEBPACK_IMPORTED_MODULE_14__["PartnerModule"],
                _product_product_module__WEBPACK_IMPORTED_MODULE_15__["ProductModule"],
                _rateplan_rateplan_module__WEBPACK_IMPORTED_MODULE_16__["RateplanModule"],
                _supply_supply_module__WEBPACK_IMPORTED_MODULE_17__["SupplyModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var APP_ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var APP_EXTRA_OPTIONS = {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
};


/***/ }),

/***/ "./src/app/customer/customer-edit/customer-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-edit/customer-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer/customer.service.ts");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer */ "./src/app/customer/customer.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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







var CustomerEditComponent = /** @class */ (function () {
    function CustomerEditComponent(route, router, customerService) {
        this.route = route;
        this.router = router;
        this.customerService = customerService;
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p['id']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new')
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _customer__WEBPACK_IMPORTED_MODULE_3__["Customer"]());
            return _this.customerService.findById(id);
        }))
            .subscribe(function (customer) {
            _this.customer = customer;
            _this.errors = '';
        }, function (err) {
            _this.errors = err;
        });
    };
    CustomerEditComponent.prototype.save = function () {
        var _this = this;
        this.customerService.save(this.customer).subscribe(function (customer) {
            _this.customer = customer;
            _this.errors = 'Save was successful!';
            setTimeout(function () {
                _this.router.navigate(['/customer']);
            }, 1000);
        }, function (err) {
            _this.errors = err;
        });
    };
    CustomerEditComponent.prototype.cancel = function () {
        this.router.navigate(['/customer']);
    };
    CustomerEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] }
    ]; };
    CustomerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customer-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./customer-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-edit/customer-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], CustomerEditComponent);
    return CustomerEditComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-filter.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer-filter.ts ***!
  \*********************************************/
/*! exports provided: CustomerFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFilter", function() { return CustomerFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var CustomerFilter = /** @class */ (function () {
    function CustomerFilter() {
    }
    return CustomerFilter;
}());



/***/ }),

/***/ "./src/app/customer/customer-list/customer-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-list/customer-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer-filter */ "./src/app/customer/customer-filter.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer/customer.service.ts");
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



var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(customerService) {
        this.customerService = customerService;
        this.filter = new _customer_filter__WEBPACK_IMPORTED_MODULE_1__["CustomerFilter"]();
        this.errors = '';
    }
    Object.defineProperty(CustomerListComponent.prototype, "customerList", {
        get: function () {
            return this.customerService.customerList;
        },
        enumerable: true,
        configurable: true
    });
    CustomerListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    CustomerListComponent.prototype.search = function () {
        this.customerService.load(this.filter);
    };
    CustomerListComponent.prototype.select = function (selected) {
        this.selectedCustomer = selected;
    };
    CustomerListComponent.prototype.delete = function (customer) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.customerService.delete(customer).subscribe(function (customer) {
                _this.errors = 'Delete was successful!';
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.errors = err;
            });
        }
    };
    CustomerListComponent.ctorParameters = function () { return [
        { type: _customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] }
    ]; };
    CustomerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./customer-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-list/customer-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customer/customer-list/customer-list.component.ts");
/* harmony import */ var _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-edit/customer-edit.component */ "./src/app/customer/customer-edit/customer-edit.component.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer.service */ "./src/app/customer/customer.service.ts");
/* harmony import */ var _customer_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer.routes */ "./src/app/customer/customer.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_customer_routes__WEBPACK_IMPORTED_MODULE_7__["CUSTOMER_ROUTES"])
            ],
            declarations: [
                _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomerListComponent"],
                _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditComponent"]
            ],
            providers: [
                _customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"]
            ],
            exports: []
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/customer/customer.routes.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.routes.ts ***!
  \*********************************************/
/*! exports provided: CUSTOMER_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_ROUTES", function() { return CUSTOMER_ROUTES; });
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customer/customer-list/customer-list.component.ts");
/* harmony import */ var _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-edit/customer-edit.component */ "./src/app/customer/customer-edit/customer-edit.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var CUSTOMER_ROUTES = [
    {
        path: 'customer',
        component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_0__["CustomerListComponent"]
    },
    {
        path: 'customer/:id',
        component: _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_1__["CustomerEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/customer/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/customer/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
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


var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.baseUrl = "http://kello-dev.herokuapp.com/customers";
        this.customerList = [];
    }
    CustomerService.prototype.findById = function (id) {
        var url = this.baseUrl + "/" + id;
        var params = { "id": id };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Accept', 'application/json');
        return this.http.get(url, { params: params, headers: headers });
    };
    CustomerService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.customerList = result;
        }, function (err) {
            console.error('error loading', err);
        });
    };
    CustomerService.prototype.find = function (filter) {
        var url = "" + this.baseUrl;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Accept', 'application/json');
        var params = {};
        return this.http.get(url, { params: params, headers: headers });
    };
    CustomerService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = "";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        url = this.baseUrl + "/authenticate";
        return this.http.post(url, entity, { headers: headers, params: params });
        // if(entity.id) {
        //     url = `${this.baseUrl}/${entity.id.toString()}`;
        //     params = new HttpParams().set('ID', entity.id.toString());  
        //     return this.http.put<Customer>(url, entity, {headers, params});
        // }
        // else {
        //     url = `${this.baseUrl}/authenticate`;
        //     return this.http.post<Customer>(url, entity, {headers, params});
        // }        
    };
    CustomerService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = "";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = this.baseUrl + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    CustomerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/customer/customer.ts":
/*!**************************************!*\
  !*** ./src/app/customer/customer.ts ***!
  \**************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/flight/flight-edit/flight-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/flight/flight-edit/flight-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: FlightEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightEditComponent", function() { return FlightEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _flight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../flight.service */ "./src/app/flight/flight.service.ts");
/* harmony import */ var _flight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flight */ "./src/app/flight/flight.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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







var FlightEditComponent = /** @class */ (function () {
    function FlightEditComponent(route, router, flightService) {
        this.route = route;
        this.router = router;
        this.flightService = flightService;
        this.feedback = {};
    }
    FlightEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _flight__WEBPACK_IMPORTED_MODULE_3__["Flight"]());
            }
            return _this.flightService.findById(id);
        }))
            .subscribe(function (flight) {
            _this.flight = flight;
            _this.feedback = {};
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error loading' };
        });
    };
    FlightEditComponent.prototype.save = function () {
        var _this = this;
        this.flightService.save(this.flight).subscribe(function (flight) {
            _this.flight = flight;
            _this.feedback = { type: 'success', message: 'Save was successful!' };
            setTimeout(function () {
                _this.router.navigate(['/flights']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    FlightEditComponent.prototype.cancel = function () {
        this.router.navigate(['/flights']);
    };
    FlightEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _flight_service__WEBPACK_IMPORTED_MODULE_2__["FlightService"] }
    ]; };
    FlightEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flight-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./flight-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/flight/flight-edit/flight-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _flight_service__WEBPACK_IMPORTED_MODULE_2__["FlightService"]])
    ], FlightEditComponent);
    return FlightEditComponent;
}());



/***/ }),

/***/ "./src/app/flight/flight-filter.ts":
/*!*****************************************!*\
  !*** ./src/app/flight/flight-filter.ts ***!
  \*****************************************/
/*! exports provided: FlightFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightFilter", function() { return FlightFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var FlightFilter = /** @class */ (function () {
    function FlightFilter() {
        this.from = '';
        this.to = '';
    }
    return FlightFilter;
}());



/***/ }),

/***/ "./src/app/flight/flight-list/flight-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/flight/flight-list/flight-list.component.ts ***!
  \*************************************************************/
/*! exports provided: FlightListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightListComponent", function() { return FlightListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _flight_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flight-filter */ "./src/app/flight/flight-filter.ts");
/* harmony import */ var _flight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../flight.service */ "./src/app/flight/flight.service.ts");
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



var FlightListComponent = /** @class */ (function () {
    function FlightListComponent(flightService) {
        this.flightService = flightService;
        this.filter = new _flight_filter__WEBPACK_IMPORTED_MODULE_1__["FlightFilter"]();
        this.feedback = {};
    }
    Object.defineProperty(FlightListComponent.prototype, "flightList", {
        get: function () {
            return this.flightService.flightList;
        },
        enumerable: true,
        configurable: true
    });
    FlightListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    FlightListComponent.prototype.search = function () {
        this.flightService.load(this.filter);
    };
    FlightListComponent.prototype.select = function (selected) {
        this.selectedFlight = selected;
    };
    FlightListComponent.prototype.delete = function (flight) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.flightService.delete(flight).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Delete was successful!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Error deleting.' };
            });
        }
    };
    FlightListComponent.ctorParameters = function () { return [
        { type: _flight_service__WEBPACK_IMPORTED_MODULE_2__["FlightService"] }
    ]; };
    FlightListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flight',
            template: __importDefault(__webpack_require__(/*! raw-loader!./flight-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/flight/flight-list/flight-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_flight_service__WEBPACK_IMPORTED_MODULE_2__["FlightService"]])
    ], FlightListComponent);
    return FlightListComponent;
}());



/***/ }),

/***/ "./src/app/flight/flight.module.ts":
/*!*****************************************!*\
  !*** ./src/app/flight/flight.module.ts ***!
  \*****************************************/
/*! exports provided: FlightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightModule", function() { return FlightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _flight_list_flight_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flight-list/flight-list.component */ "./src/app/flight/flight-list/flight-list.component.ts");
/* harmony import */ var _flight_edit_flight_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flight-edit/flight-edit.component */ "./src/app/flight/flight-edit/flight-edit.component.ts");
/* harmony import */ var _flight_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flight.service */ "./src/app/flight/flight.service.ts");
/* harmony import */ var _flight_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flight.routes */ "./src/app/flight/flight.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var FlightModule = /** @class */ (function () {
    function FlightModule() {
    }
    FlightModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_flight_routes__WEBPACK_IMPORTED_MODULE_7__["FLIGHT_ROUTES"])
            ],
            declarations: [
                _flight_list_flight_list_component__WEBPACK_IMPORTED_MODULE_4__["FlightListComponent"],
                _flight_edit_flight_edit_component__WEBPACK_IMPORTED_MODULE_5__["FlightEditComponent"]
            ],
            providers: [_flight_service__WEBPACK_IMPORTED_MODULE_6__["FlightService"]],
            exports: []
        })
    ], FlightModule);
    return FlightModule;
}());



/***/ }),

/***/ "./src/app/flight/flight.routes.ts":
/*!*****************************************!*\
  !*** ./src/app/flight/flight.routes.ts ***!
  \*****************************************/
/*! exports provided: FLIGHT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIGHT_ROUTES", function() { return FLIGHT_ROUTES; });
/* harmony import */ var _flight_list_flight_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flight-list/flight-list.component */ "./src/app/flight/flight-list/flight-list.component.ts");
/* harmony import */ var _flight_edit_flight_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flight-edit/flight-edit.component */ "./src/app/flight/flight-edit/flight-edit.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var FLIGHT_ROUTES = [
    {
        path: 'flights',
        component: _flight_list_flight_list_component__WEBPACK_IMPORTED_MODULE_0__["FlightListComponent"]
    },
    {
        path: 'flights/:id',
        component: _flight_edit_flight_edit_component__WEBPACK_IMPORTED_MODULE_1__["FlightEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/flight/flight.service.ts":
/*!******************************************!*\
  !*** ./src/app/flight/flight.service.ts ***!
  \******************************************/
/*! exports provided: FlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightService", function() { return FlightService; });
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


var FlightService = /** @class */ (function () {
    function FlightService(http) {
        this.http = http;
        this.flightList = [];
    }
    FlightService.prototype.findById = function (id) {
        var url = "http://www.angular.at/api/flight/" + id;
        var params = { 'id': id };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json');
        return this.http.get(url, { params: params, headers: headers });
    };
    FlightService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.flightList = result;
        }, function (err) {
            console.error('error loading', err);
        });
    };
    FlightService.prototype.find = function (filter) {
        var url = "http://www.angular.at/api/flight";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json');
        var params = {
            'from': filter.from,
            'to': filter.to,
        };
        return this.http.get(url, { params: params, headers: headers });
    };
    FlightService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = "http://www.angular.at/api/flight/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "http://www.angular.at/api/flight";
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    FlightService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = "http://www.angular.at/api/flight/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    FlightService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    FlightService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FlightService);
    return FlightService;
}());



/***/ }),

/***/ "./src/app/flight/flight.ts":
/*!**********************************!*\
  !*** ./src/app/flight/flight.ts ***!
  \**********************************/
/*! exports provided: Flight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flight", function() { return Flight; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Flight = /** @class */ (function () {
    function Flight() {
    }
    return Flight;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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


var HomeComponent = /** @class */ (function () {
    function HomeComponent(route) {
        this.route = route;
        this._userName = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.needsLogin = !!this.route.snapshot.params['needsLogin'];
    };
    Object.defineProperty(HomeComponent.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.login = function () {
        this._userName = 'Max';
    };
    HomeComponent.prototype.logout = function () {
        this._userName = '';
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/hotel/hotel-edit/hotel-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hotel/hotel-edit/hotel-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: HotelEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelEditComponent", function() { return HotelEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hotel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hotel.service */ "./src/app/hotel/hotel.service.ts");
/* harmony import */ var _hotel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hotel */ "./src/app/hotel/hotel.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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







var HotelEditComponent = /** @class */ (function () {
    function HotelEditComponent(route, router, hotelService) {
        this.route = route;
        this.router = router;
        this.hotelService = hotelService;
        this.feedback = {};
    }
    HotelEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _hotel__WEBPACK_IMPORTED_MODULE_3__["Hotel"]());
            }
            return _this.hotelService.findById(id);
        }))
            .subscribe(function (hotel) {
            _this.hotel = hotel;
            _this.feedback = {};
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error loading' };
        });
    };
    HotelEditComponent.prototype.save = function () {
        var _this = this;
        this.hotelService.save(this.hotel).subscribe(function (hotel) {
            _this.hotel = hotel;
            _this.feedback = { type: 'success', message: 'Save was successful!' };
            setTimeout(function () {
                _this.router.navigate(['/hotels']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    HotelEditComponent.prototype.cancel = function () {
        this.router.navigate(['/hotels']);
    };
    HotelEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _hotel_service__WEBPACK_IMPORTED_MODULE_2__["HotelService"] }
    ]; };
    HotelEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hotel-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./hotel-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hotel/hotel-edit/hotel-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _hotel_service__WEBPACK_IMPORTED_MODULE_2__["HotelService"]])
    ], HotelEditComponent);
    return HotelEditComponent;
}());



/***/ }),

/***/ "./src/app/hotel/hotel-filter.ts":
/*!***************************************!*\
  !*** ./src/app/hotel/hotel-filter.ts ***!
  \***************************************/
/*! exports provided: HotelFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelFilter", function() { return HotelFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var HotelFilter = /** @class */ (function () {
    function HotelFilter() {
        this.city = '';
    }
    return HotelFilter;
}());



/***/ }),

/***/ "./src/app/hotel/hotel-list/hotel-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hotel/hotel-list/hotel-list.component.ts ***!
  \**********************************************************/
/*! exports provided: HotelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelListComponent", function() { return HotelListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hotel_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hotel-filter */ "./src/app/hotel/hotel-filter.ts");
/* harmony import */ var _hotel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hotel.service */ "./src/app/hotel/hotel.service.ts");
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



var HotelListComponent = /** @class */ (function () {
    function HotelListComponent(hotelService) {
        this.hotelService = hotelService;
        this.filter = new _hotel_filter__WEBPACK_IMPORTED_MODULE_1__["HotelFilter"]();
        this.feedback = {};
    }
    Object.defineProperty(HotelListComponent.prototype, "hotelList", {
        get: function () {
            return this.hotelService.hotelList;
        },
        enumerable: true,
        configurable: true
    });
    HotelListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    HotelListComponent.prototype.search = function () {
        this.hotelService.load(this.filter);
    };
    HotelListComponent.prototype.select = function (selected) {
        this.selectedHotel = selected;
    };
    HotelListComponent.prototype.delete = function (hotel) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.hotelService.delete(hotel).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Delete was successful!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Error deleting.' };
            });
        }
    };
    HotelListComponent.ctorParameters = function () { return [
        { type: _hotel_service__WEBPACK_IMPORTED_MODULE_2__["HotelService"] }
    ]; };
    HotelListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hotel',
            template: __importDefault(__webpack_require__(/*! raw-loader!./hotel-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hotel/hotel-list/hotel-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_hotel_service__WEBPACK_IMPORTED_MODULE_2__["HotelService"]])
    ], HotelListComponent);
    return HotelListComponent;
}());



/***/ }),

/***/ "./src/app/hotel/hotel.module.ts":
/*!***************************************!*\
  !*** ./src/app/hotel/hotel.module.ts ***!
  \***************************************/
/*! exports provided: HotelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelModule", function() { return HotelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hotel-list/hotel-list.component */ "./src/app/hotel/hotel-list/hotel-list.component.ts");
/* harmony import */ var _hotel_edit_hotel_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hotel-edit/hotel-edit.component */ "./src/app/hotel/hotel-edit/hotel-edit.component.ts");
/* harmony import */ var _hotel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hotel.service */ "./src/app/hotel/hotel.service.ts");
/* harmony import */ var _hotel_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hotel.routes */ "./src/app/hotel/hotel.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var HotelModule = /** @class */ (function () {
    function HotelModule() {
    }
    HotelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_hotel_routes__WEBPACK_IMPORTED_MODULE_7__["HOTEL_ROUTES"])
            ],
            declarations: [
                _hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_4__["HotelListComponent"],
                _hotel_edit_hotel_edit_component__WEBPACK_IMPORTED_MODULE_5__["HotelEditComponent"]
            ],
            providers: [_hotel_service__WEBPACK_IMPORTED_MODULE_6__["HotelService"]],
            exports: []
        })
    ], HotelModule);
    return HotelModule;
}());



/***/ }),

/***/ "./src/app/hotel/hotel.routes.ts":
/*!***************************************!*\
  !*** ./src/app/hotel/hotel.routes.ts ***!
  \***************************************/
/*! exports provided: HOTEL_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOTEL_ROUTES", function() { return HOTEL_ROUTES; });
/* harmony import */ var _hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hotel-list/hotel-list.component */ "./src/app/hotel/hotel-list/hotel-list.component.ts");
/* harmony import */ var _hotel_edit_hotel_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hotel-edit/hotel-edit.component */ "./src/app/hotel/hotel-edit/hotel-edit.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HOTEL_ROUTES = [
    {
        path: 'hotels',
        component: _hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_0__["HotelListComponent"]
    },
    {
        path: 'hotels/:id',
        component: _hotel_edit_hotel_edit_component__WEBPACK_IMPORTED_MODULE_1__["HotelEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/hotel/hotel.service.ts":
/*!****************************************!*\
  !*** ./src/app/hotel/hotel.service.ts ***!
  \****************************************/
/*! exports provided: HotelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelService", function() { return HotelService; });
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
var HotelService = /** @class */ (function () {
    function HotelService(http) {
        this.http = http;
        this.hotelList = [];
        this.api = 'http://www.angular.at/api/hotel';
    }
    HotelService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    HotelService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.hotelList = result;
        }, function (err) {
            console.error('error loading', err);
        });
    };
    HotelService.prototype.find = function (filter) {
        var params = {
            'city': filter.city,
        };
        return this.http.get(this.api, { params: params, headers: headers });
    };
    HotelService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        if (entity.id) {
            url = this.api + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.api;
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    HotelService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        if (entity.id) {
            url = this.api + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    HotelService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    HotelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HotelService);
    return HotelService;
}());



/***/ }),

/***/ "./src/app/hotel/hotel.ts":
/*!********************************!*\
  !*** ./src/app/hotel/hotel.ts ***!
  \********************************/
/*! exports provided: Hotel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hotel", function() { return Hotel; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Hotel = /** @class */ (function () {
    function Hotel() {
    }
    return Hotel;
}());



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
    function NavbarComponent() {
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.sidebarToggle = function () {
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders-edit/orders-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/orders/orders-edit/orders-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: OrdersEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersEditComponent", function() { return OrdersEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders/orders.service.ts");
/* harmony import */ var _orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders */ "./src/app/orders/orders.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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







var OrdersEditComponent = /** @class */ (function () {
    function OrdersEditComponent(route, router, ordersService) {
        this.route = route;
        this.router = router;
        this.ordersService = ordersService;
        this.feedback = {};
    }
    OrdersEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _orders__WEBPACK_IMPORTED_MODULE_3__["Orders"]());
            }
            return _this.ordersService.findById(id);
        }))
            .subscribe(function (orders) {
            _this.orders = orders;
            _this.feedback = {};
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error loading' };
        });
    };
    OrdersEditComponent.prototype.save = function () {
        var _this = this;
        this.ordersService.save(this.orders).subscribe(function (orders) {
            _this.orders = orders;
            _this.feedback = { type: 'success', message: 'Save was successful!' };
            setTimeout(function () {
                _this.router.navigate(['/orderses']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    OrdersEditComponent.prototype.cancel = function () {
        this.router.navigate(['/orderses']);
    };
    OrdersEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"] }
    ]; };
    OrdersEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./orders-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders-edit/orders-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]])
    ], OrdersEditComponent);
    return OrdersEditComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders-filter.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders-filter.ts ***!
  \*****************************************/
/*! exports provided: OrdersFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersFilter", function() { return OrdersFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var OrdersFilter = /** @class */ (function () {
    function OrdersFilter() {
        this.orderStatus = '';
    }
    return OrdersFilter;
}());



/***/ }),

/***/ "./src/app/orders/orders-list/orders-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/orders/orders-list/orders-list.component.ts ***!
  \*************************************************************/
/*! exports provided: OrdersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersListComponent", function() { return OrdersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _orders_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orders-filter */ "./src/app/orders/orders-filter.ts");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders/orders.service.ts");
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



var OrdersListComponent = /** @class */ (function () {
    function OrdersListComponent(ordersService) {
        this.ordersService = ordersService;
        this.filter = new _orders_filter__WEBPACK_IMPORTED_MODULE_1__["OrdersFilter"]();
        this.feedback = {};
    }
    Object.defineProperty(OrdersListComponent.prototype, "ordersList", {
        get: function () {
            return this.ordersService.ordersList;
        },
        enumerable: true,
        configurable: true
    });
    OrdersListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    OrdersListComponent.prototype.search = function () {
        this.ordersService.load(this.filter);
    };
    OrdersListComponent.prototype.select = function (selected) {
        this.selectedOrders = selected;
    };
    OrdersListComponent.prototype.delete = function (orders) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.ordersService.delete(orders).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Delete was successful!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Error deleting.' };
            });
        }
    };
    OrdersListComponent.ctorParameters = function () { return [
        { type: _orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"] }
    ]; };
    OrdersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __importDefault(__webpack_require__(/*! raw-loader!./orders-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders-list/orders-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]])
    ], OrdersListComponent);
    return OrdersListComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders-list/orders-list.component */ "./src/app/orders/orders-list/orders-list.component.ts");
/* harmony import */ var _orders_edit_orders_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-edit/orders-edit.component */ "./src/app/orders/orders-edit/orders-edit.component.ts");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.service */ "./src/app/orders/orders.service.ts");
/* harmony import */ var _orders_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orders.routes */ "./src/app/orders/orders.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_orders_routes__WEBPACK_IMPORTED_MODULE_7__["ORDERS_ROUTES"])
            ],
            declarations: [
                _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_4__["OrdersListComponent"],
                _orders_edit_orders_edit_component__WEBPACK_IMPORTED_MODULE_5__["OrdersEditComponent"]
            ],
            providers: [_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"]],
            exports: []
        })
    ], OrdersModule);
    return OrdersModule;
}());



/***/ }),

/***/ "./src/app/orders/orders.routes.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.routes.ts ***!
  \*****************************************/
/*! exports provided: ORDERS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDERS_ROUTES", function() { return ORDERS_ROUTES; });
/* harmony import */ var _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders-list/orders-list.component */ "./src/app/orders/orders-list/orders-list.component.ts");
/* harmony import */ var _orders_edit_orders_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders-edit/orders-edit.component */ "./src/app/orders/orders-edit/orders-edit.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ORDERS_ROUTES = [
    {
        path: 'orderses',
        component: _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_0__["OrdersListComponent"]
    },
    {
        path: 'orderses/:id',
        component: _orders_edit_orders_edit_component__WEBPACK_IMPORTED_MODULE_1__["OrdersEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/orders/orders.service.ts":
/*!******************************************!*\
  !*** ./src/app/orders/orders.service.ts ***!
  \******************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
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
var OrdersService = /** @class */ (function () {
    function OrdersService(http) {
        this.http = http;
        this.ordersList = [];
        this.api = 'http://kello-dev.herokuapp.com/orders';
    }
    OrdersService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    OrdersService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.ordersList = result;
        }, function (err) {
            console.error('error loading', err);
        });
    };
    OrdersService.prototype.find = function (filter) {
        var params = {
            'orderStatus': filter.orderStatus,
        };
        return this.http.get(this.api, { params: params, headers: headers });
    };
    OrdersService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        if (entity.id) {
            url = this.api + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.api;
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    OrdersService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        if (entity.id) {
            url = this.api + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    OrdersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    OrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/orders/orders.ts":
/*!**********************************!*\
  !*** ./src/app/orders/orders.ts ***!
  \**********************************/
/*! exports provided: Orders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orders", function() { return Orders; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Orders = /** @class */ (function () {
    function Orders() {
    }
    return Orders;
}());



/***/ }),

/***/ "./src/app/partner/partner-edit/partner-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/partner/partner-edit/partner-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: PartnerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerEditComponent", function() { return PartnerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _partner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partner.service */ "./src/app/partner/partner.service.ts");
/* harmony import */ var _partner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partner */ "./src/app/partner/partner.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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







var PartnerEditComponent = /** @class */ (function () {
    function PartnerEditComponent(route, router, partnerService) {
        this.route = route;
        this.router = router;
        this.partnerService = partnerService;
    }
    PartnerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p['id']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new')
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _partner__WEBPACK_IMPORTED_MODULE_3__["Partner"]());
            return _this.partnerService.findById(id);
        }))
            .subscribe(function (partner) {
            _this.partner = partner;
            _this.errors = '';
        }, function (err) {
            _this.errors = err;
        });
        this.partnertypesId_list = [{ id: 1, typeName: "Hawker" }];
    };
    PartnerEditComponent.prototype.save = function () {
        var _this = this;
        this.partnerService.save(this.partner).subscribe(function (partner) {
            _this.partner = partner;
            _this.errors = 'Save was successful!';
            setTimeout(function () {
                _this.router.navigate(['/partner']);
            }, 1000);
        }, function (err) {
            _this.errors = err;
        });
    };
    PartnerEditComponent.prototype.cancel = function () {
        this.router.navigate(['/partner']);
    };
    PartnerEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"] }
    ]; };
    PartnerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'partner-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./partner-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partner/partner-edit/partner-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"]])
    ], PartnerEditComponent);
    return PartnerEditComponent;
}());



/***/ }),

/***/ "./src/app/partner/partner-filter.ts":
/*!*******************************************!*\
  !*** ./src/app/partner/partner-filter.ts ***!
  \*******************************************/
/*! exports provided: PartnerFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerFilter", function() { return PartnerFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PartnerFilter = /** @class */ (function () {
    function PartnerFilter() {
        this.phone = '';
    }
    return PartnerFilter;
}());



/***/ }),

/***/ "./src/app/partner/partner-list/partner-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/partner/partner-list/partner-list.component.ts ***!
  \****************************************************************/
/*! exports provided: PartnerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerListComponent", function() { return PartnerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partner_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partner-filter */ "./src/app/partner/partner-filter.ts");
/* harmony import */ var _partner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partner.service */ "./src/app/partner/partner.service.ts");
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



var PartnerListComponent = /** @class */ (function () {
    function PartnerListComponent(partnerService) {
        this.partnerService = partnerService;
        this.filter = new _partner_filter__WEBPACK_IMPORTED_MODULE_1__["PartnerFilter"]();
        this.errors = '';
    }
    Object.defineProperty(PartnerListComponent.prototype, "partnerList", {
        get: function () {
            return this.partnerService.partnerList;
        },
        enumerable: true,
        configurable: true
    });
    PartnerListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    PartnerListComponent.prototype.search = function () {
        this.partnerService.load(this.filter);
    };
    PartnerListComponent.prototype.select = function (selected) {
        this.selectedPartner = selected;
    };
    PartnerListComponent.prototype.delete = function (partner) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.partnerService.delete(partner).subscribe(function (partner) {
                _this.errors = 'Delete was successful!';
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.errors = err;
            });
        }
    };
    PartnerListComponent.ctorParameters = function () { return [
        { type: _partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"] }
    ]; };
    PartnerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'partner',
            template: __importDefault(__webpack_require__(/*! raw-loader!./partner-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partner/partner-list/partner-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"]])
    ], PartnerListComponent);
    return PartnerListComponent;
}());



/***/ }),

/***/ "./src/app/partner/partner.module.ts":
/*!*******************************************!*\
  !*** ./src/app/partner/partner.module.ts ***!
  \*******************************************/
/*! exports provided: PartnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerModule", function() { return PartnerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _partner_list_partner_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partner-list/partner-list.component */ "./src/app/partner/partner-list/partner-list.component.ts");
/* harmony import */ var _partner_edit_partner_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partner-edit/partner-edit.component */ "./src/app/partner/partner-edit/partner-edit.component.ts");
/* harmony import */ var _partner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partner.service */ "./src/app/partner/partner.service.ts");
/* harmony import */ var _partner_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partner.routes */ "./src/app/partner/partner.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var PartnerModule = /** @class */ (function () {
    function PartnerModule() {
    }
    PartnerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_partner_routes__WEBPACK_IMPORTED_MODULE_7__["PARTNER_ROUTES"])
            ],
            declarations: [
                _partner_list_partner_list_component__WEBPACK_IMPORTED_MODULE_4__["PartnerListComponent"],
                _partner_edit_partner_edit_component__WEBPACK_IMPORTED_MODULE_5__["PartnerEditComponent"]
            ],
            providers: [
                _partner_service__WEBPACK_IMPORTED_MODULE_6__["PartnerService"]
            ],
            exports: []
        })
    ], PartnerModule);
    return PartnerModule;
}());



/***/ }),

/***/ "./src/app/partner/partner.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/partner/partner.routes.ts ***!
  \*******************************************/
/*! exports provided: PARTNER_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTNER_ROUTES", function() { return PARTNER_ROUTES; });
/* harmony import */ var _partner_list_partner_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-list/partner-list.component */ "./src/app/partner/partner-list/partner-list.component.ts");
/* harmony import */ var _partner_edit_partner_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-edit/partner-edit.component */ "./src/app/partner/partner-edit/partner-edit.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var PARTNER_ROUTES = [
    {
        path: 'partner',
        component: _partner_list_partner_list_component__WEBPACK_IMPORTED_MODULE_0__["PartnerListComponent"]
    },
    {
        path: 'partner/:id',
        component: _partner_edit_partner_edit_component__WEBPACK_IMPORTED_MODULE_1__["PartnerEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/partner/partner.service.ts":
/*!********************************************!*\
  !*** ./src/app/partner/partner.service.ts ***!
  \********************************************/
/*! exports provided: PartnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerService", function() { return PartnerService; });
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


var PartnerService = /** @class */ (function () {
    function PartnerService(http) {
        this.http = http;
        this.baseUrl = "http://kello-dev.herokuapp.com/partners";
        this.partnerList = [];
    }
    PartnerService.prototype.findById = function (id) {
        var url = this.baseUrl + "/" + id;
        var params = { "id": id };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Accept', 'application/json');
        return this.http.get(url, { params: params, headers: headers });
    };
    PartnerService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.partnerList = result;
        }, function (err) {
            console.error('error loading', err);
        });
    };
    PartnerService.prototype.find = function (filter) {
        var url = "" + this.baseUrl;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Accept', 'application/json');
        var params = {
            "phone": filter.phone,
        };
        return this.http.get(url, { params: params, headers: headers });
    };
    PartnerService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = "";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = this.baseUrl + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = this.baseUrl + "/authenticate";
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    PartnerService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = "";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = this.baseUrl + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    PartnerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PartnerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PartnerService);
    return PartnerService;
}());



/***/ }),

/***/ "./src/app/partner/partner.ts":
/*!************************************!*\
  !*** ./src/app/partner/partner.ts ***!
  \************************************/
/*! exports provided: Partner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Partner", function() { return Partner; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Partner = /** @class */ (function () {
    function Partner() {
    }
    return Partner;
}());



/***/ }),

/***/ "./src/app/product/product-edit/product-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-edit/product-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product/product.service.ts");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product */ "./src/app/product/product.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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




//import { ProductService } from '../../';



var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p['id']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new')
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _product__WEBPACK_IMPORTED_MODULE_3__["Product"]());
            return _this.productService.findById(id);
        }))
            .subscribe(function (product) {
            _this.product = product;
            _this.errors = '';
        }, function (err) {
            _this.errors = err;
        });
        this.producttypesId_list = [{ id: 1, typeName: "Vegitables" }, { id: 2, typeName: "Fruites" }];
        this.unitsId_list = [{ id: 1, unitDisplayName: "kg" }];
    };
    ProductEditComponent.prototype.save = function () {
        var _this = this;
        this.product.displayName = this.product.eng_title + " " + this.product.urdu_title;
        if (!this.product.quentityOnHand) {
            this.product.quentityOnHand = 0;
        }
        this.productService.save(this.product).subscribe(function (product) {
            _this.product = product;
            _this.errors = 'Save was successful!';
            setTimeout(function () {
                _this.router.navigate(['/product']);
            }, 1000);
        }, function (err) {
            _this.errors = err;
        });
    };
    ProductEditComponent.prototype.cancel = function () {
        this.router.navigate(['/product']);
    };
    ProductEditComponent.prototype.changeImageListener = function ($event) {
        this.readImage($event.target);
    };
    ProductEditComponent.prototype.readImage = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.product.image = myReader.result.toString();
        };
        myReader.readAsDataURL(file);
    };
    ProductEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
    ]; };
    ProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./product-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-edit/product-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/product/product-filter.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product-filter.ts ***!
  \*******************************************/
/*! exports provided: ProductFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilter", function() { return ProductFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ProductFilter = /** @class */ (function () {
    function ProductFilter() {
        this.eng_title = '';
    }
    return ProductFilter;
}());



/***/ }),

/***/ "./src/app/product/product-list/product-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-filter */ "./src/app/product/product-filter.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product/product.service.ts");
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



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.filter = new _product_filter__WEBPACK_IMPORTED_MODULE_1__["ProductFilter"]();
        this.errors = '';
    }
    Object.defineProperty(ProductListComponent.prototype, "productList", {
        get: function () {
            return this.productService.productList;
        },
        enumerable: true,
        configurable: true
    });
    ProductListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    ProductListComponent.prototype.search = function () {
        this.productService.load(this.filter);
    };
    ProductListComponent.prototype.select = function (selected) {
        this.selectedProduct = selected;
    };
    ProductListComponent.prototype.delete = function (product) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.productService.delete(product).subscribe(function (product) {
                _this.errors = 'Delete was successful!';
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.errors = err;
            });
        }
    };
    ProductListComponent.ctorParameters = function () { return [
        { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
    ]; };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product',
            template: __importDefault(__webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-list/product-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product/product-edit/product-edit.component.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.service */ "./src/app/product/product.service.ts");
/* harmony import */ var _product_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product.routes */ "./src/app/product/product.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_product_routes__WEBPACK_IMPORTED_MODULE_7__["PRODUCT_ROUTES"])
            ],
            declarations: [
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"],
                _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProductEditComponent"]
            ],
            providers: [
                _product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]
            ],
            exports: []
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/product/product.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.routes.ts ***!
  \*******************************************/
/*! exports provided: PRODUCT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_ROUTES", function() { return PRODUCT_ROUTES; });
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product/product-edit/product-edit.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var PRODUCT_ROUTES = [
    {
        path: 'product',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__["ProductListComponent"]
    },
    {
        path: 'product/:id',
        component: _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_1__["ProductEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/product/product.service.ts":
/*!********************************************!*\
  !*** ./src/app/product/product.service.ts ***!
  \********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
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


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.baseUrl = "http://kello-dev.herokuapp.com/products";
        this.productList = [];
    }
    ProductService.prototype.findById = function (id) {
        var url = this.baseUrl + "/" + id;
        var params = { "id": id };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Accept', 'application/json');
        return this.http.get(url, { params: params, headers: headers });
    };
    ProductService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.productList = result;
        }, function (err) {
            console.error('error loading', err);
        });
    };
    ProductService.prototype.find = function (filter) {
        var url = "" + this.baseUrl;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Accept', 'application/json');
        var params = {
            "eng_title": filter.eng_title,
        };
        return this.http.get(url, { params: params, headers: headers });
    };
    ProductService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = "";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = this.baseUrl + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.baseUrl;
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    ProductService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = "";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = this.baseUrl + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/product/product.ts":
/*!************************************!*\
  !*** ./src/app/product/product.ts ***!
  \************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/rateplan/rateplan-edit/rateplan-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/rateplan/rateplan-edit/rateplan-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: RateplanEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateplanEditComponent", function() { return RateplanEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rateplan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rateplan.service */ "./src/app/rateplan/rateplan.service.ts");
/* harmony import */ var _rateplan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rateplan */ "./src/app/rateplan/rateplan.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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







var RateplanEditComponent = /** @class */ (function () {
    function RateplanEditComponent(route, router, rateplanService) {
        this.route = route;
        this.router = router;
        this.rateplanService = rateplanService;
    }
    RateplanEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p['id']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new')
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _rateplan__WEBPACK_IMPORTED_MODULE_3__["Rateplan"]());
            return _this.rateplanService.findById(id);
        }))
            .subscribe(function (rateplan) {
            _this.rateplan = rateplan;
            _this.errors = '';
        }, function (err) {
            _this.errors = err;
        });
    };
    RateplanEditComponent.prototype.save = function () {
        var _this = this;
        this.rateplanService.save(this.rateplan).subscribe(function (rateplan) {
            _this.rateplan = rateplan;
            _this.errors = 'Save was successful!';
            setTimeout(function () {
                _this.router.navigate(['/rateplan']);
            }, 1000);
        }, function (err) {
            _this.errors = 'Error saving';
        });
    };
    RateplanEditComponent.prototype.cancel = function () {
        this.router.navigate(['/rateplan']);
    };
    RateplanEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _rateplan_service__WEBPACK_IMPORTED_MODULE_2__["RateplanService"] }
    ]; };
    RateplanEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rateplan-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./rateplan-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rateplan/rateplan-edit/rateplan-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _rateplan_service__WEBPACK_IMPORTED_MODULE_2__["RateplanService"]])
    ], RateplanEditComponent);
    return RateplanEditComponent;
}());



/***/ }),

/***/ "./src/app/rateplan/rateplan-filter.ts":
/*!*********************************************!*\
  !*** ./src/app/rateplan/rateplan-filter.ts ***!
  \*********************************************/
/*! exports provided: RateplanFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateplanFilter", function() { return RateplanFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var RateplanFilter = /** @class */ (function () {
    function RateplanFilter() {
        this.ratePlanTitle = '';
    }
    return RateplanFilter;
}());



/***/ }),

/***/ "./src/app/rateplan/rateplan-list/rateplan-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/rateplan/rateplan-list/rateplan-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: RateplanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateplanListComponent", function() { return RateplanListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rateplan_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rateplan-filter */ "./src/app/rateplan/rateplan-filter.ts");
/* harmony import */ var _rateplan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rateplan.service */ "./src/app/rateplan/rateplan.service.ts");
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



var RateplanListComponent = /** @class */ (function () {
    function RateplanListComponent(rateplanService) {
        this.rateplanService = rateplanService;
        this.filter = new _rateplan_filter__WEBPACK_IMPORTED_MODULE_1__["RateplanFilter"]();
        this.errors = '';
    }
    Object.defineProperty(RateplanListComponent.prototype, "rateplanList", {
        get: function () {
            return this.rateplanService.rateplanList;
        },
        enumerable: true,
        configurable: true
    });
    RateplanListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    RateplanListComponent.prototype.search = function () {
        this.rateplanService.load(this.filter);
    };
    RateplanListComponent.prototype.select = function (selected) {
        this.selectedRateplan = selected;
    };
    RateplanListComponent.prototype.delete = function (rateplan) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.rateplanService.delete(rateplan).subscribe(function (rateplan) {
                _this.errors = 'Delete was successful!';
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.errors = err;
            });
        }
    };
    RateplanListComponent.ctorParameters = function () { return [
        { type: _rateplan_service__WEBPACK_IMPORTED_MODULE_2__["RateplanService"] }
    ]; };
    RateplanListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rateplan',
            template: __importDefault(__webpack_require__(/*! raw-loader!./rateplan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rateplan/rateplan-list/rateplan-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_rateplan_service__WEBPACK_IMPORTED_MODULE_2__["RateplanService"]])
    ], RateplanListComponent);
    return RateplanListComponent;
}());



/***/ }),

/***/ "./src/app/rateplan/rateplan.module.ts":
/*!*********************************************!*\
  !*** ./src/app/rateplan/rateplan.module.ts ***!
  \*********************************************/
/*! exports provided: RateplanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateplanModule", function() { return RateplanModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rateplan_list_rateplan_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rateplan-list/rateplan-list.component */ "./src/app/rateplan/rateplan-list/rateplan-list.component.ts");
/* harmony import */ var _rateplan_edit_rateplan_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rateplan-edit/rateplan-edit.component */ "./src/app/rateplan/rateplan-edit/rateplan-edit.component.ts");
/* harmony import */ var _rateplan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rateplan.service */ "./src/app/rateplan/rateplan.service.ts");
/* harmony import */ var _rateplan_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rateplan.routes */ "./src/app/rateplan/rateplan.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var RateplanModule = /** @class */ (function () {
    function RateplanModule() {
    }
    RateplanModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_rateplan_routes__WEBPACK_IMPORTED_MODULE_7__["RATEPLAN_ROUTES"])
            ],
            declarations: [
                _rateplan_list_rateplan_list_component__WEBPACK_IMPORTED_MODULE_4__["RateplanListComponent"],
                _rateplan_edit_rateplan_edit_component__WEBPACK_IMPORTED_MODULE_5__["RateplanEditComponent"]
            ],
            providers: [
                _rateplan_service__WEBPACK_IMPORTED_MODULE_6__["RateplanService"]
            ],
            exports: []
        })
    ], RateplanModule);
    return RateplanModule;
}());



/***/ }),

/***/ "./src/app/rateplan/rateplan.routes.ts":
/*!*********************************************!*\
  !*** ./src/app/rateplan/rateplan.routes.ts ***!
  \*********************************************/
/*! exports provided: RATEPLAN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATEPLAN_ROUTES", function() { return RATEPLAN_ROUTES; });
/* harmony import */ var _rateplan_list_rateplan_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rateplan-list/rateplan-list.component */ "./src/app/rateplan/rateplan-list/rateplan-list.component.ts");
/* harmony import */ var _rateplan_edit_rateplan_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rateplan-edit/rateplan-edit.component */ "./src/app/rateplan/rateplan-edit/rateplan-edit.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var RATEPLAN_ROUTES = [
    {
        path: 'rateplan',
        component: _rateplan_list_rateplan_list_component__WEBPACK_IMPORTED_MODULE_0__["RateplanListComponent"]
    },
    {
        path: 'rateplan/:id',
        component: _rateplan_edit_rateplan_edit_component__WEBPACK_IMPORTED_MODULE_1__["RateplanEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/rateplan/rateplan.service.ts":
/*!**********************************************!*\
  !*** ./src/app/rateplan/rateplan.service.ts ***!
  \**********************************************/
/*! exports provided: RateplanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateplanService", function() { return RateplanService; });
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


var RateplanService = /** @class */ (function () {
    function RateplanService(http) {
        this.http = http;
        this.baseUrl = "http://kello-dev.herokuapp.com/rateplans";
        this.rateplanList = [];
    }
    RateplanService.prototype.findById = function (id) {
        var url = this.baseUrl + "/" + id;
        var params = { "id": id };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Accept', 'application/json');
        return this.http.get(url, { params: params, headers: headers });
    };
    RateplanService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.rateplanList = result;
        }, function (err) {
            console.error('error loading', err);
        });
    };
    RateplanService.prototype.find = function (filter) {
        var url = "" + this.baseUrl;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Accept', 'application/json');
        var params = {
            "ratePlanTitle": filter.ratePlanTitle,
        };
        return this.http.get(url, { params: params, headers: headers });
    };
    RateplanService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = "";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = this.baseUrl + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.baseUrl;
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    RateplanService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = "";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = this.baseUrl + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    RateplanService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    RateplanService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RateplanService);
    return RateplanService;
}());



/***/ }),

/***/ "./src/app/rateplan/rateplan.ts":
/*!**************************************!*\
  !*** ./src/app/rateplan/rateplan.ts ***!
  \**************************************/
/*! exports provided: Rateplan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rateplan", function() { return Rateplan; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Rateplan = /** @class */ (function () {
    function Rateplan() {
    }
    return Rateplan;
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

/***/ "./src/app/supply/supply-edit/supply-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/supply/supply-edit/supply-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: SupplyEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyEditComponent", function() { return SupplyEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _supply_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../supply.service */ "./src/app/supply/supply.service.ts");
/* harmony import */ var _supply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../supply */ "./src/app/supply/supply.ts");
/* harmony import */ var _partner_partner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partner/partner.service */ "./src/app/partner/partner.service.ts");
/* harmony import */ var _partner_partner_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partner/partner-filter */ "./src/app/partner/partner-filter.ts");
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../product/product.service */ "./src/app/product/product.service.ts");
/* harmony import */ var _product_product_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../product/product-filter */ "./src/app/product/product-filter.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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











var SupplyEditComponent = /** @class */ (function () {
    function SupplyEditComponent(route, router, supplyService, partnerService, productService) {
        this.route = route;
        this.router = router;
        this.supplyService = supplyService;
        this.partnerService = partnerService;
        this.productService = productService;
        this.partnerFilter = new _partner_partner_filter__WEBPACK_IMPORTED_MODULE_5__["PartnerFilter"]();
        this.productFilter = new _product_product_filter__WEBPACK_IMPORTED_MODULE_7__["ProductFilter"]();
    }
    Object.defineProperty(SupplyEditComponent.prototype, "supplierId_list", {
        get: function () {
            return this.partnerService.partnerList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupplyEditComponent.prototype, "productsId_list", {
        get: function () {
            return this.productService.productList;
        },
        enumerable: true,
        configurable: true
    });
    SupplyEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (p) { return p['id']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (id) {
            if (id === 'new')
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _supply__WEBPACK_IMPORTED_MODULE_3__["Supply"]());
            return _this.supplyService.findById(id);
        }))
            .subscribe(function (supply) {
            _this.supply = supply;
            _this.errors = '';
        }, function (err) {
            _this.errors = 'Error loading';
        });
        this.buyingPriceUnitId_list = [{ id: 1, unitDisplayName: "kg" }];
        this.quentityUnitsId_list = [{ id: 1, unitDisplayName: "kg" }];
        this.partnerService.load(this.partnerFilter);
        this.productService.load(this.productFilter);
    };
    SupplyEditComponent.prototype.save = function () {
        var _this = this;
        this.supplyService.save(this.supply).subscribe(function (supply) {
            _this.supply = supply;
            _this.errors = 'Save was successful!';
            setTimeout(function () {
                _this.router.navigate(['/supply']);
            }, 1000);
        }, function (err) {
            _this.errors = 'Error saving';
        });
    };
    SupplyEditComponent.prototype.cancel = function () {
        this.router.navigate(['/supply']);
    };
    SupplyEditComponent.prototype.selectedProduct = function ($event) {
        var _this = this;
        var seletectProduct = this.productsId_list.filter(function (p) { return p.id == _this.supply.productsId; });
        console.log(seletectProduct);
        if (seletectProduct.length > 0) {
            this.supply.quentityOnHand = seletectProduct[0].quentityOnHand;
            this.supply.productTitle = seletectProduct[0].displayName;
        }
    };
    SupplyEditComponent.prototype.selectedSupplier = function ($event) {
        var _this = this;
        var selectedSupplier = this.supplierId_list.filter(function (s) { return s.id == _this.supply.supplierId; });
        console.log(selectedSupplier);
        if (selectedSupplier.length > 0) {
            this.supply.supplierName = selectedSupplier[0].name;
        }
    };
    SupplyEditComponent.prototype.supplyArrived = function (supplyId) {
        var _this = this;
        this.supplyService.supplyArrived(supplyId)
            .subscribe(function (sp) {
            _this.errors = "Supply Arrived Successfully!";
        }, function (err) {
            _this.errors = JSON.stringify(err);
        });
    };
    SupplyEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _supply_service__WEBPACK_IMPORTED_MODULE_2__["SupplyService"] },
        { type: _partner_partner_service__WEBPACK_IMPORTED_MODULE_4__["PartnerService"] },
        { type: _product_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }
    ]; };
    SupplyEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'supply-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./supply-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/supply/supply-edit/supply-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _supply_service__WEBPACK_IMPORTED_MODULE_2__["SupplyService"],
            _partner_partner_service__WEBPACK_IMPORTED_MODULE_4__["PartnerService"],
            _product_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]])
    ], SupplyEditComponent);
    return SupplyEditComponent;
}());



/***/ }),

/***/ "./src/app/supply/supply-filter.ts":
/*!*****************************************!*\
  !*** ./src/app/supply/supply-filter.ts ***!
  \*****************************************/
/*! exports provided: SupplyFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyFilter", function() { return SupplyFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var SupplyFilter = /** @class */ (function () {
    function SupplyFilter() {
        this.referenceNo = '';
    }
    return SupplyFilter;
}());



/***/ }),

/***/ "./src/app/supply/supply-list/supply-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/supply/supply-list/supply-list.component.ts ***!
  \*************************************************************/
/*! exports provided: SupplyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyListComponent", function() { return SupplyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _supply_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supply-filter */ "./src/app/supply/supply-filter.ts");
/* harmony import */ var _supply_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../supply.service */ "./src/app/supply/supply.service.ts");
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



var SupplyListComponent = /** @class */ (function () {
    function SupplyListComponent(supplyService) {
        this.supplyService = supplyService;
        this.filter = new _supply_filter__WEBPACK_IMPORTED_MODULE_1__["SupplyFilter"]();
        this.errors = '';
    }
    Object.defineProperty(SupplyListComponent.prototype, "supplyList", {
        get: function () {
            return this.supplyService.supplyList;
        },
        enumerable: true,
        configurable: true
    });
    SupplyListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    SupplyListComponent.prototype.search = function () {
        this.supplyService.load(this.filter);
    };
    SupplyListComponent.prototype.select = function (selected) {
        this.selectedSupply = selected;
    };
    SupplyListComponent.prototype.delete = function (supply) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.supplyService.delete(supply).subscribe(function (supply) {
                _this.errors = 'Delete was successful!';
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.errors = 'Error deleting.';
            });
        }
    };
    SupplyListComponent.ctorParameters = function () { return [
        { type: _supply_service__WEBPACK_IMPORTED_MODULE_2__["SupplyService"] }
    ]; };
    SupplyListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'supply',
            template: __importDefault(__webpack_require__(/*! raw-loader!./supply-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/supply/supply-list/supply-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_supply_service__WEBPACK_IMPORTED_MODULE_2__["SupplyService"]])
    ], SupplyListComponent);
    return SupplyListComponent;
}());



/***/ }),

/***/ "./src/app/supply/supply.module.ts":
/*!*****************************************!*\
  !*** ./src/app/supply/supply.module.ts ***!
  \*****************************************/
/*! exports provided: SupplyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyModule", function() { return SupplyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _supply_list_supply_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supply-list/supply-list.component */ "./src/app/supply/supply-list/supply-list.component.ts");
/* harmony import */ var _supply_edit_supply_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supply-edit/supply-edit.component */ "./src/app/supply/supply-edit/supply-edit.component.ts");
/* harmony import */ var _supply_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./supply.service */ "./src/app/supply/supply.service.ts");
/* harmony import */ var _supply_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./supply.routes */ "./src/app/supply/supply.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var SupplyModule = /** @class */ (function () {
    function SupplyModule() {
    }
    SupplyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_supply_routes__WEBPACK_IMPORTED_MODULE_7__["SUPPLY_ROUTES"])
            ],
            declarations: [
                _supply_list_supply_list_component__WEBPACK_IMPORTED_MODULE_4__["SupplyListComponent"],
                _supply_edit_supply_edit_component__WEBPACK_IMPORTED_MODULE_5__["SupplyEditComponent"]
            ],
            providers: [
                _supply_service__WEBPACK_IMPORTED_MODULE_6__["SupplyService"]
            ],
            exports: []
        })
    ], SupplyModule);
    return SupplyModule;
}());



/***/ }),

/***/ "./src/app/supply/supply.routes.ts":
/*!*****************************************!*\
  !*** ./src/app/supply/supply.routes.ts ***!
  \*****************************************/
/*! exports provided: SUPPLY_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPLY_ROUTES", function() { return SUPPLY_ROUTES; });
/* harmony import */ var _supply_list_supply_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supply-list/supply-list.component */ "./src/app/supply/supply-list/supply-list.component.ts");
/* harmony import */ var _supply_edit_supply_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supply-edit/supply-edit.component */ "./src/app/supply/supply-edit/supply-edit.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SUPPLY_ROUTES = [
    {
        path: 'supply',
        component: _supply_list_supply_list_component__WEBPACK_IMPORTED_MODULE_0__["SupplyListComponent"]
    },
    {
        path: 'supply/:id',
        component: _supply_edit_supply_edit_component__WEBPACK_IMPORTED_MODULE_1__["SupplyEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/supply/supply.service.ts":
/*!******************************************!*\
  !*** ./src/app/supply/supply.service.ts ***!
  \******************************************/
/*! exports provided: SupplyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyService", function() { return SupplyService; });
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


var SupplyService = /** @class */ (function () {
    function SupplyService(http) {
        this.http = http;
        this.baseUrl = "http://kello-dev.herokuapp.com/supplies";
        this.supplyList = [];
    }
    SupplyService.prototype.findById = function (id) {
        var url = this.baseUrl + "/" + id;
        var params = { "id": id };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Accept', 'application/json');
        return this.http.get(url, { params: params, headers: headers });
    };
    SupplyService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.supplyList = result;
        }, function (err) {
            console.error('error loading', err);
        });
    };
    SupplyService.prototype.find = function (filter) {
        var url = "" + this.baseUrl;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Accept', 'application/json');
        var params = {
            "referenceNo": filter.referenceNo,
        };
        return this.http.get(url, { params: params, headers: headers });
    };
    SupplyService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = "";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = this.baseUrl + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.baseUrl;
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    SupplyService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = "";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = this.baseUrl + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    SupplyService.prototype.supplyArrived = function (supplyId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = "";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        url = this.baseUrl + "/" + supplyId + "/arrived";
        return this.http.patch(url, {}, { headers: headers, params: params });
    };
    SupplyService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    SupplyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SupplyService);
    return SupplyService;
}());



/***/ }),

/***/ "./src/app/supply/supply.ts":
/*!**********************************!*\
  !*** ./src/app/supply/supply.ts ***!
  \**********************************/
/*! exports provided: Supply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supply", function() { return Supply; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Supply = /** @class */ (function () {
    function Supply() {
    }
    return Supply;
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bilalmetla/work/gitlab/code/kilo/dev_admin_portal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
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
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Customers</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Customers List</h2>\n    </div>\n    <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n        <!-- <div class=\"form-group\">\n          <label for=\"phone\">Phone:</label>\n          <input [(ngModel)]=\"filter.phone\" id=\"phone\" name=\"phone\" class=\"form-control\">\n        </div> -->\n        \n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n        <a [routerLink]=\"['../customer', 'new' ]\" class=\"btn btn-default\">New</a>\n      </form>\n    </div>\n  </div>\n  \n  <div class=\"card\" *ngIf=\"customerList.length > 0\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\" scope=\"col\">Id</th>\n            <th class=\"border-top-0\" scope=\"col\">Name</th>\n            <th class=\"border-top-0\" scope=\"col\">Phone</th>\n            <!-- <th class=\"border-top-0\" scope=\"col\">AccessToken</th> -->\n            <th class=\"border-top-0\" scope=\"col\">Is Activated</th>\n            <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of customerList | paginate: { itemsPerPage: 10, currentPage: p, totalItems: customerList.length } \" [class.active]=\"item === selectedCustomer\">\n          \n            <td>{{item.id}}</td>\n                                    <td>{{item.name}}</td>\n                                    <td>{{item.phone}}</td>\n                                    <!-- <td>{{item.accessToken}}</td> -->\n                                    <td>{{item.isActivated}}</td>\n            \n            <td style=\"white-space: nowrap\">\n              <a [routerLink]=\"['../customer', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n              <button (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n\n      </table>\n\n      <pagination-controls class=\"pagination-controls\" (pageChange)=\"p = $event\"></pagination-controls>    \n        \n    </div>\n  </div>\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-list/dashboard-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-list/dashboard-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Dashboard</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Welcome To Kello </h2>\n    </div>\n    <div class=\"content\">\n      \n      <p>Kello is an online fruit & vegetable delivery service.</p>\n\n    </div>\n  </div>\n  \n  <div class=\"card\" *ngIf=\"dashboardList.feedbacks\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"header\">\n      <h2 class=\"title\">Stats </h2>\n    </div>\n    <div class=\"content\">\n    \n    \n    <section class=\"statistics\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"box\">\n              <i class=\"fa fa-envelope fa-fw bg-primary\"></i>\n              <div class=\"info\">\n                <h3>{{dashboardList.feedbacks.count}}</h3> <span>Feedbacks</span>\n                <p>Total feedback received</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"box\">\n              <i class=\"fa fa-file fa-fw danger\"></i>\n              <div class=\"info\">\n                <h3>{{dashboardList.orders.count}}</h3> <span>orders</span>\n                <p>Total order placed</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"box\">\n              <i class=\"fa fa-users fa-fw success\"></i>\n              <div class=\"info\">\n                <h3>{{dashboardList.users.count}}</h3> <span>Users</span>\n                <p>Total users in the system</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n   </div>\n\n  </div>\n  ");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Login</a></li>\n    <li class=\"breadcrumb-item active\">Login</li>\n  </ol> -->\n  <!-- <div class=\"card \">\n    <div class=\"header\">\n      <h2 class=\"title\">Login</h2>\n    </div>\n    <div class=\"content\">\n      <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n      <form #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n      \n      \n        <div class=\"form-group\">\n          <label for=\"phone\">Username</label>\n          <input [(ngModel)]=\"login.phone\" id=\"phone\" name=\"phone\" class=\"form-control\">\n        </div>\n      \n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input [(ngModel)]=\"login.password\" id=\"password\" name=\"password\" class=\"form-control\">\n        </div>\n      \n      \n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Login</button>\n        \n      </form>\n    </div>\n  </div> -->\n \n\n  <div class=\"container login-container\" style=\"padding-left:25%\">\n    <div class=\"logo\" style=\"padding-left: 115px;\">\n            \n      <a class=\"simple-text\">\n                \n          <div class=\"logo-img\">\n                      <img src=\"../../assets/img/Kello_title_logo.png\" alt=\"\" style=\"width: 150px;\n                      height: 200px;\n                      padding-top: 50px;\">      \n          </div>\n                    \n      </a>\n        \n  </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 login-form-1\">\n            <!-- <h3>Kello </h3> -->\n            <form #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n                <div class=\"form-group\">\n                  <label for=\"phone\">Username</label>\n                    <input type=\"text\" [(ngModel)]=\"login.username\" id=\"username\" name=\"username\"  class=\"form-control\" placeholder=\" Username *\" value=\"\" />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                    <input type=\"password\" [(ngModel)]=\"login.password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Your Password *\" value=\"\" />\n                </div>\n                \n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Login</button>  \n                  <a id=\"shopping_button\" [routerLink]=\"['../shopping', 'shopping' ]\" class=\"btn btn-primary\" >Shopping</a>  \n                    \n                </div>\n                <!-- <div class=\"form-group\">\n                    <a href=\"#\" class=\"ForgetPwd\">Forget Password?</a>\n                </div> -->\n            </form>\n        </div>\n       \n    </div>\n</div>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-edit/product-edit.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-edit/product-edit.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page title box -->\n<div class=\"page-title-alt-bg\"></div>\n<div class=\"page-title-box\">\n   <ol class=\"breadcrumb float-right\">\n      <li class=\"breadcrumb-item\">\n         <a href=\"javascript:void(0);\">Project</a>\n      </li>\n      <li class=\"breadcrumb-item active\">Products</li>\n   </ol>\n   <h4 class=\"page-title\">Products Detail</h4>\n</div>\n<!-- End page title box -->\n<div class=\"row\">\n   <div class=\"col-xl-12\">\n      <div class=\"card-box\">\n         <p *ngIf=\"errors\">{{ errors }}</p>\n         <form #productForm=\"ngForm\" *ngIf=\"product\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"id\">                                    Id                                </label>\n               <div class=\"col-sm-10\">                            {{product.id || 'n/a'}}                                                                                                        </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"eng_title\">\n               Eng Title <span style=\"color:red\">*</span>\n               </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"string\" required [(ngModel)]=\"product.eng_title\" name=\"eng_title\" #eng_title=\"ngModel\" class=\"form-control\">                                                                                                            \n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"urdu_title\">\n               Urdu Title <span style=\"color:red\">*</span>\n               </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"string\" required [(ngModel)]=\"product.urdu_title\" name=\"urdu_title\" #urdu_title=\"ngModel\" class=\"form-control\">                                                                                                            \n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"quentityOnHand\">                            Quentity On Hand                         </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"number\" readonly [(ngModel)]=\"product.quentityOnHand\" name=\"quentityOnHand\" #quentityOnHand=\"ngModel\" class=\"form-control\">                            \n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"unitsId\">                            Buying Price Unit                         </label>\n               <div class=\"col-sm-10\">\n                  <select [(ngModel)]=\"product.buyingPriceUnitsId\" name=\"buyingPriceUnitsId\" class=\"form-control\">\n                  <option *ngFor=\"let c of unitsId_list\" value=\"{{ c.id }}\">{{ c.unitDisplayName }}</option>\n                  </select>\n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"buyingPrice\">                            Buying Price                         </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"number\" [(ngModel)]=\"product.buyingPrice\" name=\"buyingPrice\" #buyingPrice=\"ngModel\" class=\"form-control\">                                                                                        \n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"unitsId\">                            Sale Price Unit                         </label>\n               <div class=\"col-sm-10\">\n                  <select [(ngModel)]=\"product.salePriceUnitsId\" name=\"salePriceUnitsId\" class=\"form-control\">\n                  <option *ngFor=\"let c of unitsId_list\" value=\"{{ c.id }}\">{{ c.unitDisplayName }}</option>\n                  </select>\n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"salePrice\">                            Sale Price                         </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"number\" [(ngModel)]=\"product.salePrice\" name=\"buyingPrice\" #salePrice=\"ngModel\" class=\"form-control\">                                                                                        \n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"unitsId\">                            Retail Price Unit                         </label>\n               <div class=\"col-sm-10\">\n                  <select [(ngModel)]=\"product.retailPiceUnitsId\" name=\"retailPiceUnitsId\" class=\"form-control\">\n                  <option *ngFor=\"let c of unitsId_list\" value=\"{{ c.id }}\">{{ c.unitDisplayName }}</option>\n                  </select>\n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"retailPrice\">                            Retail Price                         </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"number\" [(ngModel)]=\"product.retailPrice\" name=\"buyingPrice\" #retailPrice=\"ngModel\" class=\"form-control\">                                                                                        \n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"producttypesId\">\n               Product Type <span style=\"color:red\">*</span>\n               </label>\n               <div class=\"col-sm-10\">\n                  <select required [(ngModel)]=\"product.producttypesId\" name=\"producttypesId\" class=\"form-control\">\n                  <option *ngFor=\"let c of producttypesId_list\" value=\"{{ c.id }}\">{{ c.typeName }}</option>\n                  </select>\n               </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-sm-2 col-form-label\" for=\"description\">        \n                                       Description                         </label>\n                <div class=\"col-sm-10\">\n                   <textarea [(ngModel)]=\"product.description\" name=\"description\" #description=\"ngModel\" class=\"form-control\"> \n                       </textarea>                                                                                       \n                </div>\n             </div>\n\n             <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"isAvailable\">        \n                  Is Available      </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"checkbox\" [(ngModel)]=\"product.isAvailable\" name=\"isAvailable\" #isAvailable=\"ngModel\" class=\"form-control\" /> \n                                                                                                         \n               </div>\n            </div>\n\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"displayingPeriority\">\n                  Displaying Periority <span style=\"color:red\">*</span>\n               </label>\n               <div class=\"col-sm-10\">\n                  <select required [(ngModel)]=\"product.displayingPeriority\" name=\"displayingPeriority\" class=\"form-control\">\n                  <option *ngFor=\"let c of displayingPeriority_list\" value=\"{{ c.value }}\">{{ c.id }}</option>\n                  </select>\n               </div>\n            </div>\n\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"image\">\n               Image <span style=\"color:red\">*</span>\n               </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"file\" required accept=\"image/*\" (change)=\"changeImageListener($event)\">\n                  <img [src]=\"product.image\" style=\"width:100px; height:100px\"/>                                                                        \n               </div>\n            </div>\n            <div class=\"row\">\n               <div class=\"col-sm-6 text-left\">\n                  <button type=\"button\" class=\"btn btn-success w-md\"  (click)=\"save()\" [disabled]=\"productForm.invalid\">Save</button>\n               </div>\n               <div class=\"col-sm-6 text-right\">\n                  <button type=\"button\" class=\"btn btn-secondary w-md\"  (click)=\"cancel()\">Cancel</button>\n               </div>\n            </div>\n         </form>\n      </div>\n      <!-- end card-->\n   </div>\n   <!-- end col -->\n</div>\n<!-- end row -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-list/product-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-list/product-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Products</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Products List</h2>\n    </div>\n    <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n        <div class=\"form-group\">\n          <label for=\"eng_title\">Eng Title:</label>\n          <input [(ngModel)]=\"filter.eng_title\" id=\"eng_title\" name=\"eng_title\" class=\"form-control\">\n        </div>\n        \n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n        <a [routerLink]=\"['../product', 'new' ]\" class=\"btn btn-default\">New</a>\n      </form>\n    </div>\n  </div>\n  \n  <div class=\"card\" *ngIf=\"productList.length > 0\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\" scope=\"col\">Id</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Eng Title</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Urdu Title</th>\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Product Type</th> -->\n                                          <th class=\"border-top-0\" scope=\"col\">Quentity On Hand</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Buying Price</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Sale Price</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Retail Price</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Image</th>\n                                          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of productList | paginate: { itemsPerPage: 10, currentPage: p, totalItems: productList.length } \" [class.active]=\"item === selectedProduct\">\n          \n            <td>{{item.id}}</td>\n                                    <td>{{item.eng_title}}</td>\n                                    <td>{{item.urdu_title}}</td>\n                                    <!-- <td>{{item.producttypesId}}</td> -->\n                                    <td>{{item.quentityOnHand}}</td>\n                                    <td>{{item.buyingPrice}}</td>\n                                    <td>{{item.salePrice}}</td>\n                                    <td>{{item.retailPrice}}</td>\n                                    <td>\n                                        <img src=\"{{item.imageUrl}}\" required style=\"width:50px; height:50px\"/>\n                                    </td>\n            \n            <td style=\"white-space: nowrap\">\n              <a [routerLink]=\"['../product', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n              <button (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <pagination-controls class=\"pagination-controls\" (pageChange)=\"p = $event\"></pagination-controls>  \n\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/shopping.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/shopping.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Products</li>\n  </ol> -->\n  <div class=\"card\">\n    <div class=\"header\">\n      <!-- <h2 class=\"title\"> Fruits</h2> -->\n      <input type=\"radio\" (click)=\"getProductByType(2)\" checked=\"true\" id=\"fruits\" name=\"productType\" value=\"2\">\n      <label style=\"margin: 10px;\" for=\"fruits\" class=\"title\">Fruits</label>\n      <input type=\"radio\" (click)=\"getProductByType(1)\" id=\"vegetables\" name=\"productType\" value=\"1\">\n      <label style=\"margin: 10px;\" for=\"vegetables\" class=\"title\">Vegetables</label>\n\n    </div>\n    <!-- <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n        <div class=\"form-group\">\n          <label for=\"eng_title\">Eng Title:</label>\n          <input [(ngModel)]=\"filter.eng_title\" id=\"eng_title\" name=\"eng_title\" class=\"form-control\">\n        </div>\n        \n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n        <a [routerLink]=\"['../product', 'new' ]\" class=\"btn btn-default\">New</a>\n      </form>\n    </div> -->\n  </div>\n  \n  <div class=\"card\" *ngIf=\" productList != undefined && productList.length > 0\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\" scope=\"col\">Product</th>\n            <!-- <th class=\"border-top-0\" scope=\"col\">Name</th> -->\n            <th class=\"border-top-0\" scope=\"col\">Price</th> \n                                          \n            <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of productList | paginate: { itemsPerPage: 10, currentPage: p, totalItems: productList.length } \" [class.active]=\"item === selectedProduct\">\n          \n            <td>\n              <img src=\"{{item.imageUrl}}\" required style=\"width:50px; height:50px\"/>\n              {{item.displayName}} \n          </td>\n           <!-- <td>{{item.displayName}}</td>   -->                     \n            <td>{{item.retailPrice}} / {{unitsId_list[item.retailPiceUnitsId]}} </td> \n                                   \n            \n            <!-- <td style=\"white-space: nowrap\">\n              <a [routerLink]=\"['../product', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n              <button (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button>\n            </td> -->\n          </tr>\n        </tbody>\n      </table>\n\n      <pagination-controls class=\"pagination-controls\" (pageChange)=\"p = $event\"></pagination-controls>  \n\n    </div>\n  </div>\n  ");

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
/* harmony import */ var _modals_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/modal.service */ "./src/app/modals/modal.service.ts");
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




//import { CustomDialogComponent} from './modals/custom-dialog.component';

var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router, modalService) {
        this.router = router;
        this.modalService = modalService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        //  const token = localStorage.token; // you probably want to store it in localStorage or something
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser || !currentUser.access_token) {
            return next.handle(req)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) { return _this.checkAnyError(event); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                _this.showErrorDialog(err);
                _this.handleError(err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }));
        }
        var req1 = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + currentUser.access_token),
        });
        return next.handle(req1)
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
        return alert((err.message || '') + " [" + (err.name || '') + "] \n " + (error.message || '') + " [" + (error.code || '') + "] ");
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _modals_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"] }
    ]; };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _modals_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]])
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
/* harmony import */ var _flight_flight_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flight/flight.module */ "./src/app/flight/flight.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _AuthInterceptor_AuthInterceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthInterceptor/AuthInterceptor */ "./src/app/AuthInterceptor/AuthInterceptor.ts");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
/* harmony import */ var _layouts_login_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/login-layout.component */ "./src/app/layouts/login-layout.component.ts");
/* harmony import */ var _layouts_shopping_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/shopping-layout.component */ "./src/app/layouts/shopping-layout.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _hotel_hotel_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hotel/hotel.module */ "./src/app/hotel/hotel.module.ts");
/* harmony import */ var _customer_customer_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customer/customer.module */ "./src/app/customer/customer.module.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shopping/shopping.module */ "./src/app/shopping/shopping.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _modals_message_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modals/message-dialog.component */ "./src/app/modals/message-dialog.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
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






















//import { CustomDialogComponent} from './modal/custom-dialog.component';
//import {ConfirmDialogComponent} from './modals/confirm-dialog.component';
//import { InputDialogComponent} from './modals/input-dialog.component';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                ng_http_loader__WEBPACK_IMPORTED_MODULE_3__["NgHttpLoaderModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_23__["NgxPaginationModule"],
                _flight_flight_module__WEBPACK_IMPORTED_MODULE_0__["FlightModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_8__["APP_ROUTES"].slice(), __assign({}, _app_routes__WEBPACK_IMPORTED_MODULE_8__["APP_EXTRA_OPTIONS"])),
                _hotel_hotel_module__WEBPACK_IMPORTED_MODULE_15__["HotelModule"],
                _customer_customer_module__WEBPACK_IMPORTED_MODULE_16__["CustomerModule"],
                _product_product_module__WEBPACK_IMPORTED_MODULE_17__["ProductModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_18__["LoginModule"],
                _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_19__["ShoppingModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_20__["DashboardModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _layouts_login_layout_component__WEBPACK_IMPORTED_MODULE_11__["LoginLayoutComponent"],
                _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_10__["HomeLayoutComponent"],
                _layouts_shopping_layout_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingLayoutComponent"],
                _modals_message_dialog_component__WEBPACK_IMPORTED_MODULE_22__["MessageDialogComponent"],
            ],
            entryComponents: [
                //ConfirmDialogComponent,
                //InputDialogComponent,
                _modals_message_dialog_component__WEBPACK_IMPORTED_MODULE_22__["MessageDialogComponent"],
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _AuthInterceptor_AuthInterceptor__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptor"], multi: true },
            ],
            //entryComponents: [AlertDialogComponent],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
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
                _this.router.navigate(['/home/customer']);
            }, 1000);
        }, function (err) {
            _this.errors = err;
        });
    };
    CustomerEditComponent.prototype.cancel = function () {
        this.router.navigate(['/home/customer']);
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
        // this.config = {
        //     itemsPerPage: 5,
        //     currentPage: 1,
        //    // totalItems: this.collection.count
        //   };
    }
    Object.defineProperty(CustomerListComponent.prototype, "customerList", {
        //config: any;
        get: function () {
            return this.customerService.customerList;
        },
        enumerable: true,
        configurable: true
    });
    CustomerListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    // pageChanged(event){
    //     this.config.currentPage = event;
    //   }
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
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
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
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_customer_routes__WEBPACK_IMPORTED_MODULE_7__["CUSTOMER_ROUTES"]),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
            ],
            declarations: [
                _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomerListComponent"],
                _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditComponent"]
            ],
            providers: [
                _customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"]
            ],
            exports: [],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
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
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var CUSTOMER_ROUTES = [
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'customer',
                component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_0__["CustomerListComponent"]
            }
        ]
    },
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'customer/:id',
                component: _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_1__["CustomerEditComponent"]
            }
        ]
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
        this.baseUrl = "http://127.0.0.1:3000/customers";
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

/***/ "./src/app/dashboard/dashboard-filter.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard-filter.ts ***!
  \***********************************************/
/*! exports provided: DashboardFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardFilter", function() { return DashboardFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var DashboardFilter = /** @class */ (function () {
    function DashboardFilter() {
        this.phone = '';
    }
    return DashboardFilter;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-list/dashboard-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-list/dashboard-list.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/* Start statistics */\n.statistics {\n    margin-top: 25px;\n    color: #CCC;\n  }\n.statistics .box {\n    background-color: #313348;\n    padding: 15px;\n    overflow: hidden;\n  }\n.statistics .box > i {\n    float: left;\n    color: #FFF;\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    line-height: 60px;\n    font-size: 22px;\n  }\n.statistics .box .info {\n    float: left;\n    width: auto;\n    margin-left: 10px;\n  }\n.statistics .box .info h3 {\n    margin: 5px 0 5px;\n    display: inline-block;\n  }\n.statistics .box .info p {color:#BBB}\n/* End statistics */\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC1saXN0L2Rhc2hib2FyZC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFCQUFxQjtBQUNyQjtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLHFCQUFxQjtFQUN2QjtBQUNBLDBCQUEwQixVQUFVO0FBRXBDLG1CQUFtQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQtbGlzdC9kYXNoYm9hcmQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBTdGFydCBzdGF0aXN0aWNzICovXG4uc3RhdGlzdGljcyB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBjb2xvcjogI0NDQztcbiAgfVxuICAuc3RhdGlzdGljcyAuYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMzQ4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuc3RhdGlzdGljcyAuYm94ID4gaSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgLnN0YXRpc3RpY3MgLmJveCAuaW5mbyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLnN0YXRpc3RpY3MgLmJveCAuaW5mbyBoMyB7XG4gICAgbWFyZ2luOiA1cHggMCA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5zdGF0aXN0aWNzIC5ib3ggLmluZm8gcCB7Y29sb3I6I0JCQn1cbiAgXG4gIC8qIEVuZCBzdGF0aXN0aWNzICovXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard-list/dashboard-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-list/dashboard-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardListComponent", function() { return DashboardListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard-filter */ "./src/app/dashboard/dashboard-filter.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
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



var DashboardListComponent = /** @class */ (function () {
    function DashboardListComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.filter = new _dashboard_filter__WEBPACK_IMPORTED_MODULE_1__["DashboardFilter"]();
        this.errors = '';
    }
    Object.defineProperty(DashboardListComponent.prototype, "dashboardList", {
        get: function () {
            return this.dashboardService.dashboardList;
        },
        enumerable: true,
        configurable: true
    });
    DashboardListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    DashboardListComponent.prototype.search = function () {
        this.dashboardService.load(this.filter);
    };
    DashboardListComponent.ctorParameters = function () { return [
        { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }
    ]; };
    DashboardListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-list/dashboard-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard-list.component.css */ "./src/app/dashboard/dashboard-list/dashboard-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], DashboardListComponent);
    return DashboardListComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-list/dashboard-list.component */ "./src/app/dashboard/dashboard-list/dashboard-list.component.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _dashboard_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.routes */ "./src/app/dashboard/dashboard.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_dashboard_routes__WEBPACK_IMPORTED_MODULE_6__["DASHBOARD_ROUTES"])
            ],
            declarations: [
                _dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_4__["DashboardListComponent"],
            ],
            providers: [
                _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]
            ],
            exports: []
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.routes.ts ***!
  \***********************************************/
/*! exports provided: DASHBOARD_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASHBOARD_ROUTES", function() { return DASHBOARD_ROUTES; });
/* harmony import */ var _dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-list/dashboard-list.component */ "./src/app/dashboard/dashboard-list/dashboard-list.component.ts");
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var DASHBOARD_ROUTES = [
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_1__["HomeLayoutComponent"],
        children: [
            {
                path: 'dashboard',
                component: _dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_0__["DashboardListComponent"]
            }
        ]
    },
];


/***/ }),

/***/ "./src/app/dashboard/dashboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
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


//import {HttpHeaderService} from '../services/index'
var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
        this.baseUrl = "http://127.0.0.1:3000/dashboards";
        this.dashboardList = [];
    }
    DashboardService.prototype.findById = function (id) {
        var url = this.baseUrl + "/" + id;
        var params = { "id": id };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Accept', 'application/json');
        return this.http.get(url, { params: params, headers: headers });
    };
    DashboardService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.dashboardList = result;
        }, function (err) {
            console.error('error loading', err);
        });
    };
    DashboardService.prototype.find = function (filter) {
        var url = this.baseUrl + "/stats";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Accept', 'application/json');
        var params = {
        //  "phone": filter.phone,
        };
        return this.http.get(url, { params: params, headers: headers });
    };
    DashboardService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
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
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
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
    function HomeComponent(route, router, loginService) {
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // if(!this.currentUser || !this.currentUser.id || !this.currentUser.access_token){
        //   this.router.navigate(['/login']);
        // }
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this._userName = '';
        var url = this.loginService.getCurrentUser();
        console.log('url: ', url);
        this.router.navigate([url || '/login']);
    }
    HomeComponent.prototype.ngOnInit = function () {
        //this.needsLogin = !!this.route.snapshot.params['needsLogin'];
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
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
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
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
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
    function HomeLayoutComponent(route, router, loginService) {
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // if(!this.currentUser || !this.currentUser.id || !this.currentUser.access_token){
        //   this.router.navigate(['/login']);
        // }
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        //  this.router.navigate([this.loginService.getCurrentUser() || '/home'])
        var url = this.loginService.getCurrentUser();
        console.log('HomeLayoutComponent url', url);
        console.log('HomeLayoutComponent router url', this.router.url);
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
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
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
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
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

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
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



//import {AlertService} from '../services'
var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, loginService) {
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.loading = false;
        this.submitted = false;
        this.login = {};
        this.feedback = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        var url = this.loginService.getCurrentUser();
        console.log('login com. url', url);
        if (url === '/login') {
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigate(['/home']);
        }
        // reset login status
        //this.loginService.logout();
        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.save = function () {
        var _this = this;
        this.loginService.login(this.login).subscribe(function (user) {
            // this.login = login;
            _this.feedback = { type: 'success', message: 'login was successful!' };
            if (user && user.access_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            setTimeout(function () {
                _this.router.navigate(['/home']);
            }, 100);
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error Login' };
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _login_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.routes */ "./src/app/login/login.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_login_routes__WEBPACK_IMPORTED_MODULE_6__["LOGIN_ROUTES"])
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            ],
            providers: [_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]],
            exports: []
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.routes.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.routes.ts ***!
  \***************************************/
/*! exports provided: LOGIN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ROUTES", function() { return LOGIN_ROUTES; });
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LOGIN_ROUTES = [
    {
        path: 'login',
        component: _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    }
];


/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
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
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.loginList = [];
        this.api = 'http://127.0.0.1:3000/users/login';
    }
    // oldlogin(username: string, password: string) {
    //     return this.http.post<any>(`/users/authenticate`, { username: username, password: password })
    //         .pipe(map(user => {
    //             // login successful if there's a jwt token in the response
    //             if (user && user.access_token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //             }
    //             return user;
    //         }));
    // }
    LoginService.prototype.login = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        url = "" + this.api;
        return this.http.post(url, entity, { headers: headers, params: params });
    };
    LoginService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    LoginService.prototype.getCurrentUser = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser || !currentUser.id || !currentUser.access_token) {
            //this.router.navigate(['/login']);
            return '/login';
        }
        else {
            return '';
        }
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/modals/confirm-dialog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modals/confirm-dialog.component.ts ***!
  \****************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
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


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmDialogComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }
    ]; };
    ConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-dialog',
            template: "\n  <div>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{title}}</h4>\n    </div>\n    <div class=\"modal-body\">\n      <p>{{prompt}}</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\"\n        class=\"btn btn-outline-dark\"\n        (click)=\"activeModal.close(false)\">Cancel</button>\n      <button type=\"button\"\n        class=\"btn btn-outline-dark\"\n        (click)=\"activeModal.close(true)\">OK</button>\n    </div>\n  </div>",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/modals/input-dialog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modals/input-dialog.component.ts ***!
  \**************************************************/
/*! exports provided: InputDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDialogComponent", function() { return InputDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
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



var InputDialogComponent = /** @class */ (function () {
    function InputDialogComponent(activeModal) {
        this.activeModal = activeModal;
        this.input = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    Object.defineProperty(InputDialogComponent.prototype, "initialValue", {
        set: function (value) {
            this.input.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    InputDialogComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    InputDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-dialog',
            template: "\n  <div>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{title}}</h4>\n    </div>\n    <div class=\"modal-body\">\n      <p>{{message}}</p>\n      <input [formControl]=\"input\" type=\"text\">\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\"\n        class=\"btn btn-outline-dark\"\n        (click)=\"activeModal.close()\">Cancel</button>\n      <button type=\"button\"\n        class=\"btn btn-outline-dark\"\n        [class.disabled]=\"input.invalid\"\n        [disabled]=\"input.invalid\"\n        (click)=\"activeModal.close(input.value)\">OK</button>\n    </div>\n  </div>",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], InputDialogComponent);
    return InputDialogComponent;
}());



/***/ }),

/***/ "./src/app/modals/message-dialog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modals/message-dialog.component.ts ***!
  \****************************************************/
/*! exports provided: MessageDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDialogComponent", function() { return MessageDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
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


var MessageDialogComponent = /** @class */ (function () {
    function MessageDialogComponent(activeModal) {
        this.activeModal = activeModal;
    }
    MessageDialogComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }
    ]; };
    MessageDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-dialog',
            template: "\n  <div>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{title}}</h4>\n    </div>\n    <div class=\"modal-body\">\n      <p>{{message}}</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\"\n        class=\"btn btn-outline-dark\"\n        (click)=\"activeModal.close(true)\">OK</button>\n    </div>\n  </div>",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], MessageDialogComponent);
    return MessageDialogComponent;
}());



/***/ }),

/***/ "./src/app/modals/modal.service.ts":
/*!*****************************************!*\
  !*** ./src/app/modals/modal.service.ts ***!
  \*****************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm-dialog.component */ "./src/app/modals/confirm-dialog.component.ts");
/* harmony import */ var _input_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-dialog.component */ "./src/app/modals/input-dialog.component.ts");
/* harmony import */ var _message_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message-dialog.component */ "./src/app/modals/message-dialog.component.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var ModalService = /** @class */ (function () {
    function ModalService(ngbModal) {
        this.ngbModal = ngbModal;
    }
    ModalService.prototype.confirm = function (prompt, title) {
        if (prompt === void 0) { prompt = 'Really?'; }
        if (title === void 0) { title = 'Confirm'; }
        var modal = this.ngbModal.open(_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], { backdrop: 'static' });
        modal.componentInstance.prompt = prompt;
        modal.componentInstance.title = title;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.warn(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }));
    };
    ModalService.prototype.input = function (message, initialValue, title) {
        if (title === void 0) { title = 'Input'; }
        var modal = this.ngbModal.open(_input_dialog_component__WEBPACK_IMPORTED_MODULE_5__["InputDialogComponent"], { backdrop: 'static' });
        modal.componentInstance.message = message;
        modal.componentInstance.initialValue = initialValue;
        modal.componentInstance.title = title;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.warn(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }));
    };
    ModalService.prototype.message = function (message, title) {
        if (title === void 0) { title = 'Message'; }
        var modal = this.ngbModal.open(_message_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MessageDialogComponent"], { backdrop: 'static' });
        modal.componentInstance.message = message;
        modal.componentInstance.title = title;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.warn(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }));
    };
    ModalService.prototype.custom = function (content, config, options) {
        // we use a static backdrop by default,
        // but allow the user to set anything in the options
        var modal = this.ngbModal.open(content, __assign({ backdrop: 'static' }, options));
        // copy the config values (if any) into the component
        Object.assign(modal.componentInstance, config);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.warn(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }));
    };
    ModalService.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }
    ]; };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ModalService);
    return ModalService;
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
        this.displayingPeriority_list = [{ id: 'Top', value: 1 }, { id: 'Middle', value: 2 }, { id: 'Bottom', value: 3 }];
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
        this.unitsId_list = [{ id: 1, unitDisplayName: "kg" }, { id: 2, unitDisplayName: "dozen" }, { id: 3, unitDisplayName: "250 GM" }, { id: 4, unitDisplayName: "Bundle" }];
    };
    ProductEditComponent.prototype.save = function () {
        var _this = this;
        this.product.displayName = this.product.eng_title + " " + this.product.urdu_title;
        if (!this.product.quentityOnHand) {
            this.product.quentityOnHand = 0;
        }
        this.product.displayingPeriority = +this.product.displayingPeriority;
        this.productService.save(this.product).subscribe(function (product) {
            //this.product = product; 
            // this.errors = 'Save was successful!'; 
            // setTimeout(() => {
            //     this.router.navigate(['/home/product']);
            // }, 1000);                   
        }, function (err) {
            _this.errors = err;
        });
    };
    ProductEditComponent.prototype.cancel = function () {
        this.router.navigate(['/home/product']);
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
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
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
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_product_routes__WEBPACK_IMPORTED_MODULE_7__["PRODUCT_ROUTES"]),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"]
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
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var PRODUCT_ROUTES = [
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'product',
                component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__["ProductListComponent"]
            }
        ]
    },
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'product/:id',
                component: _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_1__["ProductEditComponent"]
            }
        ]
    },
    {
        path: 'products',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
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
        this.baseUrl = "http://127.0.0.1:3000/products";
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
        entity.image ? 0 : entity.image = '';
        entity.quentityUnitsId ? 0 : entity.quentityUnitsId = '';
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
        this.image = '';
        this.quentityUnitsId = '';
    }
    return Product;
}());



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



//import {AlertService} from '../services'
var ShoppingComponent = /** @class */ (function () {
    function ShoppingComponent(route, router, shoppingService) {
        this.route = route;
        this.router = router;
        this.shoppingService = shoppingService;
        this.loading = false;
        this.submitted = false;
        this.feedback = {};
    }
    ShoppingComponent.prototype.ngOnInit = function () {
        var _this = this;
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
    ShoppingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shopping_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingService"] }
    ]; };
    ShoppingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __importDefault(__webpack_require__(/*! raw-loader!./shopping.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/shopping.component.html")).default }),
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
        this.api = 'http://127.0.0.1:3000/shopping/protucts';
    }
    ShoppingService.prototype.productsByType = function (productType) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        url = this.api + "/type/" + productType;
        return this.http.get(url, { params: params, headers: headers });
    };
    ShoppingService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
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

module.exports = __webpack_require__(/*! /home/bilalmetla/work/gitlab/code/kilo/dev_customer_portal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
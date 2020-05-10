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
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Activations</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Activations List</h2>\n    </div>\n    <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n        <div class=\"form-group\">\n          <label for=\"phone\">Phone:</label>\n          <input [(ngModel)]=\"filter.phone\" id=\"phone\" name=\"phone\" class=\"form-control\">\n        </div>\n        \n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n        <a [routerLink]=\"['../activation', 'new' ]\" class=\"btn btn-default\">New</a>\n      </form>\n    </div>\n  </div>\n  \n  <div class=\"card\" *ngIf=\"activationList.length > 0\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\" scope=\"col\">Id</th>\n            <th class=\"border-top-0\" scope=\"col\">Phone</th>\n            <th class=\"border-top-0\" scope=\"col\">Sms Code</th>\n            <th class=\"border-top-0\" scope=\"col\">Email Code</th>\n            <th class=\"border-top-0\" scope=\"col\">Expiry</th>\n            <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of activationList | paginate: { itemsPerPage: 10, currentPage: p, totalItems: activationList.length } \" [class.active]=\"item === selectedActivation\">\n          \n            <td>{{item.id}}</td>\n            <td>{{item.phone}}</td>\n            <td>{{item.smsCode}}</td>\n            <td>{{item.emailCode}}</td>\n            <td>{{item.expiry}}</td>\n            \n            <td style=\"white-space: nowrap\">\n              <a [routerLink]=\"['../activation', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n              <button (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <pagination-controls class=\"pagination-controls\" (pageChange)=\"p = $event\"></pagination-controls>    \n      \n    </div>\n  </div>\n  ");

/***/ }),

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/configuration/configuration-edit/configuration-edit.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/configuration/configuration-edit/configuration-edit.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Configurations</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Configurations Detail</h2>\n  </div>\n  <div class=\"content\">\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n    <form *ngIf=\"configuration\" #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n    \n      <div class=\"form-group\">\n        <label>Id</label>\n        {{configuration.id || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"androidAppVersion\">Android App Version</label>\n        <input [(ngModel)]=\"configuration.androidAppVersion\" id=\"androidAppVersion\" name=\"androidAppVersion\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"sms_username\">SMS Username</label>\n        <input [(ngModel)]=\"configuration.sms_username\" id=\"sms_username\" name=\"sms_username\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"sms_password\">SMS Password</label>\n        <input type=\"password\" [(ngModel)]=\"configuration.sms_password\" id=\"sms_password\" name=\"sms_password\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"sms_password\">Store Device Token</label>\n        <input type=\"text\" [(ngModel)]=\"configuration.storeDeviceToken\" id=\"storeDeviceToken\" name=\"storeDeviceToken\" class=\"form-control\">\n      </div>\n\n\n      <div class=\"form-group\">\n        <label for=\"isProductionInstance\">Is Production Instance</label>\n        <input type=\"checkbox\" [(ngModel)]=\"configuration.isProductionInstance\" id=\"isProductionInstance\" name=\"isProductionInstance\" class=\"form-control\">\n      </div>\n    \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Save</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/configuration/configuration-list/configuration-list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/configuration/configuration-list/configuration-list.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Configurations</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Configurations List</h2>\n  </div>\n  <div class=\"content\">\n    <form #f=\"ngForm\">\n      \n      <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n      <a [routerLink]=\"['../configurations', 'new' ]\" class=\"btn btn-default\">New</a>\n    </form>\n  </div>\n</div>\n<div class=\"card\" *ngIf=\"configurationList.length > 0\">\n  <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n      <thead>\n        <tr>\n          <th class=\"border-top-0\" scope=\"col\">Id</th>\n          <th class=\"border-top-0\" scope=\"col\">Android App Version</th>\n          <th class=\"border-top-0\" scope=\"col\">SMS Username</th>\n          <!-- <th class=\"border-top-0\" scope=\"col\">SMS Password</th> -->\n          <th class=\"border-top-0\" scope=\"col\">Is Production Instance</th>\n          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of configurationList\" [class.active]=\"item === selectedConfiguration\">\n        \n          <td>{{item.id}}</td>\n          <td>{{item.androidAppVersion}}</td>\n          <td>{{item.sms_username}}</td>\n          <!-- <td>{{item.sms_password}}</td> -->\n          <td>{{item.isProductionInstance}}</td>\n          <td style=\"white-space: nowrap\">\n            <a [routerLink]=\"['../configurations', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n            <!-- <button (click)=\"delete(item)\" class=\"btn btn-danger\">Delete</button> -->\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-edit/customer-edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-edit/customer-edit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- Page title box -->\n<div class=\"page-title-alt-bg\"></div>\n\n<div class=\"page-title-box\">\n        \n    <ol class=\"breadcrumb float-right\">\n                \n        <li class=\"breadcrumb-item\">\n            <a href=\"javascript:void(0);\">Project</a>\n        </li>\n                <li class=\"breadcrumb-item active\">Customers</li>\n            \n    </ol>\n        <h4 class=\"page-title\">Customers Detail</h4>\n    \n</div>\n<!-- End page title box -->\n\n<div class=\"row\">\n        \n    <div class=\"col-xl-12\">\n                \n        <div class=\"card-box\">\n                        <p *ngIf=\"errors\">{{ errors }}</p>\n                        \n            <form #customerForm=\"ngForm\" *ngIf=\"customer\" class=\"form-horizontal\">\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"id\">                                    Id                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{customer.id || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"name\">\n                                                    Name <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"string\" required [(ngModel)]=\"customer.name\" name=\"name\" #name=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"phone\">\n                    Phone <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                    <input type=\"tel\" required [(ngModel)]=\"customer.phone\" name=\"phone\" #phone=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                                           \n                <!-- <div class=\"form-group row\">\n                 <label class=\"col-sm-2 col-form-label\" for=\"accessToken\">                                    AccessToken                                </label>\n                 <div class=\"col-sm-10\"> {{customer.accessToken || 'n/a'}}\n                 </div>\n                                        \n                </div> -->\n                                                                           \n                <div class=\"form-group row\">\n                <label class=\"col-sm-2 col-form-label\" for=\"isActivated\">   Is Activated </label>\n                <!-- <div class=\"col-sm-10\">  {{customer.isActivated || 'n/a'}} </div> -->\n                <input type=\"checkbox\" [(ngModel)]=\"customer.isActivated\" id=\"isActivated\" name=\"isActivated\" class=\"form-control\">\n                                        \n                </div>\n\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-2 col-form-label\" for=\"isWebRegistered\"> Is Web Registered                               \n                         </label>\n                    <div class=\"col-sm-10\">    {{customer.isWebRegistered || false}}  </div> \n                </div>\n\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-2 col-form-label\" for=\"deviceToken\">  Device Token  </label>\n                    <div class=\"col-sm-10\">  {{customer.deviceToken || 'n/a'}} </div>\n                </div>\n\n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"street\"> Street No </label>\n                                                                                                                                          \n                    <div class=\"col-sm-10\">\n                        <input type=\"number\" [(ngModel)]=\"customer.street\" id=\"street\" name=\"street\" class=\"form-control\">\n                    </div>\n                                        \n                </div>\n\n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"house\"> House No </label>\n                                                                                                                                          \n                    <div class=\"col-sm-10\">\n                        <input type=\"number\" [(ngModel)]=\"customer.house\" id=\"house\" name=\"house\" class=\"form-control\">\n                    </div>\n                                        \n                </div>\n\n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"address\"> Address </label>\n                                                                                                                                          \n                    <div class=\"col-sm-10\">\n                        <input type=\"text\" [(ngModel)]=\"customer.address\" id=\"address\" name=\"address\" class=\"form-control\">\n                    </div>\n                                        \n                </div>\n\n                \n\n                <div class=\"row\">\n                                        \n                    <div class=\"col-sm-6 text-left\">\n                        <button type=\"button\" class=\"btn btn-success w-md\"  (click)=\"save()\" [disabled]=\"customerForm.invalid\">Save</button>\n                    </div>\n                    <!-- <div class=\"col-sm-6 text-left\">\n                        <button type=\"button\" class=\"btn btn-success w-md\"  (click)=\"activate()\" >Activate</button>\n                    </div> -->\n                                        \n                    <div class=\"col-sm-6 text-right\">\n                        <button type=\"button\" class=\"btn btn-secondary w-md\"  (click)=\"cancel()\">Cancel</button>\n                    </div>\n                                    \n                </div>\n                            \n            </form>\n                    \n        </div>\n        <!-- end card-->\n            \n    </div>\n    <!-- end col -->\n    \n</div>\n<!-- end row -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-list/customer-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-list/customer-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Customers</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Customers List</h2>\n    </div>\n    <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n        <div class=\"form-group\">\n          <label for=\"phone\">Phone:</label>\n          <input [(ngModel)]=\"filter.phone\" id=\"phone\" name=\"phone\" class=\"form-control\">\n        </div>\n        \n        <div class=\"form-group\">\n          <label for=\"name\">Name:</label>\n          <input [(ngModel)]=\"filter.name\" id=\"name\" name=\"name\" class=\"form-control\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"id\">Id:</label>\n          <input [(ngModel)]=\"filter.id\" id=\"id\" name=\"id\" class=\"form-control\">\n        </div>\n\n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n        <a [routerLink]=\"['../customer', 'new' ]\" class=\"btn btn-default\">New</a>\n      </form>\n    </div>\n  </div>\n  \n  <div class=\"card\" *ngIf=\"customerList.length > 0\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\" scope=\"col\">Id</th>\n            <th class=\"border-top-0\" scope=\"col\">Name</th>\n            <th class=\"border-top-0\" scope=\"col\">Phone</th>\n            <!-- <th class=\"border-top-0\" scope=\"col\">AccessToken</th> -->\n            <th class=\"border-top-0\" scope=\"col\">Is Activated</th>\n            <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of customerList | paginate: { itemsPerPage: 10, currentPage: p, totalItems: customerList.length } \" [class.active]=\"item === selectedCustomer\">\n          \n            <td>{{item.id}}</td>\n                                    <td>{{item.name}}</td>\n                                    <td>{{item.phone}}</td>\n                                    <!-- <td>{{item.accessToken}}</td> -->\n                                    <td>{{item.isActivated}}</td>\n            \n            <td style=\"white-space: nowrap\">\n              <a [routerLink]=\"['../customer', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n              <button (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n\n      </table>\n\n      <pagination-controls class=\"pagination-controls\" (pageChange)=\"p = $event\"></pagination-controls>    \n        \n    </div>\n  </div>\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerfeedback/customerfeedback-edit/customerfeedback-edit.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerfeedback/customerfeedback-edit/customerfeedback-edit.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">CustomerFeedBack</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">CustomerFeedBack Detail</h2>\n  </div>\n  <div class=\"content\">\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n    <form *ngIf=\"customerfeedback\" #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n    \n      <div class=\"form-group\">\n        <label>Id</label>\n        {{customerfeedback.id || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Full Name</label>\n        {{customerfeedback.fullname || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Phone</label>\n        {{customerfeedback.phone || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Message</label>\n        {{customerfeedback.message || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Customer Id</label>\n        {{customerfeedback.customersId || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Partner Id</label>\n        {{customerfeedback.partnersId || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Is Reviewed</label>\n        {{customerfeedback.isReviewed || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Reviewed By</label>\n        {{customerfeedback.reviewedById || 'n/a'}} \n      </div>\n\n      <div class=\"form-group\">\n        <label>Feedback Images</label> <br>\n        <img  *ngIf=\"customerfeedback.image1\" src=\"{{customerfeedback.image1}}\" required style=\"width:200px; height:200px\"/>\n        <img *ngIf=\"customerfeedback.image2\" src=\"{{customerfeedback.image2}}\" required style=\"width:200px; height:200px\"/>\n        <br><img *ngIf=\"customerfeedback.image3\" src=\"{{customerfeedback.image3}}\" required style=\"width:200px; height:200px\"/>\n        <img *ngIf=\"customerfeedback.image4\" src=\"{{customerfeedback.image4}}\" required style=\"width:200px; height:200px\"/>\n      </div>\n    \n      <!-- <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Save</button> -->\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerfeedback/customerfeedback-list/customerfeedback-list.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerfeedback/customerfeedback-list/customerfeedback-list.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">CustomerFeedBack</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">CustomerFeedBack List</h2>\n  </div>\n  <div class=\"content\">\n    <form #f=\"ngForm\">\n      \n      <div class=\"form-group\">\n        <label for=\"phone\">Phone:</label>\n        <input [(ngModel)]=\"filter.phone\" id=\"phone\" name=\"phone\" class=\"form-control\">\n      </div>\n      \n      <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n      <a [routerLink]=\"['../customerfeedbacks', 'new' ]\" class=\"btn btn-default\">New</a>\n    </form>\n  </div>\n</div>\n<div class=\"card\" *ngIf=\"customerfeedbackList.length > 0\">\n  <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n      <thead>\n        <tr>\n          <th class=\"border-top-0\" scope=\"col\">Id</th>\n          <th class=\"border-top-0\" scope=\"col\">Full Name</th>\n          <th class=\"border-top-0\" scope=\"col\">Phone</th>\n          <th class=\"border-top-0\" scope=\"col\">Message</th>\n          <!-- <th class=\"border-top-0\" scope=\"col\">Customer Id</th>\n          <th class=\"border-top-0\" scope=\"col\">Partner Id</th> -->\n          <th class=\"border-top-0\" scope=\"col\">Is Reviewed</th>\n          <!-- <th class=\"border-top-0\" scope=\"col\">Reviewed By</th> -->\n          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of customerfeedbackList | paginate: { itemsPerPage: 10, currentPage: p, totalItems: customerfeedbackList.length } \" [class.active]=\"item === selectedCustomerfeedback\">\n        \n          <td>{{item.id}}</td>\n          <td>{{item.fullname}}</td>\n          <td>{{item.phone}}</td>\n          <td>{{item.message}}</td>\n          <!-- <td>{{item.customersId}}</td>\n          <td>{{item.partnersId}}</td> -->\n          <td>{{item.isReviewed}}</td>\n          <!-- <td>{{item.reviewedById}}</td> -->\n          <td style=\"white-space: nowrap\">\n            <a [routerLink]=\"['../customerfeedbacks', item.id ]\" class=\"btn btn-secondary\">View</a>&nbsp;\n            <!-- <button (click)=\"delete(item)\" class=\"btn btn-danger\">Delete</button> -->\n            <button *ngIf=\"item.isReviewed === false\" (click)=\"reviewed(item)\" [disabled]=\"!f?.valid\" class=\"btn btn-secondary\">Reviewed</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <pagination-controls class=\"pagination-controls\" (pageChange)=\"p = $event\"></pagination-controls>  \n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-list/dashboard-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-list/dashboard-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Dashboard</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Welcome To Kello </h2>\n    </div>\n    <div class=\"content\">\n      \n      <p>Kello is an online fruit & vegetable delivery service.</p>\n\n    </div>\n  </div>\n  \n  <div class=\"card\" *ngIf=\"dashboardList.feedbacks\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"header\">\n      <h2 class=\"title\">Stats </h2>\n    </div>\n    <div class=\"content\">\n    \n    \n    <section class=\"statistics\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"box\">\n              <i class=\"fa fa-envelope fa-fw bg-primary\"></i>\n              <div class=\"info\">\n                <h3>{{dashboardList.feedbacks.count}}</h3> <span>Feedbacks</span>\n                <p>Total feedback received</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"box\">\n              <i class=\"fa fa-file fa-fw danger\"></i>\n              <div class=\"info\">\n                <h3>{{dashboardList.orders.count}}</h3> <span>orders</span>\n                <h3>{{dashboardList.ordersCompleted.count}}</h3> <span>Completed</span>\n                <h3>{{dashboardList.ordersPending.count}}</h3> <span>Pending</span>\n                <h3>{{dashboardList.ordersCancelled.count}}</h3> <span>Canceled</span>\n                <!-- <p>Total order placed</p> -->\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"box\">\n              <i class=\"fa fa-users fa-fw success\"></i>\n              <div class=\"info\">\n                <h3>{{dashboardList.users.count}}</h3> <span>Users</span>\n                <p>Total users in the system</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n   </div>\n\n  </div>\n  ");

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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Login</a></li>\n    <li class=\"breadcrumb-item active\">Login</li>\n  </ol> -->\n  <!-- <div class=\"card \">\n    <div class=\"header\">\n      <h2 class=\"title\">Login</h2>\n    </div>\n    <div class=\"content\">\n      <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n      <form #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n      \n      \n        <div class=\"form-group\">\n          <label for=\"phone\">Username</label>\n          <input [(ngModel)]=\"login.phone\" id=\"phone\" name=\"phone\" class=\"form-control\">\n        </div>\n      \n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input [(ngModel)]=\"login.password\" id=\"password\" name=\"password\" class=\"form-control\">\n        </div>\n      \n      \n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Login</button>\n        \n      </form>\n    </div>\n  </div> -->\n \n\n  <div class=\"container login-container\" style=\"padding-left:25%\">\n    <div class=\"logo\" style=\"padding-left: 115px;\">\n            \n      <a class=\"simple-text\">\n                \n          <div class=\"logo-img\">\n                      <img src=\"../../assets/img/Kello_title_logo.png\" alt=\"\" style=\"width: 150px;\n                      height: 200px;\n                      padding-top: 50px;\">      \n          </div>\n                    \n      </a>\n        \n  </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 login-form-1\">\n            <!-- <h3>Kello </h3> -->\n            <form #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n                <div class=\"form-group\">\n                  <label for=\"phone\">Username</label>\n                    <input type=\"text\" [(ngModel)]=\"login.username\" id=\"username\" name=\"username\"  class=\"form-control\" placeholder=\" Username *\" value=\"\" />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                    <input type=\"password\" [(ngModel)]=\"login.password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Your Password *\" value=\"\" />\n                </div>\n                \n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Login</button>  \n                  \n                    \n                </div>\n                <!-- <div class=\"form-group\">\n                    <a href=\"#\" class=\"ForgetPwd\">Forget Password?</a>\n                </div> -->\n            </form>\n        </div>\n       \n    </div>\n</div>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderrating/orderrating-edit/orderrating-edit.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orderrating/orderrating-edit/orderrating-edit.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Order Ratings</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Order Ratings Detail</h2>\n  </div>\n  <div class=\"content\">\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n    <form *ngIf=\"orderrating\" #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n    \n      <div class=\"form-group\">\n        <label>Id</label>\n        {{orderrating.id || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Points</label>\n        {{orderrating.points || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>reason</label>\n        {{orderrating.reasonMessage || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Customer Id</label>\n        {{orderrating.customersId || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Order Id</label>\n        {{orderrating.ordersId || 'n/a'}} \n      </div>\n    \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Save</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderrating/orderrating-list/orderrating-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orderrating/orderrating-list/orderrating-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Order Ratings</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Order Ratings List</h2>\n  </div>\n  <div class=\"content\">\n    <form #f=\"ngForm\">\n      \n      <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n      <!-- <a [routerLink]=\"['../orderratings', 'new' ]\" class=\"btn btn-default\">New</a> -->\n    </form>\n  </div>\n</div>\n<div class=\"card\" *ngIf=\"orderratingList.length > 0\">\n  <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n  <!-- rating card -->\n  <div class=\"container\">\n    \t\t\t\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<div class=\"rating-block\">\n\t\t\t\t\t<h4 class=\"title\">Average user rating</h4>\n          <h2 class=\"bold padding-bottom-7\">{{ratingCalculatedList.averageUserRating }} <small>/ 5</small></h2>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm\" *ngFor=\"let item of [].constructor(ratingCalculatedList.averageUserRatingRounded); let i = index\" aria-label=\"Left Align\">\n\t\t\t\t\t  <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<!-- <button type=\"button\" [ngClass]=\"{'btn btn-default btn-grey btn-sm': 'ratingCalculatedList.averageUserRating < 2', 'btn btn-warning btn-sm': 'ratingCalculatedList.averageUserRating > 3'}\" aria-label=\"Left Align\">\n\t\t\t\t\t  <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type=\"button\" [ngClass]=\"{'btn btn-default btn-grey btn-sm': 'ratingCalculatedList.averageUserRating < 3.5', 'btn btn-warning btn-sm': 'ratingCalculatedList.averageUserRating > 3'}\" aria-label=\"Left Align\">\n\t\t\t\t\t  <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type=\"button\" [ngClass]=\"{'btn btn-default btn-grey btn-sm': 'ratingCalculatedList.averageUserRating < 4.5', 'btn btn-warning btn-sm': 'ratingCalculatedList.averageUserRating > 3'}\" aria-label=\"Left Align\">\n\t\t\t\t\t  <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type=\"button\" [ngClass]=\"{'btn btn-default btn-grey btn-sm': 'ratingCalculatedList.averageUserRating < 5', 'btn btn-warning btn-sm': 'ratingCalculatedList.averageUserRating > 3'}\" aria-label=\"Left Align\">\n\t\t\t\t\t  <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n          </button> -->\n          <h2 class=\"bold padding-bottom-7\">{{ratingCalculatedList.totalRatings }} <small> Total Ratings</small></h2>\n\t\t\t\t</div> \n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t<h4 class=\"title\">Rating breakdown</h4>\n\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t<div class=\"pull-left\" style=\"width:35px; line-height:1;\">\n\t\t\t\t\t\t<div style=\"height:9px; margin:5px 0;\">5 <span class=\"glyphicon glyphicon-star\"></span></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pull-left\" style=\"width:180px;\">\n\t\t\t\t\t\t<div class=\"progress\" style=\"height:9px; margin:8px 0;\">\n\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"5\" aria-valuemin=\"0\" aria-valuemax=\"5\" style=\"width: 100%\">\n\t\t\t\t\t\t\t<span class=\"sr-only\">100% Complete (danger)</span>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pull-right\" style=\"margin-left:10px;\">{{ratingCalculatedList['5']? ratingCalculatedList['5'].length : 0}}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t<div class=\"pull-left\" style=\"width:35px; line-height:1;\">\n\t\t\t\t\t\t<div style=\"height:9px; margin:5px 0;\">4 <span class=\"glyphicon glyphicon-star\"></span></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pull-left\" style=\"width:180px;\">\n\t\t\t\t\t\t<div class=\"progress\" style=\"height:9px; margin:8px 0;\">\n\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-primary\" role=\"progressbar\" aria-valuenow=\"4\" aria-valuemin=\"0\" aria-valuemax=\"5\" style=\"width: 100%\">\n\t\t\t\t\t\t\t<span class=\"sr-only\">80% Complete (danger)</span>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pull-right\" style=\"margin-left:10px;\">{{ratingCalculatedList['4']? ratingCalculatedList['4'].length : 0}}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t<div class=\"pull-left\" style=\"width:35px; line-height:1;\">\n\t\t\t\t\t\t<div style=\"height:9px; margin:5px 0;\">3 <span class=\"glyphicon glyphicon-star\"></span></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pull-left\" style=\"width:180px;\">\n\t\t\t\t\t\t<div class=\"progress\" style=\"height:9px; margin:8px 0;\">\n\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"3\" aria-valuemin=\"0\" aria-valuemax=\"5\" style=\"width: 100%\">\n\t\t\t\t\t\t\t<span class=\"sr-only\">60% Complete (danger)</span>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pull-right\" style=\"margin-left:10px;\">{{ratingCalculatedList['3']? ratingCalculatedList['3'].length : 0}}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t<div class=\"pull-left\" style=\"width:35px; line-height:1;\">\n\t\t\t\t\t\t<div style=\"height:9px; margin:5px 0;\">2 <span class=\"glyphicon glyphicon-star\"></span></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pull-left\" style=\"width:180px;\">\n\t\t\t\t\t\t<div class=\"progress\" style=\"height:9px; margin:8px 0;\">\n\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"2\" aria-valuemin=\"0\" aria-valuemax=\"5\" style=\"width: 100%\">\n\t\t\t\t\t\t\t<span class=\"sr-only\">40% Complete (danger)</span>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pull-right\" style=\"margin-left:10px;\">{{ratingCalculatedList['2']? ratingCalculatedList['2'].length : 0}}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t<div class=\"pull-left\" style=\"width:35px; line-height:1;\">\n\t\t\t\t\t\t<div style=\"height:9px; margin:5px 0;\">1 <span class=\"glyphicon glyphicon-star\"></span></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pull-left\" style=\"width:180px;\">\n\t\t\t\t\t\t<div class=\"progress\" style=\"height:9px; margin:8px 0;\">\n\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"1\" aria-valuemin=\"0\" aria-valuemax=\"5\" style=\"width: 100%\">\n\t\t\t\t\t\t\t<span class=\"sr-only\">20% Complete (danger)</span>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pull-right\" style=\"margin-left:10px;\">{{ratingCalculatedList['1']? ratingCalculatedList['1'].length : 0}}</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\t\t</div>\t\t\t\n\t\t\n\t\t\n    </div> <!-- /container -->\n  <!-- end rating card -->\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n      <thead>\n        <tr>\n          <th class=\"border-top-0\" scope=\"col\">Id</th>\n          <th class=\"border-top-0\" scope=\"col\">Points</th>\n          <th class=\"border-top-0\" scope=\"col\">reason</th>\n          <th class=\"border-top-0\" scope=\"col\">Customer Id</th>\n          <th class=\"border-top-0\" scope=\"col\">Order Id</th>\n          <!-- <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th> -->\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of orderratingList | paginate: { itemsPerPage: 10, currentPage: p, totalItems: orderratingList.length } \" [class.active]=\"item === selectedOrderrating\">\n        \n          <td>{{item.id}}</td>\n          <td>{{item.points}}</td>\n          <td>{{item.reasonMessage}}</td>\n          <td>{{item.customersId}}</td>\n          <td>{{item.ordersId}}</td>\n          <!-- <td style=\"white-space: nowrap\">\n            <a [routerLink]=\"['../orderratings', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n            <button (click)=\"delete(item)\" class=\"btn btn-danger\">Delete</button>\n          </td> -->\n        </tr>\n      </tbody>\n\t</table>\n\t\n\t<pagination-controls class=\"pagination-controls\" (pageChange)=\"p = $event\"></pagination-controls>  \n\t\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders-edit/orders-edit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders-edit/orders-edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Orders</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Orders Detail</h2>\n  </div>\n  <div class=\"content\">\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n    <form *ngIf=\"orders\" #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n    \n      <div class=\"form-group\">\n        <label id=\"orderId\">Id</label>\n        {{orders.id || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label id=\"orderTime\">Order Time</label>\n        {{orders.orderTime || 'n/a'}} \n      </div>\n\n      <div *ngIf=\"orders.startProgressTime\" class=\"form-group\">\n        <label>Start Progress Time</label>\n        {{orders.startProgressTime || 'n/a'}} \n      </div>\n\n      <div *ngIf=\"orders.completionTime\" class=\"form-group\">\n        <label>Completion Time</label>\n        {{orders.completionTime || 'n/a'}} \n      </div>\n\n      <div *ngIf=\"orders.cancelTime\" class=\"form-group\">\n        <label>Cancel Time</label>\n        {{orders.cancelTime || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Order Status</label>\n        {{orders.orderStatus || 'n/a'}} \n      </div>\n    \n          \n      <div class=\"form-group\">\n        <label>Is Delivered</label>\n        {{orders.isDelivered || false}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Is Cancelled</label>\n        {{orders.isCancelled || false}} \n      </div>\n\n      <div *ngIf=\"orders.isCancelled\" class=\"form-group\">\n        <label>Canceled By Admin</label>\n        {{orders.canceledByAdminId || false}} \n      </div>\n\n      <div *ngIf=\"orders.isDeleted\" class=\"form-group\">\n        <label>Is Deleted</label>\n        {{orders.isDeleted || 'n/a'}} \n      </div>\n\n      <div *ngIf=\"orders.deletedById\" class=\"form-group\">\n        <label>Deleted By</label>\n        {{orders.deletedById || 'n/a'}} \n      </div>\n\n      <div class=\"form-group\">\n        <label>Is Rating Done</label>\n        {{orders.isOrderRatingDone || false}} \n      </div>\n\n\n      <div class=\"form-group\">\n        <label>Ordered By</label>\n        {{orders.orderCategory || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label>Customer Id</label>\n        {{orders.customersId || 'n/a'}} \n      </div>\n\n      <div class=\"form-group\">\n        <label>Delivered By</label>\n        {{orders.deliveredById || 'n/a'}} \n      </div>\n    \n      <div *ngIf=\"orders.partnersId\" class=\"form-group\">\n        <label>Partner Id</label>\n        {{orders.partnersId || 'n/a'}} \n      </div>\n\n      <div class=\"form-group\">\n        <label>Special Notes</label>\n        {{orders.specialNotes || 'n/a'}} \n      </div>\n\n      <div *ngIf=\"orders.isFromWeb != true\" class=\"form-group\">\n        <label>Order Location</label>\n        <a  href=\"{{locationUrl}}\" target=\"_blank\"> <b> View Location </b></a> \n      </div>\n\n      <div class=\"form-group\">\n        <label id=\"customerName\">Customer Name</label>\n        {{orders.customers.name || 'n/a'}} \n      </div>\n\n      <div class=\"form-group\">\n        <label>Customer Phone</label>\n        {{orders.customers.phone || 'n/a'}} \n      </div>\n\n      \n\n      <div *ngIf=\"orders.isFromWeb === true\" class=\"form-group\">\n        <label>Street No</label>\n        {{orders.street || 'n/a'}} \n      </div>\n      \n      <div *ngIf=\"orders.isFromWeb === true\" class=\"form-group\">\n        <label>House No</label>\n        {{orders.house || 'n/a'}} \n      </div>\n      \n      <div *ngIf=\"orders.isFromWeb === true\" class=\"form-group\">\n        <label>Address</label>\n        {{orders.address || 'n/a'}} \n      </div>\n\n      <div class=\"form-group\">\n        <label id=\"totalBillAmount\">Total Bill Amount</label>\n        {{orders.totalBillAmount || 'n/a'}} \n      </div>\n    \n      <div class=\"table-responsive\">\n        <table class=\"table table-centered table-hover mb-0 col-xl-10\" id=\"datatable\">\n          <thead>\n            <tr>\n              <th class=\"border-top-0\" scope=\"col\">#</th>\n              <th class=\"border-top-0\" scope=\"col\">Product</th>\n              <th class=\"border-top-0\" scope=\"col\">Price</th>\n              <th class=\"border-top-0\" scope=\"col\">Qty</th>\n              <th class=\"border-top-0\" scope=\"col\">Amount</th>\n              \n              \n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let product of orders.items let i = index\" [class.active]=\"product === selectedOrders\">\n              <td>{{i+1}}</td>\n              <td>{{product.productTitle}}</td>\n              <td >{{product.price}}/{{product.quentityUnit}}</td>\n              <td *ngIf=\"isPrinting === true\" >{{product.quantity}}</td>\n              <td *ngIf=\"isPrinting === false\">\n                <input style=\"width: 50px; border: 0px;\" type=\"tel\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"product.quantity\"  (keyup.enter)= \"updateQuantity(product.productId, product.quantity)\" >\n                <!-- <button type=\"button\" style=\"width: 80px;\" class=\"btn btn-secondary\" (click)=\"updateQuantity()\" >Change</button> -->\n              </td>                \n              <td>{{product.quantity * product.price}}</td>\n              \n              \n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!--  -->\n\n      <!-- <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Save</button> -->\n      <button *ngIf=\"orders.orderStatus=='Pending'\" type=\"button\" class=\"btn btn-secondary\" (click)=\"orderStartProgress()\">Start Progress</button>\n      <button *ngIf=\"orders.orderStatus=='InProgress'\" type=\"button\" class=\"btn btn-secondary\" (click)=\"orderDelivered()\">Order Delivered</button>\n      <button *ngIf=\"orders.orderStatus=='InProgress' || orders.orderStatus=='Pending' \" type=\"button\" class=\"btn btn-success w-md\"  (click)=\"cancelOrder()\" >Cancel Order</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Go Back</button>\n      \n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"printReceipt()\" >Print Receipt</button>\n\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders-list/orders-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders-list/orders-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Orders</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Orders List</h2>\n  </div>\n  <div class=\"content\">\n    <form #f=\"ngForm\">\n      \n      <div class=\"form-group\">\n        <label for=\"orderStatus\">Order Status:</label>\n        <input [(ngModel)]=\"filter.orderStatus\" id=\"orderStatus\" name=\"orderStatus\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"isOrderRatingDone\">Is Order Rating Done:</label>\n        <input [(ngModel)]=\"filter.isOrderRatingDone\" id=\"isOrderRatingDone\" name=\"isOrderRatingDone\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"id\">Order Id:</label>\n        <input [(ngModel)]=\"filter.id\" id=\"orderStatus\" name=\"id\" class=\"form-control\">\n      </div>\n      \n      <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n      <!-- <a [routerLink]=\"['../orderses', 'new' ]\" class=\"btn btn-default\">New</a> -->\n    </form>\n  </div>\n</div>\n\n<div class=\"card\" *ngIf=\"ordersList.length > 0\">\n  <p *ngIf=\"errors\">{{ errors }}</p>\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n      <thead>\n        <tr>\n          <th class=\"border-top-0\" scope=\"col\">Id</th>\n          <th class=\"border-top-0\" scope=\"col\">Order Time</th>\n          <th class=\"border-top-0\" scope=\"col\">Order Status</th>\n          <th class=\"border-top-0\" scope=\"col\">Name</th>\n          <th class=\"border-top-0\" scope=\"col\">Phone</th>\n          <!-- <th class=\"border-top-0\" scope=\"col\">Ordered By</th> -->\n          \n          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of ordersList | paginate: { itemsPerPage: 10, currentPage: p, totalItems: ordersList.length } \" [class.active]=\"item === selectedOrders\">\n        \n          <td>{{item.id}}</td>\n          <td>{{item.orderTime}}</td>\n          <td>{{item.orderStatus}}</td>\n          <td>{{item.customers? item.customers.name: 'NA'}}</td>\n          <td>{{item.customers? item.customers.phone: 'NA'}}</td>\n          <!-- <td>{{item.orderCategory}}</td> -->\n          \n          <td style=\"white-space: nowrap\">\n            <a [routerLink]=\"['../orderses', item.id ]\" class=\"btn btn-secondary\">View</a>&nbsp;\n            <button *ngIf=\"item.isDeleted != true\" (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <pagination-controls class=\"pagination-controls\" (pageChange)=\"p = $event\"></pagination-controls>  \n    \n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partner/partner-edit/partner-edit.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partner/partner-edit/partner-edit.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- Page title box -->\n<div class=\"page-title-alt-bg\"></div>\n\n<div class=\"page-title-box\">\n        \n    <ol class=\"breadcrumb float-right\">\n                \n        <li class=\"breadcrumb-item\">\n            <a href=\"javascript:void(0);\">Project</a>\n        </li>\n                <li class=\"breadcrumb-item active\">Partners</li>\n            \n    </ol>\n        <h4 class=\"page-title\">Partners Detail</h4>\n    \n</div>\n<!-- End page title box -->\n\n<div class=\"row\">\n        \n    <div class=\"col-xl-12\">\n                \n        <div class=\"card-box\">\n                        <p *ngIf=\"errors\">{{ errors }}</p>\n                        \n            <form #partnerForm=\"ngForm\" *ngIf=\"partner\" class=\"form-horizontal\">\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"id\">                                    Id                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{partner.id || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"name\">\n                                                    Name <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"string\" required [(ngModel)]=\"partner.name\" name=\"name\" #name=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"phone\">\n                                                    Phone <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"tel\" required [(ngModel)]=\"partner.phone\" name=\"phone\" #phone=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"accessToken\">                                    AccessToken                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{partner.accessToken || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"isActivated\">                                    Is Activated                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{partner.isActivated || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                 <label class=\"col-sm-2 col-form-label\" for=\"pin\">    Pin  </label>\n                                                                                                                           \n                    <div class=\"col-sm-10\">\n                     <input type=\"number\" [(ngModel)]=\"partner.pin\" name=\"pin\" class=\"form-control\">                                                                                                                \n                    </div>                  \n                </div>\n\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-2 col-form-label\" for=\"deviceId\">    Device Id  </label>                                                                                                                              \n                       <div class=\"col-sm-10\">\n                        <input type=\"text\" [(ngModel)]=\"partner.deviceId\" name=\"deviceId\" class=\"form-control\">                                                                                                                \n                       </div>                  \n                </div>\n\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-2 col-form-label\" for=\"deviceToken\">   Device Token  </label>                                                                                                              \n                       <div class=\"col-sm-10\">\n                        <input type=\"text\" [(ngModel)]=\"partner.deviceToken\" name=\"deviceToken\" class=\"form-control\">                                                                                                                \n                       </div>                  \n                </div>\n\n                   \n                <div class=\"form-group row\">\n                     <label class=\"col-sm-2 col-form-label\" for=\"lastActive\">                                    Last Active                                </label>\n                                                                                                                           \n                    <div class=\"col-sm-10\">\n                                                                                            <input type=\"Date\" [(ngModel)]=\"partner.lastActive\" name=\"lastActive\" class=\"form-control\">                                                                                                                \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                   <label class=\"col-sm-2 col-form-label\" for=\"creationDate\">                                    CreationDate                                </label>\n                                                                                                                           \n                    <div class=\"col-sm-10\">\n                                                                                            <input type=\"Date\" [(ngModel)]=\"partner.creationDate\" name=\"creationDate\" class=\"form-control\">                                                                                                                \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"partnertypesId\">\n                                                    Partner Type <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                    \n                        <select required [(ngModel)]=\"partner.partnertypesId\" name=\"partnertypesId\" class=\"form-control\">\n                                                                    <option *ngFor=\"let c of partnertypesId_list\" value=\"{{ c.id }}\">{{ c.typeName }}</option>\n                                                                 \n                        </select>\n                                                                                                                                                                                             \n                    </div>\n                        \n                </div>\n\n                                                                           \n                <div class=\"form-group row\">\n                 <label class=\"col-sm-2 col-form-label\" for=\"offersId\">                                    Offer                                </label>\n                                                                                                                           \n                    <div class=\"col-sm-10\">\n                                                                                            \n                        <select [(ngModel)]=\"partner.offersId\" name=\"offersId\" class=\"form-control\">\n                         <option *ngFor=\"let c of offersId_list\" value=\"{{ c.id }} \">{{ c.offerName }}</option>                                                 \n                        </select>\n                                                                                                                                \n                    </div>\n                                        \n                </div>\n\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-2 col-form-label\" for=\"longitude\"> Longitude </label>                                                                                                              \n                       <div class=\"col-sm-10\">\n                        <input type=\"number\" [(ngModel)]=\"longitude\" name=\"longitude\" class=\"form-control\">                                                                                                                \n                       </div>                  \n                </div>\n\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-2 col-form-label\" for=\"latitude\">   Latitude  </label>                                                                                                              \n                       <div class=\"col-sm-10\">\n                        <input type=\"number\" [(ngModel)]=\"latitude\" name=\"latitude\" class=\"form-control\">                                                                                                                \n                       </div>                  \n                </div>\n                                                \n                <div class=\"row\">\n                                        \n                    <div class=\"col-sm-6 text-left\">\n                        <button type=\"button\" class=\"btn btn-success w-md\"  (click)=\"save()\" [disabled]=\"partnerForm.invalid\">Save</button>\n                    </div>\n                                        \n                    <div class=\"col-sm-6 text-right\">\n                        <button type=\"button\" class=\"btn btn-secondary w-md\"  (click)=\"cancel()\">Cancel</button>\n                    </div>\n                                    \n                </div>\n                            \n            </form>\n                    \n        </div>\n        <!-- end card-->\n            \n    </div>\n    <!-- end col -->\n    \n</div>\n<!-- end row -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partner/partner-list/partner-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partner/partner-list/partner-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Partners</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Partners List</h2>\n    </div>\n    <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n        <div class=\"form-group\">\n          <label for=\"phone\">Phone:</label>\n          <input [(ngModel)]=\"filter.phone\" id=\"phone\" name=\"phone\" class=\"form-control\">\n        </div>\n        \n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n        <a [routerLink]=\"['../partner', 'new' ]\" class=\"btn btn-default\">New</a>\n      </form>\n    </div>\n  </div>\n  \n  <div class=\"card\" *ngIf=\"partnerList.length > 0\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\" scope=\"col\">Id</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Name</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Phone</th>\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">AccessToken</th> -->\n                                          <th class=\"border-top-0\" scope=\"col\">Is Activated</th>\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Pin</th> -->\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Last Active</th> -->\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Device Token</th> -->\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Partner Type</th> -->\n                                          \n                                          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of partnerList\" [class.active]=\"item === selectedPartner\">\n          \n            <td>{{item.id}}</td>\n                                    <td>{{item.name}}</td>\n                                    <td>{{item.phone}}</td>\n                                    <!-- <td>{{item.accessToken}}</td> -->\n                                    <td>{{item.isActivated}}</td>\n                                    <!-- <td>{{item.pin}}</td>\n                                    <td>{{item.lastActive}}</td> -->\n                                    <!-- <td>{{item.deviceToken}}</td> -->\n                                    <!-- <td>{{item.partnertypesId}}</td> -->\n                                    \n            \n            <td style=\"white-space: nowrap\">\n              <a [routerLink]=\"['../partner', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n              <button (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/priceplan/priceplan-edit/priceplan-edit.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/priceplan/priceplan-edit/priceplan-edit.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">PricePlan</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">PricePlan Detail</h2>\n  </div>\n  <div *ngIf=\"priceplan\" class=\"content\">\n   \n      \n      <button *ngIf=\"!priceplan.isApplied\" (click)=\"applyPricePlan()\" class=\"btn btn-primary\">Apply Price Plan</button>\n      <button *ngIf=\"priceplan.isApplied === true\" (click)=\"stopPricePlan()\" class=\"btn btn-primary\">Stop Price Plan</button>\n    \n  </div>\n\n  <div class=\"content\">\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n    <form *ngIf=\"priceplan\" #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n    \n      <div class=\"form-group\">\n        <label>Id</label>\n        {{priceplan.id || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input [(ngModel)]=\"priceplan.title\" id=\"title\" name=\"title\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"shortCode\">Short Code</label>\n        <input [(ngModel)]=\"priceplan.shortCode\" id=\"shortCode\" name=\"shortCode\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"chargeValue\">Charge Value</label>\n        <input type=\"number\" [(ngModel)]=\"priceplan.chargeValue\" id=\"chargeValue\" name=\"chargeValue\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"effectiveFrom\">Effective From</label>\n        <input type=\"date\" [(ngModel)]=\"priceplan.effectiveFrom\" id=\"effectiveFrom\" name=\"effectiveFrom\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"effectiveTo\">Effective To</label>\n        <input type=\"date\" [(ngModel)]=\"priceplan.effectiveTo\" id=\"effectiveTo\" name=\"effectiveTo\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"isApplied\">Is Applied</label>\n        <input type=\"checkbox\" [(ngModel)]=\"priceplan.isApplied\" [checked]=\"priceplan.isApplied\" id=\"isApplied\" name=\"isApplied\" class=\"form-control\">\n      </div>\n    \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Save</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/priceplan/priceplan-list/priceplan-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/priceplan/priceplan-list/priceplan-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">PricePlan</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">PricePlan List</h2>\n  </div>\n  <div class=\"content\">\n    <form #f=\"ngForm\">\n      \n      <div class=\"form-group\">\n        <label for=\"title\">Title:</label>\n        <input [(ngModel)]=\"filter.title\" id=\"title\" name=\"title\" class=\"form-control\">\n      </div>\n      \n      <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n      <a [routerLink]=\"['../priceplans', 'new' ]\" class=\"btn btn-default\">New</a>\n    </form>\n  </div>\n</div>\n<div class=\"card\" *ngIf=\"priceplanList.length > 0\">\n  <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n      <thead>\n        <tr>\n          <th class=\"border-top-0\" scope=\"col\">Id</th>\n          <th class=\"border-top-0\" scope=\"col\">Title</th>\n          <th class=\"border-top-0\" scope=\"col\">Charge Value</th>\n          <th class=\"border-top-0\" scope=\"col\">Is Applied</th>\n          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of priceplanList\" [class.active]=\"item === selectedPriceplan\">\n        \n          <td>{{item.id}}</td>\n          <td>{{item.title}}</td>\n          <td>{{item.chargeValue}}</td>\n          <td>{{item.isApplied}}</td>\n          \n          <td style=\"white-space: nowrap\">\n            <a [routerLink]=\"['../priceplans', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n            <button (click)=\"delete(item)\" class=\"btn btn-danger\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-edit/product-edit.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-edit/product-edit.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page title box -->\n<div class=\"page-title-alt-bg\"></div>\n<div class=\"page-title-box\">\n   <ol class=\"breadcrumb float-right\">\n      <li class=\"breadcrumb-item\">\n         <a href=\"javascript:void(0);\">Project</a>\n      </li>\n      <li class=\"breadcrumb-item active\">Products</li>\n   </ol>\n   <h4 class=\"page-title\">Products Detail</h4>\n</div>\n<!-- End page title box -->\n<div class=\"row\">\n   <div class=\"col-xl-12\">\n      <div class=\"card-box\">\n         <p *ngIf=\"errors\">{{ errors }}</p>\n         <form #productForm=\"ngForm\" *ngIf=\"product\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"id\">                                    Id                                </label>\n               <div class=\"col-sm-10\">                            {{product.id || 'n/a'}}                                                                                                        </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"eng_title\">\n               Eng Title <span style=\"color:red\">*</span>\n               </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"string\" required [(ngModel)]=\"product.eng_title\" name=\"eng_title\" #eng_title=\"ngModel\" class=\"form-control\">                                                                                                            \n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"urdu_title\">\n               Urdu Title <span style=\"color:red\">*</span>\n               </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"string\" required [(ngModel)]=\"product.urdu_title\" name=\"urdu_title\" #urdu_title=\"ngModel\" class=\"form-control\">                                                                                                            \n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"quentityOnHand\">                            Quentity On Hand                         </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"number\" readonly [(ngModel)]=\"product.quentityOnHand\" name=\"quentityOnHand\" #quentityOnHand=\"ngModel\" class=\"form-control\">                            \n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"buyingPriceUnitsId\">                            Buying Price Unit                         </label>\n               <div class=\"col-sm-10\">\n                  <select [(ngModel)]=\"product.buyingPriceUnitsId\" name=\"buyingPriceUnitsId\" class=\"form-control\">\n                  <option *ngFor=\"let c of unitsId_list\" value=\"{{ c.id }}\">{{ c.unitDisplayName }}</option>\n                  </select>\n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"buyingPrice\">                            Buying Price                         </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"number\" [(ngModel)]=\"product.buyingPrice\" name=\"buyingPrice\" #buyingPrice=\"ngModel\" class=\"form-control\">                                                                                        \n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"salePriceUnitsId\">                            Sale Price Unit                         </label>\n               <div class=\"col-sm-10\">\n                  <select [(ngModel)]=\"product.salePriceUnitsId\" name=\"salePriceUnitsId\" class=\"form-control\">\n                  <option *ngFor=\"let c of unitsId_list\" value=\"{{ c.id }}\">{{ c.unitDisplayName }}</option>\n                  </select>\n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"salePrice\">                            Sale Price                         </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"number\" [(ngModel)]=\"product.salePrice\" name=\"salePrice\" #salePrice=\"ngModel\" class=\"form-control\">                                                                                        \n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"retailPiceUnitsId\">                            Retail Price Unit                         </label>\n               <div class=\"col-sm-10\">\n                  <select [(ngModel)]=\"product.retailPiceUnitsId\" name=\"retailPiceUnitsId\" class=\"form-control\">\n                  <option *ngFor=\"let c of unitsId_list\" value=\"{{ c.id }}\">{{ c.unitDisplayName }}</option>\n                  </select>\n               </div>\n            </div>\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"retailPrice\">                            Retail Price                         </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"number\" [(ngModel)]=\"product.retailPrice\" name=\"retailPrice\" #retailPrice=\"ngModel\" class=\"form-control\">                                                                                        \n               </div>\n            </div>\n\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"retailPriceA\"> Retail Price A  </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"number\" [(ngModel)]=\"product.retailPriceA\" name=\"retailPriceA\" #retailPriceA=\"ngModel\" class=\"form-control\">                                                                                        \n               </div>\n            </div>\n\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"producttypesId\">\n               Product Type <span style=\"color:red\">*</span>\n               </label>\n               <div class=\"col-sm-10\">\n                  <select required [(ngModel)]=\"product.producttypesId\" name=\"producttypesId\" class=\"form-control\">\n                  <option *ngFor=\"let c of producttypesId_list\" value=\"{{ c.id }}\">{{ c.typeName }}</option>\n                  </select>\n               </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-sm-2 col-form-label\" for=\"description\">        \n                                       Description                         </label>\n                <div class=\"col-sm-10\">\n                   <textarea [(ngModel)]=\"product.description\" name=\"description\" #description=\"ngModel\" class=\"form-control\"> \n                       </textarea>                                                                                       \n                </div>\n             </div>\n\n             <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"isAvailable\">        \n                  Is Available      </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"checkbox\" [(ngModel)]=\"product.isAvailable\" name=\"isAvailable\" #isAvailable=\"ngModel\" class=\"form-control\" /> \n                                                                                                         \n               </div>\n            </div>\n\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"displayingPeriority\">\n                  Displaying Periority <span style=\"color:red\">*</span>\n               </label>\n               <div class=\"col-sm-10\">\n                  <select required [(ngModel)]=\"product.displayingPeriority\" name=\"displayingPeriority\" class=\"form-control\">\n                  <option *ngFor=\"let c of displayingPeriority_list\" value=\"{{ c.value }}\">{{ c.id }}</option>\n                  </select>\n               </div>\n            </div>\n\n            <div class=\"form-group row\">\n               <label class=\"col-sm-2 col-form-label\" for=\"image\">\n               Image <span style=\"color:red\">*</span>\n               </label>\n               <div class=\"col-sm-10\">\n                  <input type=\"file\" required accept=\"image/*\" (change)=\"changeImageListener($event)\">\n                  <img [src]=\"product.imageUrl\" style=\"width:100px; height:100px\"/>                                                                        \n               </div>\n            </div>\n            <div class=\"row\">\n               <div class=\"col-sm-6 text-left\">\n                  <button type=\"button\" class=\"btn btn-success w-md\"  (click)=\"save()\" [disabled]=\"productForm.invalid\">Save</button>\n               </div>\n               <div class=\"col-sm-6 text-right\">\n                  <button type=\"button\" class=\"btn btn-secondary w-md\"  (click)=\"cancel()\">Cancel</button>\n               </div>\n            </div>\n         </form>\n      </div>\n      <!-- end card-->\n   </div>\n   <!-- end col -->\n</div>\n<!-- end row -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-list/product-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-list/product-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Products</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Products List</h2>\n    </div>\n    <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n        <div class=\"form-group\">\n          <label for=\"eng_title\">Eng Title:</label>\n          <input [(ngModel)]=\"filter.eng_title\" id=\"eng_title\" name=\"eng_title\" class=\"form-control\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"isAvailable\">Is Available:</label>\n          <input [(ngModel)]=\"filter.isAvailable\" id=\"isAvailable\" name=\"isAvailable\" class=\"form-control\">\n        </div>\n        \n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n        <a [routerLink]=\"['../product', 'new' ]\" class=\"btn btn-default\">New</a>\n      </form>\n    </div>\n  </div>\n  \n  <div class=\"card\" *ngIf=\"productList.length > 0\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\" scope=\"col\">Id</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Eng Title</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Urdu Title</th>\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Product Type</th> -->\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Quentity On Hand</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Buying Price</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Sale Price</th> -->\n                                          <th class=\"border-top-0\" scope=\"col\">Retail Price A</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Retail Price</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Image</th>\n                                          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of productList | paginate: { itemsPerPage: 10, currentPage: p, totalItems: productList.length } \" [class.active]=\"item === selectedProduct\">\n          \n            <td>{{item.id}}</td>\n                                    <td>{{item.eng_title}}</td>\n                                    <td>{{item.urdu_title}}</td>\n                                    <!-- <td>{{item.producttypesId}}</td> -->\n                                    <!-- <td>{{item.quentityOnHand}}</td> -->\n                                    <!-- <td>{{item.buyingPrice}}</td> -->\n                                    <td>{{item.retailPriceA}}</td>\n                                    <td>{{item.retailPrice}}</td>\n                                    <td>\n                                        <img src=\"{{item.imageUrl}}\" required style=\"width:50px; height:50px\"/>\n                                    </td>\n            \n            <td style=\"white-space: nowrap\">\n              <a [routerLink]=\"['../product', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n              <button (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <pagination-controls class=\"pagination-controls\" (pageChange)=\"p = $event\"></pagination-controls>  \n\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/promotion/promotion-edit/promotion-edit.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/promotion/promotion-edit/promotion-edit.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Promotion</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Promotion Detail</h2>\n  </div>\n\n  <div *ngIf=\"promotion\" class=\"content\">         \n    <button *ngIf=\"!promotion.isActive\" (click)=\"applyPromotion()\" class=\"btn btn-primary\">Apply Promotion</button>\n    <button *ngIf=\"promotion.isActive === true\" (click)=\"stopPromotion()\" class=\"btn btn-primary\">Stop Promotion</button>\n  </div>\n\n  <div class=\"content\">\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n    <form *ngIf=\"promotion\" #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n    \n      <div class=\"form-group\">\n        <label>Id</label>\n        {{promotion.id || 'n/a'}} \n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input [(ngModel)]=\"promotion.title\" id=\"title\" name=\"title\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"promotionValue\">Promotion Value</label>\n        <input type=\"number\" [(ngModel)]=\"promotion.promotionValue\" id=\"promotionValue\" name=\"promotionValue\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"isPromotionValueFixed\">Is Promotion Value Fixed</label>\n        <input type=\"checkbox\" [(ngModel)]=\"promotion.isPromotionValueFixed\" id=\"isPromotionValueFixed\" name=\"isPromotionValueFixed\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"effectiveDate\">Effective Date</label>\n        <input type=\"date\" [(ngModel)]=\"promotion.effectiveDate\" id=\"effectiveDate\" name=\"effectiveDate\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"endDate\">End Date</label>\n        <input  type=\"date\" [(ngModel)]=\"promotion.endDate\" id=\"endDate\" name=\"endDate\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <input [(ngModel)]=\"promotion.description\" id=\"description\" name=\"description\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\" for=\"image\">\n        Image <span style=\"color:red\">*</span>\n        </label>\n        <div class=\"col-sm-10\">\n           <input type=\"file\" required accept=\"image/*\" (change)=\"changeImageListener($event)\">\n           <img [src]=\"promotion.image\" style=\"width:100px; height:100px\"/>                                                                        \n        </div>\n     </div>\n    \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Save</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/promotion/promotion-list/promotion-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/promotion/promotion-list/promotion-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Promotion</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Promotion List</h2>\n  </div>\n  <div class=\"content\">\n    <form #f=\"ngForm\">\n      \n      <div class=\"form-group\">\n        <label for=\"title\">Title:</label>\n        <input [(ngModel)]=\"filter.title\" id=\"title\" name=\"title\" class=\"form-control\">\n      </div>\n      \n      <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n      <a [routerLink]=\"['../promotions', 'new' ]\" class=\"btn btn-default\">New</a>\n    </form>\n  </div>\n</div>\n<div class=\"card\" *ngIf=\"promotionList.length > 0\">\n  <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n      <thead>\n        <tr>\n          <th class=\"border-top-0\" scope=\"col\">Id</th>\n          <th class=\"border-top-0\" scope=\"col\">Title</th>\n          <th class=\"border-top-0\" scope=\"col\">Promotion Value</th>\n          <th class=\"border-top-0\" scope=\"col\">Is Promotion Value Fixed</th>\n          <!-- <th class=\"border-top-0\" scope=\"col\">Effective Date</th>\n          <th class=\"border-top-0\" scope=\"col\">End Date</th> -->\n          <th class=\"border-top-0\" scope=\"col\">Is Active</th>\n          <th class=\"border-top-0\" scope=\"col\">Description</th>\n          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of promotionList\" [class.active]=\"item === selectedPromotion\">\n        \n          <td>{{item.id}}</td>\n          <td>{{item.title}}</td>\n          <td>{{item.promotionValue}}</td>\n          <td>{{item.isPromotionValueFixed}}</td>\n          <!-- <td>{{item.effectiveDate}}</td>\n          <td>{{item.endDate}}</td> -->\n          <td>{{isActive}}</td>\n          <td>{{item.description}}</td>\n          <td style=\"white-space: nowrap\">\n            <a [routerLink]=\"['../promotions', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n            <button (click)=\"delete(item)\" class=\"btn btn-danger\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"sidebar-wrapper\">\n      \n    <div class=\"logo\">\n            \n        <a class=\"simple-text\">\n                  \n            <div class=\"logo-img\" >\n                        <img src=\"../../assets/img/Kello_title_logo.png\" alt=\"\">      \n            </div>\n                  Kello    \n        </a>\n          \n    </div>\n      \n    <ul class=\"nav\">\n            \n        <li>\n                  \n            <a routerLink=\"dashboard\">\n                        <i class=\"ti-home\"></i>\n                        <p>Dashboard</p>\n                      \n            </a>\n                \n        </li>\n            \n        <!-- <li>      <a routerLink=\"flight\">        <i class=\"ti-arrow-top-right\"></i>        <p>Flights</p>      </a>    </li> -->\n        \n        <li>\n              \n          <a routerLink=\"activation\">\n                  <i class=\"ti-lock\"></i>\n                  <p>Activations</p>\n                \n          </a>\n          \n      </li>\n\n        <li>\n              \n            <a routerLink=\"customer\">\n                    <i class=\"ti-user\"></i>\n                    <p>Customers</p>\n                  \n            </a>\n            \n        </li>\n        \n        <li>\n              \n            <a routerLink=\"partner\">\n                    <i class=\"ti-wheelchair\"></i>\n                    <p>Partners</p>\n                  \n            </a>\n            \n        </li>\n\n        <li>\n              \n          <a routerLink=\"orderses\">\n                  <i class=\"ti-receipt\"></i>\n                  <p>Orders</p>\n                \n          </a>\n          \n      </li>\n        \n        <li>\n              \n            <a routerLink=\"product\">\n                    <i class=\"ti-apple\"></i>\n                    <p>Products</p>\n                  \n            </a>\n            \n        </li>\n\n        <li>\n            <a routerLink=\"priceplans\">\n                    <i class=\"ti-gift\"></i>\n                    <p>Price Plan</p>      \n            </a>\n        </li>\n\n                        \n        <!-- <li>\n              \n            <a routerLink=\"offer\">\n                    <i class=\"ti-panel\"></i>\n                    <p>Offers</p>\n                  \n            </a>\n            \n        </li> -->\n        \n        <li>\n            <a routerLink=\"supply\">\n                    <i class=\"ti-truck\"></i>\n                    <p>Supplies</p>      \n            </a>\n        </li>\n\n        <li>\n            <a routerLink=\"stocks\">\n                    <i class=\"ti-truck\"></i>\n                    <p>Stocks</p>      \n            </a>\n        </li>\n\n        <li>\n            <a routerLink=\"customerfeedbacks\">\n                    <i class=\"ti-comments\"></i>\n                    <p>FeedBack</p>  \n            </a>\n        </li>\n\n        <li>\n            <a routerLink=\"orderratings\">\n                    <i class=\"ti-bar-chart\"></i>\n                    <p>Order Ratings</p>      \n            </a>\n        </li>\n\n        <li>\n            <a routerLink=\"promotions\">\n                    <i class=\"ti-alarm-clock\"></i>\n                    <p>Offers/Promotions</p>      \n            </a>\n        </li>\n\n        <li>\n            <a routerLink=\"configurations\">\n                    <i class=\"ti-settings\"></i>\n                    <p>Configurations</p>      \n            </a>\n        </li>\n\n        <!-- <li>\n              \n          <a routerLink=\"rateplan\">\n                  <i class=\"ti-money\"></i>\n                  <p>Rate plans</p>  \n          </a>\n      </li> -->\n            \n        <!--    <li>        <a routerLink=\"passenger-search\">            <i class=\"ti-user\"></i>            <p>Passengers</p>        </a>    </li>-->\n            \n        <!--        <li routerLinkActive=\"active\">        <a>            <i class=\"ti-close\"></i>            <p>Hide Basket</p>        </a>        </li>    -->\n          \n    </ul>\n    \n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/stock-edit/stock-edit.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock/stock-edit/stock-edit.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Stock</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Stock Detail</h2>\n  </div>\n  <div class=\"content\">\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n    <form *ngIf=\"stock\" #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n    \n      <div class=\"form-group\">\n        <label for=\"id\">Id</label>\n        <input type=\"text\" disabled=\"true\" [(ngModel)]=\"stock.id\" id=\"id\" name=\"id\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group row\">\n                                                                        \n        <label class=\"col-sm-2 col-form-label\" for=\"productsId\">\n           Product <span style=\"color:rgb(161, 161, 161)\">*</span>\n                                    \n        </label>\n                                                                                                       \n        <div class=\"col-sm-10\">\n                                                                        \n            <select required [(ngModel)]=\"stock.productsId\" name=\"productsId\" (change)=\"selectedProduct($event)\" class=\"form-control\">\n                 <option *ngFor=\"let c of productsId_list\" value=\"{{ c.id }}\">{{ c.displayName }}</option>                                                     \n            </select>\n                                                                                                                                                                                 \n        </div>\n                            \n    </div>\n\n      <div class=\"form-group\">\n        <label for=\"quantity\">Quantity</label>\n        <input type=\"number\" [(ngModel)]=\"stock.quantity\" id=\"quantity\" name=\"quantity\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"quantityWaste\">Quantity Waste</label>\n        <input type=\"number\" [(ngModel)]=\"stock.quantityWaste\" id=\"quantityWaste\" name=\"quantityWaste\" class=\"form-control\">\n      </div>\n    \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Save</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/stock-list/stock-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock/stock-list/stock-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Stock</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Stock List</h2>\n  </div>\n  <div class=\"content\">\n    <form #f=\"ngForm\">\n      \n      <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n      <a [routerLink]=\"['../stocks', 'new' ]\" class=\"btn btn-default\">New</a>\n    </form>\n  </div>\n</div>\n<div class=\"card\" *ngIf=\"stockList.length > 0\">\n  <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n      <thead>\n        <tr>\n          <!-- <th class=\"border-top-0\" scope=\"col\">Id</th> -->\n          <th class=\"border-top-0\" scope=\"col\">Product Title</th>\n          <th class=\"border-top-0\" scope=\"col\">Quantity</th>\n          <th class=\"border-top-0\" scope=\"col\">Quantity Waste</th>\n          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of stockList\" [class.active]=\"item === selectedStock\">\n        \n          <td>{{item.productTitle}}</td>\n          <td>{{item.quantity}}</td>\n          <td>{{item.quantityWaste}}</td>\n          <td style=\"white-space: nowrap\">\n            <a [routerLink]=\"['../stocks', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n            <button (click)=\"delete(item)\" class=\"btn btn-danger\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/supply/supply-edit/supply-edit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supply/supply-edit/supply-edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- Page title box -->\n<div class=\"page-title-alt-bg\"></div>\n\n<div class=\"page-title-box\">\n        \n    <ol class=\"breadcrumb float-right\">\n                \n        <li class=\"breadcrumb-item\">\n            <a href=\"javascript:void(0);\">Project</a>\n        </li>\n                <li class=\"breadcrumb-item active\">Supplies</li>\n            \n    </ol>\n        <h4 class=\"page-title\">Supplies Detail</h4>\n    \n</div>\n<!-- End page title box -->\n\n<div class=\"row\">\n        \n    <div class=\"col-xl-12\">\n                \n        <div class=\"card-box\">\n                        <p *ngIf=\"errors\">{{ errors }}</p>\n                                    <a *ngIf=\"supply.id && supply.isArrived == false \" href=\"javascript:;\" (click)=\"supplyArrived(supply.id)\" class=\"btn btn-default\" style=\"float:right;\">                Supply Arrived            </a>\n                        \n            <form #supplyForm=\"ngForm\" *ngIf=\"supply\" class=\"form-horizontal\">\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"id\">                                    Id                                </label>\n                                                                                                                           <div class=\"col-sm-10\">                            {{supply.id || 'n/a'}}                                                                                                        </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"supplierId\">\n                                                    Supplier <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                    \n                    <div class=\"col-sm-10\">\n                                                                                    \n                        <select required [(ngModel)]=\"supply.supplierId\" name=\"supplierId\" (change)=\"selectedSupplier($event)\" class=\"form-control\">\n                                                                    <option *ngFor=\"let c of supplierId_list\" value=\"{{ c.id }}\">{{ c.name }}</option>\n                                                                 \n                        </select>\n                                                    \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"productsId\">\n                                                    Product <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                    \n                        <select required [(ngModel)]=\"supply.productsId\" name=\"productsId\" (change)=\"selectedProduct($event)\" class=\"form-control\">\n                                                                    <option *ngFor=\"let c of productsId_list\" value=\"{{ c.id }}\">{{ c.displayName }}</option>\n                                                                 \n                        </select>\n                                                                                                                                                                                             \n                    </div>\n                                        \n                </div>\n                \n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"quentity\">\n                                                    Quentity <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                    \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"number\" required [(ngModel)]=\"supply.quentity\" name=\"quentity\" #quentity=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                    \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"quentityUnitsId\">\n                                                    Quentity Unit <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                    \n                    <div class=\"col-sm-10\">\n                                                                                    \n                        <select required [(ngModel)]=\"supply.quentityUnitsId\" name=\"quentityUnitsId\" class=\"form-control\">\n                                                                    <option *ngFor=\"let c of quentityUnitsId_list\" value=\"{{ c.id }}\">{{ c.unitDisplayName }}</option>\n                                                                 \n                        </select>\n                                                                                      \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"supplyDate\">                                    Supply Date                                </label>\n                                                                                                                           \n                    <div class=\"col-sm-10\">\n                                                                                            <input type=\"text\" disabled=\"true\" [(ngModel)]=\"supply.supplyDate\" name=\"supplyDate\" class=\"form-control\">                                                                                                                \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                            <label class=\"col-sm-2 col-form-label\" for=\"arrivedAt\">                                    Arrived At                                </label>\n                                                                                                                           \n                    <div class=\"col-sm-10\">\n                                                                                            <input type=\"text\" disabled=\"true\" [(ngModel)]=\"supply.arrivedAt\" name=\"arrivedAt\" class=\"form-control\">                                                                                                                \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                <label class=\"col-sm-2 col-form-label\" for=\"isArrived\">    Is Arrived  </label>\n                <input type=\"checkbox\" [(ngModel)]=\"supply.isArrived\" name=\"isArrived\" #isArrived=\"ngModel\" class=\"form-control\" />\n\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"purchasingCost\">\n                                                    Purchasing Cost <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                      <input type=\"number\" required [(ngModel)]=\"supply.purchasingCost\" name=\"purchasingCost\" #purchasingCost=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"buyingPriceUnitId\">\n                                                    Purchasing Price Unit <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                    \n                    <div class=\"col-sm-10\">\n                                                                                    \n                        <select required [(ngModel)]=\"supply.buyingPriceUnitId\" name=\"buyingPriceUnitId\" class=\"form-control\">\n                                                                    <option *ngFor=\"let c of buyingPriceUnitId_list\" value=\"{{ c.id }}\">{{ c.unitDisplayName }}</option>\n                                                                 \n                        </select>\n                                                                                      \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"travlingCost\">\n                                                    Travling Cost <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"number\" required [(ngModel)]=\"supply.travlingCost\" name=\"travlingCost\" #travlingCost=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"labourCost\">\n                                                    Labour Cost <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"number\" required [(ngModel)]=\"supply.labourCost\" name=\"labourCost\" #labourCost=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                                           \n                <div class=\"form-group row\">\n                                                                        \n                    <label class=\"col-sm-2 col-form-label\" for=\"otherCost\">\n                                                    Other Cost <span style=\"color:red\">*</span>\n                                                \n                    </label>\n                                                                                                                   \n                    <div class=\"col-sm-10\">\n                                                                                        <input type=\"number\" required [(ngModel)]=\"supply.otherCost\" name=\"otherCost\" #otherCost=\"ngModel\" class=\"form-control\">                                                                                                            \n                    </div>\n                                        \n                </div>\n                                                \n                <div class=\"row\">\n                                        \n                    <div class=\"col-sm-6 text-left\">\n                        <button type=\"button\" class=\"btn btn-success w-md\"  (click)=\"save()\" [disabled]=\"supplyForm.invalid\">Save</button>\n                    </div>\n                                        \n                    <div class=\"col-sm-6 text-right\">\n                        <button type=\"button\" class=\"btn btn-secondary w-md\"  (click)=\"cancel()\">Cancel</button>\n                    </div>\n                                    \n                </div>\n                            \n            </form>\n                    \n        </div>\n        <!-- end card-->\n            \n    </div>\n    <!-- end col -->\n    \n</div>\n<!-- end row -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/supply/supply-list/supply-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supply/supply-list/supply-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Supplies</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Supplies List</h2>\n    </div>\n    <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n        <div class=\"form-group\">\n          <label for=\"referenceNo\">Reference No:</label>\n          <input [(ngModel)]=\"filter.referenceNo\" id=\"referenceNo\" name=\"referenceNo\" class=\"form-control\">\n        </div>\n        \n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n        <a [routerLink]=\"['../supply', 'new' ]\" class=\"btn btn-default\">New</a>\n      </form>\n    </div>\n  </div>\n  \n  <div class=\"card\" *ngIf=\"supplyList.length > 0\">\n    <p *ngIf=\"errors\">{{ errors }}</p>\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n        <thead>\n          <tr>\n            <!-- <th class=\"border-top-0\" scope=\"col\">Id</th> -->\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Supplier</th> -->\n                                          <th class=\"border-top-0\" scope=\"col\">Product</th>\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Reference No</th> -->\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Quentity Unit</th> -->\n                                          <th class=\"border-top-0\" scope=\"col\">Quentity</th>\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Quentity On Hand</th> -->\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Supply Date</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Arrived At</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Is Arrived</th> -->\n                                          <th class=\"border-top-0\" scope=\"col\">Purchasing Cost</th>\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Purchasing Price Unit</th> -->\n                                          <!-- <th class=\"border-top-0\" scope=\"col\">Travling Cost</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Labour Cost</th>\n                                          <th class=\"border-top-0\" scope=\"col\">Other Cost</th> -->\n                                          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of supplyList | paginate: { itemsPerPage: 10, currentPage: p, totalItems: supplyList.length } \" [class.active]=\"item === selectedSupply\">\n          \n            <!-- <td>{{item.id}}</td> -->\n                                    <!-- <td>{{item.supplierName}}</td> -->\n                                    <td>{{item.productTitle}}</td>\n                                    <!-- <td>{{item.referenceNo}}</td> -->\n                                    <!-- <td>{{item.quentityUnitsId}}</td> -->\n                                    <td>{{item.quentity}}</td>\n                                    <!-- <td>{{item.quentityOnHand}}</td>\n                                    <td>{{item.supplyDate | date}}</td>\n                                    <td>{{item.arrivedAt | date}}</td>\n                                    <td>{{item.isArrived}}</td> -->\n                                    <td>{{item.purchasingCost}}</td>\n                                    <!-- <td>{{item.buyingPriceUnitId}}</td> -->\n                                    <!-- <td>{{item.travlingCost}}</td>\n                                    <td>{{item.labourCost}}</td>\n                                    <td>{{item.otherCost}}</td> -->\n            \n            <td style=\"white-space: nowrap\">\n              <a [routerLink]=\"['../supply', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n              <button (click)=\"delete(item)\"  class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <pagination-controls class=\"pagination-controls\" (pageChange)=\"p = $event\"></pagination-controls>  \n\n    </div>\n  </div>\n  ");

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
        console.log('checkAnyError', event);
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
                _this.router.navigate(['/home/activation']);
            }, 1000);
        }, function (err) {
            _this.errors = err;
        });
    };
    ActivationEditComponent.prototype.cancel = function () {
        this.router.navigate(['/home/activation']);
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









var ActivationModule = /** @class */ (function () {
    function ActivationModule() {
    }
    ActivationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_activation_routes__WEBPACK_IMPORTED_MODULE_7__["ACTIVATION_ROUTES"]),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
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
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ACTIVATION_ROUTES = [
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'activation',
                component: _activation_list_activation_list_component__WEBPACK_IMPORTED_MODULE_0__["ActivationListComponent"]
            }
        ]
    },
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'activation/:id',
                component: _activation_edit_activation_edit_component__WEBPACK_IMPORTED_MODULE_1__["ActivationEditComponent"]
            }
        ]
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


//import {HttpHeaderService} from '../services/index'
var ActivationService = /** @class */ (function () {
    function ActivationService(http) {
        this.http = http;
        this.baseUrl = "/activations";
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
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _orders_orders_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./orders/orders.module */ "./src/app/orders/orders.module.ts");
/* harmony import */ var _hotel_hotel_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hotel/hotel.module */ "./src/app/hotel/hotel.module.ts");
/* harmony import */ var _activation_activation_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./activation/activation.module */ "./src/app/activation/activation.module.ts");
/* harmony import */ var _customer_customer_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customer/customer.module */ "./src/app/customer/customer.module.ts");
/* harmony import */ var _partner_partner_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./partner/partner.module */ "./src/app/partner/partner.module.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _rateplan_rateplan_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rateplan/rateplan.module */ "./src/app/rateplan/rateplan.module.ts");
/* harmony import */ var _supply_supply_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./supply/supply.module */ "./src/app/supply/supply.module.ts");
/* harmony import */ var _customerfeedback_customerfeedback_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./customerfeedback/customerfeedback.module */ "./src/app/customerfeedback/customerfeedback.module.ts");
/* harmony import */ var _orderrating_orderrating_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./orderrating/orderrating.module */ "./src/app/orderrating/orderrating.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _promotion_promotion_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./promotion/promotion.module */ "./src/app/promotion/promotion.module.ts");
/* harmony import */ var _priceplan_priceplan_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./priceplan/priceplan.module */ "./src/app/priceplan/priceplan.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _modals_message_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modals/message-dialog.component */ "./src/app/modals/message-dialog.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _configuration_configuration_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./configuration/configuration.module */ "./src/app/configuration/configuration.module.ts");
/* harmony import */ var _stock_stock_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./stock/stock.module */ "./src/app/stock/stock.module.ts");
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
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_30__["NgxPaginationModule"],
                _flight_flight_module__WEBPACK_IMPORTED_MODULE_0__["FlightModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_8__["APP_ROUTES"].slice(), __assign({}, _app_routes__WEBPACK_IMPORTED_MODULE_8__["APP_EXTRA_OPTIONS"])),
                _orders_orders_module__WEBPACK_IMPORTED_MODULE_14__["OrdersModule"],
                _hotel_hotel_module__WEBPACK_IMPORTED_MODULE_15__["HotelModule"],
                _activation_activation_module__WEBPACK_IMPORTED_MODULE_16__["ActivationModule"],
                _customer_customer_module__WEBPACK_IMPORTED_MODULE_17__["CustomerModule"],
                _partner_partner_module__WEBPACK_IMPORTED_MODULE_18__["PartnerModule"],
                _product_product_module__WEBPACK_IMPORTED_MODULE_19__["ProductModule"],
                _rateplan_rateplan_module__WEBPACK_IMPORTED_MODULE_20__["RateplanModule"],
                _supply_supply_module__WEBPACK_IMPORTED_MODULE_21__["SupplyModule"],
                _customerfeedback_customerfeedback_module__WEBPACK_IMPORTED_MODULE_22__["CustomerfeedbackModule"],
                _orderrating_orderrating_module__WEBPACK_IMPORTED_MODULE_23__["OrderratingModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_24__["LoginModule"],
                _promotion_promotion_module__WEBPACK_IMPORTED_MODULE_25__["PromotionModule"],
                _priceplan_priceplan_module__WEBPACK_IMPORTED_MODULE_26__["PriceplanModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_27__["DashboardModule"],
                _configuration_configuration_module__WEBPACK_IMPORTED_MODULE_31__["ConfigurationModule"],
                _stock_stock_module__WEBPACK_IMPORTED_MODULE_32__["StockModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _layouts_login_layout_component__WEBPACK_IMPORTED_MODULE_11__["LoginLayoutComponent"],
                _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_10__["HomeLayoutComponent"],
                _modals_message_dialog_component__WEBPACK_IMPORTED_MODULE_29__["MessageDialogComponent"],
            ],
            entryComponents: [
                //ConfirmDialogComponent,
                //InputDialogComponent,
                _modals_message_dialog_component__WEBPACK_IMPORTED_MODULE_29__["MessageDialogComponent"],
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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
/* harmony import */ var _layouts_login_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/login-layout.component */ "./src/app/layouts/login-layout.component.ts");
/* harmony import */ var _dashboard_dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard-list/dashboard-list.component */ "./src/app/dashboard/dashboard-list/dashboard-list.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var APP_ROUTES = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'dashboard',
                component: _dashboard_dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_4__["DashboardListComponent"]
            }
        ]
    },
    {
        path: 'login',
        component: _layouts_login_layout_component__WEBPACK_IMPORTED_MODULE_3__["LoginLayoutComponent"],
        //component: LoginComponent,
        children: [
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            }
        ]
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

/***/ "./src/app/configuration/configuration-edit/configuration-edit.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/configuration/configuration-edit/configuration-edit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ConfigurationEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationEditComponent", function() { return ConfigurationEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration.service */ "./src/app/configuration/configuration.service.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configuration */ "./src/app/configuration/configuration.ts");
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







var ConfigurationEditComponent = /** @class */ (function () {
    function ConfigurationEditComponent(route, router, configurationService) {
        this.route = route;
        this.router = router;
        this.configurationService = configurationService;
        this.feedback = {};
    }
    ConfigurationEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]());
            }
            return _this.configurationService.findById(id);
        }))
            .subscribe(function (configuration) {
            _this.configuration = configuration;
            _this.feedback = {};
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error loading' };
        });
    };
    ConfigurationEditComponent.prototype.save = function () {
        var _this = this;
        this.configurationService.save(this.configuration).subscribe(function (configuration) {
            _this.configuration = configuration;
            _this.feedback = { type: 'success', message: 'Save was successful!' };
            setTimeout(function () {
                _this.router.navigate(['/home/configurations']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    ConfigurationEditComponent.prototype.cancel = function () {
        this.router.navigate(['/home/configurations']);
    };
    ConfigurationEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"] }
    ]; };
    ConfigurationEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configuration-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./configuration-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/configuration/configuration-edit/configuration-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]])
    ], ConfigurationEditComponent);
    return ConfigurationEditComponent;
}());



/***/ }),

/***/ "./src/app/configuration/configuration-filter.ts":
/*!*******************************************************!*\
  !*** ./src/app/configuration/configuration-filter.ts ***!
  \*******************************************************/
/*! exports provided: ConfigurationFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationFilter", function() { return ConfigurationFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ConfigurationFilter = /** @class */ (function () {
    function ConfigurationFilter() {
    }
    return ConfigurationFilter;
}());



/***/ }),

/***/ "./src/app/configuration/configuration-list/configuration-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/configuration/configuration-list/configuration-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ConfigurationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationListComponent", function() { return ConfigurationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration-filter */ "./src/app/configuration/configuration-filter.ts");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration.service */ "./src/app/configuration/configuration.service.ts");
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



var ConfigurationListComponent = /** @class */ (function () {
    function ConfigurationListComponent(configurationService) {
        this.configurationService = configurationService;
        this.filter = new _configuration_filter__WEBPACK_IMPORTED_MODULE_1__["ConfigurationFilter"]();
        this.feedback = {};
    }
    Object.defineProperty(ConfigurationListComponent.prototype, "configurationList", {
        get: function () {
            return this.configurationService.configurationList;
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    ConfigurationListComponent.prototype.search = function () {
        this.configurationService.load(this.filter);
    };
    ConfigurationListComponent.prototype.select = function (selected) {
        this.selectedConfiguration = selected;
    };
    ConfigurationListComponent.prototype.delete = function (configuration) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.configurationService.delete(configuration).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Delete was successful!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Error deleting.' };
            });
        }
    };
    ConfigurationListComponent.ctorParameters = function () { return [
        { type: _configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"] }
    ]; };
    ConfigurationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configuration',
            template: __importDefault(__webpack_require__(/*! raw-loader!./configuration-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/configuration/configuration-list/configuration-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]])
    ], ConfigurationListComponent);
    return ConfigurationListComponent;
}());



/***/ }),

/***/ "./src/app/configuration/configuration.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/configuration/configuration.module.ts ***!
  \*******************************************************/
/*! exports provided: ConfigurationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationModule", function() { return ConfigurationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configuration_list_configuration_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configuration-list/configuration-list.component */ "./src/app/configuration/configuration-list/configuration-list.component.ts");
/* harmony import */ var _configuration_edit_configuration_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuration-edit/configuration-edit.component */ "./src/app/configuration/configuration-edit/configuration-edit.component.ts");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuration.service */ "./src/app/configuration/configuration.service.ts");
/* harmony import */ var _configuration_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./configuration.routes */ "./src/app/configuration/configuration.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var ConfigurationModule = /** @class */ (function () {
    function ConfigurationModule() {
    }
    ConfigurationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_configuration_routes__WEBPACK_IMPORTED_MODULE_7__["CONFIGURATION_ROUTES"])
            ],
            declarations: [
                _configuration_list_configuration_list_component__WEBPACK_IMPORTED_MODULE_4__["ConfigurationListComponent"],
                _configuration_edit_configuration_edit_component__WEBPACK_IMPORTED_MODULE_5__["ConfigurationEditComponent"]
            ],
            providers: [_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"]],
            exports: []
        })
    ], ConfigurationModule);
    return ConfigurationModule;
}());



/***/ }),

/***/ "./src/app/configuration/configuration.routes.ts":
/*!*******************************************************!*\
  !*** ./src/app/configuration/configuration.routes.ts ***!
  \*******************************************************/
/*! exports provided: CONFIGURATION_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIGURATION_ROUTES", function() { return CONFIGURATION_ROUTES; });
/* harmony import */ var _configuration_list_configuration_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration-list/configuration-list.component */ "./src/app/configuration/configuration-list/configuration-list.component.ts");
/* harmony import */ var _configuration_edit_configuration_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration-edit/configuration-edit.component */ "./src/app/configuration/configuration-edit/configuration-edit.component.ts");
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var CONFIGURATION_ROUTES = [
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'configurations',
                component: _configuration_list_configuration_list_component__WEBPACK_IMPORTED_MODULE_0__["ConfigurationListComponent"]
            }
        ]
    },
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'configurations/:id',
                component: _configuration_edit_configuration_edit_component__WEBPACK_IMPORTED_MODULE_1__["ConfigurationEditComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/configuration/configuration.service.ts":
/*!********************************************************!*\
  !*** ./src/app/configuration/configuration.service.ts ***!
  \********************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
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
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(http) {
        this.http = http;
        this.configurationList = [];
        this.api = '/configurations';
    }
    ConfigurationService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    ConfigurationService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.configurationList = result;
        }, function (err) {
            console.error('error loading', err);
        });
    };
    ConfigurationService.prototype.find = function (filter) {
        var params = {};
        return this.http.get(this.api, { params: params, headers: headers });
    };
    ConfigurationService.prototype.save = function (entity) {
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
    ConfigurationService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        if (entity.id) {
            url = this.api + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    ConfigurationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ConfigurationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./src/app/configuration/configuration.ts":
/*!************************************************!*\
  !*** ./src/app/configuration/configuration.ts ***!
  \************************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Configuration = /** @class */ (function () {
    function Configuration() {
    }
    return Configuration;
}());



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
        this.id = '';
        this.name = '';
        this.phone = '';
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
        //this.search();
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
        this.baseUrl = "/customers";
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
        if (filter.phone || filter.name || filter.id) {
            url = this.baseUrl + "?filter[where]";
        }
        if (filter.phone) {
            url = url + ("[phone]=" + filter.phone);
        }
        if (filter.name) {
            url = url + ("[name]=" + filter.name);
        }
        if (filter.id) {
            url = url + ("[id]=" + filter.id);
        }
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

/***/ "./src/app/customerfeedback/customerfeedback-edit/customerfeedback-edit.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/customerfeedback/customerfeedback-edit/customerfeedback-edit.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CustomerfeedbackEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerfeedbackEditComponent", function() { return CustomerfeedbackEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customerfeedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customerfeedback.service */ "./src/app/customerfeedback/customerfeedback.service.ts");
/* harmony import */ var _customerfeedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customerfeedback */ "./src/app/customerfeedback/customerfeedback.ts");
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







var CustomerfeedbackEditComponent = /** @class */ (function () {
    function CustomerfeedbackEditComponent(route, router, customerfeedbackService) {
        this.route = route;
        this.router = router;
        this.customerfeedbackService = customerfeedbackService;
        this.feedback = {};
    }
    CustomerfeedbackEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _customerfeedback__WEBPACK_IMPORTED_MODULE_3__["Customerfeedback"]());
            }
            return _this.customerfeedbackService.findById(id);
        }))
            .subscribe(function (customerfeedback) {
            _this.customerfeedback = customerfeedback;
            _this.feedback = {};
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error loading' };
        });
    };
    CustomerfeedbackEditComponent.prototype.save = function () {
        var _this = this;
        this.customerfeedbackService.save(this.customerfeedback).subscribe(function (customerfeedback) {
            _this.customerfeedback = customerfeedback;
            _this.feedback = { type: 'success', message: 'Save was successful!' };
            setTimeout(function () {
                _this.router.navigate(['/home/customerfeedbacks']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    CustomerfeedbackEditComponent.prototype.cancel = function () {
        this.router.navigate(['/home/customerfeedbacks']);
    };
    CustomerfeedbackEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _customerfeedback_service__WEBPACK_IMPORTED_MODULE_2__["CustomerfeedbackService"] }
    ]; };
    CustomerfeedbackEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customerfeedback-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./customerfeedback-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerfeedback/customerfeedback-edit/customerfeedback-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _customerfeedback_service__WEBPACK_IMPORTED_MODULE_2__["CustomerfeedbackService"]])
    ], CustomerfeedbackEditComponent);
    return CustomerfeedbackEditComponent;
}());



/***/ }),

/***/ "./src/app/customerfeedback/customerfeedback-filter.ts":
/*!*************************************************************!*\
  !*** ./src/app/customerfeedback/customerfeedback-filter.ts ***!
  \*************************************************************/
/*! exports provided: CustomerfeedbackFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerfeedbackFilter", function() { return CustomerfeedbackFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var CustomerfeedbackFilter = /** @class */ (function () {
    function CustomerfeedbackFilter() {
        this.phone = '';
    }
    return CustomerfeedbackFilter;
}());



/***/ }),

/***/ "./src/app/customerfeedback/customerfeedback-list/customerfeedback-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/customerfeedback/customerfeedback-list/customerfeedback-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CustomerfeedbackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerfeedbackListComponent", function() { return CustomerfeedbackListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customerfeedback_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customerfeedback-filter */ "./src/app/customerfeedback/customerfeedback-filter.ts");
/* harmony import */ var _customerfeedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customerfeedback.service */ "./src/app/customerfeedback/customerfeedback.service.ts");
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



var CustomerfeedbackListComponent = /** @class */ (function () {
    function CustomerfeedbackListComponent(customerfeedbackService) {
        this.customerfeedbackService = customerfeedbackService;
        this.filter = new _customerfeedback_filter__WEBPACK_IMPORTED_MODULE_1__["CustomerfeedbackFilter"]();
        this.feedback = {};
    }
    Object.defineProperty(CustomerfeedbackListComponent.prototype, "customerfeedbackList", {
        get: function () {
            return this.customerfeedbackService.customerfeedbackList;
        },
        enumerable: true,
        configurable: true
    });
    CustomerfeedbackListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    CustomerfeedbackListComponent.prototype.search = function () {
        this.customerfeedbackService.load(this.filter);
    };
    CustomerfeedbackListComponent.prototype.select = function (selected) {
        this.selectedCustomerfeedback = selected;
    };
    CustomerfeedbackListComponent.prototype.delete = function (customerfeedback) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.customerfeedbackService.delete(customerfeedback).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Delete was successful!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Error deleting.' };
            });
        }
    };
    CustomerfeedbackListComponent.prototype.reviewed = function (customerfeedback) {
        var _this = this;
        customerfeedback.isReviewed = true;
        this.customerfeedbackService.save(customerfeedback).subscribe(function () {
            _this.feedback = { type: 'success', message: 'update was successful!' };
        }, function (err) {
            customerfeedback.isReviewed = false;
            _this.feedback = { type: 'warning', message: 'Error deleting.' };
        });
    };
    CustomerfeedbackListComponent.ctorParameters = function () { return [
        { type: _customerfeedback_service__WEBPACK_IMPORTED_MODULE_2__["CustomerfeedbackService"] }
    ]; };
    CustomerfeedbackListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customerfeedback',
            template: __importDefault(__webpack_require__(/*! raw-loader!./customerfeedback-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerfeedback/customerfeedback-list/customerfeedback-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_customerfeedback_service__WEBPACK_IMPORTED_MODULE_2__["CustomerfeedbackService"]])
    ], CustomerfeedbackListComponent);
    return CustomerfeedbackListComponent;
}());



/***/ }),

/***/ "./src/app/customerfeedback/customerfeedback.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/customerfeedback/customerfeedback.module.ts ***!
  \*************************************************************/
/*! exports provided: CustomerfeedbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerfeedbackModule", function() { return CustomerfeedbackModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customerfeedback_list_customerfeedback_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customerfeedback-list/customerfeedback-list.component */ "./src/app/customerfeedback/customerfeedback-list/customerfeedback-list.component.ts");
/* harmony import */ var _customerfeedback_edit_customerfeedback_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customerfeedback-edit/customerfeedback-edit.component */ "./src/app/customerfeedback/customerfeedback-edit/customerfeedback-edit.component.ts");
/* harmony import */ var _customerfeedback_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customerfeedback.service */ "./src/app/customerfeedback/customerfeedback.service.ts");
/* harmony import */ var _customerfeedback_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customerfeedback.routes */ "./src/app/customerfeedback/customerfeedback.routes.ts");
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









var CustomerfeedbackModule = /** @class */ (function () {
    function CustomerfeedbackModule() {
    }
    CustomerfeedbackModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_customerfeedback_routes__WEBPACK_IMPORTED_MODULE_7__["CUSTOMERFEEDBACK_ROUTES"]),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
            ],
            declarations: [
                _customerfeedback_list_customerfeedback_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomerfeedbackListComponent"],
                _customerfeedback_edit_customerfeedback_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerfeedbackEditComponent"]
            ],
            providers: [_customerfeedback_service__WEBPACK_IMPORTED_MODULE_6__["CustomerfeedbackService"]],
            exports: []
        })
    ], CustomerfeedbackModule);
    return CustomerfeedbackModule;
}());



/***/ }),

/***/ "./src/app/customerfeedback/customerfeedback.routes.ts":
/*!*************************************************************!*\
  !*** ./src/app/customerfeedback/customerfeedback.routes.ts ***!
  \*************************************************************/
/*! exports provided: CUSTOMERFEEDBACK_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMERFEEDBACK_ROUTES", function() { return CUSTOMERFEEDBACK_ROUTES; });
/* harmony import */ var _customerfeedback_list_customerfeedback_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customerfeedback-list/customerfeedback-list.component */ "./src/app/customerfeedback/customerfeedback-list/customerfeedback-list.component.ts");
/* harmony import */ var _customerfeedback_edit_customerfeedback_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customerfeedback-edit/customerfeedback-edit.component */ "./src/app/customerfeedback/customerfeedback-edit/customerfeedback-edit.component.ts");
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var CUSTOMERFEEDBACK_ROUTES = [
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'customerfeedbacks',
                component: _customerfeedback_list_customerfeedback_list_component__WEBPACK_IMPORTED_MODULE_0__["CustomerfeedbackListComponent"]
            }
        ]
    },
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'customerfeedbacks/:id',
                component: _customerfeedback_edit_customerfeedback_edit_component__WEBPACK_IMPORTED_MODULE_1__["CustomerfeedbackEditComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/customerfeedback/customerfeedback.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/customerfeedback/customerfeedback.service.ts ***!
  \**************************************************************/
/*! exports provided: CustomerfeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerfeedbackService", function() { return CustomerfeedbackService; });
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
var CustomerfeedbackService = /** @class */ (function () {
    function CustomerfeedbackService(http) {
        this.http = http;
        this.customerfeedbackList = [];
        this.api = '/feedbacks';
    }
    CustomerfeedbackService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    CustomerfeedbackService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.customerfeedbackList = result;
        }, function (err) {
            console.error('error loading', err);
        });
    };
    CustomerfeedbackService.prototype.find = function (filter) {
        var params = {
            'phone': filter.phone,
        };
        return this.http.get(this.api, { params: params, headers: headers });
    };
    CustomerfeedbackService.prototype.save = function (entity) {
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
    CustomerfeedbackService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        if (entity.id) {
            url = this.api + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    CustomerfeedbackService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CustomerfeedbackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomerfeedbackService);
    return CustomerfeedbackService;
}());



/***/ }),

/***/ "./src/app/customerfeedback/customerfeedback.ts":
/*!******************************************************!*\
  !*** ./src/app/customerfeedback/customerfeedback.ts ***!
  \******************************************************/
/*! exports provided: Customerfeedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customerfeedback", function() { return Customerfeedback; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Customerfeedback = /** @class */ (function () {
    function Customerfeedback() {
    }
    return Customerfeedback;
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
        this.baseUrl = "/dashboards";
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
        if (url === '/login') {
            this.router.navigate(['/login']);
            return;
        }
        else if (this.router.url === 'home' || this.router.url === '/home') {
            this.router.navigate(['/home/dashboard']);
            return;
        }
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
        this.api = '/users/login';
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

/***/ "./src/app/orderrating/orderrating-edit/orderrating-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/orderrating/orderrating-edit/orderrating-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: OrderratingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderratingEditComponent", function() { return OrderratingEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orderrating_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orderrating.service */ "./src/app/orderrating/orderrating.service.ts");
/* harmony import */ var _orderrating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orderrating */ "./src/app/orderrating/orderrating.ts");
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







var OrderratingEditComponent = /** @class */ (function () {
    function OrderratingEditComponent(route, router, orderratingService) {
        this.route = route;
        this.router = router;
        this.orderratingService = orderratingService;
        this.feedback = {};
    }
    OrderratingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _orderrating__WEBPACK_IMPORTED_MODULE_3__["Orderrating"]());
            }
            return _this.orderratingService.findById(id);
        }))
            .subscribe(function (orderrating) {
            _this.orderrating = orderrating;
            _this.feedback = {};
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error loading' };
        });
    };
    OrderratingEditComponent.prototype.save = function () {
        var _this = this;
        this.orderratingService.save(this.orderrating).subscribe(function (orderrating) {
            _this.orderrating = orderrating;
            _this.feedback = { type: 'success', message: 'Save was successful!' };
            setTimeout(function () {
                _this.router.navigate(['/home/orderratings']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    OrderratingEditComponent.prototype.cancel = function () {
        this.router.navigate(['/home/orderratings']);
    };
    OrderratingEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _orderrating_service__WEBPACK_IMPORTED_MODULE_2__["OrderratingService"] }
    ]; };
    OrderratingEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orderrating-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./orderrating-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderrating/orderrating-edit/orderrating-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _orderrating_service__WEBPACK_IMPORTED_MODULE_2__["OrderratingService"]])
    ], OrderratingEditComponent);
    return OrderratingEditComponent;
}());



/***/ }),

/***/ "./src/app/orderrating/orderrating-filter.ts":
/*!***************************************************!*\
  !*** ./src/app/orderrating/orderrating-filter.ts ***!
  \***************************************************/
/*! exports provided: OrderratingFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderratingFilter", function() { return OrderratingFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var OrderratingFilter = /** @class */ (function () {
    function OrderratingFilter() {
    }
    return OrderratingFilter;
}());



/***/ }),

/***/ "./src/app/orderrating/orderrating-list/orderrating-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/orderrating/orderrating-list/orderrating-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: OrderratingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderratingListComponent", function() { return OrderratingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _orderrating_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orderrating-filter */ "./src/app/orderrating/orderrating-filter.ts");
/* harmony import */ var _orderrating_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orderrating.service */ "./src/app/orderrating/orderrating.service.ts");
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



var OrderratingListComponent = /** @class */ (function () {
    function OrderratingListComponent(orderratingService) {
        this.orderratingService = orderratingService;
        this.filter = new _orderrating_filter__WEBPACK_IMPORTED_MODULE_1__["OrderratingFilter"]();
        this.feedback = {};
    }
    Object.defineProperty(OrderratingListComponent.prototype, "orderratingList", {
        get: function () {
            return this.orderratingService.orderratingList;
            // return this.orderratingService.ratingCalculatedList;
        },
        enumerable: true,
        configurable: true
    });
    OrderratingListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    OrderratingListComponent.prototype.search = function () {
        this.orderratingService.load(this.filter);
    };
    OrderratingListComponent.prototype.select = function (selected) {
        this.selectedOrderrating = selected;
    };
    OrderratingListComponent.prototype.delete = function (orderrating) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.orderratingService.delete(orderrating).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Delete was successful!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Error deleting.' };
            });
        }
    };
    Object.defineProperty(OrderratingListComponent.prototype, "ratingCalculatedList", {
        get: function () {
            console.log('ratingCalculatedList called ..');
            var five = this.orderratingService.ratingCalculatedList['5'] ? this.orderratingService.ratingCalculatedList['5'].length : 0;
            var four = this.orderratingService.ratingCalculatedList['4'] ? this.orderratingService.ratingCalculatedList['4'].length : 0;
            var three = this.orderratingService.ratingCalculatedList['3'] ? this.orderratingService.ratingCalculatedList['3'].length : 0;
            var two = this.orderratingService.ratingCalculatedList['2'] ? this.orderratingService.ratingCalculatedList['2'].length : 0;
            var one = this.orderratingService.ratingCalculatedList['1'] ? this.orderratingService.ratingCalculatedList['1'].length : 0;
            var totalRatings = (five + four + three + two + one);
            var averageUserRating = ((5 * five) + (4 * four) + (3 * three) + (2 * two) + (1 * one)) / totalRatings;
            this.orderratingService.ratingCalculatedList.averageUserRating = averageUserRating.toFixed(2);
            this.orderratingService.ratingCalculatedList.averageUserRatingRounded = Math.round(averageUserRating);
            this.orderratingService.ratingCalculatedList.totalRatings = totalRatings;
            return this.orderratingService.ratingCalculatedList; //.map(item => {item: item.length});
        },
        enumerable: true,
        configurable: true
    });
    OrderratingListComponent.ctorParameters = function () { return [
        { type: _orderrating_service__WEBPACK_IMPORTED_MODULE_2__["OrderratingService"] }
    ]; };
    OrderratingListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orderrating',
            template: __importDefault(__webpack_require__(/*! raw-loader!./orderrating-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderrating/orderrating-list/orderrating-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_orderrating_service__WEBPACK_IMPORTED_MODULE_2__["OrderratingService"]])
    ], OrderratingListComponent);
    return OrderratingListComponent;
}());



/***/ }),

/***/ "./src/app/orderrating/orderrating.module.ts":
/*!***************************************************!*\
  !*** ./src/app/orderrating/orderrating.module.ts ***!
  \***************************************************/
/*! exports provided: OrderratingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderratingModule", function() { return OrderratingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orderrating_list_orderrating_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orderrating-list/orderrating-list.component */ "./src/app/orderrating/orderrating-list/orderrating-list.component.ts");
/* harmony import */ var _orderrating_edit_orderrating_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderrating-edit/orderrating-edit.component */ "./src/app/orderrating/orderrating-edit/orderrating-edit.component.ts");
/* harmony import */ var _orderrating_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderrating.service */ "./src/app/orderrating/orderrating.service.ts");
/* harmony import */ var _orderrating_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orderrating.routes */ "./src/app/orderrating/orderrating.routes.ts");
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









var OrderratingModule = /** @class */ (function () {
    function OrderratingModule() {
    }
    OrderratingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_orderrating_routes__WEBPACK_IMPORTED_MODULE_7__["ORDERRATING_ROUTES"]),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
            ],
            declarations: [
                _orderrating_list_orderrating_list_component__WEBPACK_IMPORTED_MODULE_4__["OrderratingListComponent"],
                _orderrating_edit_orderrating_edit_component__WEBPACK_IMPORTED_MODULE_5__["OrderratingEditComponent"]
            ],
            providers: [_orderrating_service__WEBPACK_IMPORTED_MODULE_6__["OrderratingService"]],
            exports: []
        })
    ], OrderratingModule);
    return OrderratingModule;
}());



/***/ }),

/***/ "./src/app/orderrating/orderrating.routes.ts":
/*!***************************************************!*\
  !*** ./src/app/orderrating/orderrating.routes.ts ***!
  \***************************************************/
/*! exports provided: ORDERRATING_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDERRATING_ROUTES", function() { return ORDERRATING_ROUTES; });
/* harmony import */ var _orderrating_list_orderrating_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderrating-list/orderrating-list.component */ "./src/app/orderrating/orderrating-list/orderrating-list.component.ts");
/* harmony import */ var _orderrating_edit_orderrating_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderrating-edit/orderrating-edit.component */ "./src/app/orderrating/orderrating-edit/orderrating-edit.component.ts");
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ORDERRATING_ROUTES = [
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'orderratings',
                component: _orderrating_list_orderrating_list_component__WEBPACK_IMPORTED_MODULE_0__["OrderratingListComponent"]
            }
        ]
    },
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'orderratings/:id',
                component: _orderrating_edit_orderrating_edit_component__WEBPACK_IMPORTED_MODULE_1__["OrderratingEditComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/orderrating/orderrating.service.ts":
/*!****************************************************!*\
  !*** ./src/app/orderrating/orderrating.service.ts ***!
  \****************************************************/
/*! exports provided: OrderratingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderratingService", function() { return OrderratingService; });
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
var OrderratingService = /** @class */ (function () {
    function OrderratingService(http) {
        this.http = http;
        this.orderratingList = [];
        this.api = '/order-ratings';
    }
    OrderratingService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    OrderratingService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.orderratingList = result;
            _this.ratingCalculatedList = _this.calculateRatingAverage();
            console.log("this.ratingCalculatedList", _this.ratingCalculatedList);
        }, function (err) {
            console.error('error loading', err);
        });
    };
    OrderratingService.prototype.find = function (filter) {
        var params = {};
        return this.http.get(this.api, { params: params, headers: headers });
    };
    OrderratingService.prototype.save = function (entity) {
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
    OrderratingService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        if (entity.id) {
            url = this.api + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    OrderratingService.prototype.calculateRatingAverage = function () {
        return this.orderratingList.reduce(function (r, a) {
            console.log("a", a);
            // console.log('r', r);
            //r[a.points] = r[a.points] ? r[a.points] +1 : 1; //[...r[a.points] || [], a];
            r[a.points] = (r[a.points] || []).concat([a]);
            return r;
        }, {});
    };
    OrderratingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    OrderratingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderratingService);
    return OrderratingService;
}());



/***/ }),

/***/ "./src/app/orderrating/orderrating.ts":
/*!********************************************!*\
  !*** ./src/app/orderrating/orderrating.ts ***!
  \********************************************/
/*! exports provided: Orderrating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orderrating", function() { return Orderrating; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Orderrating = /** @class */ (function () {
    function Orderrating() {
    }
    return Orderrating;
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
        this.locationUrl = 'https://www.google.com/maps/dir';
        this.isPrinting = false;
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
            if (_this.orders.location && _this.orders.location.coordinates) {
                _this.locationUrl = _this.locationUrl + "/" + _this.orders.location.coordinates[1] + "," + _this.orders.location.coordinates[0];
            }
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
                _this.router.navigate(['/home/orderses']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    OrdersEditComponent.prototype.cancel = function () {
        this.router.navigate(['/home/orderses']);
    };
    OrdersEditComponent.prototype.orderStartProgress = function () {
        var _this = this;
        this.ordersService.orderStartProgress(this.orders).subscribe(function (resp) {
            // this.orders = orders;
            _this.feedback = { type: 'success', message: 'Progress started!' };
            _this.orders.orderStatus = resp.orderStatus;
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    OrdersEditComponent.prototype.orderDelivered = function () {
        var _this = this;
        this.ordersService.orderDelivered(this.orders).subscribe(function (resp) {
            //this.orders = orders;
            _this.feedback = { type: 'success', message: 'Delivered successful!' };
            _this.orders.orderStatus = resp.orderStatus;
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    OrdersEditComponent.prototype.cancelOrder = function () {
        var _this = this;
        if (confirm('Are you sure to Cancel?')) {
            this.ordersService.cancelOrder(this.orders).subscribe(function (resp) {
                //this.orders = orders;
                _this.feedback = { type: 'success', message: 'Canel successful!' };
                _this.orders.orderStatus = resp.orderStatus;
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Error saving' };
            });
        }
    };
    OrdersEditComponent.prototype.updateQuantity = function (productId, quantity) {
        var _this = this;
        if (confirm('Are you want to update?')) {
            this.ordersService.updateQuantity(this.orders.id, productId, quantity).subscribe(function (resp) {
                //this.orders = orders;
                _this.feedback = { type: 'success', message: 'Updated successful!' };
                _this.totalBill();
                //this.orders.orderStatus = resp.orderStatus;
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Error saving' };
            });
        }
    };
    OrdersEditComponent.prototype.totalBill = function () {
        var _this = this;
        this.orders.items.forEach(function (element, index) {
            if (index === 0) {
                _this.orders.totalBillAmount = element.quantity * element.price;
            }
            else {
                _this.orders.totalBillAmount = _this.orders.totalBillAmount + (element.quantity * element.price);
            }
        });
    };
    OrdersEditComponent.prototype.printReceipt = function () {
        this.isPrinting = true;
        setTimeout(function () {
            var html = "<html>";
            html += '<h1>kellostore</h1>';
            html += '<p>Store No: G11 Markaz, Algafar Plaza Basement Shop No: 08</p>';
            html += '<p>Phone: 923015339780</p>';
            html += '<p>Order Id: ';
            html += document.getElementById("orderId").nextSibling.textContent;
            html += '</p>';
            html += '<p>Date: ';
            html += document.getElementById("orderTime").nextSibling.textContent;
            html += '</p>';
            html += '<p>Customer: ';
            html += document.getElementById("customerName").nextSibling.textContent;
            html += '</p>';
            html += '<hr />';
            html += '<p>Detail: </p>';
            html += document.getElementsByClassName('table-responsive')[0].innerHTML;
            html += '<hr />';
            html += '<p>Total bill: ';
            html += document.getElementById("totalBillAmount").nextSibling.textContent;
            html += '</p>';
            html += '<hr />';
            html += "</html>";
            var printWin = window.open('', '', 'left=50,top=10,width=100,height=100,toolbar=0,scrollbars=0,status  =0');
            printWin.document.write(html);
            printWin.document.close();
            printWin.focus();
            printWin.print();
            printWin.close();
        }, 100);
    };
    OrdersEditComponent.prototype.onFocus = function (event) {
        this.isPrinting = false;
        // Do something      
    };
    OrdersEditComponent.prototype.onBlur = function (event) {
        this.isPrinting = false;
        // Do something
    };
    OrdersEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:focus', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [FocusEvent]),
        __metadata("design:returntype", void 0)
    ], OrdersEditComponent.prototype, "onFocus", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [FocusEvent]),
        __metadata("design:returntype", void 0)
    ], OrdersEditComponent.prototype, "onBlur", null);
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
        this.isOrderRatingDone = '';
        this.id = '';
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
        //    this.search();
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
                orders.isDeleted = true;
                orders.orderStatus = 'Deleted';
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









var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_orders_routes__WEBPACK_IMPORTED_MODULE_7__["ORDERS_ROUTES"]),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
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
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ORDERS_ROUTES = [
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'orderses',
                component: _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_0__["OrdersListComponent"]
            }
        ]
    },
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'orderses/:id',
                component: _orders_edit_orders_edit_component__WEBPACK_IMPORTED_MODULE_1__["OrdersEditComponent"]
            }
        ]
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
        this.api = '/orders';
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
        var url = "" + this.api;
        var params = {};
        if (filter.orderStatus || filter.isOrderRatingDone || filter.id) {
            url = this.api + "?filter[where]";
        }
        if (filter.orderStatus) {
            url = url + ("[orderStatus]=" + filter.orderStatus);
        }
        if (filter.isOrderRatingDone) {
            url = url + ("[isOrderRatingDone]=" + filter.isOrderRatingDone);
        }
        if (filter.id) {
            url = url + ("[id]=" + filter.id);
        }
        return this.http.get(url, { params: params, headers: headers });
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
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (entity.id) {
            url = this.api + "/" + entity.id.toString() + "/users/" + currentUser.id;
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    OrdersService.prototype.orderStartProgress = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        url = this.api + "/" + entity.id.toString() + "/customers/" + entity.customersId + "/startProgress";
        // params = new HttpParams().set('ID', entity.id.toString());
        return this.http.patch(url, entity, { headers: headers, params: params });
    };
    OrdersService.prototype.orderDelivered = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        url = this.api + "/" + entity.id.toString() + "/customers/" + entity.customersId.toString() + "/delevered";
        //params = new HttpParams().set('ID', entity.id.toString());
        return this.http.patch(url, { headers: headers, params: params });
    };
    OrdersService.prototype.cancelOrder = function (entity) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var userId = currentUser.id;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        url = this.api + "/" + entity.id.toString() + "/users/" + userId + "/cancel";
        //params = new HttpParams().set('ID', entity.id.toString());
        return this.http.patch(url, { headers: headers, params: params });
    };
    OrdersService.prototype.updateQuantity = function (orderId, productId, quantity) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var userId = currentUser.id;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        url = this.api + "/" + orderId.toString() + "/products/" + productId + "/" + quantity;
        //params = new HttpParams().set('ID', entity.id.toString());
        return this.http.patch(url, { headers: headers, params: params });
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
            if (partner.location.coordinates && partner.location.coordinates.length > 0) {
                _this.longitude = partner.location.coordinates[1];
                _this.latitude = partner.location.coordinates[0];
            }
            _this.errors = '';
        }, function (err) {
            _this.errors = err;
        });
        this.partnertypesId_list = [{ id: 1, typeName: "Hawker" }];
    };
    PartnerEditComponent.prototype.save = function () {
        var _this = this;
        this.partner.location = {
            type: "Point",
            coordinates: [this.latitude, this.longitude]
        };
        this.partnerService.save(this.partner).subscribe(function (partner) {
            _this.partner = partner;
            _this.errors = 'Save was successful!';
            setTimeout(function () {
                _this.router.navigate(['/home/partner']);
            }, 1000);
        }, function (err) {
            _this.errors = err;
        });
    };
    PartnerEditComponent.prototype.cancel = function () {
        this.router.navigate(['/home/partner']);
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
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var PARTNER_ROUTES = [
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'partner',
                component: _partner_list_partner_list_component__WEBPACK_IMPORTED_MODULE_0__["PartnerListComponent"]
            }
        ]
    },
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'partner/:id',
                component: _partner_edit_partner_edit_component__WEBPACK_IMPORTED_MODULE_1__["PartnerEditComponent"]
            }
        ]
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
        this.baseUrl = "/partners";
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

/***/ "./src/app/priceplan/priceplan-edit/priceplan-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/priceplan/priceplan-edit/priceplan-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: PriceplanEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceplanEditComponent", function() { return PriceplanEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _priceplan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../priceplan.service */ "./src/app/priceplan/priceplan.service.ts");
/* harmony import */ var _priceplan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../priceplan */ "./src/app/priceplan/priceplan.ts");
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







var PriceplanEditComponent = /** @class */ (function () {
    function PriceplanEditComponent(route, router, priceplanService) {
        this.route = route;
        this.router = router;
        this.priceplanService = priceplanService;
        this.feedback = {};
    }
    PriceplanEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _priceplan__WEBPACK_IMPORTED_MODULE_3__["Priceplan"]());
            }
            return _this.priceplanService.findById(id);
        }))
            .subscribe(function (priceplan) {
            //priceplan.effectiveFrom = new Date(priceplan.effectiveFrom).toLocaleDateString();
            // let formatted_date = (priceplan.effectiveFrom.getMonth() + 1) + "/" + (priceplan.effectiveFrom.getDay()) + "/" + priceplan.effectiveFrom.getFullYear()
            // console.log(formatted_date)
            _this.priceplan = priceplan;
            _this.feedback = {};
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error loading' };
        });
    };
    PriceplanEditComponent.prototype.save = function () {
        var _this = this;
        this.priceplanService.save(this.priceplan).subscribe(function (priceplan) {
            _this.priceplan = priceplan;
            _this.feedback = { type: 'success', message: 'Save was successful!' };
            setTimeout(function () {
                _this.router.navigate(['/home/priceplans']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    PriceplanEditComponent.prototype.cancel = function () {
        this.router.navigate(['/home/priceplans']);
    };
    PriceplanEditComponent.prototype.applyPricePlan = function () {
        var _this = this;
        this.priceplanService.applyPricePlan(this.priceplan).subscribe(function (priceplan) {
            _this.priceplan.isApplied = true;
            _this.feedback = { type: 'success', message: 'Save was successful!' };
            // setTimeout(() => {
            //   this.router.navigate(['/home/priceplans']);
            // }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    PriceplanEditComponent.prototype.stopPricePlan = function () {
        var _this = this;
        this.priceplanService.stopPricePlan(this.priceplan).subscribe(function (priceplan) {
            _this.priceplan.isApplied = false;
            _this.feedback = { type: 'success', message: 'Save was successful!' };
            // setTimeout(() => {
            //   this.router.navigate(['/home/priceplans']);
            // }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    PriceplanEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _priceplan_service__WEBPACK_IMPORTED_MODULE_2__["PriceplanService"] }
    ]; };
    PriceplanEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-priceplan-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./priceplan-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/priceplan/priceplan-edit/priceplan-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _priceplan_service__WEBPACK_IMPORTED_MODULE_2__["PriceplanService"]])
    ], PriceplanEditComponent);
    return PriceplanEditComponent;
}());



/***/ }),

/***/ "./src/app/priceplan/priceplan-filter.ts":
/*!***********************************************!*\
  !*** ./src/app/priceplan/priceplan-filter.ts ***!
  \***********************************************/
/*! exports provided: PriceplanFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceplanFilter", function() { return PriceplanFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PriceplanFilter = /** @class */ (function () {
    function PriceplanFilter() {
        this.title = '';
    }
    return PriceplanFilter;
}());



/***/ }),

/***/ "./src/app/priceplan/priceplan-list/priceplan-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/priceplan/priceplan-list/priceplan-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: PriceplanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceplanListComponent", function() { return PriceplanListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _priceplan_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../priceplan-filter */ "./src/app/priceplan/priceplan-filter.ts");
/* harmony import */ var _priceplan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../priceplan.service */ "./src/app/priceplan/priceplan.service.ts");
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



var PriceplanListComponent = /** @class */ (function () {
    function PriceplanListComponent(priceplanService) {
        this.priceplanService = priceplanService;
        this.filter = new _priceplan_filter__WEBPACK_IMPORTED_MODULE_1__["PriceplanFilter"]();
        this.feedback = {};
    }
    Object.defineProperty(PriceplanListComponent.prototype, "priceplanList", {
        get: function () {
            return this.priceplanService.priceplanList;
        },
        enumerable: true,
        configurable: true
    });
    PriceplanListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    PriceplanListComponent.prototype.search = function () {
        this.priceplanService.load(this.filter);
    };
    PriceplanListComponent.prototype.select = function (selected) {
        this.selectedPriceplan = selected;
    };
    PriceplanListComponent.prototype.delete = function (priceplan) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.priceplanService.delete(priceplan).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Delete was successful!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Error deleting.' };
            });
        }
    };
    PriceplanListComponent.ctorParameters = function () { return [
        { type: _priceplan_service__WEBPACK_IMPORTED_MODULE_2__["PriceplanService"] }
    ]; };
    PriceplanListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-priceplan',
            template: __importDefault(__webpack_require__(/*! raw-loader!./priceplan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/priceplan/priceplan-list/priceplan-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_priceplan_service__WEBPACK_IMPORTED_MODULE_2__["PriceplanService"]])
    ], PriceplanListComponent);
    return PriceplanListComponent;
}());



/***/ }),

/***/ "./src/app/priceplan/priceplan.module.ts":
/*!***********************************************!*\
  !*** ./src/app/priceplan/priceplan.module.ts ***!
  \***********************************************/
/*! exports provided: PriceplanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceplanModule", function() { return PriceplanModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _priceplan_list_priceplan_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./priceplan-list/priceplan-list.component */ "./src/app/priceplan/priceplan-list/priceplan-list.component.ts");
/* harmony import */ var _priceplan_edit_priceplan_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./priceplan-edit/priceplan-edit.component */ "./src/app/priceplan/priceplan-edit/priceplan-edit.component.ts");
/* harmony import */ var _priceplan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./priceplan.service */ "./src/app/priceplan/priceplan.service.ts");
/* harmony import */ var _priceplan_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./priceplan.routes */ "./src/app/priceplan/priceplan.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var PriceplanModule = /** @class */ (function () {
    function PriceplanModule() {
    }
    PriceplanModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_priceplan_routes__WEBPACK_IMPORTED_MODULE_7__["PRICEPLAN_ROUTES"])
            ],
            declarations: [
                _priceplan_list_priceplan_list_component__WEBPACK_IMPORTED_MODULE_4__["PriceplanListComponent"],
                _priceplan_edit_priceplan_edit_component__WEBPACK_IMPORTED_MODULE_5__["PriceplanEditComponent"]
            ],
            providers: [_priceplan_service__WEBPACK_IMPORTED_MODULE_6__["PriceplanService"]],
            exports: []
        })
    ], PriceplanModule);
    return PriceplanModule;
}());



/***/ }),

/***/ "./src/app/priceplan/priceplan.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/priceplan/priceplan.routes.ts ***!
  \***********************************************/
/*! exports provided: PRICEPLAN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICEPLAN_ROUTES", function() { return PRICEPLAN_ROUTES; });
/* harmony import */ var _priceplan_list_priceplan_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./priceplan-list/priceplan-list.component */ "./src/app/priceplan/priceplan-list/priceplan-list.component.ts");
/* harmony import */ var _priceplan_edit_priceplan_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./priceplan-edit/priceplan-edit.component */ "./src/app/priceplan/priceplan-edit/priceplan-edit.component.ts");
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var PRICEPLAN_ROUTES = [
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'priceplans',
                component: _priceplan_list_priceplan_list_component__WEBPACK_IMPORTED_MODULE_0__["PriceplanListComponent"]
            }
        ]
    },
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'priceplans/:id',
                component: _priceplan_edit_priceplan_edit_component__WEBPACK_IMPORTED_MODULE_1__["PriceplanEditComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/priceplan/priceplan.service.ts":
/*!************************************************!*\
  !*** ./src/app/priceplan/priceplan.service.ts ***!
  \************************************************/
/*! exports provided: PriceplanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceplanService", function() { return PriceplanService; });
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
var PriceplanService = /** @class */ (function () {
    function PriceplanService(http) {
        this.http = http;
        this.priceplanList = [];
        this.api = '/price-plans';
    }
    PriceplanService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    PriceplanService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.priceplanList = result;
        }, function (err) {
            console.error('error loading', err);
        });
    };
    PriceplanService.prototype.find = function (filter) {
        var params = {
            'title': filter.title,
        };
        return this.http.get(this.api, { params: params, headers: headers });
    };
    PriceplanService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        entity.effectiveFrom = new Date(entity.effectiveFrom);
        entity.effectiveTo = new Date(entity.effectiveTo);
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
    PriceplanService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        if (entity.id) {
            url = this.api + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    PriceplanService.prototype.applyPricePlan = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        url = this.api + "/" + entity.id.toString() + "/apply";
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
        return this.http.put(url, {}, { headers: headers, params: params });
    };
    PriceplanService.prototype.stopPricePlan = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        url = this.api + "/" + entity.id.toString() + "/stop";
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
        return this.http.put(url, {}, { headers: headers, params: params });
    };
    PriceplanService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PriceplanService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PriceplanService);
    return PriceplanService;
}());



/***/ }),

/***/ "./src/app/priceplan/priceplan.ts":
/*!****************************************!*\
  !*** ./src/app/priceplan/priceplan.ts ***!
  \****************************************/
/*! exports provided: Priceplan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Priceplan", function() { return Priceplan; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Priceplan = /** @class */ (function () {
    function Priceplan() {
    }
    return Priceplan;
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
            console.log(product);
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
        this.isAvailable = '';
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
        //  this.search();
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
        this.baseUrl = "/products";
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
        if (filter.eng_title || filter.isAvailable) {
            url = this.baseUrl + "?filter[where]";
        }
        if (filter.eng_title) {
            url = url + ("[eng_title]=" + filter.eng_title);
        }
        if (filter.isAvailable) {
            url = url + ("[isAvailable]=" + filter.isAvailable);
        }
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

/***/ "./src/app/promotion/promotion-edit/promotion-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/promotion/promotion-edit/promotion-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: PromotionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionEditComponent", function() { return PromotionEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _promotion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../promotion.service */ "./src/app/promotion/promotion.service.ts");
/* harmony import */ var _promotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../promotion */ "./src/app/promotion/promotion.ts");
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







var PromotionEditComponent = /** @class */ (function () {
    function PromotionEditComponent(route, router, promotionService) {
        this.route = route;
        this.router = router;
        this.promotionService = promotionService;
        this.feedback = {};
    }
    PromotionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _promotion__WEBPACK_IMPORTED_MODULE_3__["Promotion"]());
            }
            return _this.promotionService.findById(id);
        }))
            .subscribe(function (promotion) {
            _this.promotion = promotion;
            _this.feedback = {};
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error loading' };
        });
    };
    PromotionEditComponent.prototype.save = function () {
        var _this = this;
        this.promotionService.save(this.promotion).subscribe(function (promotion) {
            _this.promotion = promotion;
            _this.feedback = { type: 'success', message: 'Save was successful!' };
            setTimeout(function () {
                _this.router.navigate(['/home/promotions']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    PromotionEditComponent.prototype.cancel = function () {
        this.router.navigate(['/home/promotions']);
    };
    PromotionEditComponent.prototype.changeImageListener = function ($event) {
        this.readImage($event.target);
    };
    PromotionEditComponent.prototype.readImage = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.promotion.image = myReader.result.toString();
        };
        myReader.readAsDataURL(file);
    };
    PromotionEditComponent.prototype.applyPromotion = function () {
        var _this = this;
        this.promotionService.applyPromotion(this.promotion).subscribe(function (promotion) {
            _this.promotion.isActive = true;
            _this.feedback = { type: 'success', message: 'Save was successful!' };
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    PromotionEditComponent.prototype.stopPromotion = function () {
        var _this = this;
        this.promotionService.stopPromotion(this.promotion).subscribe(function (promotion) {
            _this.promotion.isActive = false;
            _this.feedback = { type: 'success', message: 'Save was successful!' };
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    PromotionEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _promotion_service__WEBPACK_IMPORTED_MODULE_2__["PromotionService"] }
    ]; };
    PromotionEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promotion-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./promotion-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/promotion/promotion-edit/promotion-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _promotion_service__WEBPACK_IMPORTED_MODULE_2__["PromotionService"]])
    ], PromotionEditComponent);
    return PromotionEditComponent;
}());



/***/ }),

/***/ "./src/app/promotion/promotion-filter.ts":
/*!***********************************************!*\
  !*** ./src/app/promotion/promotion-filter.ts ***!
  \***********************************************/
/*! exports provided: PromotionFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionFilter", function() { return PromotionFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PromotionFilter = /** @class */ (function () {
    function PromotionFilter() {
        this.title = '';
    }
    return PromotionFilter;
}());



/***/ }),

/***/ "./src/app/promotion/promotion-list/promotion-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/promotion/promotion-list/promotion-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: PromotionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionListComponent", function() { return PromotionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _promotion_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../promotion-filter */ "./src/app/promotion/promotion-filter.ts");
/* harmony import */ var _promotion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../promotion.service */ "./src/app/promotion/promotion.service.ts");
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



var PromotionListComponent = /** @class */ (function () {
    function PromotionListComponent(promotionService) {
        this.promotionService = promotionService;
        this.filter = new _promotion_filter__WEBPACK_IMPORTED_MODULE_1__["PromotionFilter"]();
        this.feedback = {};
    }
    Object.defineProperty(PromotionListComponent.prototype, "promotionList", {
        get: function () {
            return this.promotionService.promotionList;
        },
        enumerable: true,
        configurable: true
    });
    PromotionListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    PromotionListComponent.prototype.search = function () {
        this.promotionService.load(this.filter);
    };
    PromotionListComponent.prototype.select = function (selected) {
        this.selectedPromotion = selected;
    };
    PromotionListComponent.prototype.delete = function (promotion) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.promotionService.delete(promotion).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Delete was successful!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Error deleting.' };
            });
        }
    };
    PromotionListComponent.ctorParameters = function () { return [
        { type: _promotion_service__WEBPACK_IMPORTED_MODULE_2__["PromotionService"] }
    ]; };
    PromotionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promotion',
            template: __importDefault(__webpack_require__(/*! raw-loader!./promotion-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/promotion/promotion-list/promotion-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_promotion_service__WEBPACK_IMPORTED_MODULE_2__["PromotionService"]])
    ], PromotionListComponent);
    return PromotionListComponent;
}());



/***/ }),

/***/ "./src/app/promotion/promotion.module.ts":
/*!***********************************************!*\
  !*** ./src/app/promotion/promotion.module.ts ***!
  \***********************************************/
/*! exports provided: PromotionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionModule", function() { return PromotionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _promotion_list_promotion_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./promotion-list/promotion-list.component */ "./src/app/promotion/promotion-list/promotion-list.component.ts");
/* harmony import */ var _promotion_edit_promotion_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./promotion-edit/promotion-edit.component */ "./src/app/promotion/promotion-edit/promotion-edit.component.ts");
/* harmony import */ var _promotion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promotion.service */ "./src/app/promotion/promotion.service.ts");
/* harmony import */ var _promotion_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./promotion.routes */ "./src/app/promotion/promotion.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var PromotionModule = /** @class */ (function () {
    function PromotionModule() {
    }
    PromotionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_promotion_routes__WEBPACK_IMPORTED_MODULE_7__["PROMOTION_ROUTES"])
            ],
            declarations: [
                _promotion_list_promotion_list_component__WEBPACK_IMPORTED_MODULE_4__["PromotionListComponent"],
                _promotion_edit_promotion_edit_component__WEBPACK_IMPORTED_MODULE_5__["PromotionEditComponent"]
            ],
            providers: [_promotion_service__WEBPACK_IMPORTED_MODULE_6__["PromotionService"]],
            exports: []
        })
    ], PromotionModule);
    return PromotionModule;
}());



/***/ }),

/***/ "./src/app/promotion/promotion.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/promotion/promotion.routes.ts ***!
  \***********************************************/
/*! exports provided: PROMOTION_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROMOTION_ROUTES", function() { return PROMOTION_ROUTES; });
/* harmony import */ var _promotion_list_promotion_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion-list/promotion-list.component */ "./src/app/promotion/promotion-list/promotion-list.component.ts");
/* harmony import */ var _promotion_edit_promotion_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotion-edit/promotion-edit.component */ "./src/app/promotion/promotion-edit/promotion-edit.component.ts");
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var PROMOTION_ROUTES = [
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'promotions',
                component: _promotion_list_promotion_list_component__WEBPACK_IMPORTED_MODULE_0__["PromotionListComponent"]
            }
        ]
    },
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'promotions/:id',
                component: _promotion_edit_promotion_edit_component__WEBPACK_IMPORTED_MODULE_1__["PromotionEditComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/promotion/promotion.service.ts":
/*!************************************************!*\
  !*** ./src/app/promotion/promotion.service.ts ***!
  \************************************************/
/*! exports provided: PromotionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionService", function() { return PromotionService; });
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
var PromotionService = /** @class */ (function () {
    function PromotionService(http) {
        this.http = http;
        this.promotionList = [];
        this.api = '/promotions';
    }
    PromotionService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    PromotionService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.promotionList = result;
        }, function (err) {
            console.error('error loading', err);
        });
    };
    PromotionService.prototype.find = function (filter) {
        var params = {
            'title': filter.title,
        };
        return this.http.get(this.api, { params: params, headers: headers });
    };
    PromotionService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        entity.effectiveDate = new Date(entity.effectiveDate);
        entity.endDate = new Date(entity.endDate);
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
    PromotionService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        if (entity.id) {
            url = this.api + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    PromotionService.prototype.applyPromotion = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        url = this.api + "/" + entity.id.toString() + "/apply";
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
        return this.http.put(url, {}, { headers: headers, params: params });
    };
    PromotionService.prototype.stopPromotion = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        url = this.api + "/" + entity.id.toString() + "/stop";
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
        return this.http.put(url, {}, { headers: headers, params: params });
    };
    PromotionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PromotionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PromotionService);
    return PromotionService;
}());



/***/ }),

/***/ "./src/app/promotion/promotion.ts":
/*!****************************************!*\
  !*** ./src/app/promotion/promotion.ts ***!
  \****************************************/
/*! exports provided: Promotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Promotion", function() { return Promotion; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Promotion = /** @class */ (function () {
    function Promotion() {
    }
    return Promotion;
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
        this.baseUrl = "/rateplans";
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

/***/ "./src/app/stock/stock-edit/stock-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/stock/stock-edit/stock-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: StockEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockEditComponent", function() { return StockEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stock.service */ "./src/app/stock/stock.service.ts");
/* harmony import */ var _stock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stock */ "./src/app/stock/stock.ts");
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product/product.service */ "./src/app/product/product.service.ts");
/* harmony import */ var _product_product_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../product/product-filter */ "./src/app/product/product-filter.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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









var StockEditComponent = /** @class */ (function () {
    function StockEditComponent(route, router, stockService, productService) {
        this.route = route;
        this.router = router;
        this.stockService = stockService;
        this.productService = productService;
        this.feedback = {};
        this.productFilter = new _product_product_filter__WEBPACK_IMPORTED_MODULE_5__["ProductFilter"]();
    }
    Object.defineProperty(StockEditComponent.prototype, "productsId_list", {
        get: function () {
            return this.productService.productList;
        },
        enumerable: true,
        configurable: true
    });
    StockEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _stock__WEBPACK_IMPORTED_MODULE_3__["Stock"]());
            }
            return _this.stockService.findById(id);
        }))
            .subscribe(function (stock) {
            _this.stock = stock;
            _this.feedback = {};
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error loading' };
        });
        this.productService.load(this.productFilter);
    };
    StockEditComponent.prototype.selectedProduct = function ($event) {
        var _this = this;
        var seletectProduct = this.productsId_list.filter(function (p) { return p.id == _this.stock.productsId; });
        console.log(seletectProduct);
        if (seletectProduct.length > 0) {
            this.stock.productTitle = seletectProduct[0].displayName;
        }
    };
    StockEditComponent.prototype.save = function () {
        var _this = this;
        this.stockService.save(this.stock).subscribe(function (stock) {
            _this.stock = stock;
            _this.feedback = { type: 'success', message: 'Save was successful!' };
            setTimeout(function () {
                _this.router.navigate(['/home/stocks']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    StockEditComponent.prototype.cancel = function () {
        this.router.navigate(['/home/stocks']);
    };
    StockEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"] },
        { type: _product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
    ]; };
    StockEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./stock-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/stock-edit/stock-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"],
            _product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], StockEditComponent);
    return StockEditComponent;
}());



/***/ }),

/***/ "./src/app/stock/stock-filter.ts":
/*!***************************************!*\
  !*** ./src/app/stock/stock-filter.ts ***!
  \***************************************/
/*! exports provided: StockFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockFilter", function() { return StockFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var StockFilter = /** @class */ (function () {
    function StockFilter() {
    }
    return StockFilter;
}());



/***/ }),

/***/ "./src/app/stock/stock-list/stock-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/stock/stock-list/stock-list.component.ts ***!
  \**********************************************************/
/*! exports provided: StockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockListComponent", function() { return StockListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stock_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stock-filter */ "./src/app/stock/stock-filter.ts");
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stock.service */ "./src/app/stock/stock.service.ts");
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



var StockListComponent = /** @class */ (function () {
    function StockListComponent(stockService) {
        this.stockService = stockService;
        this.filter = new _stock_filter__WEBPACK_IMPORTED_MODULE_1__["StockFilter"]();
        this.feedback = {};
    }
    Object.defineProperty(StockListComponent.prototype, "stockList", {
        get: function () {
            return this.stockService.stockList;
        },
        enumerable: true,
        configurable: true
    });
    StockListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    StockListComponent.prototype.search = function () {
        this.stockService.load(this.filter);
    };
    StockListComponent.prototype.select = function (selected) {
        this.selectedStock = selected;
    };
    StockListComponent.prototype.delete = function (stock) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.stockService.delete(stock).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Delete was successful!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Error deleting.' };
            });
        }
    };
    StockListComponent.ctorParameters = function () { return [
        { type: _stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"] }
    ]; };
    StockListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock',
            template: __importDefault(__webpack_require__(/*! raw-loader!./stock-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/stock-list/stock-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"]])
    ], StockListComponent);
    return StockListComponent;
}());



/***/ }),

/***/ "./src/app/stock/stock.module.ts":
/*!***************************************!*\
  !*** ./src/app/stock/stock.module.ts ***!
  \***************************************/
/*! exports provided: StockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockModule", function() { return StockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock-list/stock-list.component */ "./src/app/stock/stock-list/stock-list.component.ts");
/* harmony import */ var _stock_edit_stock_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-edit/stock-edit.component */ "./src/app/stock/stock-edit/stock-edit.component.ts");
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock.service */ "./src/app/stock/stock.service.ts");
/* harmony import */ var _stock_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stock.routes */ "./src/app/stock/stock.routes.ts");
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









var StockModule = /** @class */ (function () {
    function StockModule() {
    }
    StockModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_stock_routes__WEBPACK_IMPORTED_MODULE_7__["STOCK_ROUTES"]),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"]
            ],
            declarations: [
                _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_4__["StockListComponent"],
                _stock_edit_stock_edit_component__WEBPACK_IMPORTED_MODULE_5__["StockEditComponent"]
            ],
            providers: [_stock_service__WEBPACK_IMPORTED_MODULE_6__["StockService"]],
            exports: []
        })
    ], StockModule);
    return StockModule;
}());



/***/ }),

/***/ "./src/app/stock/stock.routes.ts":
/*!***************************************!*\
  !*** ./src/app/stock/stock.routes.ts ***!
  \***************************************/
/*! exports provided: STOCK_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_ROUTES", function() { return STOCK_ROUTES; });
/* harmony import */ var _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock-list/stock-list.component */ "./src/app/stock/stock-list/stock-list.component.ts");
/* harmony import */ var _stock_edit_stock_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock-edit/stock-edit.component */ "./src/app/stock/stock-edit/stock-edit.component.ts");
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var STOCK_ROUTES = [
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'stocks',
                component: _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_0__["StockListComponent"]
            }
        ]
    },
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'stocks/:id',
                component: _stock_edit_stock_edit_component__WEBPACK_IMPORTED_MODULE_1__["StockEditComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/stock/stock.service.ts":
/*!****************************************!*\
  !*** ./src/app/stock/stock.service.ts ***!
  \****************************************/
/*! exports provided: StockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockService", function() { return StockService; });
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
var StockService = /** @class */ (function () {
    function StockService(http) {
        this.http = http;
        this.stockList = [];
        this.api = '/stocks';
    }
    StockService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    StockService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.stockList = result;
        }, function (err) {
            console.error('error loading', err);
        });
    };
    StockService.prototype.find = function (filter) {
        var params = {};
        return this.http.get(this.api, { params: params, headers: headers });
    };
    StockService.prototype.save = function (entity) {
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
    StockService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        if (entity.id) {
            url = this.api + "/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    StockService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    StockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StockService);
    return StockService;
}());



/***/ }),

/***/ "./src/app/stock/stock.ts":
/*!********************************!*\
  !*** ./src/app/stock/stock.ts ***!
  \********************************/
/*! exports provided: Stock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stock", function() { return Stock; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Stock = /** @class */ (function () {
    function Stock() {
    }
    return Stock;
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
        this.buyingPriceUnitId_list = [{ id: 1, unitDisplayName: "kg" }, { id: 2, unitDisplayName: "dozen" }, { id: 3, unitDisplayName: "250 GM" }, { id: 4, unitDisplayName: "Bundle" }];
        this.quentityUnitsId_list = [{ id: 1, unitDisplayName: "kg" }, { id: 2, unitDisplayName: "dozen" }, { id: 3, unitDisplayName: "250 GM" }, { id: 4, unitDisplayName: "Bundle" }];
        this.partnerService.load(this.partnerFilter);
        this.productService.load(this.productFilter);
    };
    SupplyEditComponent.prototype.save = function () {
        var _this = this;
        this.supplyService.save(this.supply).subscribe(function (supply) {
            _this.supply = supply;
            _this.errors = 'Save was successful!';
            setTimeout(function () {
                _this.router.navigate(['/home/supply']);
            }, 1000);
        }, function (err) {
            _this.errors = 'Error saving';
        });
    };
    SupplyEditComponent.prototype.cancel = function () {
        this.router.navigate(['/home/supply']);
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
            _this.supply.isArrived = sp.isArrived;
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









var SupplyModule = /** @class */ (function () {
    function SupplyModule() {
    }
    SupplyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_supply_routes__WEBPACK_IMPORTED_MODULE_7__["SUPPLY_ROUTES"]),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"]
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
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var SUPPLY_ROUTES = [
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'supply',
                component: _supply_list_supply_list_component__WEBPACK_IMPORTED_MODULE_0__["SupplyListComponent"]
            }
        ]
    },
    {
        path: 'home',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            {
                path: 'supply/:id',
                component: _supply_edit_supply_edit_component__WEBPACK_IMPORTED_MODULE_1__["SupplyEditComponent"]
            }
        ]
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
        this.baseUrl = "/supplies";
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

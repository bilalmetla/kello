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
const repository_1 = require("@loopback/repository");
const orders_model_1 = require("./orders.model");
let Customers = class Customers extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: true,
    }),
    __metadata("design:type", String)
], Customers.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Customers.prototype, "name", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Customers.prototype, "phone", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Customers.prototype, "accessToken", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], Customers.prototype, "isActivated", void 0);
__decorate([
    repository_1.property({
        type: 'date',
        default: new Date(),
    }),
    __metadata("design:type", String)
], Customers.prototype, "createdDate", void 0);
__decorate([
    repository_1.property({
        type: 'date',
    }),
    __metadata("design:type", String)
], Customers.prototype, "updatedDate", void 0);
__decorate([
    repository_1.hasMany(() => orders_model_1.Orders),
    __metadata("design:type", Array)
], Customers.prototype, "orders", void 0);
Customers = __decorate([
    repository_1.model({ settings: { strict: false } }),
    __metadata("design:paramtypes", [Object])
], Customers);
exports.Customers = Customers;
//# sourceMappingURL=customers.model.js.map
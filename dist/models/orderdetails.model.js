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
const units_model_1 = require("./units.model");
let Orderdetails = class Orderdetails extends repository_1.Entity {
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
], Orderdetails.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], Orderdetails.prototype, "quantity", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Object)
], Orderdetails.prototype, "retailPrice", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Object)
], Orderdetails.prototype, "salePrice", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Object)
], Orderdetails.prototype, "purchasePrice", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", Object)
], Orderdetails.prototype, "ordersId", void 0);
__decorate([
    repository_1.property({
        type: 'date',
    }),
    __metadata("design:type", Date)
], Orderdetails.prototype, "orderTime", void 0);
__decorate([
    repository_1.belongsTo(() => units_model_1.Units),
    __metadata("design:type", String)
], Orderdetails.prototype, "retailPriceUnitsId", void 0);
__decorate([
    repository_1.belongsTo(() => units_model_1.Units),
    __metadata("design:type", String)
], Orderdetails.prototype, "purchasePriceUnitsId", void 0);
__decorate([
    repository_1.belongsTo(() => units_model_1.Units),
    __metadata("design:type", String)
], Orderdetails.prototype, "salePriceUnitsId", void 0);
Orderdetails = __decorate([
    repository_1.model({ settings: { strict: false, strictObjectIDCoercion: true } }),
    __metadata("design:paramtypes", [Object])
], Orderdetails);
exports.Orderdetails = Orderdetails;
//# sourceMappingURL=orderdetails.model.js.map
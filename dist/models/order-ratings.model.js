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
const rating_reasons_model_1 = require("./rating-reasons.model");
const orders_model_1 = require("./orders.model");
const customers_model_1 = require("./customers.model");
let OrderRatings = class OrderRatings extends repository_1.Entity {
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
], OrderRatings.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], OrderRatings.prototype, "points", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], OrderRatings.prototype, "reasonMessage", void 0);
__decorate([
    repository_1.belongsTo(() => rating_reasons_model_1.RatingReasons),
    __metadata("design:type", String)
], OrderRatings.prototype, "ratingReasonsId", void 0);
__decorate([
    repository_1.belongsTo(() => orders_model_1.Orders),
    __metadata("design:type", String)
], OrderRatings.prototype, "ordersId", void 0);
__decorate([
    repository_1.belongsTo(() => customers_model_1.Customers),
    __metadata("design:type", String)
], OrderRatings.prototype, "customersId", void 0);
OrderRatings = __decorate([
    repository_1.model({ settings: { strict: false, strictObjectIDCoercion: true } }),
    __metadata("design:paramtypes", [Object])
], OrderRatings);
exports.OrderRatings = OrderRatings;
//# sourceMappingURL=order-ratings.model.js.map
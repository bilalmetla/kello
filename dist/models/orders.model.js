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
const orderstatuses_model_1 = require("./orderstatuses.model");
const orderdetails_model_1 = require("./orderdetails.model");
const partners_model_1 = require("./partners.model");
let Orders = class Orders extends repository_1.Entity {
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
], Orders.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'date',
        default: new Date(),
    }),
    __metadata("design:type", String)
], Orders.prototype, "orderTime", void 0);
__decorate([
    repository_1.property({
        type: 'date',
    }),
    __metadata("design:type", String)
], Orders.prototype, "completionTime", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: false,
    }),
    __metadata("design:type", String)
], Orders.prototype, "orderStatus", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], Orders.prototype, "totalBillAmount", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        required: false,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Orders.prototype, "isDelivered", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        required: false,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Orders.prototype, "isCancelled", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Orders.prototype, "orderCategory", void 0);
__decorate([
    repository_1.property({
        type: 'array',
        itemType: 'object',
        required: true,
    }),
    __metadata("design:type", Array)
], Orders.prototype, "items", void 0);
__decorate([
    repository_1.property({
        type: 'object',
        required: false,
    }),
    __metadata("design:type", Object)
], Orders.prototype, "location", void 0);
__decorate([
    repository_1.belongsTo(() => orderstatuses_model_1.Orderstatuses),
    __metadata("design:type", String)
], Orders.prototype, "orderstatusesId", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Orders.prototype, "customersId", void 0);
__decorate([
    repository_1.hasMany(() => orderdetails_model_1.Orderdetails),
    __metadata("design:type", Array)
], Orders.prototype, "orderdetails", void 0);
__decorate([
    repository_1.belongsTo(() => partners_model_1.Partners),
    __metadata("design:type", String)
], Orders.prototype, "partnersId", void 0);
Orders = __decorate([
    repository_1.model({ settings: { strict: false } }),
    __metadata("design:paramtypes", [Object])
], Orders);
exports.Orders = Orders;
//# sourceMappingURL=orders.model.js.map
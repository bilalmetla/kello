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
const partners_model_1 = require("./partners.model");
const products_model_1 = require("./products.model");
const units_model_1 = require("./units.model");
let Supply = class Supply extends repository_1.Entity {
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
], Supply.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Supply.prototype, "referenceNo", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Supply.prototype, "productTitle", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Supply.prototype, "supplierName", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], Supply.prototype, "quentity", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], Supply.prototype, "quentityOnHand", void 0);
__decorate([
    repository_1.property({
        type: 'date',
        default: new Date()
    }),
    __metadata("design:type", String)
], Supply.prototype, "supplyDate", void 0);
__decorate([
    repository_1.property({
        type: 'date',
    }),
    __metadata("design:type", String)
], Supply.prototype, "arrivedAt", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], Supply.prototype, "isArrived", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], Supply.prototype, "purchasingCost", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Supply.prototype, "travlingCost", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Supply.prototype, "labourCost", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Supply.prototype, "otherCost", void 0);
__decorate([
    repository_1.belongsTo(() => partners_model_1.Partners),
    __metadata("design:type", String)
], Supply.prototype, "supplierId", void 0);
__decorate([
    repository_1.belongsTo(() => products_model_1.Products),
    __metadata("design:type", String)
], Supply.prototype, "productsId", void 0);
__decorate([
    repository_1.belongsTo(() => units_model_1.Units),
    __metadata("design:type", String)
], Supply.prototype, "buyingPriceUnitId", void 0);
__decorate([
    repository_1.belongsTo(() => units_model_1.Units),
    __metadata("design:type", String)
], Supply.prototype, "quentityUnitsId", void 0);
Supply = __decorate([
    repository_1.model({ settings: { strict: false, strictObjectIDCoercion: true } }),
    __metadata("design:paramtypes", [Object])
], Supply);
exports.Supply = Supply;
//# sourceMappingURL=supply.model.js.map
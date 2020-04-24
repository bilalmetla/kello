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
const producttypes_model_1 = require("./producttypes.model");
let Products = class Products extends repository_1.Entity {
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
], Products.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Products.prototype, "eng_title", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Products.prototype, "urdu_title", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Products.prototype, "displayName", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        deafult: ''
    }),
    __metadata("design:type", String)
], Products.prototype, "image", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        deafult: ''
    }),
    __metadata("design:type", String)
], Products.prototype, "imageUrl", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Products.prototype, "quentityOnHand", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Products.prototype, "buyingPrice", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    __metadata("design:type", Number)
], Products.prototype, "totalCost", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    __metadata("design:type", Number)
], Products.prototype, "salePrice", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    __metadata("design:type", Number)
], Products.prototype, "retailPrice", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    __metadata("design:type", Number)
], Products.prototype, "discountAmount", void 0);
__decorate([
    repository_1.property({
        type: 'date',
        default: new Date()
    }),
    __metadata("design:type", Date)
], Products.prototype, "createdDate", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        default: ''
    }),
    __metadata("design:type", String)
], Products.prototype, "description", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        default: true
    }),
    __metadata("design:type", Boolean)
], Products.prototype, "isAvailable", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        default: 1
    }),
    __metadata("design:type", Number)
], Products.prototype, "displayingPeriority", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    __metadata("design:type", Number)
], Products.prototype, "retailPriceA", void 0);
__decorate([
    repository_1.belongsTo(() => units_model_1.Units),
    __metadata("design:type", String)
], Products.prototype, "buyingPriceUnitsId", void 0);
__decorate([
    repository_1.belongsTo(() => units_model_1.Units),
    __metadata("design:type", String)
], Products.prototype, "salePriceUnitsId", void 0);
__decorate([
    repository_1.belongsTo(() => units_model_1.Units),
    __metadata("design:type", String)
], Products.prototype, "retailPiceUnitsId", void 0);
__decorate([
    repository_1.belongsTo(() => units_model_1.Units),
    __metadata("design:type", String)
], Products.prototype, "quentityUnitsId", void 0);
__decorate([
    repository_1.belongsTo(() => producttypes_model_1.Producttypes),
    __metadata("design:type", String)
], Products.prototype, "producttypesId", void 0);
Products = __decorate([
    repository_1.model({ settings: { strict: false, strictObjectIDCoercion: true } }),
    __metadata("design:paramtypes", [Object])
], Products);
exports.Products = Products;
//# sourceMappingURL=products.model.js.map
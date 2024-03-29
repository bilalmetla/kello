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
const products_model_1 = require("./products.model");
const units_model_1 = require("./units.model");
let Stock = class Stock extends repository_1.Entity {
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
], Stock.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        default: 0
    }),
    __metadata("design:type", Number)
], Stock.prototype, "quantity", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: false,
        default: 0
    }),
    __metadata("design:type", Number)
], Stock.prototype, "quantityWaste", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: false,
    }),
    __metadata("design:type", String)
], Stock.prototype, "productTitle", void 0);
__decorate([
    repository_1.belongsTo(() => products_model_1.Products),
    __metadata("design:type", String)
], Stock.prototype, "productsId", void 0);
__decorate([
    repository_1.belongsTo(() => units_model_1.Units),
    __metadata("design:type", String)
], Stock.prototype, "unitsId", void 0);
Stock = __decorate([
    repository_1.model({ settings: { strict: false, strictObjectIDCoercion: true } }),
    __metadata("design:paramtypes", [Object])
], Stock);
exports.Stock = Stock;
//# sourceMappingURL=stock.model.js.map
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
const price_plan_types_model_1 = require("./price-plan-types.model");
let PricePlan = class PricePlan extends repository_1.Entity {
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
], PricePlan.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], PricePlan.prototype, "title", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], PricePlan.prototype, "shortCode", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], PricePlan.prototype, "chargeValue", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    __metadata("design:type", Number)
], PricePlan.prototype, "inputMin", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    __metadata("design:type", Number)
], PricePlan.prototype, "inputMax", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    __metadata("design:type", Number)
], PricePlan.prototype, "minFees", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    __metadata("design:type", Number)
], PricePlan.prototype, "maxFees", void 0);
__decorate([
    repository_1.property({
        type: 'date',
        default: new Date(),
    }),
    __metadata("design:type", String)
], PricePlan.prototype, "effectiveFrom", void 0);
__decorate([
    repository_1.property({
        type: 'date',
        default: new Date(),
    }),
    __metadata("design:type", String)
], PricePlan.prototype, "effectiveTo", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], PricePlan.prototype, "isApplied", void 0);
__decorate([
    repository_1.belongsTo(() => price_plan_types_model_1.PricePlanTypes),
    __metadata("design:type", String)
], PricePlan.prototype, "pricePlanTypesId", void 0);
PricePlan = __decorate([
    repository_1.model({ settings: { strict: false, strictObjectIDCoercion: true } }),
    __metadata("design:paramtypes", [Object])
], PricePlan);
exports.PricePlan = PricePlan;
//# sourceMappingURL=price-plan.model.js.map
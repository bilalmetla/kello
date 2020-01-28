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
const partnertypes_model_1 = require("./partnertypes.model");
const orders_model_1 = require("./orders.model");
let Partners = class Partners extends repository_1.Entity {
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
], Partners.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Partners.prototype, "name", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Partners.prototype, "phone", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Partners.prototype, "pin", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: false,
    }),
    __metadata("design:type", String)
], Partners.prototype, "access_token", void 0);
__decorate([
    repository_1.property({
        type: 'date',
    }),
    __metadata("design:type", String)
], Partners.prototype, "lastActive", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        required: false,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Partners.prototype, "isActivated", void 0);
__decorate([
    repository_1.property({
        type: 'object',
    }),
    __metadata("design:type", Object)
], Partners.prototype, "location", void 0);
__decorate([
    repository_1.property({
        type: 'date',
        default: new Date()
    }),
    __metadata("design:type", String)
], Partners.prototype, "creationDate", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Partners.prototype, "deviceId", void 0);
__decorate([
    repository_1.belongsTo(() => partnertypes_model_1.Partnertypes),
    __metadata("design:type", String)
], Partners.prototype, "partnertypesId", void 0);
__decorate([
    repository_1.hasMany(() => orders_model_1.Orders),
    __metadata("design:type", Array)
], Partners.prototype, "orders", void 0);
Partners = __decorate([
    repository_1.model({ settings: { strict: false, strictObjectIDCoercion: true } }),
    __metadata("design:paramtypes", [Object])
], Partners);
exports.Partners = Partners;
//# sourceMappingURL=partners.model.js.map
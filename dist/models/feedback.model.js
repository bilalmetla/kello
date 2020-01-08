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
const customers_model_1 = require("./customers.model");
const feedbacktypes_model_1 = require("./feedbacktypes.model");
const partners_model_1 = require("./partners.model");
let Feedback = class Feedback extends repository_1.Entity {
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
], Feedback.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Feedback.prototype, "email", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Feedback.prototype, "fullname", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Feedback.prototype, "phone", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Feedback.prototype, "message", void 0);
__decorate([
    repository_1.belongsTo(() => customers_model_1.Customers),
    __metadata("design:type", String)
], Feedback.prototype, "customersId", void 0);
__decorate([
    repository_1.belongsTo(() => feedbacktypes_model_1.Feedbacktypes),
    __metadata("design:type", String)
], Feedback.prototype, "feedbacktypesId", void 0);
__decorate([
    repository_1.belongsTo(() => partners_model_1.Partners),
    __metadata("design:type", String)
], Feedback.prototype, "partnersId", void 0);
Feedback = __decorate([
    repository_1.model({ settings: { strict: false } }),
    __metadata("design:paramtypes", [Object])
], Feedback);
exports.Feedback = Feedback;
//# sourceMappingURL=feedback.model.js.map
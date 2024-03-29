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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OrderdetailsUnitsController = class OrderdetailsUnitsController {
    constructor(orderdetailsRepository) {
        this.orderdetailsRepository = orderdetailsRepository;
    }
    getUnits(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orderdetailsRepository.units(id);
        });
    }
};
__decorate([
    rest_1.get('/orderdetails/{id}/units', {
        responses: {
            '200': {
                description: 'Units belonging to Orderdetails',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Units) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderdetailsUnitsController.prototype, "getUnits", null);
OrderdetailsUnitsController = __decorate([
    __param(0, repository_1.repository(repositories_1.OrderdetailsRepository)),
    __metadata("design:paramtypes", [repositories_1.OrderdetailsRepository])
], OrderdetailsUnitsController);
exports.OrderdetailsUnitsController = OrderdetailsUnitsController;
//# sourceMappingURL=orderdetails-units.controller.js.map
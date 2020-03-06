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
let StaticDataController = class StaticDataController {
    constructor(ratingReasonsRepository, customersRepository, ordersRepository) {
        this.ratingReasonsRepository = ratingReasonsRepository;
        this.customersRepository = customersRepository;
        this.ordersRepository = ordersRepository;
    }
    //@secured(SecuredType.IS_AUTHENTICATED)
    find(inputs) {
        return __awaiter(this, void 0, void 0, function* () {
            const arr_resp = {};
            const ratingList = yield this.ratingReasonsRepository.find();
            arr_resp.ratingList = ratingList;
            if (inputs && inputs.id) {
                let orderFlter = {
                    where: { "and": [{ customersId: inputs.id }, { isOrderRatingDone: false }] },
                    fields: { id: true }
                };
                const pendingRatesOrders = yield this.ordersRepository.find(orderFlter);
                arr_resp.ratingPending = pendingRatesOrders;
            }
            return arr_resp;
        });
    }
};
__decorate([
    rest_1.post('/static-data', {
        responses: {
            '200': {
                description: 'Array of Static Data',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Customers]),
    __metadata("design:returntype", Promise)
], StaticDataController.prototype, "find", null);
StaticDataController = __decorate([
    __param(0, repository_1.repository(repositories_1.RatingReasonsRepository)),
    __param(1, repository_1.repository(repositories_1.CustomersRepository)),
    __param(2, repository_1.repository(repositories_1.OrdersRepository)),
    __metadata("design:paramtypes", [repositories_1.RatingReasonsRepository,
        repositories_1.CustomersRepository,
        repositories_1.OrdersRepository])
], StaticDataController);
exports.StaticDataController = StaticDataController;
//# sourceMappingURL=static-data.controller.js.map
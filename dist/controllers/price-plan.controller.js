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
const auth_1 = require("../auth");
const constants_1 = require("../constants");
const logger_1 = require("../logger");
let PricePlanController = class PricePlanController {
    constructor(pricePlanRepository, productsRepository) {
        this.pricePlanRepository = pricePlanRepository;
        this.productsRepository = productsRepository;
    }
    create(pricePlan) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.pricePlanRepository.create(pricePlan);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.pricePlanRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.pricePlanRepository.find(filter);
        });
    }
    updateAll(pricePlan, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.pricePlanRepository.updateAll(pricePlan, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.pricePlanRepository.findById(id, filter);
        });
    }
    updateById(id, pricePlan) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.pricePlanRepository.updateById(id, pricePlan);
        });
    }
    replaceById(id, pricePlan) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.pricePlanRepository.replaceById(id, pricePlan);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.pricePlanRepository.deleteById(id);
        });
    }
    applyPricePlan(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const rateplan = yield this.pricePlanRepository.findById(id);
            if (!rateplan) {
                return constants_1.CONSTANTS.PRICEPLAN_NOT_FOUND;
            }
            const session = this.productsRepository.dataSource.connector.client.startSession();
            session.startTransaction();
            let markUpPercentage = rateplan.chargeValue;
            //CONSIDERING 2 IS FOR FIXED RATE.
            if (rateplan.pricePlanTypesId && rateplan.pricePlanTypesId == '2') {
                markUpPercentage = rateplan.chargeValue;
            }
            const allproducts = yield this.productsRepository.find({
            // fields: {
            //   id: true,
            //   totalCost: true,
            //   retailPrice: true,
            //   } 
            });
            logger_1.winstonLogger.debug('all products', JSON.stringify(allproducts));
            for (let p of allproducts) {
                p.retailPrice = Math.round(((p.totalCost || 0) / (100 - markUpPercentage) * 100));
                const p_updated = yield this.productsRepository.updateAll(p, undefined, { session });
                logger_1.winstonLogger.debug('price paln updatedProducts', JSON.stringify(p_updated));
                if (!p_updated.count) {
                    yield session.abortTransaction();
                    session.endSession();
                    return constants_1.CONSTANTS.PRODUCT_NOT_UPDATED;
                }
            }
            rateplan.isApplied = true;
            let updatedPricePlan = yield this.pricePlanRepository.updateAll(rateplan, undefined, { session });
            logger_1.winstonLogger.debug('price paln updatedPricePlan', JSON.stringify(updatedPricePlan));
            const se_resp = yield session.commitTransaction();
            session.endSession();
            logger_1.winstonLogger.debug(`session response ${se_resp}`);
            return { id };
        });
    }
    stopPricePlan(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = this.productsRepository.dataSource.connector.client.startSession();
            session.startTransaction();
            const allproducts = yield this.productsRepository.find({
            // fields: {
            //   id: true,
            //   totalCost: true,
            //   retailPrice: true,
            //   } 
            });
            logger_1.winstonLogger.debug('all products', JSON.stringify(allproducts));
            for (let p of allproducts) {
                p.retailPrice = 0;
                const p_updated = yield this.productsRepository.updateAll(p, undefined, { session });
                logger_1.winstonLogger.debug('price paln updatedProducts', JSON.stringify(p_updated));
                if (!p_updated.count) {
                    yield session.abortTransaction();
                    session.endSession();
                    return constants_1.CONSTANTS.PRODUCT_NOT_UPDATED; //todo 
                }
            }
            yield this.pricePlanRepository.updateById(id, { isApplied: false });
            yield session.commitTransaction();
            session.endSession();
            return { id };
        });
    }
};
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.post('/price-plans', {
        responses: {
            '200': {
                description: 'PricePlan model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.PricePlan) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PricePlan, {
                    title: 'NewPricePlan',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PricePlanController.prototype, "create", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/price-plans/count', {
        responses: {
            '200': {
                description: 'PricePlan model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.PricePlan))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PricePlanController.prototype, "count", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/price-plans', {
        responses: {
            '200': {
                description: 'Array of PricePlan model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.PricePlan, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.PricePlan))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PricePlanController.prototype, "find", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/price-plans', {
        responses: {
            '200': {
                description: 'PricePlan PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PricePlan, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.PricePlan))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.PricePlan, Object]),
    __metadata("design:returntype", Promise)
], PricePlanController.prototype, "updateAll", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/price-plans/{id}', {
        responses: {
            '200': {
                description: 'PricePlan model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.PricePlan, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.PricePlan))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PricePlanController.prototype, "findById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/price-plans/{id}', {
        responses: {
            '204': {
                description: 'PricePlan PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PricePlan, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.PricePlan]),
    __metadata("design:returntype", Promise)
], PricePlanController.prototype, "updateById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.put('/price-plans/{id}', {
        responses: {
            '204': {
                description: 'PricePlan PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.PricePlan]),
    __metadata("design:returntype", Promise)
], PricePlanController.prototype, "replaceById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.del('/price-plans/{id}', {
        responses: {
            '204': {
                description: 'PricePlan DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PricePlanController.prototype, "deleteById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.put('/price-plans/{id}/apply', {
        responses: {
            '204': {
                description: 'PricePlan applied success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PricePlanController.prototype, "applyPricePlan", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.put('/price-plans/{id}/stop', {
        responses: {
            '204': {
                description: 'PricePlan stoped success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PricePlanController.prototype, "stopPricePlan", null);
PricePlanController = __decorate([
    __param(0, repository_1.repository(repositories_1.PricePlanRepository)),
    __param(1, repository_1.repository(repositories_1.ProductsRepository)),
    __metadata("design:paramtypes", [repositories_1.PricePlanRepository,
        repositories_1.ProductsRepository])
], PricePlanController);
exports.PricePlanController = PricePlanController;
//# sourceMappingURL=price-plan.controller.js.map
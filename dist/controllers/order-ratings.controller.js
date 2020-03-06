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
let OrderRatingsController = class OrderRatingsController {
    constructor(orderRatingsRepository, ordersRepository) {
        this.orderRatingsRepository = orderRatingsRepository;
        this.ordersRepository = ordersRepository;
    }
    create(orderRatings) {
        return __awaiter(this, void 0, void 0, function* () {
            //let orderIds: any = [];
            orderRatings.forEach(item => this.ordersRepository.updateById(item.ordersId, { isOrderRatingDone: true }));
            //const up_orders = await this.ordersRepository.update({id:{$in:orderIds}})
            //this.ordersRepository.updateAll({isOrderRatingDone: true}, {id: {$in:orderIds}});
            // if (!this.ordersRepository.dataSource.connected) {
            //   await this.ordersRepository.dataSource.connect();         
            // }
            // const ordersCollection = (this.ordersRepository.dataSource.connector as any).collection("Orders");
            // this.ordersRepository.update({id:{in:orderIds }},
            //   { $set: {isOrderRatingDone: true} })
            // const up_orders = await ordersCollection.update(
            //   {_id:{$in:orderIds }},
            //   { $set: {isOrderRatingDone: true} }
            //   );
            return this.orderRatingsRepository.createAll(orderRatings);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orderRatingsRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (filter) {
                filter.order = ['createdDate Desc'];
            }
            else {
                filter = {};
                filter.order = ['createdDate Desc'];
            }
            return this.orderRatingsRepository.find(filter);
        });
    }
    updateAll(orderRatings, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orderRatingsRepository.updateAll(orderRatings, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orderRatingsRepository.findById(id, filter);
        });
    }
    updateById(id, orderRatings) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderRatingsRepository.updateById(id, orderRatings);
        });
    }
    replaceById(id, orderRatings) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderRatingsRepository.replaceById(id, orderRatings);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderRatingsRepository.deleteById(id);
        });
    }
};
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.post('/order-ratings', {
        responses: {
            '200': {
                description: 'OrderRatings model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.OrderRatings) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.OrderRatings, {
                    title: 'NewOrderRatings',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], OrderRatingsController.prototype, "create", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/order-ratings/count', {
        responses: {
            '200': {
                description: 'OrderRatings model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.OrderRatings))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderRatingsController.prototype, "count", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/order-ratings', {
        responses: {
            '200': {
                description: 'Array of OrderRatings model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.OrderRatings, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.OrderRatings))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderRatingsController.prototype, "find", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/order-ratings', {
        responses: {
            '200': {
                description: 'OrderRatings PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.OrderRatings, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.OrderRatings))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.OrderRatings, Object]),
    __metadata("design:returntype", Promise)
], OrderRatingsController.prototype, "updateAll", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/order-ratings/{id}', {
        responses: {
            '200': {
                description: 'OrderRatings model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.OrderRatings, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.OrderRatings))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrderRatingsController.prototype, "findById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/order-ratings/{id}', {
        responses: {
            '204': {
                description: 'OrderRatings PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.OrderRatings, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.OrderRatings]),
    __metadata("design:returntype", Promise)
], OrderRatingsController.prototype, "updateById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.put('/order-ratings/{id}', {
        responses: {
            '204': {
                description: 'OrderRatings PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.OrderRatings]),
    __metadata("design:returntype", Promise)
], OrderRatingsController.prototype, "replaceById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.del('/order-ratings/{id}', {
        responses: {
            '204': {
                description: 'OrderRatings DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderRatingsController.prototype, "deleteById", null);
OrderRatingsController = __decorate([
    __param(0, repository_1.repository(repositories_1.OrderRatingsRepository)),
    __param(1, repository_1.repository(repositories_1.OrdersRepository)),
    __metadata("design:paramtypes", [repositories_1.OrderRatingsRepository,
        repositories_1.OrdersRepository])
], OrderRatingsController);
exports.OrderRatingsController = OrderRatingsController;
//# sourceMappingURL=order-ratings.controller.js.map
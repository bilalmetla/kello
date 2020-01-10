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
let OrdersController = class OrdersController {
    constructor(ordersRepository) {
        this.ordersRepository = ordersRepository;
    }
    create(orders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ordersRepository.create(orders);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ordersRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ordersRepository.find(filter);
        });
    }
    updateAll(orders, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ordersRepository.updateAll(orders, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ordersRepository.findById(id, filter);
        });
    }
    updateById(id, orders) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ordersRepository.updateById(id, orders);
        });
    }
    replaceById(id, orders) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ordersRepository.replaceById(id, orders);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ordersRepository.deleteById(id);
        });
    }
    orderDelevered(id, where) {
        return __awaiter(this, void 0, void 0, function* () {
            let orders;
            orders = {
                "isDelivered": true,
                "orderStatus": "Completed",
            };
            let orderUpdated = yield this.ordersRepository.updateById(id, orders);
            console.log("orderUpdated: ", orderUpdated);
            return { id };
        });
    }
};
__decorate([
    rest_1.post('/orders', {
        responses: {
            '200': {
                description: 'Orders model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Orders) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Orders, {
                    title: 'NewOrders',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "create", null);
__decorate([
    rest_1.get('/orders/count', {
        responses: {
            '200': {
                description: 'Orders model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Orders))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "count", null);
__decorate([
    rest_1.get('/orders', {
        responses: {
            '200': {
                description: 'Array of Orders model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Orders, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Orders))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "find", null);
__decorate([
    rest_1.patch('/orders', {
        responses: {
            '200': {
                description: 'Orders PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Orders, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Orders))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Orders, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/orders/{id}', {
        responses: {
            '200': {
                description: 'Orders model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Orders, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Orders))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "findById", null);
__decorate([
    rest_1.patch('/orders/{id}', {
        responses: {
            '200': {
                description: 'Orders PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Orders, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Orders]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "updateById", null);
__decorate([
    rest_1.put('/orders/{id}', {
        responses: {
            '204': {
                description: 'Orders PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Orders]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/orders/{id}', {
        responses: {
            '200': {
                description: 'Orders DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "deleteById", null);
__decorate([
    rest_1.patch('/orders/{id}/delevered', {
        responses: {
            '200': {
                description: 'Order Delivered',
                content: {
                    'application/json': {
                        schema: { type: 'object', properties: { id: { type: "string" } } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Orders))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "orderDelevered", null);
OrdersController = __decorate([
    __param(0, repository_1.repository(repositories_1.OrdersRepository)),
    __metadata("design:paramtypes", [repositories_1.OrdersRepository])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map
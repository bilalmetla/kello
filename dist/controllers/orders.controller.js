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
            if (filter) {
                filter.order = ['orderTime Desc'];
            }
            else {
                filter = {};
                filter.order = ['orderTime Desc'];
            }
            filter.limit = 30;
            //filter.include = [{relation:'customers'}]
            filter.include = [{ "relation": 'customers',
                    scope: { fields: { "id": true, "name": true, "phone": true } } }
            ];
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
            // if(filter){
            //   filter.include = [{"relation": 'partners'}];
            // }else{
            //   filter = {};
            //   filter.include = [{"relation": 'partners'}];
            // }
            if (!filter) {
                filter = {};
            }
            filter.include = [{ "relation": 'partners' },
                { "relation": 'customers', scope: { fields: { "id": true, "name": true, "phone": true } } }
            ];
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
    //@secured(SecuredType.IS_AUTHENTICATED)
    // @patch('/orders/{id}/delevered', {
    //   responses: {
    //     '200': {
    //       description: 'Order Delivered',
    //       content: {
    //         'application/json': {
    //           schema: {type: 'object', properties:{id: {type: "string"} }},
    //         },
    //       },
    //     },
    //   },
    // })
    // async orderDelevered(    
    //   @param.path.string('id') id: string,
    //   @param.query.object('where', getWhereSchemaFor(Orders)) where?: Where<Orders>,
    // ): Promise<object> {
    //   let orders;
    //   orders = {
    //       "isDelivered": true,
    //       "orderStatus": "Completed",
    //       "completionTime": new Date(),
    //   };
    //   await this.ordersRepository.updateById(id, orders);
    //   //logger.debug("orderUpdated: ", orderUpdated);
    //  // orders.id = id;
    //   return {id: id, isDelivered: orders.isDelivered, orderStatus: orders.orderStatus};
    // }
    //@secured(SecuredType.IS_AUTHENTICATED)
    // @patch('customers/{customersId}/orders/{id}/cancellation', {
    //   responses: {
    //     '200': {
    //       description: 'Order Delivered',
    //       content: {
    //         'application/json': {
    //           schema: {type: 'object', properties:{id: {type: "string"} }},
    //         },
    //       },
    //     },
    //   },
    // })
    // async orderCancellation(    
    //   @param.path.string('customersId') customersId: string,
    //   @param.path.string('id') id: string,
    // ): Promise<object> {
    //   let orders;
    //   orders = {        
    //       "orderStatus": "Cancelled",
    //       "isCancelled": true,
    //   };
    //   //await this.ordersRepository.updateAll({where: {and:[{id:id}, {customersId: customersId}]} }, orders)
    //   await this.ordersRepository.updateById(id, orders);
    //   return {id: id, orderStatus: orders.orderStatus, isCancelled: orders.isCancelled};
    // }
    // @secured(SecuredType.IS_AUTHENTICATED)
    // @put('/orders/{id}/startProgress', {
    //   responses: {
    //     '200': {
    //       description: 'Order Delivered',
    //       content: {
    //         'application/json': {
    //           schema: {type: 'object', properties:{id: {type: "string"} }},
    //         },
    //       },
    //     },
    //   },
    // })
    // async orderStartProgress(       
    //   @param.path.string('id') id: string,
    // ): Promise<object> {
    //   let orders;
    //   orders = {        
    //       "orderStatus": "InProgress",
    //       "startProgressTime": new Date()        
    //   };
    //   await this.ordersRepository.updateById(id, orders)
    //   return {id: id, orderStatus: orders.orderStatus};;
    // }
    orderHistory(customersId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ordersRepository.find({ where: { customersId: customersId } });
        });
    }
    partnerOrderPending(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            var previousday = new Date();
            previousday.setDate(previousday.getDate() - 1);
            if (!filter) {
                filter = {};
            }
            filter.order = ['orderTime Desc'];
            filter.where = { and: [{ or: [{ orderStatus: 'Pending' }, { orderStatus: 'InProgress' }] }, { orderTime: { gte: previousday } }, { deliveredById: id }] };
            filter.limit = 20;
            filter.include = [{ "relation": 'customers',
                    scope: { fields: { "id": true, "name": true, "phone": true } } }];
            return yield this.ordersRepository.find(filter);
        });
    }
    partnerOrderHistory(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            var previousday = new Date();
            previousday.setDate(previousday.getDate() - 1);
            if (!filter) {
                filter = {};
            }
            filter.order = ['completionTime Desc'];
            filter.where = { and: [{ orderStatus: 'Completed' }, { completionTime: { gte: previousday } }, { deliveredById: id }] };
            filter.limit = 20;
            filter.include = [{ "relation": 'customers',
                    scope: { fields: { "id": true, "name": true, "phone": true } } }];
            return yield this.ordersRepository.find(filter);
        });
    }
    updateQuantity(id, productId, quantity, orders) {
        return __awaiter(this, void 0, void 0, function* () {
            let order = yield this.ordersRepository.findById(id);
            let pro;
            let index;
            // let price : number = 0;
            //let oldQty :number = 0;
            order.items.forEach((p, index) => {
                if (p.productId === productId) {
                    //oldQty = p.quantity;
                    p.quantity = quantity;
                    pro = p;
                    index = index;
                    //  price = p.price;
                    //order.items[index] = p;
                }
            });
            //let oldPrice = oldQty * price;
            //let newPrice = quantity * price;
            //order.totalBillAmount = order.totalBillAmount-oldPrice;
            //order.totalBillAmount = order.totalBillAmount+ newPrice;
            order.items[index] = pro;
            console.log('order.totalBillAmount:', order.totalBillAmount);
            console.log(JSON.stringify(order.items));
            orders.items.forEach((element, index) => {
                if (index === 0) {
                    order.totalBillAmount = element.quantity * element.price;
                }
                else {
                    orders.totalBillAmount = orders.totalBillAmount + (element.quantity * element.price);
                }
            });
            yield this.ordersRepository.updateById(id, order);
            return { message: "updated product quantity", productId, orderId: id };
        });
    }
};
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
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
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
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
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
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
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
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
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
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
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
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
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
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
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
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
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('customers/{customersId}/orders/history', {
        responses: {
            '200': {
                description: 'Order History',
                content: {
                    'application/json': {
                        schema: { type: 'object', properties: { customersId: { type: "string" } } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('customersId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "orderHistory", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/partners/{id}/orders/pending', {
        responses: {
            '200': {
                description: 'Order History',
                content: {
                    'application/json': {
                        schema: { type: 'object', properties: { id: { type: "string" } } },
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
], OrdersController.prototype, "partnerOrderPending", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/partners/{id}/orders/history', {
        responses: {
            '200': {
                description: 'Partner Order History',
                content: {
                    'application/json': {
                        schema: { type: 'object', properties: { id: { type: "string" } } },
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
], OrdersController.prototype, "partnerOrderHistory", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/orders/{id}/products/{productId}/{quantity}', {
        responses: {
            '200': {
                description: 'Orders PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.path.string('productId')),
    __param(2, rest_1.param.path.string('quantity')),
    __param(3, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Orders, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, models_1.Orders]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "updateQuantity", null);
OrdersController = __decorate([
    __param(0, repository_1.repository(repositories_1.OrdersRepository)),
    __metadata("design:paramtypes", [repositories_1.OrdersRepository])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map
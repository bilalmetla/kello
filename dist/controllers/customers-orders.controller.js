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
const constants_1 = require("../constants");
let CustomersOrdersController = class CustomersOrdersController {
    constructor(customersRepository, partnersRepository, productsRepository, orderdetailsRepository, ordersRepository) {
        this.customersRepository = customersRepository;
        this.partnersRepository = partnersRepository;
        this.productsRepository = productsRepository;
        this.orderdetailsRepository = orderdetailsRepository;
        this.ordersRepository = ordersRepository;
    }
    find(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.customersRepository.orders(id).find({ where: { customersId: id } });
            //console.log('fetching orders');
            //   return this.ordersRepository.find({
            //         where: {customersId : '5dc97f1aa3434647421ebef7'}
            //     }
            // )
        });
    }
    create(id, orders) {
        return __awaiter(this, void 0, void 0, function* () {
            //return this.customersRepository.orders(id).create(orders);
            // fetch nearest partner
            //const partners = (this.partnersRepository.dataSource.connector as any).collection("Partners");
            if (!this.partnersRepository.dataSource.connected) {
                yield this.partnersRepository.dataSource.connect();
            }
            const partners = this.partnersRepository.dataSource.connector.collection("Partners");
            //  await new Promise((resolve, reject) => {
            //   partners.on('index', (error: any) => error ? reject(error) : resolve());
            //     });
            let nearestPartner = yield partners.aggregate([
                {
                    $geoNear: {
                        near: {
                            type: "Point",
                            coordinates: orders.location.coordinates
                        },
                        distanceField: "dist.calcDistance",
                        includeLocs: "dist.location",
                        // maxDistance: 2400,
                        spherical: true,
                    }
                },
                { $limit: 1 }
            ]).get();
            if (!nearestPartner || nearestPartner.length === 0) {
                return constants_1.CONSTANTS.HAWKER_NOT_AVAILABLE;
            }
            nearestPartner = nearestPartner[0];
            console.log('nearestPartner ..');
            console.log(JSON.stringify(nearestPartner));
            orders.customersId = id;
            orders.orderStatus = 'Pending';
            orders.orderCategory = 'CUSTOMERS';
            orders.partnersId = nearestPartner._id || nearestPartner.id;
            let items = JSON.parse(JSON.stringify(orders.items));
            const createdOrder = yield this.customersRepository.orders(id).create(orders);
            let orderId;
            if (!createdOrder) {
                return constants_1.CONSTANTS.ORDER_NOT_PLACED;
            }
            if (createdOrder.id) {
                orderId = createdOrder.id.toString();
            }
            let productIds = items.map((it) => {
                return { id: it.productId };
            });
            console.log('productids ', JSON.stringify(productIds));
            let products = yield this.productsRepository.find({
                where: { or: productIds },
            });
            console.log('products for order ');
            console.log(JSON.stringify(products));
            let orderdetailList;
            orderdetailList = [];
            // let orderdetailList =  Orderdetails;
            products.forEach((pro, index) => {
                let orderdetail = new models_1.Orderdetails();
                orderdetail.ordersId = orderId;
                orderdetail.quantity = items[index].quantity;
                orderdetail.productsId = items[index].productId;
                orderdetail.retailPrice = pro.retailPrice;
                orderdetail.salePrice = pro.salePrice;
                orderdetail.purchasePrice = pro.buyingPrice;
                orderdetail.retailPriceUnitsId = pro.retailPiceUnitsId;
                orderdetail.purchasePriceUnitsId = pro.buyingPriceUnitsId;
                orderdetail.salePriceUnitsId = pro.salePriceUnitsId;
                orderdetailList.push(orderdetail);
            });
            console.log('orderdetailList ');
            console.log(JSON.stringify(orderdetailList));
            // orderdetailList = asd;
            if (orderdetailList.length > 0) {
                let orderDetailCreated = yield this.orderdetailsRepository.createAll(orderdetailList);
                console.log('orderDetailCreated ', JSON.stringify(orderDetailCreated));
            }
            return { order: createdOrder, partner: nearestPartner };
        });
    }
    patch(id, orders, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.customersRepository.orders(id).patch(orders, where);
        });
    }
    delete(id, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.customersRepository.orders(id).delete(where);
        });
    }
};
__decorate([
    rest_1.get('/customers/{id}/orders', {
        responses: {
            '200': {
                description: 'Array of Orders\'s belonging to Customers',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Orders) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CustomersOrdersController.prototype, "find", null);
__decorate([
    rest_1.post('/customers/{id}/orders', {
        responses: {
            '200': {
                description: 'Customers model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Orders) } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Orders, {
                    title: 'NewOrdersInCustomers',
                    exclude: ['id'],
                    optional: ['customersId']
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CustomersOrdersController.prototype, "create", null);
__decorate([
    rest_1.patch('/customers/{id}/orders', {
        responses: {
            '200': {
                description: 'Customers.Orders PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
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
    __param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Orders))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], CustomersOrdersController.prototype, "patch", null);
__decorate([
    rest_1.del('/customers/{id}/orders', {
        responses: {
            '200': {
                description: 'Customers.Orders DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Orders))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CustomersOrdersController.prototype, "delete", null);
CustomersOrdersController = __decorate([
    __param(0, repository_1.repository(repositories_1.CustomersRepository)),
    __param(1, repository_1.repository(repositories_1.PartnersRepository)),
    __param(2, repository_1.repository(repositories_1.ProductsRepository)),
    __param(3, repository_1.repository(repositories_1.OrderdetailsRepository)),
    __param(4, repository_1.repository(repositories_1.OrdersRepository)),
    __metadata("design:paramtypes", [repositories_1.CustomersRepository,
        repositories_1.PartnersRepository,
        repositories_1.ProductsRepository,
        repositories_1.OrderdetailsRepository,
        repositories_1.OrdersRepository])
], CustomersOrdersController);
exports.CustomersOrdersController = CustomersOrdersController;
//# sourceMappingURL=customers-orders.controller.js.map
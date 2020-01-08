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
let OrdersOrderdetailsController = class OrdersOrderdetailsController {
    constructor(ordersRepository) {
        this.ordersRepository = ordersRepository;
    }
    find(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ordersRepository.orderdetails(id).find(filter);
        });
    }
    create(id, orderdetails) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ordersRepository.orderdetails(id).create(orderdetails);
        });
    }
    patch(id, orderdetails, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ordersRepository.orderdetails(id).patch(orderdetails, where);
        });
    }
    delete(id, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ordersRepository.orderdetails(id).delete(where);
        });
    }
};
__decorate([
    rest_1.get('/orders/{id}/orderdetails', {
        responses: {
            '200': {
                description: 'Array of Orderdetails\'s belonging to Orders',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Orderdetails) },
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
], OrdersOrderdetailsController.prototype, "find", null);
__decorate([
    rest_1.post('/orders/{id}/orderdetails', {
        responses: {
            '200': {
                description: 'Orders model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Orderdetails) } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Orderdetails, {
                    title: 'NewOrderdetailsInOrders',
                    exclude: ['id'],
                    optional: ['ordersId']
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrdersOrderdetailsController.prototype, "create", null);
__decorate([
    rest_1.patch('/orders/{id}/orderdetails', {
        responses: {
            '200': {
                description: 'Orders.Orderdetails PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Orderdetails, { partial: true }),
            },
        },
    })),
    __param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Orderdetails))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], OrdersOrderdetailsController.prototype, "patch", null);
__decorate([
    rest_1.del('/orders/{id}/orderdetails', {
        responses: {
            '200': {
                description: 'Orders.Orderdetails DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Orderdetails))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrdersOrderdetailsController.prototype, "delete", null);
OrdersOrderdetailsController = __decorate([
    __param(0, repository_1.repository(repositories_1.OrdersRepository)),
    __metadata("design:paramtypes", [repositories_1.OrdersRepository])
], OrdersOrderdetailsController);
exports.OrdersOrderdetailsController = OrdersOrderdetailsController;
//# sourceMappingURL=orders-orderdetails.controller.js.map
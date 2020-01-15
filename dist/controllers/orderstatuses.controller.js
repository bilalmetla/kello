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
let OrderstatusesController = class OrderstatusesController {
    constructor(orderstatusesRepository) {
        this.orderstatusesRepository = orderstatusesRepository;
    }
    create(orderstatuses) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orderstatusesRepository.create(orderstatuses);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orderstatusesRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orderstatusesRepository.find(filter);
        });
    }
    updateAll(orderstatuses, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orderstatusesRepository.updateAll(orderstatuses, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orderstatusesRepository.findById(id, filter);
        });
    }
    updateById(id, orderstatuses) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderstatusesRepository.updateById(id, orderstatuses);
        });
    }
    replaceById(id, orderstatuses) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderstatusesRepository.replaceById(id, orderstatuses);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderstatusesRepository.deleteById(id);
        });
    }
};
__decorate([
    rest_1.post('/orderstatuses', {
        responses: {
            '200': {
                description: 'Orderstatuses model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Orderstatuses) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Orderstatuses, {
                    title: 'NewOrderstatuses',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderstatusesController.prototype, "create", null);
__decorate([
    rest_1.get('/orderstatuses/count', {
        responses: {
            '200': {
                description: 'Orderstatuses model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Orderstatuses))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderstatusesController.prototype, "count", null);
__decorate([
    rest_1.get('/orderstatuses', {
        responses: {
            '200': {
                description: 'Array of Orderstatuses model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Orderstatuses, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Orderstatuses))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderstatusesController.prototype, "find", null);
__decorate([
    rest_1.patch('/orderstatuses', {
        responses: {
            '200': {
                description: 'Orderstatuses PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Orderstatuses, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Orderstatuses))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Orderstatuses, Object]),
    __metadata("design:returntype", Promise)
], OrderstatusesController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/orderstatuses/{id}', {
        responses: {
            '200': {
                description: 'Orderstatuses model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Orderstatuses, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Orderstatuses))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrderstatusesController.prototype, "findById", null);
__decorate([
    rest_1.patch('/orderstatuses/{id}', {
        responses: {
            '204': {
                description: 'Orderstatuses PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Orderstatuses, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Orderstatuses]),
    __metadata("design:returntype", Promise)
], OrderstatusesController.prototype, "updateById", null);
__decorate([
    rest_1.put('/orderstatuses/{id}', {
        responses: {
            '204': {
                description: 'Orderstatuses PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Orderstatuses]),
    __metadata("design:returntype", Promise)
], OrderstatusesController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/orderstatuses/{id}', {
        responses: {
            '204': {
                description: 'Orderstatuses DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderstatusesController.prototype, "deleteById", null);
OrderstatusesController = __decorate([
    __param(0, repository_1.repository(repositories_1.OrderstatusesRepository)),
    __metadata("design:paramtypes", [repositories_1.OrderstatusesRepository])
], OrderstatusesController);
exports.OrderstatusesController = OrderstatusesController;
//# sourceMappingURL=orderstatuses.controller.js.map
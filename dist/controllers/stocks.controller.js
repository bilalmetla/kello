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
let StocksController = class StocksController {
    constructor(stockRepository) {
        this.stockRepository = stockRepository;
    }
    create(stock) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.stockRepository.create(stock);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.stockRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.stockRepository.find(filter);
        });
    }
    updateAll(stock, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.stockRepository.updateAll(stock, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.stockRepository.findById(id, filter);
        });
    }
    updateById(id, stock) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.stockRepository.updateById(id, stock);
        });
    }
    replaceById(id, stock) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.stockRepository.replaceById(id, stock);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.stockRepository.deleteById(id);
        });
    }
};
__decorate([
    rest_1.post('/stocks', {
        responses: {
            '200': {
                description: 'Stock model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Stock) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Stock, {
                    title: 'NewStock',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StocksController.prototype, "create", null);
__decorate([
    rest_1.get('/stocks/count', {
        responses: {
            '200': {
                description: 'Stock model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Stock))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StocksController.prototype, "count", null);
__decorate([
    rest_1.get('/stocks', {
        responses: {
            '200': {
                description: 'Array of Stock model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Stock, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Stock))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StocksController.prototype, "find", null);
__decorate([
    rest_1.patch('/stocks', {
        responses: {
            '200': {
                description: 'Stock PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Stock, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Stock))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Stock, Object]),
    __metadata("design:returntype", Promise)
], StocksController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/stocks/{id}', {
        responses: {
            '200': {
                description: 'Stock model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Stock, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Stock))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StocksController.prototype, "findById", null);
__decorate([
    rest_1.patch('/stocks/{id}', {
        responses: {
            '204': {
                description: 'Stock PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Stock, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Stock]),
    __metadata("design:returntype", Promise)
], StocksController.prototype, "updateById", null);
__decorate([
    rest_1.put('/stocks/{id}', {
        responses: {
            '204': {
                description: 'Stock PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Stock]),
    __metadata("design:returntype", Promise)
], StocksController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/stocks/{id}', {
        responses: {
            '204': {
                description: 'Stock DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StocksController.prototype, "deleteById", null);
StocksController = __decorate([
    __param(0, repository_1.repository(repositories_1.StockRepository)),
    __metadata("design:paramtypes", [repositories_1.StockRepository])
], StocksController);
exports.StocksController = StocksController;
//# sourceMappingURL=stocks.controller.js.map
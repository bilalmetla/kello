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
let ProducttypesController = class ProducttypesController {
    constructor(producttypesRepository) {
        this.producttypesRepository = producttypesRepository;
    }
    create(producttypes) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.producttypesRepository.create(producttypes);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.producttypesRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.producttypesRepository.find(filter);
        });
    }
    updateAll(producttypes, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.producttypesRepository.updateAll(producttypes, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.producttypesRepository.findById(id, filter);
        });
    }
    updateById(id, producttypes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.producttypesRepository.updateById(id, producttypes);
        });
    }
    replaceById(id, producttypes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.producttypesRepository.replaceById(id, producttypes);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.producttypesRepository.deleteById(id);
        });
    }
};
__decorate([
    rest_1.post('/producttypes', {
        responses: {
            '200': {
                description: 'Producttypes model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Producttypes) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Producttypes, {
                    title: 'NewProducttypes',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProducttypesController.prototype, "create", null);
__decorate([
    rest_1.get('/producttypes/count', {
        responses: {
            '200': {
                description: 'Producttypes model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Producttypes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProducttypesController.prototype, "count", null);
__decorate([
    rest_1.get('/producttypes', {
        responses: {
            '200': {
                description: 'Array of Producttypes model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Producttypes, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Producttypes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProducttypesController.prototype, "find", null);
__decorate([
    rest_1.patch('/producttypes', {
        responses: {
            '200': {
                description: 'Producttypes PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Producttypes, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Producttypes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Producttypes, Object]),
    __metadata("design:returntype", Promise)
], ProducttypesController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/producttypes/{id}', {
        responses: {
            '200': {
                description: 'Producttypes model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Producttypes, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Producttypes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProducttypesController.prototype, "findById", null);
__decorate([
    rest_1.patch('/producttypes/{id}', {
        responses: {
            '204': {
                description: 'Producttypes PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Producttypes, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Producttypes]),
    __metadata("design:returntype", Promise)
], ProducttypesController.prototype, "updateById", null);
__decorate([
    rest_1.put('/producttypes/{id}', {
        responses: {
            '204': {
                description: 'Producttypes PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Producttypes]),
    __metadata("design:returntype", Promise)
], ProducttypesController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/producttypes/{id}', {
        responses: {
            '204': {
                description: 'Producttypes DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProducttypesController.prototype, "deleteById", null);
ProducttypesController = __decorate([
    __param(0, repository_1.repository(repositories_1.ProducttypesRepository)),
    __metadata("design:paramtypes", [repositories_1.ProducttypesRepository])
], ProducttypesController);
exports.ProducttypesController = ProducttypesController;
//# sourceMappingURL=producttypes.controller.js.map
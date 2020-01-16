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
let PromotiontypeController = class PromotiontypeController {
    constructor(promotiontypeRepository) {
        this.promotiontypeRepository = promotiontypeRepository;
    }
    create(promotiontype) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.promotiontypeRepository.create(promotiontype);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.promotiontypeRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.promotiontypeRepository.find(filter);
        });
    }
    updateAll(promotiontype, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.promotiontypeRepository.updateAll(promotiontype, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.promotiontypeRepository.findById(id, filter);
        });
    }
    updateById(id, promotiontype) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.promotiontypeRepository.updateById(id, promotiontype);
        });
    }
    replaceById(id, promotiontype) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.promotiontypeRepository.replaceById(id, promotiontype);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.promotiontypeRepository.deleteById(id);
        });
    }
};
__decorate([
    rest_1.post('/promotiontypes', {
        responses: {
            '200': {
                description: 'Promotiontype model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Promotiontype) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Promotiontype, {
                    title: 'NewPromotiontype',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PromotiontypeController.prototype, "create", null);
__decorate([
    rest_1.get('/promotiontypes/count', {
        responses: {
            '200': {
                description: 'Promotiontype model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Promotiontype))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PromotiontypeController.prototype, "count", null);
__decorate([
    rest_1.get('/promotiontypes', {
        responses: {
            '200': {
                description: 'Array of Promotiontype model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Promotiontype, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Promotiontype))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PromotiontypeController.prototype, "find", null);
__decorate([
    rest_1.patch('/promotiontypes', {
        responses: {
            '200': {
                description: 'Promotiontype PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Promotiontype, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Promotiontype))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Promotiontype, Object]),
    __metadata("design:returntype", Promise)
], PromotiontypeController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/promotiontypes/{id}', {
        responses: {
            '200': {
                description: 'Promotiontype model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Promotiontype, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Promotiontype))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PromotiontypeController.prototype, "findById", null);
__decorate([
    rest_1.patch('/promotiontypes/{id}', {
        responses: {
            '204': {
                description: 'Promotiontype PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Promotiontype, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Promotiontype]),
    __metadata("design:returntype", Promise)
], PromotiontypeController.prototype, "updateById", null);
__decorate([
    rest_1.put('/promotiontypes/{id}', {
        responses: {
            '204': {
                description: 'Promotiontype PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Promotiontype]),
    __metadata("design:returntype", Promise)
], PromotiontypeController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/promotiontypes/{id}', {
        responses: {
            '204': {
                description: 'Promotiontype DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PromotiontypeController.prototype, "deleteById", null);
PromotiontypeController = __decorate([
    __param(0, repository_1.repository(repositories_1.PromotiontypeRepository)),
    __metadata("design:paramtypes", [repositories_1.PromotiontypeRepository])
], PromotiontypeController);
exports.PromotiontypeController = PromotiontypeController;
//# sourceMappingURL=promotiontype.controller.js.map
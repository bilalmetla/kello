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
let PartnertypesController = class PartnertypesController {
    constructor(partnertypesRepository) {
        this.partnertypesRepository = partnertypesRepository;
    }
    create(partnertypes) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.partnertypesRepository.create(partnertypes);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.partnertypesRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.partnertypesRepository.find(filter);
        });
    }
    updateAll(partnertypes, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.partnertypesRepository.updateAll(partnertypes, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.partnertypesRepository.findById(id, filter);
        });
    }
    updateById(id, partnertypes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.partnertypesRepository.updateById(id, partnertypes);
        });
    }
    replaceById(id, partnertypes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.partnertypesRepository.replaceById(id, partnertypes);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.partnertypesRepository.deleteById(id);
        });
    }
};
__decorate([
    rest_1.post('/partnertypes', {
        responses: {
            '200': {
                description: 'Partnertypes model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Partnertypes) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Partnertypes, {
                    title: 'NewPartnertypes',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PartnertypesController.prototype, "create", null);
__decorate([
    rest_1.get('/partnertypes/count', {
        responses: {
            '200': {
                description: 'Partnertypes model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Partnertypes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PartnertypesController.prototype, "count", null);
__decorate([
    rest_1.get('/partnertypes', {
        responses: {
            '200': {
                description: 'Array of Partnertypes model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Partnertypes, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Partnertypes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PartnertypesController.prototype, "find", null);
__decorate([
    rest_1.patch('/partnertypes', {
        responses: {
            '200': {
                description: 'Partnertypes PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Partnertypes, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Partnertypes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Partnertypes, Object]),
    __metadata("design:returntype", Promise)
], PartnertypesController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/partnertypes/{id}', {
        responses: {
            '200': {
                description: 'Partnertypes model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Partnertypes, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Partnertypes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PartnertypesController.prototype, "findById", null);
__decorate([
    rest_1.patch('/partnertypes/{id}', {
        responses: {
            '204': {
                description: 'Partnertypes PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Partnertypes, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Partnertypes]),
    __metadata("design:returntype", Promise)
], PartnertypesController.prototype, "updateById", null);
__decorate([
    rest_1.put('/partnertypes/{id}', {
        responses: {
            '204': {
                description: 'Partnertypes PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Partnertypes]),
    __metadata("design:returntype", Promise)
], PartnertypesController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/partnertypes/{id}', {
        responses: {
            '204': {
                description: 'Partnertypes DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PartnertypesController.prototype, "deleteById", null);
PartnertypesController = __decorate([
    __param(0, repository_1.repository(repositories_1.PartnertypesRepository)),
    __metadata("design:paramtypes", [repositories_1.PartnertypesRepository])
], PartnertypesController);
exports.PartnertypesController = PartnertypesController;
//# sourceMappingURL=partnertypes.controller.js.map
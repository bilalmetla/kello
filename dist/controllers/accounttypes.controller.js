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
let AccounttypesController = class AccounttypesController {
    constructor(accounttypesRepository) {
        this.accounttypesRepository = accounttypesRepository;
    }
    create(accounttypes) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.accounttypesRepository.create(accounttypes);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.accounttypesRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.accounttypesRepository.find(filter);
        });
    }
    updateAll(accounttypes, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.accounttypesRepository.updateAll(accounttypes, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.accounttypesRepository.findById(id, filter);
        });
    }
    updateById(id, accounttypes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.accounttypesRepository.updateById(id, accounttypes);
        });
    }
    replaceById(id, accounttypes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.accounttypesRepository.replaceById(id, accounttypes);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.accounttypesRepository.deleteById(id);
        });
    }
};
__decorate([
    rest_1.post('/accounttypes', {
        responses: {
            '200': {
                description: 'Accounttypes model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Accounttypes) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Accounttypes, {
                    title: 'NewAccounttypes',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccounttypesController.prototype, "create", null);
__decorate([
    rest_1.get('/accounttypes/count', {
        responses: {
            '200': {
                description: 'Accounttypes model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Accounttypes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccounttypesController.prototype, "count", null);
__decorate([
    rest_1.get('/accounttypes', {
        responses: {
            '200': {
                description: 'Array of Accounttypes model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Accounttypes, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Accounttypes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccounttypesController.prototype, "find", null);
__decorate([
    rest_1.patch('/accounttypes', {
        responses: {
            '200': {
                description: 'Accounttypes PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Accounttypes, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Accounttypes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Accounttypes, Object]),
    __metadata("design:returntype", Promise)
], AccounttypesController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/accounttypes/{id}', {
        responses: {
            '200': {
                description: 'Accounttypes model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Accounttypes, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Accounttypes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AccounttypesController.prototype, "findById", null);
__decorate([
    rest_1.patch('/accounttypes/{id}', {
        responses: {
            '204': {
                description: 'Accounttypes PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Accounttypes, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Accounttypes]),
    __metadata("design:returntype", Promise)
], AccounttypesController.prototype, "updateById", null);
__decorate([
    rest_1.put('/accounttypes/{id}', {
        responses: {
            '204': {
                description: 'Accounttypes PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Accounttypes]),
    __metadata("design:returntype", Promise)
], AccounttypesController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/accounttypes/{id}', {
        responses: {
            '204': {
                description: 'Accounttypes DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccounttypesController.prototype, "deleteById", null);
AccounttypesController = __decorate([
    __param(0, repository_1.repository(repositories_1.AccounttypesRepository)),
    __metadata("design:paramtypes", [repositories_1.AccounttypesRepository])
], AccounttypesController);
exports.AccounttypesController = AccounttypesController;
//# sourceMappingURL=accounttypes.controller.js.map
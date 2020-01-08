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
let FeedbacktypesController = class FeedbacktypesController {
    constructor(feedbacktypesRepository) {
        this.feedbacktypesRepository = feedbacktypesRepository;
    }
    create(feedbacktypes) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.feedbacktypesRepository.create(feedbacktypes);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.feedbacktypesRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.feedbacktypesRepository.find(filter);
        });
    }
    updateAll(feedbacktypes, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.feedbacktypesRepository.updateAll(feedbacktypes, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.feedbacktypesRepository.findById(id, filter);
        });
    }
    updateById(id, feedbacktypes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.feedbacktypesRepository.updateById(id, feedbacktypes);
        });
    }
    replaceById(id, feedbacktypes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.feedbacktypesRepository.replaceById(id, feedbacktypes);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.feedbacktypesRepository.deleteById(id);
        });
    }
};
__decorate([
    rest_1.post('/feedbacktypes', {
        responses: {
            '200': {
                description: 'Feedbacktypes model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Feedbacktypes) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Feedbacktypes, {
                    title: 'NewFeedbacktypes',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FeedbacktypesController.prototype, "create", null);
__decorate([
    rest_1.get('/feedbacktypes/count', {
        responses: {
            '200': {
                description: 'Feedbacktypes model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Feedbacktypes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FeedbacktypesController.prototype, "count", null);
__decorate([
    rest_1.get('/feedbacktypes', {
        responses: {
            '200': {
                description: 'Array of Feedbacktypes model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Feedbacktypes, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Feedbacktypes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FeedbacktypesController.prototype, "find", null);
__decorate([
    rest_1.patch('/feedbacktypes', {
        responses: {
            '200': {
                description: 'Feedbacktypes PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Feedbacktypes, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Feedbacktypes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Feedbacktypes, Object]),
    __metadata("design:returntype", Promise)
], FeedbacktypesController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/feedbacktypes/{id}', {
        responses: {
            '200': {
                description: 'Feedbacktypes model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Feedbacktypes, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Feedbacktypes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FeedbacktypesController.prototype, "findById", null);
__decorate([
    rest_1.patch('/feedbacktypes/{id}', {
        responses: {
            '204': {
                description: 'Feedbacktypes PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Feedbacktypes, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Feedbacktypes]),
    __metadata("design:returntype", Promise)
], FeedbacktypesController.prototype, "updateById", null);
__decorate([
    rest_1.put('/feedbacktypes/{id}', {
        responses: {
            '204': {
                description: 'Feedbacktypes PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Feedbacktypes]),
    __metadata("design:returntype", Promise)
], FeedbacktypesController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/feedbacktypes/{id}', {
        responses: {
            '204': {
                description: 'Feedbacktypes DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FeedbacktypesController.prototype, "deleteById", null);
FeedbacktypesController = __decorate([
    __param(0, repository_1.repository(repositories_1.FeedbacktypesRepository)),
    __metadata("design:paramtypes", [repositories_1.FeedbacktypesRepository])
], FeedbacktypesController);
exports.FeedbacktypesController = FeedbacktypesController;
//# sourceMappingURL=feedbacktypes.controller.js.map
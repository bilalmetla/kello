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
let RatingReasonsController = class RatingReasonsController {
    constructor(ratingReasonsRepository) {
        this.ratingReasonsRepository = ratingReasonsRepository;
    }
    create(ratingReasons) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ratingReasonsRepository.create(ratingReasons);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ratingReasonsRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ratingReasonsRepository.find(filter);
        });
    }
    updateAll(ratingReasons, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ratingReasonsRepository.updateAll(ratingReasons, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ratingReasonsRepository.findById(id, filter);
        });
    }
    updateById(id, ratingReasons) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ratingReasonsRepository.updateById(id, ratingReasons);
        });
    }
    replaceById(id, ratingReasons) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ratingReasonsRepository.replaceById(id, ratingReasons);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ratingReasonsRepository.deleteById(id);
        });
    }
};
__decorate([
    rest_1.post('/rating-reasons', {
        responses: {
            '200': {
                description: 'RatingReasons model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.RatingReasons) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.RatingReasons, {
                    title: 'NewRatingReasons',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RatingReasonsController.prototype, "create", null);
__decorate([
    rest_1.get('/rating-reasons/count', {
        responses: {
            '200': {
                description: 'RatingReasons model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.RatingReasons))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RatingReasonsController.prototype, "count", null);
__decorate([
    rest_1.get('/rating-reasons', {
        responses: {
            '200': {
                description: 'Array of RatingReasons model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.RatingReasons, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.RatingReasons))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RatingReasonsController.prototype, "find", null);
__decorate([
    rest_1.patch('/rating-reasons', {
        responses: {
            '200': {
                description: 'RatingReasons PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.RatingReasons, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.RatingReasons))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.RatingReasons, Object]),
    __metadata("design:returntype", Promise)
], RatingReasonsController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/rating-reasons/{id}', {
        responses: {
            '200': {
                description: 'RatingReasons model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.RatingReasons, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.RatingReasons))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RatingReasonsController.prototype, "findById", null);
__decorate([
    rest_1.patch('/rating-reasons/{id}', {
        responses: {
            '204': {
                description: 'RatingReasons PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.RatingReasons, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.RatingReasons]),
    __metadata("design:returntype", Promise)
], RatingReasonsController.prototype, "updateById", null);
__decorate([
    rest_1.put('/rating-reasons/{id}', {
        responses: {
            '204': {
                description: 'RatingReasons PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.RatingReasons]),
    __metadata("design:returntype", Promise)
], RatingReasonsController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/rating-reasons/{id}', {
        responses: {
            '204': {
                description: 'RatingReasons DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RatingReasonsController.prototype, "deleteById", null);
RatingReasonsController = __decorate([
    __param(0, repository_1.repository(repositories_1.RatingReasonsRepository)),
    __metadata("design:paramtypes", [repositories_1.RatingReasonsRepository])
], RatingReasonsController);
exports.RatingReasonsController = RatingReasonsController;
//# sourceMappingURL=rating-reasons.controller.js.map
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const fs_1 = __importDefault(require("fs"));
const util_1 = __importDefault(require("util"));
const writeFilePromise = util_1.default.promisify(fs_1.default.writeFile);
const path_1 = __importDefault(require("path"));
const auth_1 = require("../auth");
const constants_1 = require("../constants");
const logger_1 = require("../logger");
let PromotionController = class PromotionController {
    constructor(promotionRepository, productsRepository) {
        this.promotionRepository = promotionRepository;
        this.productsRepository = productsRepository;
    }
    create(promotion) {
        return __awaiter(this, void 0, void 0, function* () {
            promotion.imageUrl = yield this.convertbase64image(promotion.title, promotion.image);
            delete promotion.image;
            return this.promotionRepository.create(promotion);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.promotionRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (filter) {
                filter.order = ['createdDate Desc'];
            }
            else {
                filter = {};
                filter.order = ['createdDate Desc'];
            }
            return this.promotionRepository.find(filter);
        });
    }
    updateAll(promotion, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.promotionRepository.updateAll(promotion, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.promotionRepository.findById(id, filter);
        });
    }
    updateById(id, promotion) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.promotionRepository.updateById(id, promotion);
        });
    }
    replaceById(id, promotion) {
        return __awaiter(this, void 0, void 0, function* () {
            if (promotion.image) {
                promotion.imageUrl = yield this.convertbase64image(promotion.title, promotion.image);
            }
            delete promotion.image;
            yield this.promotionRepository.replaceById(id, promotion);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.promotionRepository.deleteById(id);
        });
    }
    convertbase64image(imagename, image) {
        return __awaiter(this, void 0, void 0, function* () {
            let base64String = image;
            let base64Image = base64String.split(';base64,').pop();
            imagename = imagename.replace(/ /g, '_') + '.png';
            let imagePath = path_1.default.join(__dirname, '../../public/promotions/images/') + imagename;
            let imageUrl = '/promotions/images/' + imagename;
            yield writeFilePromise(imagePath, base64Image, { encoding: 'base64' });
            return imageUrl;
        });
    }
    applyPromotions(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const promo = yield this.promotionRepository.findById(id);
            if (!promo) {
                return constants_1.CONSTANTS.PEOMOTION_NOT_FOUND;
            }
            const session = this.productsRepository.dataSource.connector.client.startSession();
            session.startTransaction();
            const allproducts = yield this.productsRepository.find({
            // fields: {
            //   id: true,
            //   totalCost: true,
            //   retailPrice: true,
            //   } 
            });
            logger_1.winstonLogger.debug('all products', JSON.stringify(allproducts));
            for (let p of allproducts) {
                p.salePrice = Math.round(promo.isPromotionValueFixed ? p.retailPrice ? ((p.retailPrice / 100) * promo.promotionValue) : 0 : p.retailPrice ? p.retailPrice - promo.promotionValue : 0);
                const p_updated = yield this.productsRepository.updateAll(p, undefined, { session });
                logger_1.winstonLogger.debug('promotion updatedProducts', JSON.stringify(p_updated));
                if (!p_updated.count) {
                    yield session.abortTransaction();
                    session.endSession();
                    return constants_1.CONSTANTS.PRODUCT_NOT_UPDATED;
                }
            }
            promo.isActive = true;
            let updatedPricePlan = yield this.promotionRepository.updateAll(promo, undefined, { session });
            logger_1.winstonLogger.debug('price paln updatedPricePlan', JSON.stringify(updatedPricePlan));
            const se_resp = yield session.commitTransaction();
            session.endSession();
            logger_1.winstonLogger.debug(`session response ${se_resp}`);
            return { id };
        });
    }
    stoppromotions(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = this.productsRepository.dataSource.connector.client.startSession();
            session.startTransaction();
            const allproducts = yield this.productsRepository.find({
            // fields: {
            //   id: true,
            //   totalCost: true,
            //   retailPrice: true,
            //   } 
            });
            logger_1.winstonLogger.debug('all products', JSON.stringify(allproducts));
            for (let p of allproducts) {
                p.salePrice = 0;
                const p_updated = yield this.productsRepository.updateAll(p, undefined, { session });
                logger_1.winstonLogger.debug('promotion updatedProducts', JSON.stringify(p_updated));
                if (!p_updated.count) {
                    yield session.abortTransaction();
                    session.endSession();
                    return constants_1.CONSTANTS.PRODUCT_NOT_UPDATED; //todo 
                }
            }
            yield this.promotionRepository.updateById(id, { isActive: false });
            yield session.commitTransaction();
            session.endSession();
            return { id };
        });
    }
};
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.post('/promotions', {
        responses: {
            '200': {
                description: 'Promotion model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Promotion) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Promotion, {
                    title: 'NewPromotion',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "create", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/promotions/count', {
        responses: {
            '200': {
                description: 'Promotion model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Promotion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "count", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/promotions', {
        responses: {
            '200': {
                description: 'Array of Promotion model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Promotion, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Promotion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "find", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/promotions', {
        responses: {
            '200': {
                description: 'Promotion PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Promotion, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Promotion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Promotion, Object]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "updateAll", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/promotions/{id}', {
        responses: {
            '200': {
                description: 'Promotion model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Promotion, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Promotion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "findById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/promotions/{id}', {
        responses: {
            '204': {
                description: 'Promotion PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Promotion, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Promotion]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "updateById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.put('/promotions/{id}', {
        responses: {
            '204': {
                description: 'Promotion PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Promotion]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "replaceById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.del('/promotions/{id}', {
        responses: {
            '204': {
                description: 'Promotion DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "deleteById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.put('/promotions/{id}/apply', {
        responses: {
            '204': {
                description: 'promotions applied success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "applyPromotions", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.put('/promotions/{id}/stop', {
        responses: {
            '204': {
                description: 'promotions stoped success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "stoppromotions", null);
PromotionController = __decorate([
    __param(0, repository_1.repository(repositories_1.PromotionRepository)),
    __param(1, repository_1.repository(repositories_1.ProductsRepository)),
    __metadata("design:paramtypes", [repositories_1.PromotionRepository,
        repositories_1.ProductsRepository])
], PromotionController);
exports.PromotionController = PromotionController;
//# sourceMappingURL=promotion.controller.js.map
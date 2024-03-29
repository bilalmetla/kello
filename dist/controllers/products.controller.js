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
let ProductsController = class ProductsController {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    create(products) {
        return __awaiter(this, void 0, void 0, function* () {
            products.imageUrl = yield this.convertbase64image(products.displayName, products.image);
            delete products.image;
            return this.productsRepository.create(products);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productsRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (filter) {
                filter.order = ['displayingPeriority Asc'];
            }
            else {
                filter = {};
                filter.order = ['displayingPeriority Asc'];
            }
            // filter.where = {customersId:id};
            // filter.include = [{"relation": 'partners', 
            // scope: {fields :{"id": true, "name": true,"phone": true,"location": true,} } }
            // ];
            return this.productsRepository.find(filter);
        });
    }
    updateAll(products, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productsRepository.updateAll(products, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productsRepository.findById(id, filter);
        });
    }
    updateById(id, products) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.productsRepository.updateById(id, products);
        });
    }
    replaceById(id, products) {
        return __awaiter(this, void 0, void 0, function* () {
            if (products.image) {
                products.imageUrl = yield this.convertbase64image(products.displayName, products.image);
            }
            delete products.image;
            yield this.productsRepository.replaceById(id, products);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.productsRepository.deleteById(id);
        });
    }
    findByProductTypeId(producttypesId) {
        return __awaiter(this, void 0, void 0, function* () {
            //   let filter = {
            //     "where": { producttypesId },
            //     "fields": {}
            // };
            const filter = {};
            filter.where = { and: [{ producttypesId }, { isAvailable: true }] };
            filter.order = ['displayingPeriority Asc'];
            return this.productsRepository.find(filter);
        });
    }
    convertbase64image(imagename, image) {
        return __awaiter(this, void 0, void 0, function* () {
            let base64String = image;
            let base64Image = base64String.split(';base64,').pop();
            imagename = imagename.replace(/ /g, '') + '.png';
            let imagePath = path_1.default.join(__dirname, '../../public/products/images/') + imagename;
            let imageUrl = '/products/images/' + imagename;
            yield writeFilePromise(imagePath, base64Image, { encoding: 'base64' });
            return imageUrl;
        });
    }
};
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.post('/products', {
        responses: {
            '200': {
                description: 'Products model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Products) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Products, {
                    title: 'NewProducts',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "create", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/products/count', {
        responses: {
            '200': {
                description: 'Products model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Products))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "count", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/products', {
        responses: {
            '200': {
                description: 'Array of Products model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Products, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Products))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "find", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/products', {
        responses: {
            '200': {
                description: 'Products PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Products, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Products))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Products, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateAll", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/products/{id}', {
        responses: {
            '200': {
                description: 'Products model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Products, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Products))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/products/{id}', {
        responses: {
            '204': {
                description: 'Products PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Products, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Products]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.put('/products/{id}', {
        responses: {
            '204': {
                description: 'Products PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Products]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "replaceById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.del('/products/{id}', {
        responses: {
            '204': {
                description: 'Products DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/products/types/{producttypesId}', {
        responses: {
            '200': {
                description: 'Array of Products model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Products, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('producttypesId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findByProductTypeId", null);
ProductsController = __decorate([
    __param(0, repository_1.repository(repositories_1.ProductsRepository)),
    __metadata("design:paramtypes", [repositories_1.ProductsRepository])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map
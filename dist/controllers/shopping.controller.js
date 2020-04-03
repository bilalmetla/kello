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
const auth_1 = require("../auth");
let ShoppingController = class ShoppingController {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
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
    //@secured(SecuredType.IS_AUTHENTICATED)
    findByProductTypeId(producttypesId) {
        return __awaiter(this, void 0, void 0, function* () {
            //   let filter = {
            //     "where": { producttypesId },
            //     "fields": {}
            // };
            const filter = {};
            filter.where = { and: [{ producttypesId }, { isAvailable: true }] };
            filter.order = ['displayingPeriority Asc'];
            filter.fields = { id: true, displayName: true, producttypesId: true, imageUrl: true, retailPrice: true, retailPiceUnitsId: true };
            return this.productsRepository.find(filter);
        });
    }
};
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
], ShoppingController.prototype, "find", null);
__decorate([
    rest_1.get('/shopping/protucts/type/{producttypesId}', {
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
], ShoppingController.prototype, "findByProductTypeId", null);
ShoppingController = __decorate([
    __param(0, repository_1.repository(repositories_1.ProductsRepository)),
    __metadata("design:paramtypes", [repositories_1.ProductsRepository])
], ShoppingController);
exports.ShoppingController = ShoppingController;
//# sourceMappingURL=shopping.controller.js.map
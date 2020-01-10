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
const uuid = require("uuid");
const constants_1 = require("../constants");
let PartnersController = class PartnersController {
    constructor(partnersRepository, activationsRepository) {
        this.partnersRepository = partnersRepository;
        this.activationsRepository = activationsRepository;
    }
    create(partners) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.partnersRepository.create(partners);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.partnersRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.partnersRepository.find(filter);
        });
    }
    updateAll(partners, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.partnersRepository.updateAll(partners, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.partnersRepository.findById(id, filter);
        });
    }
    updateById(id, partners) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.partnersRepository.updateById(id, partners);
        });
    }
    replaceById(id, partners) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.partnersRepository.replaceById(id, partners);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.partnersRepository.deleteById(id);
        });
    }
    authenticate(partners) {
        return __awaiter(this, void 0, void 0, function* () {
            let phone = partners.phone;
            // let filter = getFilterSchemaFor(Customers);
            let filter = {
                "where": { phone },
                "fields": {
                    "id": true,
                    "name": true,
                    "phone": true,
                }
            };
            let foundCust = yield this.partnersRepository.find(filter);
            console.log(foundCust);
            if (foundCust && foundCust.length === 0) {
                partners.accessToken = uuid.v4();
                partners.isActivated = false;
                let today = new Date();
                let tomorrow = new Date();
                tomorrow.setDate(today.getDate() + 1);
                yield this.activationsRepository.create({ phone, smsCode: Math.floor(Math.random() * 899999 + 100000), expiry: tomorrow.toString() });
                let createdPartner = yield this.partnersRepository.create(partners);
                delete createdPartner.accessToken;
                return createdPartner;
                //throw new HttpErrors.Unauthorized('Please Activate via SMS CODE');    
            }
            else {
                let today = new Date();
                let tomorrow = new Date();
                tomorrow.setDate(today.getDate() + 1);
                yield this.activationsRepository.create({ phone, smsCode: Math.floor(Math.random() * 899999 + 100000), expiry: tomorrow.toString() });
                foundCust[0].isActivated = false;
                foundCust[0].accessToken = uuid.v4();
                yield this.partnersRepository.updateAll(foundCust[0], { phone });
                return foundCust[0];
            }
        });
    }
    activation(activations) {
        return __awaiter(this, void 0, void 0, function* () {
            let phone = activations.phone;
            let smsCode = activations.smsCode;
            let actRecord = yield this.activationsRepository.findOne({ "where": { phone, smsCode } });
            console.log(actRecord);
            if (actRecord) {
                let customer = { phone, isActivated: true };
                yield this.partnersRepository.updateAll(customer, { phone });
                yield this.activationsRepository.deleteAll({ phone });
                return yield this.partnersRepository.findOne({ "where": { phone } });
            }
            else {
                return constants_1.CONSTANTS.ACTIVATION_FAILED;
            }
        });
    }
    updatePartnerLocation(id, long, lat) {
        return __awaiter(this, void 0, void 0, function* () {
            let location;
            location = {
                type: "Point",
                coordinates: [parseFloat(long), parseFloat(lat)]
            };
            yield this.partnersRepository.updateById(id, { location: location });
            return { id };
        });
    }
};
__decorate([
    rest_1.post('/partners', {
        responses: {
            '200': {
                description: 'Partners model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Partners) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Partners, {
                    title: 'NewPartners',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "create", null);
__decorate([
    rest_1.get('/partners/count', {
        responses: {
            '200': {
                description: 'Partners model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Partners))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "count", null);
__decorate([
    rest_1.get('/partners', {
        responses: {
            '200': {
                description: 'Array of Partners model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Partners, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Partners))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "find", null);
__decorate([
    rest_1.patch('/partners', {
        responses: {
            '200': {
                description: 'Partners PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Partners, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Partners))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Partners, Object]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/partners/{id}', {
        responses: {
            '200': {
                description: 'Partners model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Partners, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Partners))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "findById", null);
__decorate([
    rest_1.patch('/partners/{id}', {
        responses: {
            '204': {
                description: 'Partners PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Partners, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Partners]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "updateById", null);
__decorate([
    rest_1.put('/partners/{id}', {
        responses: {
            '204': {
                description: 'Partners PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Partners]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/partners/{id}', {
        responses: {
            '204': {
                description: 'Partners DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "deleteById", null);
__decorate([
    rest_1.post('/partners/authenticate', {
        responses: {
            '200': {
                description: 'Partners model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Partners) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Partners, {
                    title: 'NewPartners',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "authenticate", null);
__decorate([
    rest_1.post('/partners/activate', {
        responses: {
            '200': {
                description: 'Partners model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Partners) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Activations, {
                    title: 'Activate Partner',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Activations]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "activation", null);
__decorate([
    rest_1.patch('/partners/{id}/location/{long}/{lat}', {
        responses: {
            '204': {
                description: 'Partners Location Updated Success',
                content: { 'application/json': { schema: { type: "object", properties: { id: { type: "string" } } } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.path.string('long')),
    __param(2, rest_1.param.path.string('lat')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "updatePartnerLocation", null);
PartnersController = __decorate([
    __param(0, repository_1.repository(repositories_1.PartnersRepository)),
    __param(1, repository_1.repository(repositories_1.ActivationsRepository)),
    __metadata("design:paramtypes", [repositories_1.PartnersRepository,
        repositories_1.ActivationsRepository])
], PartnersController);
exports.PartnersController = PartnersController;
//# sourceMappingURL=partners.controller.js.map
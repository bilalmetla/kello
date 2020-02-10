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
const constants_1 = require("../constants");
const auth_1 = require("../auth");
const uuid = require("uuid");
const util_1 = require("util");
const { sign } = require('jsonwebtoken');
const signAsync = util_1.promisify(sign);
const sendpk_1 = require("../sms/sendpk");
let CustomersController = class CustomersController {
    constructor(customersRepository, activationsRepository, userRepository) {
        this.customersRepository = customersRepository;
        this.activationsRepository = activationsRepository;
        this.userRepository = userRepository;
    }
    create(customers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.customersRepository.create(customers);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.customersRepository.count(where);
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
            return this.customersRepository.find(filter);
        });
    }
    updateAll(customers, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.customersRepository.updateAll(customers, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            // const session = (this.customersRepository.dataSource.connector as any).client.startSession();
            // session.startTransaction();
            // const customers = this.customersRepository.find(filter, {session});
            // const commit = await session.commitTransaction();
            // console.log('transaction commit', commit);
            // session.endSession();
            //  return customers;
            return this.customersRepository.findById(id, filter);
        });
    }
    updateById(id, customers) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.customersRepository.updateById(id, customers);
        });
    }
    replaceById(id, customers) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.customersRepository.replaceById(id, customers);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.customersRepository.deleteById(id);
        });
    }
    //@secured(SecuredType.IS_AUTHENTICATED)
    authenticate(customers) {
        return __awaiter(this, void 0, void 0, function* () {
            const sendPk = new sendpk_1.SendPk();
            customers.phone = parseInt(customers.phone, 10).toString();
            let phone = customers.phone;
            // let filter = getFilterSchemaFor(Customers);
            if (phone.length < 10) {
                return constants_1.CONSTANTS.INVALID_PHONE_NUMBER;
            }
            else if (phone.length == 10) {
                phone = "92" + phone;
            }
            else if (phone.length > 12) {
                return constants_1.CONSTANTS.INVALID_PHONE_NUMBER;
            }
            else if (phone.length <= 12 && phone.substring(0, 2) != "92") {
                return constants_1.CONSTANTS.INVALID_PHONE_NUMBER;
            }
            let filter = {
                "where": { phone },
                "fields": {
                    "id": true,
                    "name": true,
                    "phone": true,
                }
            };
            let foundCust = yield this.customersRepository.find(filter);
            console.log(foundCust);
            if (foundCust && foundCust.length === 0) {
                const tokenObject = { username: phone };
                let token = yield signAsync(tokenObject, auth_1.JWT_SECRET);
                customers.access_token = token;
                //customers.access_token = uuid.v4();
                customers.isActivated = false;
                let today = new Date();
                let tomorrow = new Date();
                tomorrow.setDate(today.getDate() + 1);
                let smsCode = Math.floor(Math.random() * 899999 + 100000);
                yield this.activationsRepository.create({ phone, smsCode: smsCode, expiry: tomorrow.toString() });
                const createdCustomer = yield this.customersRepository.create(customers);
                let user = yield this.userRepository.create({ username: phone });
                delete createdCustomer.access_token;
                //this.sendSMS();
                sendPk.sendOTP(smsCode, createdCustomer.phone);
                return createdCustomer;
                //return customer;
                //throw new HttpErrors.Unauthorized('Please Activate via SMS CODE');    
            }
            else {
                let today = new Date();
                let tomorrow = new Date();
                tomorrow.setDate(today.getDate() + 1);
                let smsCode = Math.floor(Math.random() * 899999 + 100000);
                yield this.activationsRepository.deleteAll({ phone });
                yield this.activationsRepository.create({ phone, smsCode: smsCode, expiry: tomorrow.toString() });
                foundCust[0].isActivated = false;
                yield this.customersRepository.updateAll(foundCust[0], { phone });
                //this.sendSMS(smsCode,foundCust[0].phone);
                sendPk.sendOTP(smsCode, foundCust[0].phone);
                delete foundCust[0].access_token;
                return foundCust[0];
            }
        });
    }
    //@secured(SecuredType.IS_AUTHENTICATED)
    activation(activations) {
        return __awaiter(this, void 0, void 0, function* () {
            let phone = activations.phone;
            let deviceId = activations.deviceId;
            let deviceToken = activations.deviceToken;
            let smsCode = activations.smsCode;
            let actRecord = yield this.activationsRepository.findOne({ "where": { phone, smsCode } });
            console.log(actRecord);
            if (actRecord) {
                let customer = { phone, isActivated: true, deviceId: deviceId, deviceToken: deviceToken };
                yield this.customersRepository.updateAll(customer, { phone });
                yield this.activationsRepository.deleteAll({ phone });
                const customerInfo = yield this.customersRepository.findOne({ "where": { phone } });
                return customerInfo;
            }
            else {
                return constants_1.CONSTANTS.ACTIVATION_FAILED;
            }
        });
    }
    sendSMS() {
        return __awaiter(this, void 0, void 0, function* () {
            // Download the helper library from https://www.twilio.com/docs/node/install
            // Your Account Sid and Auth Token from twilio.com/console
            // DANGER! This is insecure. See http://twil.io/secure
            // console.log('sending sms via twilio..');
            // const accountSid = 'ACeccf074eced9ed0be6a11fba3295228d';
            // const authToken = 'e6b969ab8a142a69f2ee6569c4240725';
            // const client = require('twilio')(accountSid, authToken);
            // client.messages
            //   .create({
            //      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
            //      from: '+15017122661',
            //      to:   '+923136604801'
            //    })
            //   .then( (message: any) => { 
            //     console.log(message.sid);
            //     return message;
            //   })
            //   .catch( (error: any) => console.log(error))
            //   }
        });
    }
};
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.post('/customers', {
        responses: {
            '200': {
                description: 'Customers model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Customers) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Customers, {
                    title: 'NewCustomers',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "create", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/customers/count', {
        responses: {
            '200': {
                description: 'Customers model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Customers))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "count", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/customers', {
        responses: {
            '200': {
                description: 'Array of Customers model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Customers, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Customers))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "find", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/customers', {
        responses: {
            '200': {
                description: 'Customers PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Customers, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Customers))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Customers, Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "updateAll", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/customers/{id}', {
        responses: {
            '200': {
                description: 'Customers model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Customers, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Customers))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "findById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/customers/{id}', {
        responses: {
            '204': {
                description: 'Customers PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Customers, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Customers]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "updateById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.put('/customers/{id}', {
        responses: {
            '204': {
                description: 'Customers PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Customers]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "replaceById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.del('/customers/{id}', {
        responses: {
            '204': {
                description: 'Customers DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "deleteById", null);
__decorate([
    rest_1.post('/customers/authenticate', {
        responses: {
            '204': {
                description: 'Please Activate via SMS CODE',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Customers) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Customers, {
                    title: 'NewCustomers',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "authenticate", null);
__decorate([
    rest_1.post('/customers/activate', {
        responses: {
            '204': {
                description: 'Customers model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Customers) } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Activations]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "activation", null);
CustomersController = __decorate([
    __param(0, repository_1.repository(repositories_1.CustomersRepository)),
    __param(1, repository_1.repository(repositories_1.ActivationsRepository)),
    __param(2, repository_1.repository(repositories_1.UserRepository)),
    __metadata("design:paramtypes", [repositories_1.CustomersRepository,
        repositories_1.ActivationsRepository,
        repositories_1.UserRepository])
], CustomersController);
exports.CustomersController = CustomersController;
//# sourceMappingURL=customers.controller.js.map
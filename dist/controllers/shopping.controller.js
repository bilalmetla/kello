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
const constants_1 = require("../constants");
const logger_1 = require("../logger");
const firebase_1 = require("../firebase");
const auth_1 = require("../auth");
const util_2 = require("util");
const { sign } = require('jsonwebtoken');
const signAsync = util_2.promisify(sign);
let ShoppingController = class ShoppingController {
    constructor(productsRepository, ordersRepository, customersRepository, producttypesRepository, partnersRepository, orderdetailsRepository, userRepository) {
        this.productsRepository = productsRepository;
        this.ordersRepository = ordersRepository;
        this.customersRepository = customersRepository;
        this.producttypesRepository = producttypesRepository;
        this.partnersRepository = partnersRepository;
        this.orderdetailsRepository = orderdetailsRepository;
        this.userRepository = userRepository;
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
            // const tokenObject = {username: "923356666761"};
            // let token = await signAsync(tokenObject, JWT_SECRET);
            // console.log("Access token of 923356666761", token);
            return this.productsRepository.find(filter);
        });
    }
    //@secured(SecuredType.IS_AUTHENTICATED)
    create(reqData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!reqData.web_customer || !reqData.web_customer.phone) {
                return constants_1.CONSTANTS.INVALID_PHONE_NUMBER;
            }
            let phone = this.validatePhone(reqData.web_customer.phone);
            if (!phone) {
                return constants_1.CONSTANTS.INVALID_PHONE_NUMBER;
            }
            let customer = new models_1.Customers();
            customer.name = reqData.web_customer.name;
            customer.phone = phone;
            customer.createdDate = new Date();
            customer.isWebRegistered = true;
            customer.isActivated = false;
            let ex_customer = yield this.customersRepository.findOne({ where: { phone: phone } });
            logger_1.winstonLogger.info('customer found for web order.');
            if (!ex_customer || !ex_customer.id) {
                logger_1.winstonLogger.info('creating new customer for web order.');
                const tokenObject = { username: phone };
                let token = yield signAsync(tokenObject, auth_1.JWT_SECRET);
                customer.access_token = token;
                ex_customer = yield this.customersRepository.create(customer);
                let user = yield this.userRepository.create({ username: phone });
            }
            let hawker = yield this.partnersRepository.findOne({ where: { phone: '923134814436' } });
            if (!hawker) {
                return constants_1.CONSTANTS.HAWKER_NOT_AVAILABLE;
            }
            let hawkerId = '';
            let h_location = {};
            if (hawker != null && hawker.id != undefined) {
                hawkerId = hawker.id;
                h_location = hawker.location;
                let l0 = hawker.location.coordinates[0];
                let l1 = hawker.location.coordinates[1] + 0.02;
                h_location.coordinates.push(l0);
                h_location.coordinates.push(l1);
            }
            let items = JSON.parse(JSON.stringify(reqData.items));
            let productIds = items.map((it) => {
                return { id: it.productId };
            });
            logger_1.winstonLogger.debug('productids ', JSON.stringify(productIds));
            let products = yield this.productsRepository.find({
                where: { or: productIds },
            });
            logger_1.winstonLogger.debug('products for order ');
            logger_1.winstonLogger.debug(JSON.stringify(products));
            if (!products) {
                return constants_1.CONSTANTS.PRODUCT_NOT_FOUND;
            }
            let orderItems;
            orderItems = [];
            // let orderdetailList =  Orderdetails;
            products.forEach((pro, index) => {
                let od = {};
                od.quantity = items[index].quantity;
                od.quentityUnit = items[index].quentityUnit;
                od.productId = pro.id;
                od.price = pro.salePrice || pro.retailPrice;
                //od.salePrice = pro.salePrice;
                od.productTitle = pro.displayName;
                orderItems.push(od);
            });
            logger_1.winstonLogger.debug('orderItems ');
            logger_1.winstonLogger.debug(JSON.stringify(orderItems));
            let order = new models_1.Orders();
            order.customersId = ex_customer.id;
            order.orderStatus = 'Pending';
            order.orderCategory = 'CUSTOMERS';
            order.items = orderItems;
            //order.totalBillAmount = reqData.totalBillAmount;
            order.deliveredById = hawkerId;
            order.isFromWeb = true;
            order.location = h_location;
            order.house = reqData.house;
            order.street = reqData.street;
            order.address = reqData.address;
            order.orderTime = new Date();
            order.items.forEach((element, i) => {
                if (i == 0) {
                    order.totalBillAmount = element.quantity * element.price;
                }
                else {
                    order.totalBillAmount = order.totalBillAmount + (element.quantity * element.price);
                }
            });
            let orderId = '';
            let createdOrder = yield this.customersRepository.orders(ex_customer.id).create(order);
            if (!createdOrder) {
                return constants_1.CONSTANTS.ORDER_NOT_PLACED;
            }
            if (createdOrder.id) {
                orderId = createdOrder.id.toString();
            }
            let orderdetailList;
            orderdetailList = [];
            products.forEach((pro, index) => {
                let orderdetail = new models_1.Orderdetails();
                orderdetail.ordersId = orderId;
                orderdetail.quantity = items[index].quantity;
                orderdetail.productsId = items[index].productId;
                orderdetail.retailPrice = pro.retailPrice;
                orderdetail.salePrice = pro.salePrice;
                orderdetail.purchasePrice = pro.buyingPrice;
                orderdetail.retailPriceUnitsId = pro.retailPiceUnitsId;
                orderdetail.purchasePriceUnitsId = pro.buyingPriceUnitsId;
                orderdetail.salePriceUnitsId = pro.salePriceUnitsId;
                orderdetailList.push(orderdetail);
            });
            logger_1.winstonLogger.debug('orderdetailList');
            logger_1.winstonLogger.debug(JSON.stringify(orderdetailList));
            if (orderdetailList.length > 0) {
                let orderDetailCreated = yield this.orderdetailsRepository.createAll(orderdetailList);
                logger_1.winstonLogger.debug('orderDetailCreated ', JSON.stringify(orderDetailCreated));
                if (!orderDetailCreated) {
                    return constants_1.CONSTANTS.ORDER_DETAILS_NOT_CREATED;
                }
            }
            logger_1.winstonLogger.debug('sending notification to Hawker!');
            if (hawker && hawker.deviceToken) {
                const firebase = new firebase_1.Firebase();
                const payload = {
                    // data: {"orderId": id, "customerId": nearestPartner.id},
                    notification: {
                        title: 'Kellostore',
                        body: 'There is a new order at your store. Deliver it quicly.',
                        sound: "default",
                    }
                };
                firebase.sendNotification(hawker.deviceToken, payload);
            }
            delete createdOrder.items;
            return { order: createdOrder };
        });
    }
    //validating customer mobile and making it like its requried.
    validatePhone(phone) {
        phone = parseInt(phone, 10).toString();
        if (phone.length < 10) {
            return '';
        }
        if (phone.length === 10) {
            phone = "92" + phone;
        }
        if (phone.length !== 12) {
            return '';
        }
        if (phone.length === 12 && phone.substring(0, 2) != "92") {
            return '';
        }
        return phone;
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
__decorate([
    rest_1.post('/shopping/order', {
        responses: {
            '200': {
                description: 'Orders model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Orders) } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShoppingController.prototype, "create", null);
ShoppingController = __decorate([
    __param(0, repository_1.repository(repositories_1.ProductsRepository)),
    __param(1, repository_1.repository(repositories_1.OrdersRepository)),
    __param(2, repository_1.repository(repositories_1.CustomersRepository)),
    __param(3, repository_1.repository(repositories_1.ProducttypesRepository)),
    __param(4, repository_1.repository(repositories_1.PartnersRepository)),
    __param(5, repository_1.repository(repositories_1.OrderdetailsRepository)),
    __param(6, repository_1.repository(repositories_1.UserRepository)),
    __metadata("design:paramtypes", [repositories_1.ProductsRepository,
        repositories_1.OrdersRepository,
        repositories_1.CustomersRepository,
        repositories_1.ProducttypesRepository,
        repositories_1.PartnersRepository,
        repositories_1.OrderdetailsRepository,
        repositories_1.UserRepository])
], ShoppingController);
exports.ShoppingController = ShoppingController;
//# sourceMappingURL=shopping.controller.js.map
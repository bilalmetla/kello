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
const repositories_1 = require("../repositories");
const logger_1 = require("../logger");
let StaticDataController = class StaticDataController {
    constructor(ratingReasonsRepository, customersRepository, ordersRepository, configurationsRepository) {
        this.ratingReasonsRepository = ratingReasonsRepository;
        this.customersRepository = customersRepository;
        this.ordersRepository = ordersRepository;
        this.configurationsRepository = configurationsRepository;
    }
    //@secured(SecuredType.IS_AUTHENTICATED)
    find(
    //@requestBody() inputs: {customersId: {type:'string'}},
    customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const arr_resp = {
                ratingList: [],
                ratingPending: [],
                androidAppVersion: ''
            };
            const ratingList = yield this.ratingReasonsRepository.find();
            arr_resp.ratingList = ratingList;
            if (customerId) {
                let orderFlter = {
                    where: { "and": [{ customersId: customerId }, { isOrderRatingDone: false }, { isDelivered: true }] },
                    fields: { id: true }
                };
                const pendingRatesOrders = yield this.ordersRepository.find(orderFlter);
                arr_resp.ratingPending = pendingRatesOrders;
            }
            //end for order rating things
            const configurations = yield this.configurationsRepository.find();
            logger_1.winstonLogger.debug("Found configurations ..", configurations);
            if (configurations && configurations.length > 0) {
                arr_resp.androidAppVersion = configurations[0].androidAppVersion;
            }
            return arr_resp;
        });
    }
};
__decorate([
    rest_1.get('/static-data', {
        responses: {
            '200': {
                description: 'Array of Static Data',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.string('customerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StaticDataController.prototype, "find", null);
StaticDataController = __decorate([
    __param(0, repository_1.repository(repositories_1.RatingReasonsRepository)),
    __param(1, repository_1.repository(repositories_1.CustomersRepository)),
    __param(2, repository_1.repository(repositories_1.OrdersRepository)),
    __param(3, repository_1.repository(repositories_1.ConfigurationsRepository)),
    __metadata("design:paramtypes", [repositories_1.RatingReasonsRepository,
        repositories_1.CustomersRepository,
        repositories_1.OrdersRepository,
        repositories_1.ConfigurationsRepository])
], StaticDataController);
exports.StaticDataController = StaticDataController;
//# sourceMappingURL=static-data.controller.js.map
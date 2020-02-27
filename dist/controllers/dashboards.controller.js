"use strict";
// Uncomment these imports to begin using these cool features!
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
// import {inject} from '@loopback/context';
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const repositories_1 = require("../repositories");
const auth_1 = require("../auth");
let DashboardsController = class DashboardsController {
    constructor(customersRepository, feedbackRepository, ordersRepository) {
        this.customersRepository = customersRepository;
        this.feedbackRepository = feedbackRepository;
        this.ordersRepository = ordersRepository;
    }
    getStats() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.customersRepository.count();
            const feedbacks = yield this.feedbackRepository.count();
            const orders = yield this.ordersRepository.count();
            return { users, feedbacks, orders };
        });
    }
};
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/dashboards/stats', {
        responses: {
            '200': {
                description: 'Dashboard Stats calculating.',
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardsController.prototype, "getStats", null);
DashboardsController = __decorate([
    __param(0, repository_1.repository(repositories_1.CustomersRepository)),
    __param(1, repository_1.repository(repositories_1.FeedbackRepository)),
    __param(2, repository_1.repository(repositories_1.OrdersRepository)),
    __metadata("design:paramtypes", [repositories_1.CustomersRepository,
        repositories_1.FeedbackRepository,
        repositories_1.OrdersRepository])
], DashboardsController);
exports.DashboardsController = DashboardsController;
//# sourceMappingURL=dashboards.controller.js.map
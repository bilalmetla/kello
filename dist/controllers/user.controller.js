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
const auth_2 = require("../auth");
let UserController = class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenObject = { username: user.username };
            let token = yield signAsync(tokenObject, auth_1.JWT_SECRET);
            user.access_token = token;
            return this.userRepository.create(user);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.count(where);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.find(filter);
        });
    }
    updateAll(user, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.updateAll(user, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findById(id, filter);
        });
    }
    updateById(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.updateById(id, user);
        });
    }
    replaceById(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.replaceById(id, user);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.deleteById(id);
        });
    }
    userLogin(user) {
        return __awaiter(this, void 0, void 0, function* () {
            //const userInfo = this.userRepository.findOne({"where":{phone}});
            const userInfo = yield this.userRepository.findOne({ "where": { username: user.username } });
            if (!userInfo) {
                return constants_1.CONSTANTS.AUTHNETICATION_FAILED;
            }
            else if (userInfo && userInfo.password === user.password) {
                return userInfo;
            }
            else {
                return constants_1.CONSTANTS.AUTHNETICATION_FAILED;
            }
        });
    }
};
__decorate([
    rest_1.post('/users', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.User) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.User, {
                    title: 'NewUser',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    auth_2.secured(auth_2.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/users/count', {
        responses: {
            '200': {
                description: 'User model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.User))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "count", null);
__decorate([
    auth_2.secured(auth_2.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/users', {
        responses: {
            '200': {
                description: 'Array of User model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.User, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.User))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "find", null);
__decorate([
    auth_2.secured(auth_2.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/users', {
        responses: {
            '200': {
                description: 'User PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.User, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.User))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.User, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateAll", null);
__decorate([
    auth_2.secured(auth_2.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/users/{id}', {
        responses: {
            '200': {
                description: 'User model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.User, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.User))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findById", null);
__decorate([
    auth_2.secured(auth_2.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/users/{id}', {
        responses: {
            '204': {
                description: 'User PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.User, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateById", null);
__decorate([
    auth_2.secured(auth_2.SecuredType.IS_AUTHENTICATED),
    rest_1.put('/users/{id}', {
        responses: {
            '204': {
                description: 'User PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "replaceById", null);
__decorate([
    auth_2.secured(auth_2.SecuredType.IS_AUTHENTICATED),
    rest_1.del('/users/{id}', {
        responses: {
            '204': {
                description: 'User DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteById", null);
__decorate([
    rest_1.post('/users/login', {
        responses: {
            '200': {
                description: 'User model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.User, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.User, {
                    title: 'loginUser',
                    exclude: ['id', 'access_token', 'name', 'email'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "userLogin", null);
UserController = __decorate([
    __param(0, repository_1.repository(repositories_1.UserRepository)),
    __metadata("design:paramtypes", [repositories_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
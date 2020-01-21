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
const core_1 = require("@loopback/core");
const authentication_1 = require("@loopback/authentication");
const security_1 = require("@loopback/security");
const authentication_passport_1 = require("@loopback/authentication-passport");
const auth_metadata_provider_1 = require("@loopback/authentication/dist/providers/auth-metadata.provider");
const repositories_1 = require("./repositories");
const repository_1 = require("@loopback/repository");
const passport_jwt_1 = require("passport-jwt");
const rest_1 = require("@loopback/rest");
exports.JWT_STRATEGY_NAME = 'jwt';
exports.BEARER_STRATEGY_NAME = 'bearer';
// the decorator function, every required param has its own default
// so we can supply empty param when calling this decorartor.
// we will use 'secured' to match Spring Security annotation.
function secured(type = SecuredType.IS_AUTHENTICATED, // more on this below
roles = [], strategy = 'jwt', //default is jwt
options) {
    // we will use a custom interface. more on this below
    return core_1.MethodDecoratorFactory.createDecorator(authentication_1.AUTHENTICATION_METADATA_KEY, {
        type,
        roles,
        strategy,
        options,
    });
}
exports.secured = secured;
// enum for available secured type,
var SecuredType;
(function (SecuredType) {
    SecuredType[SecuredType["IS_AUTHENTICATED"] = 0] = "IS_AUTHENTICATED";
    SecuredType[SecuredType["PERMIT_ALL"] = 1] = "PERMIT_ALL";
    SecuredType[SecuredType["HAS_ANY_ROLE"] = 2] = "HAS_ANY_ROLE";
    SecuredType[SecuredType["HAS_ROLES"] = 3] = "HAS_ROLES";
    SecuredType[SecuredType["DENY_ALL"] = 4] = "DENY_ALL";
})(SecuredType = exports.SecuredType || (exports.SecuredType = {}));
// metadata provider for `MyAuthenticationMetadata`. Will supply method's metadata when injected
let MyAuthMetadataProvider = class MyAuthMetadataProvider extends auth_metadata_provider_1.AuthMetadataProvider {
    constructor(_controllerClass, _methodName) {
        super(_controllerClass, _methodName);
        this._controllerClass = _controllerClass;
        this._methodName = _methodName;
    }
    value() {
        if (!this._controllerClass || !this._methodName)
            return;
        return core_1.MetadataInspector.getMethodMetadata(authentication_1.AUTHENTICATION_METADATA_KEY, this._controllerClass.prototype, this._methodName);
    }
};
MyAuthMetadataProvider = __decorate([
    __param(0, core_1.inject(core_1.CoreBindings.CONTROLLER_CLASS, { optional: true })),
    __param(1, core_1.inject(core_1.CoreBindings.CONTROLLER_METHOD_NAME, { optional: true })),
    __metadata("design:paramtypes", [Object, String])
], MyAuthMetadataProvider);
exports.MyAuthMetadataProvider = MyAuthMetadataProvider;
// the JWT_secret to encrypt and decrypt JWT token
exports.JWT_SECRET = 'SSS@123456789';
// implement custom namespace bindings
var MyAuthBindings;
(function (MyAuthBindings) {
    MyAuthBindings.STRATEGY = core_1.BindingKey.create('authentication.strategy');
})(MyAuthBindings = exports.MyAuthBindings || (exports.MyAuthBindings = {}));
// the strategy provider will parse the specifed strategy, and act accordingly
let MyAuthAuthenticationStrategyProvider = class MyAuthAuthenticationStrategyProvider {
    constructor(metadata, userRepository, userRoleRepository) {
        this.metadata = metadata;
        this.userRepository = userRepository;
        this.userRoleRepository = userRoleRepository;
    }
    value() {
        if (!this.metadata)
            return;
        const { strategy } = this.metadata;
        if (strategy === exports.JWT_STRATEGY_NAME) {
            const jwtStrategy = new passport_jwt_1.Strategy({
                secretOrKey: exports.JWT_SECRET,
                jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                    passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
                    passport_jwt_1.ExtractJwt.fromUrlQueryParameter('access_token'),
                ]),
            }, (payload, done) => this.verifyToken(payload, done));
            // we will use Loopback's  StrategyAdapter so we can leverage passport's strategy
            // and also we don't have to implement a new strategy adapter.
            return new authentication_passport_1.StrategyAdapter(jwtStrategy, exports.JWT_STRATEGY_NAME);
        }
        // else if (strategy === BEARER_STRATEGY_NAME) {
        //   const jwtStrategy = new JwtStrategy(
        //     {
        //       secretOrKey: JWT_SECRET,
        //       jwtFromRequest: ExtractJwt.fromExtractors([
        //         ExtractJwt.fromAuthHeaderAsBearerToken(),
        //         //ExtractJwt.fromUrlQueryParameter('access_token'),
        //       ]),
        //     },
        //     (payload, done) => this.verifyToken(payload, done),
        //   );
        //   // we will use Loopback's  StrategyAdapter so we can leverage passport's strategy
        //   // and also we don't have to implement a new strategy adapter.
        //   return new StrategyAdapter(jwtStrategy, JWT_STRATEGY_NAME);
        // }
    }
    // verify JWT token and decryot the payload.
    // Then search user from database with id equals to payload's username.
    // if user is found, then verify its roles
    verifyToken(payload, done) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username } = payload;
                const user = yield this.userRepository.findOne({ "where": { phone: username } }); //await this.userRepository.findById(username);
                if (!user)
                    done(null, false);
                yield this.verifyRoles(username);
                if (user)
                    done(null, { phone: user.phone, [security_1.securityId]: username });
            }
            catch (err) {
                if (err.name === 'UnauthorizedError')
                    done(null, false);
                done(err, false);
            }
        });
    }
    // verify user's role based on the SecuredType
    verifyRoles(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const { type, roles } = this.metadata;
            if ([SecuredType.IS_AUTHENTICATED, SecuredType.PERMIT_ALL].includes(type))
                return;
            if (type === SecuredType.HAS_ANY_ROLE) {
                if (!roles.length)
                    return;
                const { count } = yield this.userRoleRepository.count({
                    userId: username,
                    roleId: { inq: roles },
                });
                if (count)
                    return;
            }
            else if (type === SecuredType.HAS_ROLES && roles.length) {
                const userRoles = yield this.userRoleRepository.find({ where: { userId: username } });
                const roleIds = userRoles.map(ur => ur.roleId);
                let valid = true;
                for (const role of roles)
                    if (!roleIds.includes(role)) {
                        valid = false;
                        break;
                    }
                if (valid)
                    return;
            }
            throw new rest_1.HttpErrors.Unauthorized('Invalid authorization');
        });
    }
};
MyAuthAuthenticationStrategyProvider = __decorate([
    __param(0, core_1.inject(authentication_1.AuthenticationBindings.METADATA)),
    __param(1, repository_1.repository(repositories_1.UserRepository)),
    __param(2, repository_1.repository(repositories_1.UserRoleRepository)),
    __metadata("design:paramtypes", [Object, repositories_1.UserRepository,
        repositories_1.UserRoleRepository])
], MyAuthAuthenticationStrategyProvider);
exports.MyAuthAuthenticationStrategyProvider = MyAuthAuthenticationStrategyProvider;
// the entry point for authentication.
let MyAuthActionProvider = class MyAuthActionProvider {
    constructor(getStrategy, setCurrentUser, getMetadata) {
        this.getStrategy = getStrategy;
        this.setCurrentUser = setCurrentUser;
        this.getMetadata = getMetadata;
    }
    value() {
        return request => this.action(request);
    }
    action(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const metadata = yield this.getMetadata();
            if (metadata && metadata.type === SecuredType.PERMIT_ALL)
                return;
            const strategy = yield this.getStrategy();
            if (!strategy)
                return;
            const user = yield strategy.authenticate(request);
            if (!user)
                return;
            this.setCurrentUser(user);
            return user;
        });
    }
};
MyAuthActionProvider = __decorate([
    __param(0, core_1.inject.getter(MyAuthBindings.STRATEGY)),
    __param(1, core_1.inject.setter(authentication_1.AuthenticationBindings.CURRENT_USER)),
    __param(2, core_1.inject.getter(authentication_1.AuthenticationBindings.METADATA)),
    __metadata("design:paramtypes", [Function, Function, Function])
], MyAuthActionProvider);
exports.MyAuthActionProvider = MyAuthActionProvider;
//# sourceMappingURL=auth.js.map
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
const context_1 = require("@loopback/context");
const rest_1 = require("@loopback/rest");
const authentication_1 = require("@loopback/authentication");
const SequenceActions = rest_1.RestBindings.SequenceActions;
const logger_1 = require("./logger");
let MySequence = class MySequence {
    constructor(findRoute, parseParams, invoke, send, reject, authenticateRequest) {
        this.findRoute = findRoute;
        this.parseParams = parseParams;
        this.invoke = invoke;
        this.send = send;
        this.reject = reject;
        this.authenticateRequest = authenticateRequest;
    }
    handle(context) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger_1.winstonLogger.info('-----------------------request-------------------------------');
                logger_1.winstonLogger.info(`route:  ${context.request.path}`);
                //console.log('-----------------------request-------------------------------');
                //console.log(`route:  ${context.request.path}`) ;
                const { request, response } = context;
                const route = this.findRoute(request);
                const args = yield this.parseParams(request, route);
                //console.log(`route ${route} | request:  ${JSON.stringify(args) }`) ;
                logger_1.winstonLogger.debug(`route ${route} | request:  ${JSON.stringify(args)}`);
                //call authentication action
                yield this.authenticateRequest(request);
                const result = yield this.invoke(route, args);
                //console.log(`route ${route} | response:  ${JSON.stringify(result) }`) ;
                logger_1.winstonLogger.debug(`route ${route} | response:  ${JSON.stringify(result)}`);
                this.send(response, result);
            }
            catch (err) {
                // console.error(`error:  ${JSON.stringify(err) }`) ;
                logger_1.winstonLogger.error(`error:  ${JSON.stringify(err)}`);
                if (err.code === 'AUTHENTICATION_STRATEGY_NOT_FOUND' ||
                    err.code === 'USER_PROFILE_NOT_FOUND') {
                    //console.error(`err.code:  ${JSON.stringify(err) }`) ;
                    logger_1.winstonLogger.error(`err.code:  ${JSON.stringify(err)}`);
                    Object.assign(err, { statusCode: 401 /* Unauthorized */ });
                }
                console.error(`reject err:  ${JSON.stringify(err)}`);
                if (err.message && typeof err.message === 'object') {
                    err.message = "Valid Access Token Required!";
                }
                //console.error(`sending final err:  ${JSON.stringify(err) }`) ;
                logger_1.winstonLogger.error(`sending final err:  ${JSON.stringify(err)}`);
                this.reject(context, err);
            }
        });
    }
};
MySequence = __decorate([
    __param(0, context_1.inject(SequenceActions.FIND_ROUTE)),
    __param(1, context_1.inject(SequenceActions.PARSE_PARAMS)),
    __param(2, context_1.inject(SequenceActions.INVOKE_METHOD)),
    __param(3, context_1.inject(SequenceActions.SEND)),
    __param(4, context_1.inject(SequenceActions.REJECT)),
    __param(5, context_1.inject(authentication_1.AuthenticationBindings.AUTH_ACTION)),
    __metadata("design:paramtypes", [Function, Function, Function, Function, Function, Function])
], MySequence);
exports.MySequence = MySequence;
//# sourceMappingURL=sequence.js.map
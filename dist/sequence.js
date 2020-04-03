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
const uuid = require("uuid");
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
            let startTime = process.hrtime();
            let requestId = uuid.v4();
            try {
                if (process.env.requests) {
                    process.env.requests = (parseInt(process.env.requests) + 1).toString();
                }
                logger_1.winstonLogger.info('-----------------------request-------------------------------');
                logger_1.winstonLogger.info(`requestId: ${requestId} | api:  ${context.request.path}`);
                if (context.request.path == '/' && process.env.homePage) {
                    process.env.homePage = (parseInt(process.env.homePage) + 1).toString();
                }
                if (context.request.path == '/wordpress/index.html%3Fp=226.html' && process.env.productPage) {
                    process.env.productPage = (parseInt(process.env.productPage) + 1).toString();
                }
                logger_1.winstonLogger.debug(`requestId: ${requestId} | header:  ${JSON.stringify(context.request.headers)}`);
                const { request, response } = context;
                const route = this.findRoute(request);
                const args = yield this.parseParams(request, route);
                logger_1.winstonLogger.debug(`requestId: ${requestId} | request:  ${JSON.stringify(args)} | route ${route}`);
                //call authentication action
                yield this.authenticateRequest(request);
                const result = yield this.invoke(route, args);
                logger_1.winstonLogger.debug(`requestId: ${requestId} | response:  ${JSON.stringify(result)} | route ${route}`);
                if (process.env.successResponses) {
                    process.env.successResponses = (parseInt(process.env.successResponses) + 1).toString();
                }
                calculateResponseTime(startTime);
                this.send(response, result);
            }
            catch (err) {
                logger_1.winstonLogger.error(` ${JSON.stringify(err.stack)}`);
                if (process.env.errorResponses) {
                    process.env.errorResponses = (parseInt(process.env.errorResponses) + 1).toString();
                }
                logger_1.winstonLogger.error(`requestId: ${requestId} | error:  ${JSON.stringify(err)}`);
                if (err.code === 'AUTHENTICATION_STRATEGY_NOT_FOUND' ||
                    err.code === 'USER_PROFILE_NOT_FOUND') {
                    logger_1.winstonLogger.error(`requestId: ${requestId} | err.code:  ${JSON.stringify(err)}`);
                    Object.assign(err, { statusCode: 401 /* Unauthorized */ });
                }
                logger_1.winstonLogger.error(`requestId: ${requestId} | reject err:  ${JSON.stringify(err)}`);
                if (err.message && typeof err.message === 'object') {
                    err.message = "Valid Access Token Required!";
                }
                logger_1.winstonLogger.error(`requestId: ${requestId} | sending final err:  ${JSON.stringify(err)}`);
                calculateResponseTime(startTime);
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
function calculateResponseTime(startTime) {
    if (startTime && startTime.length > 1) {
        var dx = process.hrtime(startTime);
        var time = (dx[0] * 1000) + (dx[1] / 1000000); // converting time to milli seconds
        process.env.lastResponseTime = time.toString();
        if (process.env.avgResponseTime && process.env.requests) {
            process.env.avgResponseTime = ((parseInt(process.env.avgResponseTime + time) / parseInt(process.env.requests)).toFixed(2)).toString();
        }
    }
}
//# sourceMappingURL=sequence.js.map
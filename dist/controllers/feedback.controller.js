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
const auth_1 = require("../auth");
const fs_1 = __importDefault(require("fs"));
const util_1 = __importDefault(require("util"));
const writeFilePromise = util_1.default.promisify(fs_1.default.writeFile);
const path_1 = __importDefault(require("path"));
let FeedbackController = class FeedbackController {
    constructor(feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }
    create(feedback) {
        return __awaiter(this, void 0, void 0, function* () {
            if (feedback.image1) {
                feedback.image1 = yield this.convertbase64image(feedback.fullname, feedback.image1);
            }
            if (feedback.image2) {
                feedback.image2 = yield this.convertbase64image(feedback.fullname, feedback.image2);
            }
            if (feedback.image3) {
                feedback.image3 = yield this.convertbase64image(feedback.fullname, feedback.image3);
            }
            if (feedback.image4) {
                feedback.image4 = yield this.convertbase64image(feedback.fullname, feedback.image4);
            }
            feedback.createdDate = new Date();
            //delete feedback.image;
            return this.feedbackRepository.create(feedback);
        });
    }
    count(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.feedbackRepository.count(where);
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
            return this.feedbackRepository.find(filter);
        });
    }
    updateAll(feedback, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.feedbackRepository.updateAll(feedback, where);
        });
    }
    findById(id, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.feedbackRepository.findById(id, filter);
        });
    }
    updateById(id, feedback) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.feedbackRepository.updateById(id, feedback);
        });
    }
    replaceById(id, feedback) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.feedbackRepository.replaceById(id, feedback);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.feedbackRepository.deleteById(id);
        });
    }
    convertbase64image(imagename, image) {
        return __awaiter(this, void 0, void 0, function* () {
            let base64String = image;
            let base64Image = base64String.split(';base64,').pop();
            imagename = imagename.replace(/ /g, '_') + '.png';
            let imagePath = path_1.default.join(__dirname, '../../public/feedback/images/') + imagename;
            let imageUrl = '/feedback/images/' + imagename;
            yield writeFilePromise(imagePath, base64Image, { encoding: 'base64' });
            return imageUrl;
        });
    }
    //wordpress/index.php?rest_route=/contact-form-7/v1/contact-forms/76/feedback
    //@secured(SecuredType.IS_AUTHENTICATED)
    contactUs(feedback) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.feedbackRepository.create(feedback);
        });
    }
};
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.post('/feedbacks', {
        responses: {
            '200': {
                description: 'Feedback model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Feedback) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Feedback, {
                    title: 'NewFeedback',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "create", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/feedbacks/count', {
        responses: {
            '200': {
                description: 'Feedback model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Feedback))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "count", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/feedbacks', {
        responses: {
            '200': {
                description: 'Array of Feedback model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Feedback, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Feedback))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "find", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/feedbacks', {
        responses: {
            '200': {
                description: 'Feedback PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Feedback, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Feedback))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Feedback, Object]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "updateAll", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/feedbacks/{id}', {
        responses: {
            '200': {
                description: 'Feedback model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Feedback, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Feedback))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "findById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/feedbacks/{id}', {
        responses: {
            '204': {
                description: 'Feedback PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Feedback, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Feedback]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "updateById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.put('/feedbacks/{id}', {
        responses: {
            '204': {
                description: 'Feedback PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Feedback]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "replaceById", null);
__decorate([
    auth_1.secured(auth_1.SecuredType.IS_AUTHENTICATED),
    rest_1.del('/feedbacks/{id}', {
        responses: {
            '204': {
                description: 'Feedback DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "deleteById", null);
__decorate([
    rest_1.post('/web/contact-us', {
        responses: {
            '204': {
                description: 'Feedback DELETE success',
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Feedback]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "contactUs", null);
FeedbackController = __decorate([
    __param(0, repository_1.repository(repositories_1.FeedbackRepository)),
    __metadata("design:paramtypes", [repositories_1.FeedbackRepository])
], FeedbackController);
exports.FeedbackController = FeedbackController;
//# sourceMappingURL=feedback.controller.js.map